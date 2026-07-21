import { apiFetch } from "./apiClient.js";

/** Background hydrate — never opens login on expired session. */
export const getCart = () =>
  apiFetch("/api/cart", { requireAuth: true, showError: false, silentAuth: true });

export const addToCart = (body) =>
  apiFetch("/api/cart", {
    method: "POST",
    body: JSON.stringify(body),
    requireAuth: true,
    promptLogin: true,
  });

export const updateCartItem = (cartItemId, body) =>
  apiFetch(`/api/cart/${cartItemId}`, {
    method: "PUT",
    body: JSON.stringify(body),
    requireAuth: true,
    promptLogin: true,
  });

export const removeCartItem = (cartItemId) =>
  apiFetch(`/api/cart/${cartItemId}`, {
    method: "DELETE",
    requireAuth: true,
    promptLogin: true,
  });
