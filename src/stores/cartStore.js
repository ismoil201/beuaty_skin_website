import { createStore } from "./createStore.js";

export const cartStore = createStore({
  cart: [],
  cartItems: [],
  cartLoading: false,
  cartError: "",
  cartCount: 0,
  cartTotal: 0,
  cartUpdatingIds: new Set(),
  cartSelectedIds: new Set(),
  cartKnownItemIds: new Set(),
  addingProductIds: new Set(),
  cartCoupon: "",
  cartCouponDiscount: 0,
});
