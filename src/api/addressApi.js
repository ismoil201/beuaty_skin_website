import { apiFetch } from "./apiClient.js";

export const getAddresses = () => apiFetch("/api/addresses", { requireAuth: true, showError: false });
export const createAddress = (body) =>
  apiFetch("/api/addresses", {
    method: "POST",
    body: JSON.stringify(body),
    requireAuth: true,
  });
export const deleteAddress = (id) =>
  apiFetch(`/api/addresses/${id}`, { method: "DELETE", requireAuth: true });
