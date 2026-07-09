import { createStore } from "./createStore.js";

export const checkoutStore = createStore({
  receivers: [],
  addresses: [],
  selectedReceiverId: null,
  selectedAddressId: null,
  checkoutLoading: false,
  orderSubmitting: false,
  checkoutError: "",
  orderSuccess: null,
  checkoutStep: 1,
  checkoutAddressPickerOpen: false,
  checkoutReceiverPickerOpen: false,
  checkoutCouponOpen: false,
  checkoutConfirmOpen: false,
});
