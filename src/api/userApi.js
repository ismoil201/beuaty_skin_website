import { apiFetch } from "./apiClient.js";

export const getMe = (options = {}) =>
  apiFetch("/api/users/me", { requireAuth: true, showError: false, ...options });

export const updateMe = (body, options = {}) =>
  apiFetch("/api/users/me", {
    method: "PUT",
    body: JSON.stringify(body),
    requireAuth: true,
    showError: false,
    ...options,
  });
