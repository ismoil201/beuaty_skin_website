import { apiFetch } from "./apiClient.js";

export const getOrders = () => apiFetch("/api/orders", { requireAuth: true, showError: false });
export const getOrder = (id) => apiFetch(`/api/orders/${id}`, { requireAuth: true, showError: false });
export const getOrderHistory = (id) =>
  apiFetch(`/api/orders/${id}/history`, { requireAuth: true, showError: false });
export const getOrderShipment = (id) =>
  apiFetch(`/api/orders/${id}/shipment`, { requireAuth: true, showError: false });
export const createOrder = (body, options = {}) =>
  apiFetch("/api/orders", {
    method: "POST",
    body: JSON.stringify(body),
    requireAuth: true,
    showError: false,
    ...options,
  });

/**
 * @param {string|number} orderItemId
 * @param {{ reason: string, description?: string }} body
 * reason: DAMAGED_PRODUCT | WRONG_PRODUCT | NOT_AS_DESCRIBED | SIZE_ISSUE | QUALITY_ISSUE | CUSTOMER_CHANGED_MIND | OTHER
 */
export const createOrderItemReturn = (orderItemId, body) =>
  apiFetch(`/api/orders/items/${orderItemId}/return`, {
    method: "POST",
    body: JSON.stringify(body),
    requireAuth: true,
    showError: false,
  });

export const getOrderReturns = () =>
  apiFetch("/api/orders/returns", { requireAuth: true, showError: false });

export const getOrderReturn = (id) =>
  apiFetch(`/api/orders/returns/${id}`, { requireAuth: true, showError: false });
