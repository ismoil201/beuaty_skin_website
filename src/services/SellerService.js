import { getSeller, applyAsSeller, updateSellerProfile, getMySellerProducts } from "../api/sellerApi.js";
import { ProductService } from "./ProductService.js";
import { createApiFailure } from "./serviceHelpers.js";
import { appStore } from "../stores/appStore.js";
import { getPageContent } from "../utils/productMapper.js";

export const SellerService = {
  async loadSeller(id) {
    const seller = await getSeller(id);
    if (seller === null) {
      return createApiFailure(appStore.lastApiError || "Seller not found.");
    }
    return { success: true, seller };
  },

  async loadSellerStorefront(id, options = {}) {
    const [sellerResult, products] = await Promise.all([
      this.loadSeller(id),
      ProductService.loadSellerProducts(id, options),
    ]);
    if (!sellerResult.success) return sellerResult;
    return { success: true, seller: sellerResult.seller, products };
  },

  async apply(body) {
    const response = await applyAsSeller(body);
    if (response === null) {
      return createApiFailure(appStore.lastApiError || "Seller application failed.");
    }
    return { success: true, data: response };
  },

  async updateProfile(body) {
    const response = await updateSellerProfile(body);
    if (response === null) {
      return createApiFailure(appStore.lastApiError || "Seller profile update failed.");
    }
    return { success: true, data: response };
  },

  async loadMyProducts(query = {}) {
    const response = await getMySellerProducts(query);
    if (response === null) {
      return createApiFailure(appStore.lastApiError || "Seller products could not be loaded.");
    }
    return { success: true, products: getPageContent(response) };
  },
};
