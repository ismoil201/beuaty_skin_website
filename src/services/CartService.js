import {
  getCart,
  addToCart as addToCartApi,
  updateCartItem as updateCartItemApi,
  removeCartItem as removeCartItemApi,
} from "../api/cartApi.js";
import { getPageContent, normalizeCartItem, numberOrZero } from "../utils/productMapper.js";
import { FREE_SHIPPING_THRESHOLD, STANDARD_DELIVERY_FEE } from "../utils/phase2Ui.js";
import { createApiFailure } from "./serviceHelpers.js";

function catalogDiscountTotal(items) {
  return items.reduce((sum, item) => {
    const original = numberOrZero(item.product?.originalPrice);
    if (original > item.unitPrice) return sum + (original - item.unitPrice) * item.quantity;
    return sum;
  }, 0);
}

function buildTotals(cartItems, selectedIds, couponDiscount = 0, { checkout = false } = {}) {
  const items = cartItems.filter((item) => selectedIds.has(String(item.id)));
  const subtotal = items.reduce((sum, item) => sum + item.lineTotal, 0);
  const catalogDiscount = catalogDiscountTotal(items);
  const deliveryFee = !items.length || subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : STANDARD_DELIVERY_FEE;
  const total = Math.max(0, subtotal + deliveryFee - couponDiscount);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  if (checkout) {
    return {
      items,
      subtotal,
      deliveryFee,
      discount: catalogDiscount + couponDiscount,
      catalogDiscount,
      couponDiscount,
      total,
      itemCount,
    };
  }

  return {
    items,
    subtotal,
    discount: catalogDiscount,
    deliveryFee,
    couponDiscount,
    total,
    itemCount,
    uniqueCount: items.length,
  };
}

export const CartService = {
  async loadCart() {
    const response = await getCart();
    if (response === null) {
      return createApiFailure("Cart could not be loaded.");
    }
    return {
      success: true,
      items: getPageContent(response).map(normalizeCartItem),
    };
  },

  syncSelection(cartItems, cartSelectedIds, cartKnownItemIds) {
    const ids = cartSelectedIds || new Set();
    const itemIds = cartItems.map((item) => String(item.id));
    const itemIdSet = new Set(itemIds);
    const known = cartKnownItemIds || new Set();

    [...ids].forEach((id) => {
      if (!itemIdSet.has(id)) ids.delete(id);
    });

    itemIds.forEach((id) => {
      if (!known.has(id)) ids.add(id);
    });

    if (itemIds.length && !ids.size && !known.size) {
      itemIds.forEach((id) => ids.add(id));
    }

    return { selectedIds: ids, knownItemIds: new Set(itemIds) };
  },

  getSelectedItems(cartItems, selectedIds) {
    return cartItems.filter((item) => selectedIds.has(String(item.id)));
  },

  calculateTotals(cartItems, selectedIds, couponDiscount = 0) {
    return buildTotals(cartItems, selectedIds, couponDiscount);
  },

  calculateCheckoutTotals(cartItems, selectedIds, couponDiscount = 0) {
    return buildTotals(cartItems, selectedIds, couponDiscount, { checkout: true });
  },

  async addItem(variantId, quantity) {
    return addToCartApi({
      variantId: Number(variantId),
      quantity: Math.max(1, Number(quantity || 1)),
    });
  },

  async updateQuantity(cartItemId, quantity) {
    return updateCartItemApi(cartItemId, { quantity: Math.max(1, Number(quantity || 1)) });
  },

  async removeItem(cartItemId) {
    return removeCartItemApi(cartItemId);
  },

  applyCoupon(code, subtotal) {
    const normalized = String(code || "").trim().toUpperCase();
    if (normalized === "BEAUTY10") {
      return {
        valid: true,
        coupon: normalized,
        discount: Math.round(subtotal * 0.1),
      };
    }
    if (normalized) {
      return { valid: false, invalid: true };
    }
    return { valid: false, invalid: false };
  },
};
