import { apiFetch } from "./apiClient.js";

/** Background hydrate — never opens login on expired session. */
export const getFavorites = () =>
  apiFetch("/api/favorites", { requireAuth: true, showError: false, silentAuth: true });

export const toggleFavorite = (productId) =>
  apiFetch(`/api/favorites/${productId}/toggle`, {
    method: "POST",
    requireAuth: true,
    promptLogin: true,
  });
