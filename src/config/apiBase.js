import { CONFIG } from "./config.js";

const PRODUCTION_API_URL = CONFIG.productionApiBaseUrl.replace(/\/+$/, "");

export function isLocalDevHost(hostname = globalThis.location?.hostname) {
  return hostname === "localhost" || hostname === "127.0.0.1";
}

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

export function normalizeSavedBaseUrl(value) {
  const clean = String(value || "")
    .trim()
    .replace(/\/+$/, "");

  if (!clean) return "";

  if (clean.includes("cosmetic-server-production.up.railway.app")) {
    return "";
  }

  if (!isLocalDevHost() && isBlockedOverride(clean)) {
    return "";
  }

  return clean;
}

/**
 * Option A in production: always call Railway directly.
 * Local dev: Vite proxy (/api → Railway) when base is empty, or explicit override.
 */
export function resolveApiBaseUrl(storedOverride = "") {
  const envUrl = import.meta.env.VITE_API_BASE_URL?.trim().replace(/\/+$/, "");
  if (envUrl) return envUrl;

  if (isLocalDevHost()) {
    const override = normalizeSavedBaseUrl(storedOverride);
    return override;
  }

  return PRODUCTION_API_URL;
}

export function getProductionApiBaseUrl() {
  return PRODUCTION_API_URL;
}
