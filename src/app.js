import { migrateAuthStorage, migrateApiBaseUrlStorage } from "./utils/storage.js";
import { initElements } from "./utils/dom.js";
import { init } from "./runtime/commerce.js";
import { state } from "./store/state.js";
import { normalizeSavedBaseUrl } from "./config/apiBase.js";
import { CONFIG } from "./config/config.js";
import { isDevMode } from "./config/env.js";

export function startApp() {
  migrateAuthStorage();
  migrateApiBaseUrlStorage();
  state.baseUrl = normalizeSavedBaseUrl(localStorage.getItem(CONFIG.storageKeys.baseUrl) || "");
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
