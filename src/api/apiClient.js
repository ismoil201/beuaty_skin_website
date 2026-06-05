import { state } from "../store/state.js";
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
  const baseUrl = state.baseUrl ? state.baseUrl.replace(/\/+$/, "") : "";
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
    state.lastApiError = "Please login to continue";
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
      baseUrl: state.baseUrl,
      host: window.location.host,
      mode: env.MODE,
      envBase: env.VITE_API_BASE_URL,
    });
  }

  try {
    state.lastApiError = "";
    const response = await fetch(url, { ...fetchOptions, headers });
    const text = await response.text();
    const payload = text ? parseResponseBody(text) : null;

    if (isDevMode()) {
      console.info("[API RESPONSE]", {
        requestUrl: url,
        status: response.status,
        ok: response.ok,
        payload,
      });
    }

    if (response.status === 401) {
      state.lastApiError = "Session expired. Please login again.";
      if (!silentAuth) {
        handlers.onUnauthorized();
      }
      return null;
    }

    if (!response.ok) {
      const message = getApiErrorMessage(payload, response.status);
      state.lastApiError = message;
      if (showError) handlers.showToast(message);
      return null;
    }

    return payload;
  } catch (error) {
    state.lastApiError = "Server bilan aloqa bo‘lmadi";
    if (isDevMode()) {
      console.error("[API ERROR]", { requestUrl: url, error });
    }
    if (showError) handlers.showToast("Server bilan aloqa vaqtincha ishlamayapti.");
    return null;
  }
}
