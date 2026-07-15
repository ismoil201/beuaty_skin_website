import { apiFetch } from "./apiClient.js";

const commonQuery = (query = {}) => ({
  device: "web",
  locale: query.locale || "uz-UZ",
  ...query,
});

/** Legacy personalized recommendations → { strategy, products }. */
export const getLegacyRecommendations = (limit = 12) =>
  apiFetch("/api/recommendations", {
    query: { limit },
    showError: false,
  });

export const getHomeRecommendations = (query = {}) =>
  apiFetch("/api/recommendations/home", {
    query: commonQuery(query),
    showError: false,
  });

export const getProductRecommendations = (productId, query = {}) =>
  apiFetch(`/api/recommendations/product/${productId}`, {
    query: commonQuery(query),
    showError: false,
  });

export const getCartRecommendations = (query = {}) =>
  apiFetch("/api/recommendations/cart", {
    query: commonQuery(query),
    showError: false,
  });

export const getTrendingRecommendations = (limit = 12) =>
  apiFetch("/api/recommendations/trending", {
    query: { limit },
    showError: false,
  });

export const getCategoryRecommendations = (categoryId, query = {}) =>
  apiFetch(`/api/recommendations/category/${categoryId}`, {
    query: commonQuery(query),
    showError: false,
  });
