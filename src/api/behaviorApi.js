import { apiFetch } from "./apiClient.js";

/**
 * @param {{ productId: number|string, action: string, sessionId?: string }} body
 * action: VIEW | SEARCH | LIKE | ADD_CART | PURCHASE
 */
export const trackBehavior = (body) =>
  apiFetch("/api/behavior/track", {
    method: "POST",
    body: JSON.stringify(body),
    requireAuth: true,
    showError: false,
    silentAuth: true,
  });

/** Returns product ID list (Long[]). Hydrate separately. */
export const getTrendingBehaviorIds = (limit = 10) =>
  apiFetch("/api/behavior/trending", {
    query: { limit },
    showError: false,
  });
