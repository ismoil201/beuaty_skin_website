import { appStore } from "../stores/appStore.js";
import { getToken } from "../utils/storage.js";
import { getViteEnv, isDevMode } from "../config/env.js";
import { getApiErrorMessage, parseResponseBody } from "../utils/errorHandler.js";

let handlers = {
  onUnauthorized: () => {},
  onLoginRequired: () => {},
  showToast: () => {},
};

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

export async function apiFetch(path, options = {}) {
  const {
    query,
    showError = true,
    requireAuth = false,
    silentAuth = false,
    timeoutMs = 0,
    signal: externalSignal,
    ...fetchOptions
  } = options;
  const url = buildApiUrl(path, query);
  const headers = {
    Accept: "application/json",
    ...(fetchOptions.body ? { "Content-Type": "application/json" } : {}),
    ...(fetchOptions.headers || {}),
  };
  const token = getToken();

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  if (requireAuth && !token) {
    appStore.lastApiError = "Please login to continue";
    handlers.onLoginRequired();
    return null;
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
    const response = await fetch(url, { ...fetchOptions, headers, signal: controller.signal });
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

    if (response.status === 401) {
      const message = getApiErrorMessage(payload, response.status);
      appStore.lastApiError = silentAuth
        ? (typeof payload === "object" && (payload?.message || payload?.error)
          ? message
          : "Email yoki parol noto‘g‘ri.")
        : "Session expired. Please login again.";
      if (!silentAuth) {
        handlers.onUnauthorized();
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
