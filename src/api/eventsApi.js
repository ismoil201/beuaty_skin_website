import { apiFetch } from "./apiClient.js";

export const postAnalyticsEvent = (path, options = {}) =>
  apiFetch(path, { ...options, showError: false });

export const postImpression = (body) =>
  postAnalyticsEvent("/events/impression", { method: "POST", body: JSON.stringify(body) });

export const postProductClick = (productId) =>
  postAnalyticsEvent("/events/click", { method: "POST", query: { productId } });

export const postProductView = (productId) =>
  postAnalyticsEvent("/events/view", { method: "POST", query: { productId } });
