import { apiFetch } from "./apiClient.js";

export const getOrders = () => apiFetch("/api/orders", { requireAuth: true, showError: false });
export const getOrder = (id) => apiFetch(`/api/orders/${id}`, { requireAuth: true, showError: false });
export const getOrderHistory = (id) =>
  apiFetch(`/api/orders/${id}/history`, { requireAuth: true, showError: false });
export const createOrder = (body, options = {}) =>
  apiFetch("/api/orders", {
    method: "POST",
    body: JSON.stringify(body),
    requireAuth: true,
    showError: false,
    ...options,
  });
