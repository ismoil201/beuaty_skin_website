import { cartStore } from "../stores/index.js";
import { setCartItems, clearCartState } from "../store/cartStore.js";
import { CartService } from "../services/CartService.js";
import { ProductService } from "../services/ProductService.js";
import { CartPage } from "../pages/cart/CartPage.js";
import { ProductDetailPage } from "../pages/product/ProductDetailPage.js";
import { flyToCart } from "../utils/motion.js";
import { showToast } from "../utils/toast.js";
import { t } from "../i18n/index.js";
import { navigateToProduct } from "../runtime/navigation.js";
import { AuthService } from "../services/AuthService.js";
import { AnalyticsService } from "../services/AnalyticsService.js";
import { requireAuth } from "../auth/requireAuth.js";
import { PENDING_ACTION_TYPES } from "../auth/pendingActionManager.js";

export const CartController = {
  async load() {
    if (!AuthService.isLoggedIn()) {
      clearCartState();
      CartPage.render();
      return;
    }

    cartStore.cartLoading = true;
    cartStore.cartError = "";
    CartPage.render();
    const result = await CartService.loadCart();
    cartStore.cartLoading = false;

    if (!result.success) {
      if (result.sessionExpired) {
        clearCartState();
        return;
      }
      cartStore.cartError = result.error;
      CartPage.render();
      return;
    }

    setCartItems(result.items);
    CartPage.render();
  },

  async add(productId, variantId, quantity) {
    if (!requireAuth({
      type: PENDING_ACTION_TYPES.ADD_TO_CART,
      productId,
      variantId,
      quantity: Math.max(1, Number(quantity || 1)),
    })) {
      return;
    }

    const safeQuantity = Math.max(1, Number(quantity || 1));
    const resolved = await ProductService.resolveAddToCartVariant(productId, variantId);

    if (resolved.navigateToProduct) {
      navigateToProduct(resolved.product.id);
      return;
    }

    const selectedVariantId = resolved.variantId;
    if (!selectedVariantId) {
      showToast(t("product.variantUnavailable"), "warning");
      return;
    }

    const productKey = String(productId);
    if (cartStore.addingProductIds.has(productKey)) {
      return;
    }

    cartStore.addingProductIds.add(productKey);
    ProductDetailPage.renderAddToCartLoading(true);
    const result = await CartService.addItem(selectedVariantId, safeQuantity);
    cartStore.addingProductIds.delete(productKey);
    ProductDetailPage.renderAddToCartLoading(false);

    if (result !== null) {
      AnalyticsService.sendAddToCart(productId);
      const card = document.querySelector(`[data-product="${productId}"] .product-image`);
      if (card) flyToCart(card.src, card.getBoundingClientRect());
      showToast(t("cart.added"), "success");
      await CartController.load();
    }
  },

  /**
   * Buy now: add to cart then open checkout. Auth required at purchase start.
   */
  async buyNow(productId, variantId, quantity) {
    if (!requireAuth({
      type: PENDING_ACTION_TYPES.BUY_NOW,
      productId,
      variantId,
      quantity: Math.max(1, Number(quantity || 1)),
    })) {
      return;
    }

    const safeQuantity = Math.max(1, Number(quantity || 1));
    const resolved = await ProductService.resolveAddToCartVariant(productId, variantId);

    if (resolved.navigateToProduct) {
      navigateToProduct(resolved.product.id);
      return;
    }

    const selectedVariantId = resolved.variantId;
    if (!selectedVariantId) {
      showToast(t("product.variantUnavailable"), "warning");
      return;
    }

    const productKey = String(productId);
    if (cartStore.addingProductIds.has(productKey)) {
      return;
    }

    cartStore.addingProductIds.add(productKey);
    ProductDetailPage.renderAddToCartLoading(true);
    const result = await CartService.addItem(selectedVariantId, safeQuantity);
    cartStore.addingProductIds.delete(productKey);
    ProductDetailPage.renderAddToCartLoading(false);

    if (result === null) return;

    AnalyticsService.sendAddToCart(productId);
    showToast(t("cart.added"), "success");
    await CartController.load();

    const { CheckoutController } = await import("./CheckoutController.js");
    await CheckoutController.prepare();
  },

  async removeItem(cartItemId) {
    cartStore.cartUpdatingIds.add(String(cartItemId));
    CartPage.render();
    const result = await CartService.removeItem(cartItemId);
    cartStore.cartUpdatingIds.delete(String(cartItemId));

    if (result !== null) {
      showToast(t("cart.itemRemoved"), "success");
      await CartController.load();
    } else {
      CartPage.render();
    }
  },

  async updateQuantity(cartItemId, quantity) {
    const nextQuantity = Math.max(1, Number(quantity || 1));
    cartStore.cartUpdatingIds.add(String(cartItemId));
    CartPage.render();
    const result = await CartService.updateQuantity(cartItemId, nextQuantity);
    cartStore.cartUpdatingIds.delete(String(cartItemId));

    if (result !== null) {
      showToast(t("cart.quantityUpdated"), "success");
      await CartController.load();
    } else {
      CartPage.render();
    }
  },

  async removeSelected() {
    const items = CartPage.getSelectedCartItems();
    if (!items.length) return;
    items.forEach((item) => cartStore.cartUpdatingIds.add(String(item.id)));
    CartPage.render();
    for (const item of items) {
      await CartService.removeItem(item.id);
      cartStore.cartUpdatingIds.delete(String(item.id));
      cartStore.cartSelectedIds?.delete(String(item.id));
    }
    showToast(t("cart.itemRemoved"), "success");
    await CartController.load();
  },

  getTotals() {
    return CartPage.getCartTotals();
  },

  getSelectedItems() {
    return CartPage.getSelectedCartItems();
  },
};
