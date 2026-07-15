import { trackBehavior, getTrendingBehaviorIds } from "../api/behaviorApi.js";
import { getSessionId, getToken } from "../utils/storage.js";
import { ProductService } from "./ProductService.js";

export const BehaviorService = {
  async track(productId, action = "VIEW") {
    if (!productId || !getToken()) return { success: false, skipped: true };
    const response = await trackBehavior({
      productId: Number(productId),
      action: String(action || "VIEW").toUpperCase(),
      sessionId: getSessionId(),
    });
    return { success: response !== null };
  },

  async loadTrendingProducts(limit = 12) {
    const ids = await getTrendingBehaviorIds(limit);
    const list = Array.isArray(ids) ? ids : [];
    if (!list.length) return [];
    return ProductService.hydrateProductIds(list);
  },
};
