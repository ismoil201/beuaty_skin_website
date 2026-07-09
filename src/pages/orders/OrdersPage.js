import { CONFIG } from "../../config/config.js";
import { appStore } from "../../stores/index.js";
import { els } from "../../utils/dom.js";
import { escapeHtml } from "../../utils/html.js";
import { normalizeOrderItem } from "../../utils/productMapper.js";
import { formatOrderDetailDate } from "../../utils/format.js";
import { t } from "../../i18n/index.js";
import { OrderService } from "../../services/OrderService.js";
import { initLazyImages } from "../../utils/imageLoader.js";
import { OrderCard as OrderCardView, OrderListThumbs, OrderStatusBadge } from "../../components/order/OrderCard.js";
import { profileOrderStatusLabel, statusLabel } from "../shared/orderLabels.js";
import { OrderDetailPage } from "./OrderDetailPage.js";

function ordersBackIcon() {
  return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 6-6 6 6 6"/></svg>`;
}

function renderOrdersHeader(title, backAction) {
  const backAttrs = backAction === "close"
    ? `data-orders-close type="button" aria-label="${escapeHtml(t("checkout.back"))}"`
    : `data-orders-back type="button" aria-label="${escapeHtml(t("checkout.back"))}"`;

  return `
    <header class="app-orders-header">
      <button class="app-orders-back" ${backAttrs}>
        ${ordersBackIcon()}
      </button>
      <h2>${escapeHtml(title)}</h2>
      <span aria-hidden="true"></span>
    </header>
  `;
}

function renderOrderStatusBadge(status = "") {
  return OrderStatusBadge({
    statusLabel: profileOrderStatusLabel(status),
    statusModifier: OrderService.orderStatusModifier(status),
  });
}

function renderOrderListThumbs(order = {}) {
  const items = (Array.isArray(order.items) ? order.items : [])
    .map((item) => normalizeOrderItem({ ...item, orderId: order.id }));
  return OrderListThumbs({ items });
}

function renderOrderCard(order) {
  const itemCount = OrderService.getItemCount(order);
  const lineCount = OrderService.getLineCount(order);
  return OrderCardView({
    order,
    statusBadgeHtml: renderOrderStatusBadge(order.status),
    thumbsHtml: renderOrderListThumbs(order),
    orderLabel: t("orders.order"),
    itemsCountLabel: t("orders.itemsCount", { count: lineCount }),
    itemsLabel: t("orders.items", { count: itemCount }),
    totalLabel: t("orders.totalLabel"),
    addressLabel: t("orders.addressLabel"),
    viewDetailsLabel: t("orders.viewDetails"),
    lineCount,
    itemCount,
  });
}

export const OrdersPage = {
  renderHeader: renderOrdersHeader,
  renderOrderCard,

  render() {
    if (appStore.ordersLoading) {
      els.ordersContent.innerHTML = `
        <div class="app-orders-page">
          ${renderOrdersHeader(t("orders.title"), "close")}
          <div class="app-orders-scroll">
            <div class="app-orders-skeleton skeleton-card"></div>
            <div class="app-orders-skeleton skeleton-card"></div>
          </div>
        </div>
      `;
      return;
    }

    if (appStore.ordersError) {
      els.ordersContent.innerHTML = `
        <div class="app-orders-page">
          ${renderOrdersHeader(t("orders.title"), "close")}
          <div class="app-orders-scroll">
            <div class="app-orders-error">
              <strong>${escapeHtml(t("orders.unavailable"))}</strong>
              <p>${escapeHtml(appStore.ordersError)}</p>
              <button class="app-orders-details-btn" data-orders-retry type="button">${escapeHtml(t("common.tryAgain"))}</button>
            </div>
          </div>
        </div>
      `;
      return;
    }

    if (!appStore.orders.length) {
      els.ordersContent.innerHTML = `
        <div class="app-orders-page">
          ${renderOrdersHeader(t("orders.title"), "close")}
          <div class="app-orders-scroll">
            <div class="app-orders-empty">
              <strong>${escapeHtml(t("orders.none"))}</strong>
              <p>${escapeHtml(t("orders.emptyHint"))}</p>
              <button class="app-orders-details-btn" data-orders-start-shopping type="button">${escapeHtml(t("home.startShopping"))}</button>
            </div>
          </div>
        </div>
      `;
      return;
    }

    if (appStore.orderDetailLoading || appStore.selectedOrder || appStore.orderDetailError) {
      els.ordersContent.innerHTML = OrderDetailPage.render({
        renderHeader: renderOrdersHeader,
        renderOrderCard,
      });
      return;
    }

    els.ordersContent.innerHTML = `
      <div class="app-orders-page">
        ${renderOrdersHeader(t("orders.title"), "close")}
        <div class="app-orders-scroll">
          ${appStore.orders.map(renderOrderCard).join("")}
        </div>
      </div>
    `;
    initLazyImages(els.ordersContent);
  },

  async load({ onSessionExpired } = {}) {
    appStore.ordersLoading = true;
    appStore.ordersError = "";
    appStore.selectedOrder = null;
    appStore.selectedOrderHistory = [];
    appStore.orderHistoryWarning = "";
    OrdersPage.render();

    const result = await OrderService.loadOrders();
    appStore.ordersLoading = false;

    if (!result.success) {
      if (result.sessionExpired) {
        onSessionExpired?.();
        return;
      }
      appStore.ordersError = result.error;
      OrdersPage.render();
      return;
    }

    appStore.orders = result.orders;
    OrdersPage.render();
  },

  async openDetail(orderId) {
    appStore.orderDetailLoading = true;
    appStore.orderDetailError = "";
    appStore.orderHistoryWarning = "";
    OrdersPage.render();

    const result = await OrderService.loadOrderDetail(orderId);
    appStore.orderDetailLoading = false;

    if (!result.success) {
      appStore.orderDetailError = result.error;
      OrdersPage.render();
      return;
    }

    appStore.selectedOrder = result.order;
    appStore.selectedOrderHistory = result.history;
    appStore.orderHistoryWarning = result.historyWarning;
    OrdersPage.render();
  },
};

export const loadOrders = OrdersPage.load;
export const renderOrders = OrdersPage.render;
export const openOrderDetail = OrdersPage.openDetail;
