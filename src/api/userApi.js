import { apiFetch } from "./apiClient.js";

export const getMe = () => apiFetch("/api/users/me", { requireAuth: true, showError: false });
export const updateMe = (body) =>
  apiFetch("/api/users/me", {
    method: "PUT",
    body: JSON.stringify(body),
    requireAuth: true,
    showError: false,
  });
