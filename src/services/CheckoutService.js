import {
  getReceivers,
  createReceiver as createReceiverApi,
  deleteReceiver as deleteReceiverApi,
} from "../api/receiverApi.js";
import {
  getAddresses,
  createAddress as createAddressApi,
  deleteAddress as deleteAddressApi,
} from "../api/addressApi.js";
import { getPageContent } from "../utils/productMapper.js";
import { CartService } from "./CartService.js";
import { appStore } from "../stores/appStore.js";

export const CheckoutService = {
  resolveSelectedId(items, selectId, currentSelectedId) {
    const selectedId = selectId || currentSelectedId || items[0]?.id || null;
    if (!items.some((item) => String(item.id) === String(selectedId))) {
      return items[0]?.id || null;
    }
    return selectedId;
  },

  async loadReceivers(selectId, currentSelectedId) {
    const response = await getReceivers();
    if (response === null) {
      return {
        success: false,
        error: appStore.lastApiError || "Receivers could not be loaded.",
      };
    }
    const receivers = getPageContent(response);
    return {
      success: true,
      receivers,
      selectedReceiverId: this.resolveSelectedId(receivers, selectId, currentSelectedId),
    };
  },

  async loadAddresses(selectId, currentSelectedId) {
    const response = await getAddresses();
    if (response === null) {
      return {
        success: false,
        error: appStore.lastApiError || "Addresses could not be loaded.",
      };
    }
    const addresses = getPageContent(response);
    return {
      success: true,
      addresses,
      selectedAddressId: this.resolveSelectedId(addresses, selectId, currentSelectedId),
    };
  },

  validateReceiverInput({ firstName, lastName, phone }) {
    if (!firstName || !lastName || !phone) {
      return { valid: false, error: "First name, last name va phone majburiy." };
    }
    return { valid: true };
  },

  validateAddressInput({ title, address, latitude, longitude }) {
    if (!title || !address || !Number.isFinite(latitude) || !Number.isFinite(longitude)) {
      return { valid: false, error: "Title, address, latitude va longitude majburiy." };
    }
    return { valid: true };
  },

  async createReceiver(body) {
    const response = await createReceiverApi(body);
    if (response === null) {
      return { success: false, error: appStore.lastApiError };
    }
    return { success: true, receiver: response };
  },

  async createAddress(body) {
    const response = await createAddressApi(body);
    if (response === null) {
      return { success: false, error: appStore.lastApiError };
    }
    return { success: true, address: response };
  },

  async deleteReceiver(id) {
    const response = await deleteReceiverApi(id);
    return { success: response !== null };
  },

  async deleteAddress(id) {
    const response = await deleteAddressApi(id);
    return { success: response !== null };
  },

  validatePrepareCheckout(selectedItems) {
    if (!selectedItems.length) {
      return { valid: false, reason: "empty_selection" };
    }
    return { valid: true };
  },

  validateConfirmCheckout({ selectedAddressId, selectedReceiverId }) {
    if (!selectedAddressId) {
      return { valid: false, reason: "address_required", openAddressPicker: true };
    }
    if (!selectedReceiverId) {
      return { valid: false, reason: "receiver_required", openReceiverPicker: true };
    }
    return { valid: true };
  },

  calculateCheckoutTotals(cartItems, selectedIds, couponDiscount = 0) {
    return CartService.calculateCheckoutTotals(cartItems, selectedIds, couponDiscount);
  },

  buildOrderPayload({ receiverId, addressId, cartItems }) {
    const cartItemIds = cartItems
      .map((item) => Number(item.id))
      .filter((id) => Number.isFinite(id) && id > 0);

    return {
      receiverId: Number(receiverId),
      addressId: Number(addressId),
      cartItemIds,
    };
  },

  validateOrderItems(cartItems) {
    if (!cartItems.length) {
      return { valid: false, reason: "no_items" };
    }
    const cartItemIds = cartItems
      .map((item) => Number(item.id))
      .filter((id) => Number.isFinite(id) && id > 0);
    if (!cartItemIds.length) {
      return { valid: false, reason: "invalid_items" };
    }
    return { valid: true, cartItemIds };
  },
};
