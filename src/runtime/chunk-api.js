/* ================= API CLIENT ================= */

export async function apiFetch(path, options = {}) {
  const { query, showError = true, requireAuth = false, ...fetchOptions } = options;
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
    showLoginRequired();
    return null;
  }

  try {
    state.lastApiError = "";
    const response = await fetch(url, { ...fetchOptions, headers });
    const text = await response.text();
    const payload = text ? parseResponseBody(text) : null;

    if (response.status === 401) {
      state.lastApiError = "Session expired. Please login again.";
      clearAuth();
      openAuthDialog("login");
      showToast("Session expired. Please login again.");
      return null;
    }

    if (!response.ok) {
      const message = getApiErrorMessage(payload, response.status);
      state.lastApiError = message;
      if (showError) showToast(message);
      return null;
    }

    return payload;
  } catch (error) {
    state.lastApiError = "Server bilan aloqa bo‘lmadi";
    if (showError) showToast("Server bilan aloqa vaqtincha ishlamayapti.");
    return null;
  }
}

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

export function parseResponseBody(text) {
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

export function getApiErrorMessage(payload, status) {
  if (typeof payload === "string" && payload.trim()) return payload;
  return payload?.message || payload?.error || `API xatosi: HTTP ${status}`;
}

export function normalizeSavedBaseUrl(value) {
  const clean = value.trim().replace(/\/+$/, "");
  return clean.includes("cosmetic-server-production.up.railway.app") ? "" : clean;
}
