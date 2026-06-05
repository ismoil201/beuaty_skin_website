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

export async function loadProductDetailPage(productId) {
  state.currentRoute = "product";
  state.detailLoading = true;
  state.detailError = "";
  state.selectedDetailProduct = null;
  state.recommendedProducts = [];
  state.recommendedSimilar = [];
  state.recommendedOthers = [];
  state.recommendationsError = "";
  renderDetailLoading(true);
  const response = await apiFetch(`/api/products/${productId}`, { showError: true });
  const product = normalizeProduct(response || state.products.find((item) => String(item.id) === String(productId)) || {});
  state.detailLoading = false;

  if (!product.id) {
    state.detailError = state.lastApiError || "Mahsulot topilmadi.";
    renderProductDetailError();
    return;
  }

  product.favorite = state.favoriteIds.has(String(product.id)) || product.favorite;
  state.selectedDetailProduct = product;
  state.selectedVariantId = pickDefaultVariant(product)?.id || null;
  state.selectedQuantity = 1;
  document.title = `${product.name} - BEAUTY SKIN KOREA`;
  addRecentProduct(product.id);
  sendProductView(product.id);
  renderProductDetail(product);
  loadProductReviews(product.id);
  loadRecommendedProducts(product);
}


export function renderDetailLoading(pageMode = false) {
  const target = pageMode ? els.productDetailPageContent : els.detailContent;
  target.innerHTML = `
    ${pageMode ? "<div class=\"breadcrumbs\"><button data-route-home type=\"button\">Home</button><span>/</span><span>Loading</span></div>" : `
      <div class="drawer-head">
        <h2>Mahsulot yuklanmoqda</h2>
        <button class="icon-button" data-close-detail type="button" aria-label="Yopish">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>
        </button>
      </div>
    `}
    <div class="detail-layout">
      <div class="skeleton-card"></div>
      <div>
        <div class="skeleton-card"></div>
      </div>
    </div>
  `;
}


export function renderProductDetailError() {
  els.productDetailPageContent.innerHTML = `
    <div class="detail-error-page">
      <strong>${escapeHtml(t("product.notFound"))}</strong>
      <p>${escapeHtml(state.detailError || "Mahsulot topilmadi.")}</p>
      <button class="primary-button" data-route-home type="button">${escapeHtml(t("product.backToShopping"))}</button>
    </div>
  `;
}


export function renderProductDetail(product) {
  const selectedVariant = product.variants.find((variant) => String(variant.id) === String(state.selectedVariantId)) || null;
  const gallery = [...product.images, ...product.detailImages].filter(Boolean);
  const currentPrice = selectedVariant?.discountPrice ?? selectedVariant?.price ?? product.finalPrice;
  const originalPrice = selectedVariant?.price ?? product.originalPrice;
  const variantStock = selectedVariant?.stock ?? product.stock;
  const isFavorite = state.favoriteIds.has(String(product.id)) || Boolean(product.favorite);
  const pageMode = state.currentRoute === "product";
  const target = pageMode ? els.productDetailPageContent : els.detailContent;

  target.innerHTML = `
    ${pageMode ? `
      <div class="breadcrumbs">
        <button data-route-home type="button">${escapeHtml(t("product.home") || t("home.all"))}</button>
        <span>/</span>
        <button data-category="${escapeHtml(product.category || "ALL")}" type="button">${escapeHtml(product.category ? categoryLabel(product.category) : t("header.catalog"))}</button>
        <span>/</span>
        <span>${escapeHtml(shortText(product.name, 42))}</span>
      </div>
    ` : `
      <div class="drawer-head">
        <h2>Mahsulot tafsiloti</h2>
        <button class="icon-button" data-close-detail type="button" aria-label="Yopish">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>
        </button>
      </div>
    `}
    <div class="detail-layout">
      <div class="detail-gallery">
        <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" />
        ${gallery.length > 1 ? `<div class="detail-thumbs">${gallery.slice(0, 8).map((image) => `<img src="${escapeHtml(image)}" alt="${escapeHtml(product.name)}" />`).join("")}</div>` : ""}
      </div>
      <div class="detail-info">
        <p class="hint">${escapeHtml(product.brand || product.category)} · ★ ${product.ratingAvg.toFixed(1)} (${product.reviewCount}) · ${product.soldCount} dona sotilgan</p>
        <h2 class="detail-title">${escapeHtml(product.name)}</h2>
        <h3>${formatPrice(currentPrice)}</h3>
        ${originalPrice > currentPrice ? `<p class="old-price">${formatPrice(originalPrice)}</p>` : ""}
        <button class="secondary-button detail-favorite ${isFavorite ? "active" : ""}" data-detail-favorite="${escapeHtml(product.id)}" type="button">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg>
          ${escapeHtml(isFavorite ? t("product.saved") : t("product.save"))}
        </button>
        ${product.variants.length ? renderVariantButtons(product) : `<p class="hint">${escapeHtml(t("product.variantUnavailable"))}</p>`}
        <p class="hint">${escapeHtml(t("product.stock", { count: variantStock ?? 0 }))}</p>
        <div class="quantity-row">
          <button class="secondary-button" data-qty="minus" type="button">-</button>
          <input id="quantityInput" value="${state.selectedQuantity}" inputmode="numeric" />
          <button class="secondary-button" data-qty="plus" type="button">+</button>
        </div>
        <button class="primary-button full" data-detail-add type="button">${escapeHtml(t("product.addToCartFull"))}</button>
        <div class="delivery-info">
          <span>${escapeHtml(t("product.delivery"))}</span>
          <span>${escapeHtml(t("product.secure"))}</span>
          <span>${escapeHtml(t("product.original"))}</span>
        </div>
        <div class="detail-tabs">
          <section><strong>${escapeHtml(t("product.description"))}</strong><p class="hint">${escapeHtml(product.description || t("common.unavailable"))}</p></section>
          ${product.detailImages.length ? `<section><strong>${escapeHtml(t("product.detailImages"))}</strong><div class="detail-image-stack">${product.detailImages.map((image) => `<img src="${escapeHtml(image)}" alt="${escapeHtml(product.name)} detail" loading="lazy" />`).join("")}</div></section>` : ""}
          <section><strong>${escapeHtml(t("product.details"))}</strong><p class="hint">${escapeHtml(t("home.categories"))}: ${escapeHtml(product.category ? categoryLabel(product.category) : "-")} · Brand: ${escapeHtml(product.brand || "-")}</p></section>
          <section><strong>${escapeHtml(t("product.reviews"))}</strong>${renderProductReviews(product.id)}</section>
        </div>
      </div>
    </div>
    ${pageMode ? renderRecommendations() : ""}
    ${pageMode ? `
      <div class="mobile-buy-bar">
        <strong>${formatPrice(currentPrice)}</strong>
        <button class="primary-button" data-detail-add type="button">${escapeHtml(t("product.addToCart"))}</button>
      </div>
    ` : ""}
  `;
  observeProductImpressions(target);
}


export async function loadRecommendedProducts(product) {
  state.recommendationsLoading = true;
  state.recommendationsError = "";
  renderProductDetail(product);

  const recommendResponse = await apiFetch(`/api/products/${product.id}/recommend`, {
    query: { similar: 12, others: 24, seed: state.sessionId },
    showError: false,
  });

  const similar = getPageContent(recommendResponse?.similar || [])
    .map(normalizeProduct)
    .filter((item) => String(item.id) !== String(product.id));
  const others = getPageContent(recommendResponse?.others || [])
    .map(normalizeProduct)
    .filter((item) => String(item.id) !== String(product.id));

  if (similar.length || others.length) {
    state.recommendationsLoading = false;
    state.recommendedProducts = [];
    state.recommendedSimilar = similar.slice(0, 12);
    state.recommendedOthers = others.slice(0, 12);
    renderProductDetail(state.selectedDetailProduct);
    return;
  }

  let response = null;
  if (product.category) {
    response = await apiFetch("/api/products/category", {
      query: { category: product.category, page: 0, size: 12 },
      showError: false,
    });
  }

  let products = getPageContent(response).map(normalizeProduct).filter((item) => String(item.id) !== String(product.id));

  if (!products.length) {
    response = await apiFetch("/api/products", {
      query: { page: 0, size: 12 },
      showError: false,
    });
    products = getPageContent(response).map(normalizeProduct).filter((item) => String(item.id) !== String(product.id));
  }

  state.recommendationsLoading = false;
  if (!products.length && response === null) {
    state.recommendationsError = state.lastApiError || "Recommendations could not be loaded.";
  }
  state.recommendedProducts = products.slice(0, 12).map((item) => ({
    ...item,
    favorite: state.favoriteIds.has(String(item.id)) || item.favorite,
  }));
  state.recommendedSimilar = [];
  state.recommendedOthers = [];
  if (state.selectedDetailProduct?.id !== undefined && String(state.selectedDetailProduct.id) === String(product.id)) {
    renderProductDetail(state.selectedDetailProduct);
  }
}


export function renderRecommendations() {
  if (state.recommendationsLoading) {
    return `
      <section class="recommended-section">
        <div class="section-head"><div><p class="eyebrow">${escapeHtml(t("home.recommended"))}</p><h2>${escapeHtml(t("home.recommended"))}</h2></div></div>
        <div class="recommended-grid product-grid">
          <div class="skeleton-card"></div><div class="skeleton-card"></div><div class="skeleton-card"></div><div class="skeleton-card"></div>
        </div>
      </section>
    `;
  }

  if (state.recommendationsError) {
    return `
      <section class="recommended-section">
        <div class="detail-error-page compact">
          <strong>Recommendations unavailable</strong>
          <p>${escapeHtml(state.recommendationsError)}</p>
        </div>
      </section>
    `;
  }

  const apiSections = [
    [t("home.similar"), state.recommendedSimilar || [], "recommendations"],
    [t("home.others"), state.recommendedOthers || [], "recommendations"],
  ].filter(([, products]) => products.length);

  if (apiSections.length) {
    return apiSections.map(([title, products, screen]) => `
      <section class="recommended-section">
        <div class="section-head">
          <div>
          <p class="eyebrow">${escapeHtml(t("home.recommended"))}</p>
            <h2>${escapeHtml(title)}</h2>
          </div>
        </div>
        <div class="recommended-grid product-grid">
          ${products.map((product, index) => productCard(product, { screen, position: index })).join("")}
        </div>
      </section>
    `).join("");
  }

  if (!state.recommendedProducts.length) return "";

  return `
    <section class="recommended-section">
      <div class="section-head">
        <div>
          <p class="eyebrow">${escapeHtml(t("home.recommended"))}</p>
          <h2>${escapeHtml(t("home.recommended"))}</h2>
        </div>
      </div>
      <div class="recommended-grid product-grid">
        ${state.recommendedProducts.map(productCard).join("")}
      </div>
    </section>
  `;
}


export async function loadProductReviews(productId) {
  if (!productId) return;
  const key = String(productId);
  state.productReviewsLoading[key] = true;
  state.productReviewsError[key] = "";
  if (state.selectedDetailProduct?.id !== undefined && String(state.selectedDetailProduct.id) === key) {
    renderProductDetail(state.selectedDetailProduct);
  }

  const response = await apiFetch(`/api/reviews/product/${productId}`, { showError: false });
  state.productReviewsLoading[key] = false;

  if (response === null) {
    state.productReviewsError[key] = state.lastApiError || "Reviews could not be loaded.";
  } else {
    state.productReviewsByProductId[key] = getPageContent(response).map(normalizeReview);
  }

  if (state.selectedDetailProduct?.id !== undefined && String(state.selectedDetailProduct.id) === key) {
    renderProductDetail(state.selectedDetailProduct);
  }
}


export function renderProductReviews(productId) {
  const key = String(productId);
  const reviews = state.productReviewsByProductId[key] || [];
  const loading = state.productReviewsLoading[key];
  const error = state.productReviewsError[key];

  if (loading) {
    return "<div class=\"reviews-loading\"><div class=\"skeleton-card\"></div></div>";
  }

  if (error) {
    return `
      <div class="reviews-inline-error">
        <p>${escapeHtml(error)}</p>
        <button class="secondary-button" data-reviews-retry="${escapeHtml(productId)}" type="button">Retry</button>
      </div>
    `;
  }

  if (!reviews.length) {
    return `<div class="reviews-empty"><strong>${escapeHtml(t("reviews.none"))}</strong><p class="hint">${escapeHtml(t("reviews.none"))}</p></div>`;
  }

  const stats = reviewStats(reviews);
  return `
    <div class="review-summary">
      <div>
        <strong>${stats.average.toFixed(1)}</strong>
        ${renderStars(stats.average, "Average rating")}
      </div>
      <p class="hint">${stats.count} ${escapeHtml(t("product.reviews"))}</p>
    </div>
    <div class="review-list">
      ${reviews.map(renderReviewCard).join("")}
    </div>
  `;
}

