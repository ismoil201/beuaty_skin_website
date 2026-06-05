import { migrateAuthStorage } from "./utils/storage.js";
import { initElements } from "./utils/dom.js";
import { init } from "./runtime/commerce.js";

export function startApp() {
  migrateAuthStorage();
  initElements();
  init();
}
