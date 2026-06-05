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

export async function openFavorites() {
  if (!isLoggedIn()) {
    showLoginRequired();
    return;
  }

  els.favoritesDialog.showModal();
  lockBody();
  await loadFavorites({ render: true });
}


export async function loadFavorites(options = {}) {
  const { render = false } = options;
  if (!isLoggedIn()) {
    clearFavoritesState();
    return;
  }

  state.favoritesLoading = true;
  state.favoritesError = "";
  if (render) renderFavorites();

  const response = await apiFetch("/api/favorites", { requireAuth: true, showError: false });
  state.favoritesLoading = false;

  if (response === null) {
    if (state.lastApiError.includes("Session expired") || state.lastApiError === "Please login to continue") {
      clearFavoritesState();
      if (els.favoritesDialog.open) els.favoritesDialog.close();
      return;
    }
    state.favoritesError = state.lastApiError || "Favorites could not be loaded.";
    updateFavoritesUi();
    if (render) renderFavorites();
    return;
  }

  setFavoriteProducts(getPageContent(response).map(normalizeFavoriteItem));
  if (state.products.length) renderProductList(els.grid, state.products, "Mahsulot topilmadi.");
  if (state.todayDeals.length) renderProductList(els.dealsGrid, state.todayDeals.slice(0, 8), "Bugungi takliflar topilmadi.");
  if (render || els.favoritesDialog.open) renderFavorites();
}


export function updateFavoritesUi() {
  els.favoritesCount.textContent = state.favoritesCount;
  els.favoritesSummary.textContent = `${state.favoritesCount} product${state.favoritesCount === 1 ? "" : "s"}`;
}


export function renderFavorites() {
  updateFavoritesUi();

  if (state.favoritesLoading) {
    els.favoritesContent.innerHTML = `
      <div class="favorites-grid">
        <div class="skeleton-card"></div>
        <div class="skeleton-card"></div>
        <div class="skeleton-card"></div>
      </div>
    `;
    return;
  }

  if (state.favoritesError) {
    els.favoritesContent.innerHTML = `
      <div class="favorites-empty">
        <strong>Favorites unavailable</strong>
        <p>${escapeHtml(state.favoritesError)}</p>
        <button class="secondary-button" data-favorites-retry type="button">Retry</button>
      </div>
    `;
    return;
  }

  if (!state.favoriteProducts.length) {
    els.favoritesContent.innerHTML = `
      <div class="favorites-empty">
        <strong>No favorite products yet</strong>
        <p>Save products with the heart button and they will appear here.</p>
        <button class="primary-button" data-favorites-start type="button">Start shopping</button>
      </div>
    `;
    return;
  }

  els.favoritesContent.innerHTML = `
    <div class="favorites-grid product-grid">
      ${state.favoriteProducts.map((product) => productCard({ ...product, favorite: true })).join("")}
    </div>
  `;
}


export function closeFavorites() {
  els.favoritesDialog.close();
  unlockBodyIfNoOverlay();
}


export function handleFavoritesClick(event) {
  const retry = event.target.closest("[data-favorites-retry]");
  const start = event.target.closest("[data-favorites-start]");

  if (retry) {
    loadFavorites({ render: true });
    return;
  }

  if (start) {
    closeFavorites();
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  handleProductGridClick(event);
}

/* ================= NOTIFICATIONS RENDERERS ================= */


export async function toggleFavorite(productId) {
  if (!isLoggedIn()) {
    showLoginRequired();
    return;
  }

  const wasFavorite = state.favoriteIds.has(String(productId));
  const response = await apiFetch(`/api/favorites/${productId}/toggle`, {
    method: "POST",
    requireAuth: true,
  });

  if (response === null) return;

  const isFavorite = typeof response === "object" && "favorite" in response ? Boolean(response.favorite) : !wasFavorite;
  const existingProduct = findKnownProduct(productId);

  if (isFavorite) {
    const product = existingProduct ? { ...existingProduct, favorite: true } : null;
    if (product && !state.favoriteProducts.some((item) => String(item.id) === String(productId))) {
      state.favoriteProducts = [product, ...state.favoriteProducts];
    }
  } else {
    state.favoriteProducts = state.favoriteProducts.filter((product) => String(product.id) !== String(productId));
  }

  state.favoriteIds = new Set(state.favoriteProducts.map((product) => String(product.id)));
  state.favoritesCount = state.favoriteProducts.length;
  syncProductFavorites();
  updateFavoritesUi();
  if (state.products.length) renderProductList(els.grid, state.products, "Mahsulot topilmadi.");
  if (state.todayDeals.length) renderProductList(els.dealsGrid, state.todayDeals.slice(0, 8), "Bugungi takliflar topilmadi.");
  if (state.selectedDetailProduct?.id !== undefined && String(state.selectedDetailProduct.id) === String(productId)) {
    renderProductDetail(state.selectedDetailProduct);
  }
  if (els.favoritesDialog.open) renderFavorites();
  showToast(isFavorite ? "Added to favorites" : "Removed from favorites");
  if (isFavorite && !existingProduct) await loadFavorites({ render: els.favoritesDialog.open });
}

