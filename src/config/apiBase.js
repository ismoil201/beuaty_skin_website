import { CONFIG } from "./config.js";
import { getEnvString, isDevMode } from "./env.js";

const PRODUCTION_API_URL = CONFIG.productionApiBaseUrl.replace(/\/+$/, "");

const VITE_DEV_PORTS = new Set(["5173", "4173"]);
const LIVE_SERVER_PORTS = new Set(["5500", "5501", "5502"]);

let liveServerWarningShown = false;

export function isLocalDevHost(hostname = globalThis.location?.hostname) {
  return hostname === "localhost" || hostname === "127.0.0.1";
}

export function isViteDevServer(port = globalThis.location?.port) {
  return VITE_DEV_PORTS.has(String(port || ""));
}

export function isLiveServerHost(port = globalThis.location?.port) {
  return LIVE_SERVER_PORTS.has(String(port || ""));
}

export function warnLiveServerOnce() {
  if (liveServerWarningShown) return;
  liveServerWarningShown = true;
  console.warn(
    "[BEAUTY SKIN KOREA] Live Server (port 5500) is not supported. " +
      "Run `npm install && npm run dev` and open http://localhost:5173 . " +
      "Calling Railway API directly as fallback."
  );
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
 * Resolve API base URL.
 * - VITE_API_BASE_URL or Railway URL when env missing (safe default)
 * - Vite dev (5173/4173) with no env: relative /api via proxy
 * - Live Server (5500): Railway direct + console warning
 * - Production hosts: Railway direct
 */
export function resolveApiBaseUrl(storedOverride = "") {
  const envUrl = getEnvString("VITE_API_BASE_URL").replace(/\/+$/, "");
  if (envUrl) return envUrl;

  if (isLiveServerHost()) {
    warnLiveServerOnce();
    return PRODUCTION_API_URL;
  }

  const override = normalizeSavedBaseUrl(storedOverride);
  if (override) return override;

  if (isLocalDevHost() && isViteDevServer() && isDevMode()) {
    return "";
  }

  if (isLocalDevHost() && !isViteDevServer()) {
    warnLiveServerOnce();
    return PRODUCTION_API_URL;
  }

  return PRODUCTION_API_URL;
}

export function getProductionApiBaseUrl() {
  return PRODUCTION_API_URL;
}
