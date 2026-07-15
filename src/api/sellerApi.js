import { apiFetch } from "./apiClient.js";

export const getSeller = (id) =>
  apiFetch(`/api/sellers/${id}`, { showError: false });

export const applyAsSeller = (body) =>
  apiFetch("/api/sellers/apply", {
    method: "POST",
    body: JSON.stringify(body || {}),
    requireAuth: true,
    showError: false,
  });

export const updateSellerProfile = (body) =>
  apiFetch("/api/sellers/profile", {
    method: "PUT",
    body: JSON.stringify(body || {}),
    requireAuth: true,
    showError: false,
  });

export const getMySellerProducts = (query = {}) =>
  apiFetch("/api/sellers/my-products", {
    query,
    requireAuth: true,
    showError: false,
  });
