import { apiFetch } from "./apiClient.js";

export const login = (body) =>
  apiFetch("/api/auth/login", {
    method: "POST",
    body: JSON.stringify(body),
    showError: false,
    silentAuth: true,
    skipRefresh: true,
  });

export const register = (body) =>
  apiFetch("/api/auth/register", {
    method: "POST",
    body: JSON.stringify(body),
    showError: false,
    silentAuth: true,
    skipRefresh: true,
  });

export const loginWithFirebase = (body) =>
  apiFetch("/api/auth/firebase", {
    method: "POST",
    body: JSON.stringify(body),
    showError: false,
    silentAuth: true,
    skipRefresh: true,
  });

/** Cookie + CSRF refresh — also exported via apiClient.refreshAccessToken. */
export const refreshSession = () =>
  apiFetch("/api/auth/refresh", {
    method: "POST",
    showError: false,
    silentAuth: true,
    skipRefresh: true,
    csrf: true,
  });

export const logout = () =>
  apiFetch("/api/auth/logout", {
    method: "POST",
    showError: false,
    silentAuth: true,
    skipRefresh: true,
    csrf: true,
  });

export const logoutAll = () =>
  apiFetch("/api/auth/logout-all", {
    method: "POST",
    showError: false,
    silentAuth: true,
    skipRefresh: true,
    csrf: true,
  });
