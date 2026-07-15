import { apiFetch } from "./apiClient.js";

export const getInventory = (productId) =>
  apiFetch(`/api/inventory/${productId}`, {
    requireAuth: true,
    showError: false,
  });

export const reserveInventory = (body) =>
  apiFetch("/api/inventory/reserve", {
    method: "POST",
    body: JSON.stringify(body || {}),
    requireAuth: true,
    showError: false,
  });
