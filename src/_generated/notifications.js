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

export function clearNotificationsState() {
  state.notifications = [];
  state.notificationsLoading = false;
  state.notificationsError = "";
  state.unreadCount = 0;
  state.unreadCountLoading = false;
  state.notificationUpdatingIds = new Set();
  updateNotificationsBadge();
  if (els.notificationsDrawer?.classList.contains("open")) {
    closeNotifications();
  }
}


export async function loadUnreadCount() {
  if (!isLoggedIn()) {
    clearNotificationsState();
    return;
  }

  state.unreadCountLoading = true;
  const response = await apiFetch("/api/notifications/unread-count", { requireAuth: true, showError: false });
  state.unreadCountLoading = false;

  if (response === null) {
    if (state.lastApiError.includes("Session expired")) {
      clearNotificationsState();
      return;
    }
    updateNotificationsBadge();
    return;
  }

  state.unreadCount = normalizeUnreadCount(response);
  updateNotificationsBadge();
}


export async function openNotifications() {
  if (!isLoggedIn()) {
    showLoginRequired();
    return;
  }

  els.notificationsDrawer.classList.add("open");
  els.notificationsDrawer.setAttribute("aria-hidden", "false");
  lockBody();
  await Promise.all([loadNotifications(), loadUnreadCount()]);
}


export function closeNotifications() {
  els.notificationsDrawer.classList.remove("open");
  els.notificationsDrawer.setAttribute("aria-hidden", "true");
  unlockBodyIfNoOverlay();
}


export async function loadNotifications() {
  if (!isLoggedIn()) {
    showLoginRequired();
    return;
  }

  state.notificationsLoading = true;
  state.notificationsError = "";
  renderNotifications();

  const response = await apiFetch("/api/notifications", { requireAuth: true, showError: false });
  state.notificationsLoading = false;

  if (response === null) {
    if (state.lastApiError.includes("Session expired")) {
      clearNotificationsState();
      return;
    }
    state.notificationsError = state.lastApiError || "Notifications could not be loaded.";
    renderNotifications();
    return;
  }

  state.notifications = getNotificationsContent(response).map(normalizeNotification).filter((item) => item.id !== undefined);
  renderNotifications();
}


export function updateNotificationsBadge() {
  els.notificationsCount.textContent = state.unreadCount;
  els.notificationsCount.hidden = state.unreadCount <= 0;
  els.notificationsSummary.textContent = `${state.unreadCount} ${t("notifications.unread")}`;
}


export function renderNotifications() {
  updateNotificationsBadge();

  if (state.notificationsLoading) {
    els.notificationsContent.innerHTML = `
      <div class="notifications-loading">
        <div class="skeleton-card"></div>
        <div class="skeleton-card"></div>
      </div>
    `;
    return;
  }

  if (state.notificationsError) {
    els.notificationsContent.innerHTML = `
      <div class="notifications-empty">
        <strong>${escapeHtml(t("notifications.title"))}</strong>
        <p>${escapeHtml(state.notificationsError)}</p>
        <button class="secondary-button" data-notifications-retry type="button">${escapeHtml(t("common.tryAgain"))}</button>
      </div>
    `;
    return;
  }

  if (!state.notifications.length) {
    els.notificationsContent.innerHTML = `
      <div class="notifications-empty">
        <strong>${escapeHtml(t("notifications.none"))}</strong>
        <p>Order, promo and system updates will appear here.</p>
      </div>
    `;
    return;
  }

  els.notificationsContent.innerHTML = `
    <div class="notifications-list">
      ${state.notifications.map(renderNotificationCard).join("")}
    </div>
  `;
}


export function renderNotificationCard(notification) {
  const updating = state.notificationUpdatingIds.has(String(notification.id));
  return `
    <article class="notification-card ${notification.read ? "read" : "unread"} ${updating ? "loading" : ""}" data-notification-card="${escapeHtml(notification.id)}">
      <div class="notification-icon type-${escapeHtml(notification.type.toLowerCase())}" aria-hidden="true">${notificationTypeIcon(notification.type)}</div>
      <div>
        <div class="notification-head">
          <strong>${escapeHtml(notification.title)}</strong>
          ${notification.read ? "" : `<span class="unread-dot" aria-label="${escapeHtml(t("notifications.unread"))}"></span>`}
        </div>
        <p>${escapeHtml(notification.message)}</p>
        <div class="notification-meta">
          <span>${escapeHtml(notificationTypeLabel(notification.type))}</span>
          <span>${formatDateTime(notification.createdAt)}</span>
        </div>
      </div>
      <button class="secondary-button notification-read-button" data-notification-read="${escapeHtml(notification.id)}" ${notification.read || updating ? "disabled" : ""} type="button">
        ${notification.read ? escapeHtml(t("notifications.read")) : updating ? escapeHtml(t("common.saving")) : escapeHtml(t("notifications.markRead"))}
      </button>
    </article>
  `;
}


export function notificationTypeIcon(type) {
  const icons = { ORDER: "O", PROMO: "%", SYSTEM: "i" };
  return icons[type] || "i";
}


export async function markNotificationRead(notificationId, options = {}) {
  const notification = state.notifications.find((item) => String(item.id) === String(notificationId));
  if (!notification || notification.read) return true;

  state.notificationUpdatingIds.add(String(notificationId));
  renderNotifications();
  const response = await apiFetch(`/api/notifications/${notificationId}/read`, {
    method: "POST",
    requireAuth: true,
    showError: false,
  });
  state.notificationUpdatingIds.delete(String(notificationId));

  if (response === null) {
    if (state.lastApiError.includes("Session expired")) {
      clearNotificationsState();
      return false;
    }
    showToast(state.lastApiError || "Notification could not be updated.");
    renderNotifications();
    return false;
  }

  notification.read = true;
  state.notifications = state.notifications.map((item) => String(item.id) === String(notificationId) ? { ...item, read: true } : item);
  state.unreadCount = Math.max(0, state.unreadCount - 1);
  renderNotifications();
  await loadUnreadCount();
  if (!options.silent) showToast("Marked as read");
  return true;
}


export async function handleNotificationCardClick(notificationId) {
  const notification = state.notifications.find((item) => String(item.id) === String(notificationId));
  if (!notification) return;

  if (!notification.read) {
    await markNotificationRead(notificationId, { silent: true });
  }

  if (notification.type === "ORDER" && notification.refId) {
    closeNotifications();
    await showOrders();
    await openOrderDetail(notification.refId);
  }
}


export async function saveNotificationToken(token) {
  if (!isLoggedIn()) {
    showLoginRequired();
    return null;
  }

  const cleanToken = String(token || "").trim();
  if (!cleanToken) {
    showToast("Notification token is empty.");
    return null;
  }

  return apiFetch("/api/notifications/token", {
    method: "POST",
    requireAuth: true,
    body: JSON.stringify({ token: cleanToken }),
  });
}

window.saveNotificationToken = saveNotificationToken;


export async function checkServerHealth() {
  return apiFetch("/api/health", { showError: false });
}

window.checkServerHealth = checkServerHealth;


export function handleNotificationsClick(event) {
  const retry = event.target.closest("[data-notifications-retry]");
  const readButton = event.target.closest("[data-notification-read]");
  const card = event.target.closest("[data-notification-card]");

  if (retry) {
    loadNotifications();
    loadUnreadCount();
    return;
  }

  if (readButton) {
    event.stopPropagation();
    markNotificationRead(readButton.dataset.notificationRead);
    return;
  }

  if (card) {
    handleNotificationCardClick(card.dataset.notificationCard);
  }
}

/* ================= REVIEWS RENDERERS ================= */

