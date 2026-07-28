import { getTrendingRecommendations } from "../api/recommendationApi.js";
import { getTrendingBehaviorIds } from "../api/behaviorApi.js";
import { SellerService } from "./SellerService.js";

/**
 * PDP marketplace adapter layer.
 * TODO(api): Replace placeholders when coupon/Q&A/shipping quote endpoints are available.
 */
export const PdpFeatureAdapter = {
  async loadSellerProfile(product) {
    const sellerId = product?.raw?.sellerId ?? product?.sellerId ?? product?.raw?.seller?.id;
    if (!sellerId) return null;
    const result = await SellerService.loadSeller(sellerId);
    return result.success ? result.seller : null;
  },

  resolveProductMeta(product) {
    const raw = product?.raw || {};
    return {
      sku: raw.sku || raw.productCode || raw.code || `BSK-${product?.id || "N/A"}`,
      country: raw.country || raw.countryOfOrigin || "Korea",
      madeIn: raw.madeIn || raw.manufacturingCountry || raw.countryOfOrigin || "Korea",
      category: raw.category || product?.category || "",
    };
  },

  resolveDeliveryMeta(product) {
    const raw = product?.raw || {};
    return {
      shippingCost: Number(raw.shippingCost || 0),
      freeShippingThreshold: Number(raw.freeShippingThreshold || 300000),
      courier: raw.courier || "Yandex / BTS",
      warehouse: raw.warehouseLocation || "Tashkent Hub",
      codAvailable: Boolean(raw.codAvailable ?? true),
      pickupAvailable: Boolean(raw.pickupAvailable ?? true),
      taxIncluded: true,
      returnDays: Number(raw.returnDays || 7),
    };
  },

  applyCoupon({ code, subtotal }) {
    // TODO(api): integrate coupons endpoint when available.
    const normalized = String(code || "").trim().toUpperCase();
    if (!normalized) {
      return { valid: false, code: "", discount: 0, message: "" };
    }
    if (normalized === "BEAUTY10") {
      return {
        valid: true,
        code: normalized,
        discount: Math.round(Number(subtotal || 0) * 0.1),
        message: "10% coupon applied",
      };
    }
    return { valid: false, code: normalized, discount: 0, message: "Coupon is not available yet" };
  },

  async loadSocialProof(productId) {
    const [trendingPayload, trendingIds] = await Promise.all([
      getTrendingRecommendations(12),
      getTrendingBehaviorIds(30),
    ]);
    const behaviorList = Array.isArray(trendingIds) ? trendingIds : [];
    const inTrending = behaviorList.some((id) => String(id) === String(productId));
    const recCount = Array.isArray(trendingPayload?.recommendations)
      ? trendingPayload.recommendations.length
      : (Array.isArray(trendingPayload?.products) ? trendingPayload.products.length : 0);

    return {
      viewingNow: Math.max(4, Math.min(73, recCount * 3)),
      recentlySold: inTrending ? 20 : 9,
      trendingScore: inTrending ? 92 : 61,
      inTrending,
    };
  },

  featureFlags() {
    return {
      couponsApi: false, // TODO(api): backend missing dedicated coupon endpoint.
      qnaApi: false, // TODO(api): backend missing product Q&A endpoint.
      shippingQuoteApi: false, // TODO(api): backend missing public shipping calculator endpoint.
      recentlyViewedApi: false, // TODO(api): backend missing server-side recently viewed endpoint.
    };
  },
};
