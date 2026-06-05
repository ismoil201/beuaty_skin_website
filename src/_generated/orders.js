import { CONFIG, CATEGORY_LABELS, QUICK_CATEGORIES, DEMO_PRODUCTS } from '../config/config.js';
import { CONFIG as _C } from '../config/config.js';
import { state } from '../store/state.js';
import { els } from '../utils/dom.js';
import { apiFetch } from '../api/apiClient.js';
import { getToken, isLoggedIn, saveAuth, clearAuth, showLoginRequired } from '../store/authStore.js';
import { t, applyTranslations, setLanguage, getSavedLanguage } from '../i18n/index.js';
import * as mappers from '../utils/productMapper.js';
import { getPageContent, normalizeProduct, normalizeCartItem, normalizeCategory, normalizeOrderItem, normalizeReview, normalizeNotification, normalizeMyReviewItem, getNotificationsContent, getMyReviewsContent, normalizeImages, imageValue, numberOrZero } from '../utils/productMapper.js';
import { escapeHtml, formatPrice, formatMoney, formatDateTime, statusLabel, showToast, renderSkeleton, renderEmpty, shortText } from '../utils/format.js';
import { categoryLabel } from '../utils/productMapper.js';
import { setCartItems, clearCartState, setFavoriteProducts, clearFavoritesState, syncProductFavorites } from '../store/cartStore.js';

export async function showOrders() {
  if (!isLoggedIn()) {
    showLoginRequired();
    return;
  }

  els.ordersDialog.showModal();
  lockBody();
  await loadOrders();
}


export async function loadOrders() {
  state.ordersLoading = true;
  state.ordersError = "";
  state.selectedOrder = null;
  state.selectedOrderHistory = [];
  state.orderHistoryWarning = "";
  renderOrders();

  const response = await apiFetch("/api/orders", { requireAuth: true, showError: false });
  state.ordersLoading = false;

  if (response === null) {
    if (state.lastApiError.includes("Session expired")) {
      els.ordersDialog.close();
      return;
    }
    state.ordersError = state.lastApiError || "Orders could not be loaded.";
    renderOrders();
    return;
  }

  state.orders = getPageContent(response);
  renderOrders();
}


export function renderOrders() {
  if (state.ordersLoading) {
    els.ordersContent.innerHTML = `
      <div class="orders-layout">
        <div class="orders-list"><div class="skeleton-card"></div><div class="skeleton-card"></div></div>
        <div class="order-detail-panel"><div class="skeleton-card"></div></div>
      </div>
    `;
    return;
  }

  if (state.ordersError) {
    els.ordersContent.innerHTML = `
      <div class="orders-empty">
        <strong>Orders unavailable</strong>
        <p>${escapeHtml(state.ordersError)}</p>
        <button class="secondary-button" data-orders-retry type="button">Retry</button>
      </div>
    `;
    return;
  }

  if (!state.orders.length) {
    els.ordersContent.innerHTML = `
      <div class="orders-empty">
        <strong>${escapeHtml(t("orders.none"))}</strong>
        <p>Your completed purchases will appear here.</p>
        <button class="primary-button" data-orders-start-shopping type="button">${escapeHtml(t("home.startShopping"))}</button>
      </div>
    `;
    return;
  }

  els.ordersContent.innerHTML = `
    <div class="orders-layout">
      <div class="orders-list">
        ${state.orders.map(renderOrderCard).join("")}
      </div>
      <div class="order-detail-panel">
        ${renderOrderDetailPanel()}
      </div>
    </div>
  `;
}


export function renderOrderCard(order) {
  const items = Array.isArray(order.items) ? order.items : [];
  return `
    <article class="order-card ${state.selectedOrder?.id === order.id ? "selected" : ""}">
      <div>
        <h3>${escapeHtml(t("orders.order"))} #${escapeHtml(order.id)}</h3>
        <p class="hint">${formatDateTime(order.createdAt)}</p>
        <p class="hint">${escapeHtml(order.fullName || "")}</p>
        <p class="hint">${escapeHtml(shortText(order.address || "", 72))}</p>
      </div>
      <div class="order-card-side">
        <span class="status-badge status-${escapeHtml(String(order.status || "").toLowerCase())}">${escapeHtml(statusLabel(order.status))}</span>
        <strong>${formatMoney(order.totalAmount)}</strong>
        <span class="hint">${escapeHtml(t("orders.items", { count: items.length }))}</span>
        <button class="secondary-button" data-order-detail="${escapeHtml(order.id)}" type="button">${escapeHtml(t("orders.viewDetails"))}</button>
      </div>
    </article>
  `;
}


export function renderOrderDetailPanel() {
  if (state.orderDetailLoading) {
    return "<div class=\"skeleton-card\"></div>";
  }

  if (state.orderDetailError) {
    return `<div class="orders-empty"><strong>Detail unavailable</strong><p>${escapeHtml(state.orderDetailError)}</p></div>`;
  }

  if (!state.selectedOrder) {
    return "<div class=\"orders-empty\"><strong>Select an order</strong><p>Choose an order to see details and timeline.</p></div>";
  }

  const order = state.selectedOrder;
  const items = Array.isArray(order.items) ? order.items.map((item) => normalizeOrderItem({ ...item, orderId: order.id })) : [];
  return `
    <section class="order-detail">
      <div class="order-detail-head">
        <div>
          <h3>${escapeHtml(t("orders.order"))} #${escapeHtml(order.id)}</h3>
          <p class="hint">${formatDateTime(order.createdAt)}</p>
        </div>
        <span class="status-badge status-${escapeHtml(String(order.status || "").toLowerCase())}">${escapeHtml(statusLabel(order.status))}</span>
      </div>
      <div class="summary-box">
        <strong>${escapeHtml(t("checkout.receiver"))}</strong>
        <p class="hint">${escapeHtml(order.fullName || "")} ${order.phone ? `· ${escapeHtml(order.phone)}` : ""}</p>
      </div>
      <div class="summary-box">
        <strong>${escapeHtml(t("checkout.address"))}</strong>
        <p class="hint">${escapeHtml(order.address || "")}</p>
      </div>
      <div class="summary-total"><span>${escapeHtml(t("common.total"))}</span><strong>${formatMoney(order.totalAmount)}</strong></div>
      <div class="order-items">
        <h4>Items</h4>
        ${items.length ? items.map((item) => renderOrderItem(item, order)).join("") : "<p class=\"hint\">No items in response.</p>"}
      </div>
      <div class="order-timeline">
        <h4>Status history</h4>
        ${state.orderHistoryWarning ? `<p class="checkout-error">${escapeHtml(state.orderHistoryWarning)}</p>` : ""}
        ${renderOrderTimeline(order)}
      </div>
    </section>
  `;
}


export function renderOrderItem(item, order = {}) {
  const delivered = String(order.status || "").toUpperCase() === "DELIVERED";
  const canReview = delivered && item.productId && order.id;
  return `
    <article class="order-item">
      <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}" />
      <div>
        <strong>${escapeHtml(item.name)}</strong>
        <p class="hint">${item.variantLabel ? escapeHtml(item.variantLabel) : "Variant"} · x${item.quantity}</p>
        ${canReview ? `
          <button class="secondary-button order-review-button" data-order-write-review="${escapeHtml(item.productId)}" data-review-order="${escapeHtml(order.id)}" data-review-name="${escapeHtml(item.name)}" type="button">Write review</button>
        ` : item.productId ? "<p class=\"hint\">Available after delivery</p>" : ""}
      </div>
      <strong>${formatMoney(item.lineTotal || item.unitPrice * item.quantity)}</strong>
    </article>
  `;
}


export function renderOrderTimeline(order) {
  const history = state.selectedOrderHistory.length
    ? state.selectedOrderHistory
    : [{ status: order.status, createdAt: order.createdAt, note: "Current order status" }];

  return history.map((item) => `
    <div class="timeline-item">
      <span></span>
      <div>
        <strong>${escapeHtml(statusLabel(item.status))}</strong>
        <p class="hint">${formatDateTime(item.createdAt)}</p>
        ${item.note ? `<p class="hint">${escapeHtml(item.note)}</p>` : ""}
      </div>
    </div>
  `).join("");
}


export async function openOrderDetail(orderId) {
  state.orderDetailLoading = true;
  state.orderDetailError = "";
  state.orderHistoryWarning = "";
  renderOrders();

  const [detail, history] = await Promise.all([
    apiFetch(`/api/orders/${orderId}`, { requireAuth: true, showError: false }),
    apiFetch(`/api/orders/${orderId}/history`, { requireAuth: true, showError: false }),
  ]);

  state.orderDetailLoading = false;
  if (detail === null) {
    state.orderDetailError = state.lastApiError || "Order detail could not be loaded.";
    renderOrders();
    return;
  }

  state.selectedOrder = detail;
  state.selectedOrderHistory = history === null ? [] : getPageContent(history);
  if (history === null) {
    state.orderHistoryWarning = "Status history could not be loaded.";
  }
  renderOrders();
}

/* ================= FAVORITES RENDERERS ================= */


export function handleOrdersClick(event) {
  const detail = event.target.closest("[data-order-detail]");
  const retry = event.target.closest("[data-orders-retry]");
  const startShopping = event.target.closest("[data-orders-start-shopping]");
  const writeReview = event.target.closest("[data-order-write-review]");

  if (writeReview) {
    openWriteReview({
      productId: writeReview.dataset.orderWriteReview,
      orderId: writeReview.dataset.reviewOrder,
      productName: writeReview.dataset.reviewName,
    });
    return;
  }

  if (detail) {
    openOrderDetail(detail.dataset.orderDetail);
    return;
  }

  if (retry) {
    loadOrders();
    return;
  }

  if (startShopping) {
    els.ordersDialog.close();
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

