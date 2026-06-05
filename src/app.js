import { migrateAuthStorage, migrateApiBaseUrlStorage } from "./utils/storage.js";
import { initElements } from "./utils/dom.js";
import { init } from "./runtime/commerce.js";
import { state } from "./store/state.js";
import { normalizeSavedBaseUrl } from "./config/apiBase.js";
import { CONFIG } from "./config/config.js";

export function startApp() {
  migrateAuthStorage();
  migrateApiBaseUrlStorage();
  state.baseUrl = normalizeSavedBaseUrl(localStorage.getItem(CONFIG.storageKeys.baseUrl) || "");
  initElements();
  init();
}
