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

export function getSavedLanguage() {
  const saved = localStorage.getItem(CONFIG.storageKeys.language);
  return SUPPORTED_LANGUAGES.includes(saved) ? saved : DEFAULT_LANGUAGE;
}


export function applyTranslations() {
  document.documentElement.lang = currentLanguage;
  document.title = state.currentRoute === "product" && state.selectedDetailProduct?.name
    ? `${state.selectedDetailProduct.name} - BEAUTY SKIN KOREA`
    : "BEAUTY SKIN KOREA";

  if (els.languageSelect) els.languageSelect.value = currentLanguage;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", t(element.dataset.i18nPlaceholder));
  });
  document.querySelectorAll("[data-i18n-title]").forEach((element) => {
    element.setAttribute("title", t(element.dataset.i18nTitle));
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel));
  });
}


export function rerenderLanguageSensitiveUi() {
  applyTranslations();
  renderCategories();
  syncModeBadges();
  if (state.currentRoute === "product" && state.selectedDetailProduct) {
    renderProductDetail(state.selectedDetailProduct);
  } else {
    renderProductList(els.grid, state.products, t("home.noProducts"), { screen: state.currentGridScreen });
    renderProductList(els.dealsGrid, state.todayDeals.slice(0, 8), t("home.noProducts"));
  }
  if (els.cartDrawer.classList.contains("open")) renderCart();
  if (els.favoritesDialog.open) renderFavorites();
  if (els.ordersDialog.open) renderOrders();
  if (els.notificationsDrawer.classList.contains("open")) renderNotifications();
  if (els.myReviewsDialog.open) renderMyReviews();
  updateAuthUi();
}


export function setLanguage(lang) {
  const nextLanguage = SUPPORTED_LANGUAGES.includes(lang) ? lang : DEFAULT_LANGUAGE;
  currentLanguage = nextLanguage;
  localStorage.setItem(CONFIG.storageKeys.language, nextLanguage);
  rerenderLanguageSensitiveUi();
}

