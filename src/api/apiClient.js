import { resolveApiBaseUrl } from "../config/apiBase.js";
import { state } from "../store/state.js";
import { getToken } from "../utils/storage.js";
import { getApiErrorMessage, parseResponseBody } from "../utils/errorHandler.js";

let handlers = {
  onUnauthorized: () => {},
  onLoginRequired: () => {},
  showToast: () => {},
};

export function configureApiClient(nextHandlers = {}) {
  handlers = { ...handlers, ...nextHandlers };
}

export function buildApiUrl(path, query) {
  const basePath = path.startsWith("/") ? path : `/${path}`;
  const base = resolveApiBaseUrl(state.baseUrl);

  const url = base
    ? new URL(`${base.replace(/\/+$/, "")}${basePath}`)
    : new URL(basePath, window.location.origin);

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

  try {
    state.lastApiError = "";
    const response = await fetch(url, { ...fetchOptions, headers });
    const text = await response.text();
    const payload = text ? parseResponseBody(text) : null;

    if (import.meta.env.DEV) {
      console.debug(`[API] ${fetchOptions.method || "GET"} ${url} → ${response.status}`);
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
      if (import.meta.env.DEV) {
        console.warn(`[API] ${response.status} ${url}`, payload);
      }
      if (showError) handlers.showToast(message);
      return null;
    }

    return payload;
  } catch (error) {
    state.lastApiError = "Server bilan aloqa bo‘lmadi";
    if (import.meta.env.DEV) {
      console.error(`[API] Network error ${url}`, error);
    }
    if (showError) handlers.showToast("Server bilan aloqa vaqtincha ishlamayapti.");
    return null;
  }
}
