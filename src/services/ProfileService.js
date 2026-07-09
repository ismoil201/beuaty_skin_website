import { getMe, updateMe } from "../api/userApi.js";
import { getOrders } from "../api/orderApi.js";
import { getHealth } from "../api/healthApi.js";
import { getPageContent } from "../utils/productMapper.js";
import { OrderService } from "./OrderService.js";
import { ReviewService } from "./ReviewService.js";
import { HomeService } from "./HomeService.js";
import { appStore } from "../stores/appStore.js";

export const ProfileService = {
  getOrderPreview(orders) {
    return (orders || []).filter((order) => OrderService.isProfileActiveOrder(order)).slice(0, 2);
  },

  async loadSnapshot() {
    const [userResponse, ordersResponse, reviewsResult, recentlyViewed] = await Promise.all([
      getMe(),
      getOrders(),
      ReviewService.loadMyReviews(),
      HomeService.loadRecentlyViewed(),
    ]);

    return {
      userResponse,
      ordersResponse,
      reviewsResult,
      recentlyViewed,
    };
  },

  async enrichProfileOrders(orders) {
    return OrderService.enrichProfileOrders(orders);
  },

  normalizeOrdersResponse(ordersResponse) {
    return ordersResponse !== null ? getPageContent(ordersResponse) : null;
  },

  validateProfileUpdate({ fullName, phone }) {
    if (!fullName || !phone) {
      return { valid: false, error: "Full name va phone majburiy." };
    }
    return { valid: true };
  },

  async updateProfile(body) {
    const response = await updateMe(body);
    if (response === null) {
      return { success: false, error: appStore.lastApiError || "Profile yangilanmadi." };
    }
    const fresh = await getMe();
    return { success: true, user: fresh || null };
  },

  async checkHealth() {
    return getHealth();
  },
};
