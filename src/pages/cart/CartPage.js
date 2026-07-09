import { appStore, productStore, cartStore } from "../../stores/index.js";
import { els } from "../../utils/dom.js";
import { escapeHtml } from "../../utils/html.js";
import { t } from "../../i18n/index.js";
import { formatPrice } from "../../utils/format.js";
import { CartService } from "../../services/CartService.js";
import { initLazyImages } from "../../utils/imageLoader.js";
import { renderCartExtras, FREE_SHIPPING_THRESHOLD } from "../../utils/phase2Ui.js";
import { CartItem as CartItemView } from "../../components/cart/CartItem.js";
import { CartSummary } from "../../components/cart/CartSummary.js";
import { CartEmpty, CartError } from "../../components/cart/CartEmpty.js";
import { productCard, renderProductList } from "../shared/productGrid.js";

function getCartSelectedIds() {
  if (!cartStore.cartSelectedIds) cartStore.cartSelectedIds = new Set();
  return cartStore.cartSelectedIds;
}

function syncCartSelection() {
  const { selectedIds, knownItemIds } = CartService.syncSelection(
    cartStore.cartItems,
    getCartSelectedIds(),
    cartStore.cartKnownItemIds,
  );
  cartStore.cartSelectedIds = selectedIds;
  cartStore.cartKnownItemIds = knownItemIds;
}

function applyCartCheckboxUi() {
  const selectAll = els.cartItems?.querySelector("[data-cart-select-all]");
  if (!selectAll) return;

  const selectedCount = getSelectedCartItems().length;
  const totalCount = cartStore.cartItems.length;
  const allSelected = totalCount > 0 && selectedCount === totalCount;
  const someSelected = selectedCount > 0 && selectedCount < totalCount;

  selectAll.checked = allSelected;
  selectAll.indeterminate = someSelected;

  const ui = selectAll.closest(".app-cart-check")?.querySelector(".app-cart-check-ui")
    || selectAll.nextElementSibling;
  if (ui?.classList.contains("app-cart-check-ui")) {
    ui.classList.toggle("is-indeterminate", someSelected);
    ui.classList.toggle("is-checked", allSelected);
  }
}

function getSelectedCartItems() {
  syncCartSelection();
  return CartService.getSelectedItems(cartStore.cartItems, getCartSelectedIds());
}

function getCartTotals() {
  return CartService.calculateTotals(cartStore.cartItems, getCartSelectedIds(), cartStore.cartCouponDiscount || 0);
}

function renderCartItemRow(item) {
  return CartItemView({
    item,
    selected: getCartSelectedIds().has(String(item.id)),
    loading: cartStore.cartUpdatingIds.has(String(item.id)),
    labels: {
      selectItem: t("cart.selectItem"),
      remove: t("cart.remove"),
      shipsToday: t("cart.shipsToday"),
    },
  });
}

function renderCartStickyProgress(subtotal) {
  const progressEl = els.cartStickyProgress;
  if (!progressEl) return;
  const progress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);
  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  progressEl.innerHTML = subtotal >= FREE_SHIPPING_THRESHOLD ? "" : `
    <div class="app-cart-free-banner">
      <span>${escapeHtml(t("cart.freeToHome"))}</span>
      <div class="app-cart-free-bar"><div style="width:${progress}%"></div></div>
      <span class="hint">${escapeHtml(t("cart.freeShippingRemaining", { amount: formatPrice(remaining) }))}</span>
    </div>
  `;
}

function renderAddToCartLoading() {
  if (productStore.products.length) {
    renderProductList(els.grid, productStore.products, t("home.noProducts"), { screen: appStore.currentGridScreen });
  }
}

function renderCart() {
  syncCartSelection();
  const totals = getCartTotals();
  els.cartCount.textContent = cartStore.cartCount;
  els.cartSummary.textContent = t("orders.items", { count: totals.itemCount });
  els.cartTotal.textContent = formatPrice(totals.subtotal);

  if (cartStore.cartLoading) {
    els.cartItems.innerHTML = "<div class=\"cart-loading app-cart-loading\"><div class=\"skeleton-card\"></div><div class=\"skeleton-card\"></div></div>";
    els.checkoutButton.disabled = true;
    if (els.cartExtras) els.cartExtras.innerHTML = "";
    renderCartStickyProgress(0);
    return;
  }

  if (cartStore.cartError) {
    els.cartItems.innerHTML = CartError({
      title: t("cart.unavailable"),
      message: cartStore.cartError,
      retryLabel: t("common.tryAgain"),
    });
    els.checkoutButton.disabled = true;
    if (els.cartExtras) els.cartExtras.innerHTML = "";
    renderCartStickyProgress(0);
    return;
  }

  els.checkoutButton.disabled = !totals.items.length;

  const recommendedHtml = productStore.products.slice(0, 8).map((product, index) => productCard(product, { screen: "cart-cross", position: index })).join("");
  const recentHtml = (productStore.recentlyViewed || []).slice(0, 6).map((product, index) => productCard(product, { screen: "cart-recent", position: index })).join("");
  renderCartExtras(t, { recommendedHtml, recentHtml, subtotal: totals.subtotal });

  if (!cartStore.cartItems.length) {
    els.cartItems.innerHTML = CartEmpty({
      title: t("cart.empty"),
      hint: t("cart.emptyHint"),
      actionLabel: t("home.startShopping"),
    });
    renderCartStickyProgress(0);
    return;
  }

  const selectedCount = totals.uniqueCount;
  const totalCount = cartStore.cartItems.length;
  const allSelected = totalCount > 0 && selectedCount === totalCount;
  const someSelected = selectedCount > 0 && selectedCount < totalCount;

  els.cartItems.innerHTML = `
    <div class="app-cart-delivery-card">
      <strong>${escapeHtml(t("cart.deliveryCourier"))}</strong>
      <span>${escapeHtml(t("cart.deliveryEta"))}</span>
    </div>
    <div class="app-cart-toolbar">
      <label class="app-cart-select-all">
        <span class="app-cart-check app-cart-check--toolbar">
          <input
            type="checkbox"
            data-cart-select-all
            ${allSelected ? "checked" : ""}
            aria-label="${escapeHtml(t("cart.selectAll", { selected: selectedCount, total: totalCount }))}"
          />
          <span class="app-cart-check-ui ${allSelected ? "is-checked" : ""} ${someSelected ? "is-indeterminate" : ""}" aria-hidden="true"></span>
        </span>
        <span class="app-cart-select-all-text">${escapeHtml(t("cart.selectAll", { selected: selectedCount, total: totalCount }))}</span>
      </label>
      <button class="app-cart-delete-selected" data-cart-delete-selected type="button" ${selectedCount ? "" : "disabled"}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18M8 6V4h8v2m-1 5v6m-6-6v6m-2-11 1 16h8l1-16"/></svg>
        ${escapeHtml(t("cart.deleteSelected"))}
      </button>
    </div>
    <div class="app-cart-items">
      ${cartStore.cartItems.map((item) => renderCartItemRow(item)).join("")}
    </div>
    ${CartSummary({
      totals,
      labels: {
        yourOrder: t("cart.yourOrder"),
        goodsCount: t("cart.goodsCount", { count: totals.itemCount }),
        discount: t("cart.discount"),
        deliveryCost: t("cart.deliveryCost"),
        freeDelivery: t("cart.freeDelivery"),
        products: t("cart.products"),
        total: t("common.total"),
      },
    })}
  `;

  applyCartCheckboxUi();
  renderCartStickyProgress(totals.subtotal);
  initLazyImages(els.cartItems);
  initLazyImages(els.cartExtras);
}

export const CartPage = {
  render: renderCart,
  renderCart,
  renderCartItemRow,
  renderCartStickyProgress,
  renderAddToCartLoading,
  getSelectedCartItems,
  getCartTotals,
  getCartSelectedIds,
  syncCartSelection,
  applyCartCheckboxUi,
};
