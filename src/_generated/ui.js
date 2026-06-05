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

export function openCatalog() {
  els.catalogDrawer.classList.add("open");
  els.catalogDrawer.setAttribute("aria-hidden", "false");
  els.catalogButton.setAttribute("aria-expanded", "true");
  lockBody();
}


export function closeCatalog() {
  els.catalogDrawer.classList.remove("open");
  els.catalogDrawer.setAttribute("aria-hidden", "true");
  els.catalogButton.setAttribute("aria-expanded", "false");
  unlockBodyIfNoOverlay();
}


export function lockBody() {
  document.body.classList.add("locked");
}


export function unlockBodyIfNoOverlay() {
  const hasOpenDrawer = els.cartDrawer.classList.contains("open") || els.catalogDrawer.classList.contains("open") || els.profileDrawer.classList.contains("open") || els.notificationsDrawer.classList.contains("open");
  const hasOpenDialog = [els.detailDialog, els.authDialog, els.apiDialog, els.checkoutDialog, els.ordersDialog, els.favoritesDialog, els.myReviewsDialog, els.writeReviewDialog].some((dialog) => dialog.open);
  if (!hasOpenDrawer && !hasOpenDialog) {
    document.body.classList.remove("locked");
  }
}


export function openApiDialog() {
  els.baseUrl.value = state.baseUrl;
  els.apiDialog.showModal();
  lockBody();
}


export function saveApiBaseUrl(event) {
  event.preventDefault();
  state.baseUrl = normalizeSavedBaseUrl(els.baseUrl.value || "");
  localStorage.setItem(CONFIG.storageKeys.baseUrl, state.baseUrl);
  els.apiDialog.close();
  loadHome();
}

