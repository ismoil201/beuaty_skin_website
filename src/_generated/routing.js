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

export async function handleRoute() {
  const hash = window.location.hash || "#/";
  const match = hash.match(/^#\/product\/([^/?#]+)/);

  if (match) {
    showProductView();
    await loadProductDetailPage(decodeURIComponent(match[1]));
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  showHomeView();
}


export async function renderSearchResults(query) {
  const trimmed = query.trim();
  state.currentSearchQuery = trimmed;
  state.currentGridScreen = trimmed ? "search" : "home";
  if (state.currentRoute === "product") {
    window.location.hash = "#/";
    showHomeView();
  }

  if (!trimmed) {
    state.selectedCategory = "ALL";
    renderCategories();
    els.title.textContent = t("home.popular");
    await loadProducts();
    return;
  }

  els.title.textContent = `"${trimmed}" qidiruvi`;
  els.status.textContent = t("home.loading");
  renderSkeleton(els.grid, 10);
  const response = await apiFetch("/api/products/search", {
    query: { q: trimmed, page: 0, size: CONFIG.defaultPageSize },
    showError: false,
  });
  const products = getPageContent(response).map(normalizeProduct);
  state.products = products;
  syncProductFavorites();
  renderProductList(els.grid, state.products, t("home.noProducts"), { screen: "search" });
  els.status.textContent = "";
}


export async function renderCategoryProducts(category) {
  if (state.currentRoute === "product") {
    window.location.hash = "#/";
    showHomeView();
  }
  state.selectedCategory = category;
  state.currentGridScreen = category === "ALL" ? "home" : "category";
  state.currentSearchQuery = "";
  renderCategories();

  if (category === "ALL") {
    els.title.textContent = t("home.popular");
    await loadProducts();
    return;
  }

  els.title.textContent = categoryLabel(category);
  els.status.textContent = t("home.loading");
  renderSkeleton(els.grid, 10);
  const response = await apiFetch("/api/products/category", {
    query: { category, page: 0, size: CONFIG.defaultPageSize },
    showError: false,
  });
  const products = getPageContent(response).map(normalizeProduct);
  state.products = products;
  syncProductFavorites();
  renderProductList(els.grid, state.products, t("home.noProducts"), { screen: "category" });
  els.status.textContent = "";
}


export function navigateToProduct(productId) {
  if (!productId) return;
  const nextHash = `#/product/${encodeURIComponent(productId)}`;
  if (window.location.hash === nextHash) {
    handleRoute();
  } else {
    window.location.hash = nextHash;
  }
}


export async function openProductDetail(productId) {
  navigateToProduct(productId);
}

