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

export function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}


export function formatPrice(value) {
  const currencyLabels = { uz: "so‘m", en: "UZS", ru: "сум", ko: "UZS" };
  return `${new Intl.NumberFormat(currentLanguage === "uz" ? "uz-UZ" : currentLanguage).format(numberOrZero(value))} ${currencyLabels[currentLanguage] || "UZS"}`;
}


export function formatMoney(amount) {
  return formatPrice(amount);
}


export function formatDateTime(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return String(value);
  return new Intl.DateTimeFormat(currentLanguage, {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}


export function statusLabel(status = "") {
  return t(`status.${status}`) || status || t("common.unknown");
}


export function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => els.toast.classList.remove("show"), 2800);
}


export function setModeBadge(element, visible) {
  element.hidden = !visible;
}


export function syncModeBadges() {
  setModeBadge(els.productsMode, state.demoCategories || state.demoProducts);
  setModeBadge(els.dealsMode, state.demoDeals);
}


export function renderSkeleton(container, count = 12) {
  container.innerHTML = Array.from({ length: count }, () => "<div class=\"skeleton-card\"></div>").join("");
}


export function renderEmpty(container, message, actionLabel = t("home.showAll")) {
  container.innerHTML = `
    <div class="empty-state">
      <strong>${escapeHtml(message)}</strong>
      <button class="secondary-button" data-show-all type="button">${escapeHtml(actionLabel)}</button>
    </div>
  `;
}


export function shortText(value, maxLength) {
  const text = String(value || "");
  return text.length > maxLength ? `${text.slice(0, maxLength - 1)}…` : text;
}

