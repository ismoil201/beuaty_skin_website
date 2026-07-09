import { appStore, productStore } from "../stores/index.js";

export function getTranslationContext() {
  return {
    currentRoute: appStore.currentRoute,
    selectedDetailProduct: productStore.selectedDetailProduct,
  };
}
