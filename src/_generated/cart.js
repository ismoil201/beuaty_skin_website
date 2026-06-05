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

export async function addToCart(productId, variantId, quantity) {
  if (!isLoggedIn()) {
    showLoginRequired();
    return;
  }

  let selectedVariantId = variantId;
  const safeQuantity = Math.max(1, Number(quantity || 1));

  if (!selectedVariantId) {
    const response = await apiFetch(`/api/products/${productId}`, { showError: true });
    const product = normalizeProduct(response || {});
    const inStockVariants = product.variants.filter((variant) => Number(variant.stock || 0) > 0);
    if (inStockVariants.length === 1) {
      selectedVariantId = inStockVariants[0].id;
    } else if (product.variants.length > 1) {
      navigateToProduct(product.id);
      return;
    } else {
      selectedVariantId = pickDefaultVariant(product)?.id;
    }
  }

  if (!selectedVariantId) {
    showToast(t("product.variantUnavailable"));
    return;
  }

  state.addingProductIds.add(String(productId));
  renderAddToCartLoading(true);
  const result = await apiFetch("/api/cart", {
    method: "POST",
    body: JSON.stringify({ variantId: Number(selectedVariantId), quantity: safeQuantity }),
    requireAuth: true,
  });
  state.addingProductIds.delete(String(productId));
  renderAddToCartLoading(false);

  if (result !== null) {
    showToast(t("cart.added"));
    await loadCart();
  }
}


export async function loadCart() {
  if (!isLoggedIn()) {
    clearCartState();
    renderCart();
    return;
  }

  state.cartLoading = true;
  state.cartError = "";
  renderCart();
  const response = await apiFetch("/api/cart", { requireAuth: true, showError: false });
  state.cartLoading = false;

  if (response === null) {
    if (state.lastApiError.includes("Session expired") || state.lastApiError === "Please login to continue") {
      clearCartState();
      return;
    }
    state.cartError = state.lastApiError || "Cart could not be loaded.";
    renderCart();
    return;
  }

  setCartItems(getPageContent(response).map(normalizeCartItem));
  renderCart();
}


export function renderCart() {
  els.cartCount.textContent = state.cartCount;
  els.cartSummary.textContent = t("orders.items", { count: state.cartCount });
  els.cartTotal.textContent = formatPrice(state.cartTotal);

  if (state.cartLoading) {
    els.cartItems.innerHTML = "<div class=\"cart-loading\"><div class=\"skeleton-card\"></div><div class=\"skeleton-card\"></div></div>";
    els.checkoutButton.disabled = true;
    return;
  }

  if (state.cartError) {
    els.cartItems.innerHTML = `
      <div class="cart-empty">
        <strong>${escapeHtml(t("cart.unavailable"))}</strong>
        <p>${escapeHtml(state.cartError)}</p>
        <button class="secondary-button" data-cart-retry type="button">${escapeHtml(t("common.tryAgain"))}</button>
      </div>
    `;
    els.checkoutButton.disabled = true;
    return;
  }

  els.checkoutButton.disabled = !state.cartItems.length;
  els.cartItems.innerHTML = state.cartItems.length
    ? state.cartItems.map((item) => `
      <article class="cart-item ${state.cartUpdatingIds.has(String(item.id)) ? "loading" : ""}">
        <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}" />
        <div>
          <h3>${escapeHtml(item.name)}</h3>
          <p class="hint">${escapeHtml(item.brand || "BEAUTY SKIN KOREA")} ${item.variantLabel ? `· ${escapeHtml(item.variantLabel)}` : ""}</p>
          <p>${formatPrice(item.unitPrice)} · ${escapeHtml(t("common.total"))}: ${formatPrice(item.lineTotal)}</p>
          <div class="cart-stepper">
            <button data-cart-qty="minus" data-cart-id="${escapeHtml(item.id)}" ${item.quantity <= 1 ? "disabled" : ""} type="button">-</button>
            <span>${item.quantity}</span>
            <button data-cart-qty="plus" data-cart-id="${escapeHtml(item.id)}" type="button">+</button>
          </div>
        </div>
        <button class="icon-button" data-remove="${escapeHtml(item.id)}" type="button" aria-label="${escapeHtml(t("cart.remove"))}">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18M8 6V4h8v2m-1 5v6m-6-6v6m-2-11 1 16h8l1-16"/></svg>
        </button>
      </article>
    `).join("")
    : `
      <div class="cart-empty">
        <strong>${escapeHtml(t("cart.empty"))}</strong>
        <p>Add products you like and they will appear here.</p>
        <button class="primary-button" data-start-shopping type="button">${escapeHtml(t("home.startShopping"))}</button>
      </div>
    `;
}


export async function removeCartItem(cartItemId) {
  state.cartUpdatingIds.add(String(cartItemId));
  renderCart();
  const result = await apiFetch(`/api/cart/${cartItemId}`, {
    method: "DELETE",
    requireAuth: true,
  });
  state.cartUpdatingIds.delete(String(cartItemId));

  if (result !== null) {
    showToast(t("cart.itemRemoved"));
    await loadCart();
  } else {
    renderCart();
  }
}


export async function updateCartQuantity(cartItemId, quantity) {
  const nextQuantity = Math.max(1, Number(quantity || 1));
  state.cartUpdatingIds.add(String(cartItemId));
  renderCart();
  const result = await apiFetch(`/api/cart/${cartItemId}`, {
    method: "PUT",
    requireAuth: true,
    body: JSON.stringify({ quantity: nextQuantity }),
  });
  state.cartUpdatingIds.delete(String(cartItemId));

  if (result !== null) {
    await loadCart();
  } else {
    renderCart();
  }
}


export function openCart() {
  if (!isLoggedIn()) {
    showLoginRequired();
    return;
  }
  els.cartDrawer.classList.add("open");
  els.cartDrawer.setAttribute("aria-hidden", "false");
  lockBody();
  loadCart();
}


export function closeCart() {
  els.cartDrawer.classList.remove("open");
  els.cartDrawer.setAttribute("aria-hidden", "true");
  unlockBodyIfNoOverlay();
}

