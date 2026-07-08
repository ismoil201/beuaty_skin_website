import { state } from "./state.js";

export function setCartItems(items) {
  state.cartItems = items;
  state.cart = items;
  state.cartCount = items.reduce((sum, item) => sum + item.quantity, 0);
  state.cartTotal = items.reduce((sum, item) => sum + item.lineTotal, 0);
}

export function clearCartState() {
  setCartItems([]);
  state.cartLoading = false;
  state.cartError = "";
  state.cartUpdatingIds = new Set();
  state.cartSelectedIds = new Set();
  state.cartKnownItemIds = new Set();
}
