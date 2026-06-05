import { CONFIG } from "./config.js";

const PRODUCTION_API_URL = CONFIG.productionApiBaseUrl.replace(/\/+$/, "");

function isBlockedOverride(value) {
  const clean = String(value || "")
    .trim()
    .replace(/\/+$/, "")
    .toLowerCase();

  if (!clean) return false;

  return (
    clean.includes("localhost") ||
    clean.includes("127.0.0.1") ||
    clean.includes("0.0.0.0") ||
    clean.startsWith("file:")
  );
}

/** Same rules as old app.js, but always drop localhost overrides and Railway duplicates. */
export function normalizeSavedBaseUrl(value) {
  const clean = String(value || "")
    .trim()
    .replace(/\/+$/, "");

  if (!clean) return "";

  if (clean.includes("cosmetic-server-production.up.railway.app")) {
    return "";
  }

  if (isBlockedOverride(clean)) {
    return "";
  }

  return clean;
}

export function getProductionApiBaseUrl() {
  return PRODUCTION_API_URL;
}
