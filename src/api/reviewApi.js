import { apiFetch } from "./apiClient.js";

export const getProductReviews = (productId) =>
  apiFetch(`/api/reviews/product/${productId}`, { showError: false });
export const getMyReviews = () =>
  apiFetch("/api/reviews/my", { requireAuth: true, showError: false, silentAuth: true });
export const submitReview = (body) =>
  apiFetch("/api/reviews", {
    method: "POST",
    body: JSON.stringify(body),
    requireAuth: true,
    showError: false,
  });
