import { apiFetch } from "./apiClient.js";

/** Preferred marketplace search with filters. */
export const searchMarketplaceProducts = (query = {}) =>
  apiFetch("/api/search/products", { query, showError: false });

/** AI search gateway. */
export const aiSearch = (body) =>
  apiFetch("/api/search", {
    method: "POST",
    body: JSON.stringify(body),
    showError: false,
  });

export const getSearchSuggest = (q, limit = 8) =>
  apiFetch("/api/search/suggest", {
    query: { q, limit },
    showError: false,
  });

export const postSearchSuggest = (body) =>
  apiFetch("/api/search/suggest", {
    method: "POST",
    body: JSON.stringify(body || {}),
    showError: false,
  });

export const postSearchFeedback = (body) =>
  apiFetch("/api/search/feedback", {
    method: "POST",
    body: JSON.stringify(body || {}),
    showError: false,
  });

export const getSearchAnalytics = (topN = 20) =>
  apiFetch("/api/search/analytics", {
    query: { topN },
    showError: false,
  });
