import { apiFetch } from "./apiClient.js";

export const getReceivers = () => apiFetch("/api/receivers", { requireAuth: true, showError: false });
export const createReceiver = (body) =>
  apiFetch("/api/receivers", {
    method: "POST",
    body: JSON.stringify(body),
    requireAuth: true,
  });
export const deleteReceiver = (id) =>
  apiFetch(`/api/receivers/${id}`, { method: "DELETE", requireAuth: true });
