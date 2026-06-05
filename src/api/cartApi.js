import { apiFetch } from "./apiClient.js";

export const getCart = () => apiFetch("/api/cart", { requireAuth: true, showError: false });
export const addToCart = (body) =>
  apiFetch("/api/cart", { method: "POST", body: JSON.stringify(body), requireAuth: true });
export const updateCartItem = (cartItemId, body) =>
  apiFetch(`/api/cart/${cartItemId}`, {
    method: "PUT",
    body: JSON.stringify(body),
    requireAuth: true,
  });
export const removeCartItem = (cartItemId) =>
  apiFetch(`/api/cart/${cartItemId}`, { method: "DELETE", requireAuth: true });
