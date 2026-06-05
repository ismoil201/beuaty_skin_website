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

export function postEvent(path, options = {}) {
  apiFetch(path, { ...options, showError: false }).catch(() => {});
}


export function sendImpression(productId, screen, position) {
  if (!productId || String(productId).startsWith("demo-")) return;
  const key = `${state.sessionId}:${screen}:${productId}`;
  if (state.impressionsSent.has(key)) return;
  state.impressionsSent.add(key);
  postEvent("/events/impression", {
    method: "POST",
    body: JSON.stringify({
      productId: Number(productId),
      screen,
      position,
      queryText: state.currentSearchQuery || null,
      sessionId: state.sessionId,
    }),
  });
}


export function sendProductClick(productId) {
  if (!productId || String(productId).startsWith("demo-")) return;
  postEvent("/events/click", {
    method: "POST",
    query: { productId },
  });
}


export function sendProductView(productId) {
  if (!productId || String(productId).startsWith("demo-")) return;
  postEvent("/events/view", {
    method: "POST",
    query: { productId },
  });
}


export function observeProductImpressions(container) {
  if (!("IntersectionObserver" in window)) {
    container.querySelectorAll("[data-product]").forEach((card) => {
      sendImpression(card.dataset.product, card.dataset.screen || "home", Number(card.dataset.position || 0));
    });
    return;
  }

  if (!state.impressionObserver) {
    state.impressionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const card = entry.target;
        sendImpression(card.dataset.product, card.dataset.screen || "home", Number(card.dataset.position || 0));
        state.impressionObserver.unobserve(card);
      });
    }, { threshold: 0.35 });
  }

  container.querySelectorAll("[data-product]").forEach((card) => state.impressionObserver.observe(card));
}

