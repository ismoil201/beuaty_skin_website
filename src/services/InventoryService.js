import { getInventory, reserveInventory } from "../api/inventoryApi.js";
import { createApiFailure } from "./serviceHelpers.js";
import { appStore } from "../stores/appStore.js";

export const InventoryService = {
  async getForProduct(productId) {
    const response = await getInventory(productId);
    if (response === null) {
      return createApiFailure(appStore.lastApiError || "Inventory unavailable.");
    }
    return { success: true, inventory: response };
  },

  async reserve(body) {
    const response = await reserveInventory(body);
    if (response === null) {
      return createApiFailure(appStore.lastApiError || "Inventory reserve failed.");
    }
    return { success: true, reservation: response };
  },
};
