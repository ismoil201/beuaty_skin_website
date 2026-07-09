import { getOrders, getOrder, getOrderHistory, createOrder as createOrderApi } from "../api/orderApi.js";
import { getPageContent } from "../utils/productMapper.js";
import { createApiFailure } from "./serviceHelpers.js";
export const OrderService = {
  orderStatusModifier(status = "") {
    const key = String(status || "").toUpperCase();
    if (key === "DELIVERED") return "delivered";
    if (key === "CANCELED" || key === "CANCELLED") return "canceled";
    if (key === "SHIPPED") return "shipped";
    return "pending";
  },

  getItemCount(order = {}) {
    const items = Array.isArray(order.items) ? order.items : [];
    if (!items.length) return Number(order.itemCount) || 0;
    return items.reduce((sum, item) => sum + (Number(item.quantity) || 1), 0);
  },

  getLineCount(order = {}) {
    const items = Array.isArray(order.items) ? order.items : [];
    return items.length || Number(order.itemCount) || 0;
  },

  isProfileActiveOrder(order) {
    const status = String(order?.status || "").toUpperCase();
    return Boolean(status) && !["DELIVERED", "CANCELED", "CANCELLED"].includes(status);
  },

  async enrichOrdersList(orders = []) {
    const missingItems = orders.filter((order) => !Array.isArray(order.items) || !order.items.length);
    if (!missingItems.length) return orders;

    const enriched = new Map();
    await Promise.all(missingItems.slice(0, 30).map(async (order) => {
      const detail = await getOrder(order.id);
      if (detail && typeof detail === "object") {
        enriched.set(String(order.id), detail);
      }
    }));

    return orders.map((order) => enriched.get(String(order.id)) || order);
  },

  async enrichProfileOrders(orders = []) {
    const previewOrders = orders.slice(0, 2);
    if (!previewOrders.length) return orders;

    const enriched = await Promise.all(previewOrders.map(async (order) => {
      if (Array.isArray(order.items) && order.items.length) return order;
      const detail = await getOrder(order.id);
      return detail && typeof detail === "object" ? detail : order;
    }));

    return [...enriched, ...orders.slice(2)];
  },

  async loadOrders() {
    const response = await getOrders();
    if (response === null) {
      return createApiFailure("Orders could not be loaded.");
    }    const orders = await this.enrichOrdersList(getPageContent(response));
    return { success: true, orders };
  },

  async loadOrderDetail(orderId) {
    const [detail, history] = await Promise.all([
      getOrder(orderId),
      getOrderHistory(orderId),
    ]);

    if (detail === null) {
      return {
        success: false,
        error: createApiFailure("Order detail could not be loaded.").error,
      };
    }
    return {
      success: true,
      order: detail,
      history: history === null ? [] : getPageContent(history),
      historyWarning: history === null ? "Status history could not be loaded." : "",
    };
  },

  async createOrder(payload, options = {}) {
    const response = await createOrderApi(payload, {
      timeoutMs: 25000,
      ...options,
    });

    if (response === null) {
      return createApiFailure("Order could not be created.");
    }
    return { success: true, order: response };
  },

  buildSuccessState() {
    return {
      checkoutConfirmOpen: false,
      orderSuccess: null,
      checkoutError: "",
      orderSubmitting: false,
    };
  },
};
