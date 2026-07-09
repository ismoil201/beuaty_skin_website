import { migrateAuthStorage, migrateApiBaseUrlStorage } from "./utils/storage.js";
import { initElements } from "./utils/dom.js";
import { init } from "./runtime/commerce.js";
import { appStore } from "./stores/appStore.js";
import { normalizeSavedBaseUrl } from "./config/apiBase.js";
import { CONFIG } from "./config/config.js";
import { isDevMode } from "./config/env.js";

export function startApp() {
  migrateAuthStorage();
  migrateApiBaseUrlStorage();
  appStore.baseUrl = normalizeSavedBaseUrl(localStorage.getItem(CONFIG.storageKeys.baseUrl) || "");
  initElements();

  if (isDevMode()) {
    console.assert(document.getElementById("productGrid"), "productGrid missing");
    console.assert(document.getElementById("dealsGrid"), "dealsGrid missing");
    console.assert(document.getElementById("productStatus"), "productStatus missing");
    console.assert(document.getElementById("dealsStatus"), "dealsStatus missing");
    console.assert(document.getElementById("quickCategoryGrid"), "quickCategoryGrid missing");
  }

  init();
}
