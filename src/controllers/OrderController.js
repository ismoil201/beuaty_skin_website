import { appStore } from "../stores/index.js";
import { els } from "../utils/dom.js";
import { OrdersPage } from "../pages/orders/OrdersPage.js";
import { lockBody } from "../runtime/navigation.js";
import { AuthController } from "./AuthController.js";
import { deps } from "../runtime/deps.js";

export const OrderController = {
  async show() {
    if (!AuthController.isLoggedIn()) {
      AuthController.showLoginRequired();
      return;
    }
    els.ordersDialog.showModal();
    lockBody();
    await OrderController.load();
  },

  async load() {
    return OrdersPage.load({
      onSessionExpired: () => els.ordersDialog.close(),
    });
  },

  handleClick(event) {
    const closeOrders = event.target.closest("[data-orders-close]");
    const ordersBack = event.target.closest("[data-orders-back]");
    const detail = event.target.closest("[data-order-detail]");
    const retry = event.target.closest("[data-orders-retry]");
    const startShopping = event.target.closest("[data-orders-start-shopping]");
    const writeReview = event.target.closest("[data-order-write-review]");
    const feedback = event.target.closest("[data-order-feedback]");

    if (closeOrders) {
      els.ordersDialog.close();
      deps.navigation?.unlockBodyIfNoOverlay?.();
      return;
    }

    if (ordersBack) {
      appStore.selectedOrder = null;
      appStore.selectedOrderHistory = [];
      appStore.orderDetailError = "";
      appStore.orderHistoryWarning = "";
      OrdersPage.render();
      return;
    }

    if (writeReview) {
      deps.reviews?.openWrite?.({
        productId: writeReview.dataset.orderWriteReview,
        orderId: writeReview.dataset.reviewOrder,
        productName: writeReview.dataset.reviewName,
      });
      return;
    }

    if (feedback) {
      deps.toast?.(deps.i18n?.t("profile.comingSoon"), "info");
      return;
    }

    if (detail) {
      OrdersPage.openDetail(detail.dataset.orderDetail);
      return;
    }

    if (retry) {
      OrderController.load();
      return;
    }

    if (startShopping) {
      els.ordersDialog.close();
      document.getElementById("products")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  },
};