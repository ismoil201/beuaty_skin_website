import { appStore } from "../stores/appStore.js";
import { authStore } from "../stores/authStore.js";
import { getToken } from "../utils/storage.js";
import { CONFIG } from "../config/config.js";
import { getViteEnv, isDevMode } from "../config/env.js";
import { getApiErrorMessage, parseResponseBody } from "../utils/errorHandler.js";
import { getXsrfToken } from "../utils/cookies.js";
import {
  isAuthenticationFailure,
  isCsrfFailure,
} from "../utils/authHttp.js";
import { scheduleProactiveRefresh, stopProactiveRefresh } from "../utils/tokenRefreshScheduler.js";

let handlers = {
  onUnauthorized: () => {},
  onLoginRequired: () => {},
  showToast: () => {},
};

let refreshInFlight = null;

const NO_REFRESH_PATHS = new Set([
  "/api/auth/login",
  "/api/auth/register",
  "/api/auth/firebase",
  "/api/auth/refresh",
  "/api/auth/logout",
  "/api/auth/logout-all",
]);

export function configureApiClient(nextHandlers = {}) {
  handlers = { ...handlers, ...nextHandlers };
}

/** Same URL building as old working app.js: empty baseUrl → same-origin /api (Vite proxy / Vercel rewrite). */
export function buildApiUrl(path, query) {
  const basePath = path.startsWith("/") ? path : `/${path}`;
  const baseUrl = appStore.baseUrl ? appStore.baseUrl.replace(/\/+$/, "") : "";
  const url = new URL(`${baseUrl}${basePath}`, window.location.origin);

  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        url.searchParams.set(key, value);
      }
    });
  }

  return url.toString();
}

function persistAccessToken(token) {
  if (!token) return;
  localStorage.setItem(CONFIG.storageKeys.accessToken, token);
  authStore.accessToken = token;
  scheduleProactiveRefresh(token);
}

function clearPersistedAccessToken() {
  localStorage.removeItem(CONFIG.storageKeys.accessToken);
  authStore.accessToken = "";
  stopProactiveRefresh();
}

/**
 * Refresh access token using HttpOnly refresh cookie + CSRF header.
 * @returns {Promise<string|null>} new access token or null
 */
export async function refreshAccessToken() {
  if (refreshInFlight) return refreshInFlight;

  refreshInFlight = (async () => {
    const xsrf = getXsrfToken();
    const url = buildApiUrl("/api/auth/refresh");
    try {
      const response = await fetch(url, {
        method: "POST",
        credentials: "include",
        headers: {
          Accept: "application/json",
          ...(xsrf ? { "X-XSRF-TOKEN": xsrf } : {}),
        },
      });
      const text = await response.text();
      const payload = text ? parseResponseBody(text) : null;
      appStore.lastApiStatus = response.status;

      if (isDevMode()) {
        console.info("[AUTH REFRESH]", {
          status: response.status,
          ok: response.ok,
          hasCsrfHeader: Boolean(xsrf),
          csrfFailure: isCsrfFailure(payload),
        });
      }

      if (!response.ok) {
        if (response.status === 401) {
          appStore.lastApiError = "Session expired. Please login again.";
        } else if (response.status === 403 && isCsrfFailure(payload)) {
          appStore.lastApiError = "Session expired. Please login again.";
        }
        return null;
      }

      const token =
        payload?.accessToken ||
        payload?.token ||
        payload?.data?.accessToken ||
        "";
      if (!token) return null;
      persistAccessToken(token);
      return token;
    } catch (error) {
      if (isDevMode()) {
        console.error("[AUTH REFRESH ERROR]", error);
      }
      return null;
    } finally {
      refreshInFlight = null;
    }
  })();

  return refreshInFlight;
}

function shouldAttemptRefresh(path, { skipRefresh }) {
  if (skipRefresh) return false;
  if (NO_REFRESH_PATHS.has(path)) return false;
  return true;
}

async function resolveAuthToken({ requireAuth, skipRefresh }) {
  let token = getToken();
  if (token || !requireAuth) {
    return token;
  }

  if (skipRefresh) {
    return "";
  }

  const refreshed = await refreshAccessToken();
  return refreshed || "";
}

function handleSessionExpired({ silentAuth }) {
  if (!silentAuth) {
    clearPersistedAccessToken();
    handlers.onUnauthorized();
    return;
  }
  appStore.lastApiError = "Session expired. Please login again.";
}

async function attemptAuthRecovery(path, options, isRetry) {
  if (isRetry || !shouldAttemptRefresh(path, options)) {
    return null;
  }
  return refreshAccessToken();
}

export async function apiFetch(path, options = {}) {
  return executeFetch(path, options, false);
}

async function executeFetch(path, options, isRetry) {
  const {
    query,
    showError = true,
    requireAuth = false,
    silentAuth = false,
    skipRefresh = false,
    csrf = false,
    timeoutMs = 0,
    signal: externalSignal,
    credentials = "include",
    ...fetchOptions
  } = options;

  const token = await resolveAuthToken({ requireAuth, skipRefresh });
  const hadAuthHeader = Boolean(token);

  if (requireAuth && !token) {
    appStore.lastApiError = "Please login to continue";
    // silentAuth: browse/hydrate paths must not open the login modal.
    if (!silentAuth) {
      handlers.onLoginRequired();
    }
    return null;
  }

  const url = buildApiUrl(path, query);
  const headers = {
    Accept: "application/json",
    ...(fetchOptions.body ? { "Content-Type": "application/json" } : {}),
    ...(fetchOptions.headers || {}),
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  if (csrf) {
    const xsrf = getXsrfToken();
    if (xsrf) headers["X-XSRF-TOKEN"] = xsrf;
  }

  if (isDevMode()) {
    const env = getViteEnv();
    console.info("[API REQUEST]", {
      path,
      requestUrl: url,
      method: fetchOptions.method || "GET",
      query,
      baseUrl: appStore.baseUrl,
      host: window.location.host,
      mode: env.MODE,
      envBase: env.VITE_API_BASE_URL,
      retry: isRetry,
      hasAuth: hadAuthHeader,
    });
  }

  const controller = new AbortController();
  let timedOut = false;
  const timeoutId = timeoutMs > 0
    ? setTimeout(() => {
      timedOut = true;
      controller.abort();
    }, timeoutMs)
    : null;

  if (externalSignal) {
    if (externalSignal.aborted) {
      controller.abort();
    } else {
      externalSignal.addEventListener("abort", () => controller.abort(), { once: true });
    }
  }

  try {
    appStore.lastApiError = "";
    appStore.lastApiStatus = 0;
    const response = await fetch(url, {
      ...fetchOptions,
      headers,
      credentials,
      signal: controller.signal,
    });
    const text = await response.text();
    const payload = text ? parseResponseBody(text) : null;
    appStore.lastApiStatus = response.status;

    if (isDevMode()) {
      console.info("[API RESPONSE]", {
        requestUrl: url,
        status: response.status,
        ok: response.ok,
        payload,
      });
    }

    const authFailure = isAuthenticationFailure(response.status, payload, { hadAuthHeader });

    if (authFailure) {
      const nextToken = await attemptAuthRecovery(path, { skipRefresh, silentAuth }, isRetry);
      if (nextToken) {
        return executeFetch(path, options, true);
      }

      appStore.lastApiError = silentAuth
        ? (typeof payload === "object" && (payload?.message || payload?.error)
          ? getApiErrorMessage(payload, response.status)
          : "Email yoki parol noto‘g‘ri.")
        : "Session expired. Please login again.";

      if (!silentAuth) {
        handleSessionExpired({ silentAuth });
      }
      return null;
    }

    if (!response.ok) {
      const message = getApiErrorMessage(payload, response.status);
      appStore.lastApiError = message;
      if (showError) handlers.showToast(message, "error");
      return null;
    }

    return payload;
  } catch (error) {
    appStore.lastApiStatus = 0;
    if (error?.name === "AbortError") {
      appStore.lastApiError = timedOut
        ? "So‘rov vaqti tugadi. Qayta urinib ko‘ring."
        : "So‘rov bekor qilindi.";
    } else {
      appStore.lastApiError = "Server bilan aloqa bo‘lmadi";
    }
    if (isDevMode()) {
      console.error("[API ERROR]", { requestUrl: url, error });
    }
    if (showError && error?.name !== "AbortError") {
      handlers.showToast("Server bilan aloqa vaqtincha ishlamayapti.", "error");
    }
    return null;
  } finally {
    if (timeoutId) clearTimeout(timeoutId);
  }
}

export { clearPersistedAccessToken };
