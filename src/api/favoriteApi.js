import { apiFetch } from "./apiClient.js";

export const getFavorites = () => apiFetch("/api/favorites", { requireAuth: true, showError: false });
export const toggleFavorite = (productId) =>
  apiFetch(`/api/favorites/${productId}/toggle`, { method: "POST", requireAuth: true });
