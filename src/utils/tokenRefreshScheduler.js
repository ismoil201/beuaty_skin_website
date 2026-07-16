import { CONFIG } from "../config/config.js";
import { refreshAccessToken } from "../api/apiClient.js";
import { decodeJwtExpiryMs } from "./authHttp.js";

const REFRESH_SKEW_MS = 60_000;
let refreshTimerId = null;

function clearScheduledRefresh() {
  if (refreshTimerId !== null) {
    clearTimeout(refreshTimerId);
    refreshTimerId = null;
  }
}

async function runProactiveRefresh() {
  clearScheduledRefresh();
  const token = localStorage.getItem(CONFIG.storageKeys.accessToken);
  if (!token) return;

  const refreshed = await refreshAccessToken();
  if (refreshed) {
    scheduleProactiveRefresh(refreshed);
  }
}

/**
 * Refresh access token shortly before JWT exp so idle tabs stay authenticated.
 */
export function scheduleProactiveRefresh(token = localStorage.getItem(CONFIG.storageKeys.accessToken)) {
  clearScheduledRefresh();
  const expiresAtMs = decodeJwtExpiryMs(token);
  if (!expiresAtMs) return;

  const delay = expiresAtMs - Date.now() - REFRESH_SKEW_MS;
  if (delay <= 0) {
    void runProactiveRefresh();
    return;
  }

  refreshTimerId = setTimeout(() => {
    void runProactiveRefresh();
  }, delay);
}

export function stopProactiveRefresh() {
  clearScheduledRefresh();
}

export function bindProactiveRefreshLifecycle() {
  if (typeof window === "undefined") return;

  window.addEventListener("storage", (event) => {
    if (event.key === CONFIG.storageKeys.accessToken) {
      if (event.newValue) {
        scheduleProactiveRefresh(event.newValue);
      } else {
        stopProactiveRefresh();
      }
    }
  });

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState !== "visible") return;
    const token = localStorage.getItem(CONFIG.storageKeys.accessToken);
    if (!token) return;
    const expiresAtMs = decodeJwtExpiryMs(token);
    if (!expiresAtMs || expiresAtMs - Date.now() <= REFRESH_SKEW_MS) {
      void runProactiveRefresh();
    }
  });
}
