import { apiFetch } from "./apiClient.js";
import { CONFIG } from "../config/config.js";

export const getProducts = (query) => apiFetch("/api/products", { query, showError: false });
export const getProduct = (id) => apiFetch(`/api/products/${id}`);
export const getProductsByCategory = (category, query) =>
  apiFetch("/api/products/category", { query: { category, ...query }, showError: false });
export const searchProducts = (q, query) =>
  apiFetch("/api/products/search", { query: { q, ...query }, showError: false });
export const getTodayDeals = () => apiFetch("/api/products/today-deals", { showError: false });
export const getProductsByIds = (ids) =>
  apiFetch("/api/products/by-ids", {
    method: "POST",
    body: JSON.stringify(ids),
    showError: false,
  });
export const getHome = (query) => apiFetch("/api/home", { query, showError: false });
export const getHomeFeed = (query) => apiFetch("/api/home/feed", { query, showError: false });
export const getRecommendations = (productId, query) =>
  apiFetch(`/api/products/${productId}/recommend`, { query, showError: false });

export const defaultProductQuery = {
  page: 0,
  size: CONFIG.defaultPageSize,
};
