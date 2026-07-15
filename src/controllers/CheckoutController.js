import { checkoutStore, cartStore } from "../stores/index.js";
import { els } from "../utils/dom.js";
import { CheckoutService } from "../services/CheckoutService.js";
import { OrderService } from "../services/OrderService.js";
import { CartService } from "../services/CartService.js";
import { CheckoutPage } from "../pages/checkout/CheckoutPage.js";
import { CartPage } from "../pages/cart/CartPage.js";
import { CartController } from "./CartController.js";
import { showToast } from "../utils/toast.js";
import { t } from "../i18n/index.js";
import { AuthService } from "../services/AuthService.js";
import { closeCart, lockBody, showHomeView, unlockBodyIfNoOverlay } from "../runtime/navigation.js";

let orderAbortController = null;

export const CheckoutController = {
  getAbortController() {
    return orderAbortController;
  },

  abortOrder() {
    orderAbortController?.abort();
    orderAbortController = null;
  },

  async prepare({ showLoginRequired } = {}) {
    if (!AuthService.isLoggedIn()) {
      showLoginRequired?.();
      return;
    }

    await CartController.load();
    const selectedItems = CartPage.getSelectedCartItems();
    const prepareCheck = CheckoutService.validatePrepareCheckout(selectedItems);
    if (!prepareCheck.valid) {
      showToast(t("cart.emptySelection") || "Select items to checkout", "warning");
      return;
    }

    checkoutStore.orderSuccess = null;
    checkoutStore.checkoutError = "";
    checkoutStore.checkoutStep = 1;
    checkoutStore.checkoutAddressPickerOpen = false;
    checkoutStore.checkoutReceiverPickerOpen = false;
    checkoutStore.checkoutCouponOpen = false;
    checkoutStore.checkoutConfirmOpen = false;
    checkoutStore.checkoutLoading = true;
    CheckoutPage.render();
    closeCart();
    els.checkoutDialog.showModal();
    lockBody();
    await Promise.all([CheckoutController.loadReceivers(), CheckoutController.loadAddresses()]);
    checkoutStore.checkoutLoading = false;
    CheckoutPage.render();
  },

  async loadReceivers(selectId) {
    const result = await CheckoutService.loadReceivers(selectId, checkoutStore.selectedReceiverId);
    if (!result.success) {
      checkoutStore.checkoutError = result.error;
      return;
    }
    checkoutStore.receivers = result.receivers;
    checkoutStore.selectedReceiverId = result.selectedReceiverId;
  },

  async loadAddresses(selectId) {
    const result = await CheckoutService.loadAddresses(selectId, checkoutStore.selectedAddressId);
    if (!result.success) {
      checkoutStore.checkoutError = result.error;
      return;
    }
    checkoutStore.addresses = result.addresses;
    checkoutStore.selectedAddressId = result.selectedAddressId;
  },

  getTotals() {
    return CartPage.getCartTotals();
  },

  openConfirm() {
    const items = CartPage.getSelectedCartItems();
    if (!items.length) return;

    const validation = CheckoutService.validateConfirmCheckout({
      selectedAddressId: checkoutStore.selectedAddressId,
      selectedReceiverId: checkoutStore.selectedReceiverId,
    });

    if (!validation.valid) {
      if (validation.reason === "address_required") {
        checkoutStore.checkoutError = t("checkout.addressRequired");
        checkoutStore.checkoutAddressPickerOpen = true;
      } else if (validation.reason === "receiver_required") {
        checkoutStore.checkoutError = t("checkout.receiverRequired");
        checkoutStore.checkoutReceiverPickerOpen = true;
      }
      checkoutStore.checkoutConfirmOpen = false;
      CheckoutPage.render();
      return;
    }

    checkoutStore.checkoutError = "";
    checkoutStore.checkoutConfirmOpen = true;
    CheckoutPage.render();
  },

  async submitOrder() {
    if (checkoutStore.orderSubmitting) return;

    const items = CartPage.getSelectedCartItems();
    const itemCheck = CheckoutService.validateOrderItems(items);
    if (!itemCheck.valid) {
      checkoutStore.checkoutError = itemCheck.reason === "invalid_items"
        ? t("checkout.invalidItems")
        : t("checkout.noItems");
      CheckoutPage.render();
      return;
    }

    CheckoutController.abortOrder();
    orderAbortController = new AbortController();

    checkoutStore.orderSubmitting = true;
    checkoutStore.checkoutError = "";
    CheckoutPage.render();

    try {
      const payload = CheckoutService.buildOrderPayload({
        receiverId: checkoutStore.selectedReceiverId,
        addressId: checkoutStore.selectedAddressId,
        cartItems: items,
      });

      const result = await OrderService.createOrderWithPayment(payload, {
        paymentMethod: "CASH",
        signal: orderAbortController.signal,
      });

      if (!result.success) {
        checkoutStore.checkoutError = result.error || t("checkout.orderFailed");
        showToast(checkoutStore.checkoutError, "error");
        return;
      }

      if (result.paymentWarning) {
        showToast(result.paymentWarning, "warning");
      }

      CheckoutController.finishAndGoHome();
      showToast(t("checkout.orderCreated"), "success");
      void CartController.load().then(() => CartPage.render());
    } catch (error) {
      checkoutStore.checkoutError = error?.message || t("checkout.orderFailed");
      showToast(checkoutStore.checkoutError, "error");
    } finally {
      checkoutStore.orderSubmitting = false;
      orderAbortController = null;
      if (els.checkoutDialog?.open) CheckoutPage.render();
    }
  },

  finishAndGoHome() {
    try {
      checkoutStore.checkoutConfirmOpen = false;
      checkoutStore.orderSuccess = null;
      checkoutStore.checkoutError = "";
      els.checkoutDialog?.close();
      closeCart();
      unlockBodyIfNoOverlay();
      showHomeView();
      if (window.location.hash && window.location.hash !== "#/" && window.location.hash !== "#") {
        window.location.hash = "#/";
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.error("finishAndGoHome failed:", error);
      checkoutStore.checkoutConfirmOpen = false;
      checkoutStore.orderSubmitting = false;
      els.checkoutDialog?.close();
      unlockBodyIfNoOverlay();
    }
  },

  async createReceiver() {
    const firstName = document.getElementById("receiverFirstName")?.value.trim();
    const lastName = document.getElementById("receiverLastName")?.value.trim();
    const phone = document.getElementById("receiverPhone")?.value.trim();
    const error = document.getElementById("receiverFormError");

    const validation = CheckoutService.validateReceiverInput({ firstName, lastName, phone });
    if (!validation.valid) {
      if (error) error.textContent = validation.error;
      return;
    }

    const result = await CheckoutService.createReceiver({ firstName, lastName, phone });
    if (result.success) {
      await CheckoutController.loadReceivers(result.receiver.id);
      CheckoutPage.render();
      showToast("Receiver added");
    }
  },

  async createAddress() {
    const title = document.getElementById("addressTitle")?.value.trim();
    const address = document.getElementById("addressText")?.value.trim();
    const latitude = Number(document.getElementById("addressLatitude")?.value);
    const longitude = Number(document.getElementById("addressLongitude")?.value);
    const error = document.getElementById("addressFormError");

    const validation = CheckoutService.validateAddressInput({ title, address, latitude, longitude });
    if (!validation.valid) {
      if (error) error.textContent = validation.error;
      return;
    }

    const result = await CheckoutService.createAddress({ title, address, latitude, longitude });
    if (result.success) {
      await CheckoutController.loadAddresses(result.address.id);
      CheckoutPage.render();
      showToast("Address added");
    }
  },

  async deleteReceiver(id) {
    const result = await CheckoutService.deleteReceiver(id);
    if (result.success) {
      if (String(checkoutStore.selectedReceiverId) === String(id)) checkoutStore.selectedReceiverId = null;
      await CheckoutController.loadReceivers();
      CheckoutPage.render();
    }
  },

  async deleteAddress(id) {
    const result = await CheckoutService.deleteAddress(id);
    if (result.success) {
      if (String(checkoutStore.selectedAddressId) === String(id)) checkoutStore.selectedAddressId = null;
      await CheckoutController.loadAddresses();
      CheckoutPage.render();
    }
  },

  applyCoupon(code) {
    const result = CartService.applyCoupon(code, CartPage.getCartTotals().subtotal);
    if (result.valid) {
      cartStore.cartCoupon = result.coupon;
      cartStore.cartCouponDiscount = result.discount;
      showToast(t("cart.couponApplied"), "success");
    } else if (result.invalid) {
      showToast(t("cart.couponInvalid"), "warning");
    }
    CheckoutPage.render();
    CartPage.render();
  },
};
