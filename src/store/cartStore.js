import { cartStore } from "../stores/cartStore.js";

export function setCartItems(items) {
  cartStore.cartItems = items;
  cartStore.cart = items;
  cartStore.cartCount = items.reduce((sum, item) => sum + item.quantity, 0);
  cartStore.cartTotal = items.reduce((sum, item) => sum + item.lineTotal, 0);
}

export function clearCartState() {
  setCartItems([]);
  cartStore.cartLoading = false;
  cartStore.cartError = "";
  cartStore.cartUpdatingIds = new Set();
  cartStore.cartSelectedIds = new Set();
  cartStore.cartKnownItemIds = new Set();
}
