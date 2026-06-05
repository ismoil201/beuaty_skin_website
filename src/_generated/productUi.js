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

export function productCard(product, meta = {}) {
  const isFavorite = state.favoriteIds.has(String(product.id)) || Boolean(product.favorite);
  const screen = meta.screen || state.currentGridScreen || "home";
  const position = meta.position ?? 0;
  return `
    <article class="product-card" data-product="${escapeHtml(product.id)}" data-screen="${escapeHtml(screen)}" data-position="${escapeHtml(position)}">
      <div class="badge-row">
        ${product.discountPercent ? `<span class="badge">-${product.discountPercent}%</span>` : ""}
        ${product.todayDeal ? `<span class="badge today">Today deal</span>` : ""}
      </div>
      <button class="icon-button favorite-float ${isFavorite ? "active" : ""}" data-favorite="${escapeHtml(product.id)}" type="button" aria-label="Sevimlilar">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg>
      </button>
      <img class="product-image" src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" loading="lazy" />
      <div class="product-info">
        <div class="product-meta">
          <span class="brand-name">${escapeHtml(product.brand || product.category || "BEAUTY SKIN KOREA")}</span>
          <span class="rating">${product.ratingAvg ? `★ ${product.ratingAvg.toFixed(1)} (${product.reviewCount})` : "★ 0 (0)"}</span>
        </div>
        <h3>${escapeHtml(product.name)}</h3>
        <p>${escapeHtml(product.description || `${product.soldCount} dona sotilgan`)}</p>
        <div class="price-row">
          <span>${formatPrice(product.finalPrice)}</span>
          ${product.discountPercent ? `<span class="old-price">${formatPrice(product.originalPrice)}</span>` : ""}
        </div>
        <p class="hint">${escapeHtml(t("product.sold", { count: product.soldCount }))}</p>
      </div>
      <div class="card-actions">
        <button class="primary-button" data-add="${escapeHtml(product.id)}" type="button">${escapeHtml(t("product.addToCart"))}</button>
        <button class="icon-button" data-detail="${escapeHtml(product.id)}" type="button" aria-label="${escapeHtml(t("product.viewDetails"))}">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
        </button>
      </div>
    </article>
  `;
}


export function renderProductList(container, products, emptyMessage, meta = {}) {
  if (!products.length) {
    renderEmpty(container, emptyMessage);
    return;
  }
  container.innerHTML = products.map((product, index) => productCard(product, { ...meta, position: index })).join("");
  observeProductImpressions(container);
}


export function renderSelect(select, items, labelOf) {
  select.innerHTML = items.length
    ? items.map((item) => `<option value="${escapeHtml(item.id)}">${escapeHtml(labelOf(item))}</option>`).join("")
    : "<option value=\"\">Ma’lumot topilmadi</option>";
}


export function renderStars(rating, label = "Rating") {
  const safeRating = Math.min(5, Math.max(0, Math.round(numberOrZero(rating))));
  return `
    <span class="stars" role="img" aria-label="${escapeHtml(label)} ${safeRating} out of 5">
      ${Array.from({ length: 5 }, (_, index) => `<span class="${index < safeRating ? "filled" : ""}">★</span>`).join("")}
    </span>
  `;
}


export function reviewStats(reviews) {
  const count = reviews.length;
  const average = count ? reviews.reduce((sum, review) => sum + numberOrZero(review.rating), 0) / count : 0;
  return { count, average };
}

/* ================= PAGE RENDERERS ================= */


export function renderVariantButtons(product) {
  return `
    <div class="variant-options">
      ${product.variants.map((variant) => {
        const active = String(variant.id) === String(state.selectedVariantId);
        const disabled = Number(variant.stock || 0) <= 0;
        return `
          <button class="variant-option ${active ? "active" : ""}" data-variant="${escapeHtml(variant.id)}" ${disabled ? "disabled" : ""} type="button">
            ${escapeHtml(variant.label || `Variant #${variant.id}`)}
            ${variant.price ? ` · ${escapeHtml(formatPrice(variant.discountPrice ?? variant.price))}` : ""}
          </button>
        `;
      }).join("")}
    </div>
  `;
}


export function pickDefaultVariant(product) {
  return product.variants.find((variant) => Number(variant.stock || 0) > 0) || product.variants[0] || null;
}

/* ================= CART / ORDER RENDERERS ================= */


export function renderAddToCartLoading() {
  const detailButtons = document.querySelectorAll("[data-detail-add]");
  detailButtons.forEach((detailButton) => {
    const loading = state.addingProductIds.has(String(state.selectedDetailProduct?.id));
    detailButton.disabled = loading;
    detailButton.textContent = loading ? t("product.adding") : (detailButton.closest(".mobile-buy-bar") ? t("product.addToCart") : t("product.addToCartFull"));
  });
}


export function renderReviewCard(review) {
  return `
    <article class="review-card">
      <div class="review-head">
        <div>
          <strong>${escapeHtml(review.userName)}</strong>
          <p class="hint">${formatDateTime(review.createdAt)}</p>
        </div>
        ${renderStars(review.rating)}
      </div>
      <p>${escapeHtml(review.content || t("reviews.noText"))}</p>
      ${review.imageUrls.length ? `<div class="review-images">${review.imageUrls.slice(0, 5).map((url) => `<img src="${escapeHtml(url)}" alt="Review image" loading="lazy" />`).join("")}</div>` : ""}
    </article>
  `;
}


export function findKnownProduct(productId) {
  return [...state.products, ...state.todayDeals, ...state.favoriteProducts, state.selectedDetailProduct]
    .filter(Boolean)
    .find((product) => String(product.id) === String(productId));
}


export function readJsonStorage(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key) || "null") || fallback;
  } catch {
    return fallback;
  }
}

/* ================= INIT ================= */

