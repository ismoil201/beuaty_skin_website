/**
 * HTTP auth status helpers for apiClient refresh / logout decisions.
 */

const CSRF_FAILURE_SNIPPET = "csrf";

export function isCsrfFailure(payload) {
  const message = String(payload?.message || payload?.error || "").toLowerCase();
  return message.includes(CSRF_FAILURE_SNIPPET);
}

/**
 * True when the response indicates missing/invalid/expired credentials
 * (not a genuine permission denial for an authenticated user).
 */
export function isAuthenticationFailure(status, payload, { hadAuthHeader = false } = {}) {
  if (status === 401) return true;
  if (status !== 403) return false;

  const code = String(payload?.code || "").toUpperCase();
  if (code === "UNAUTHORIZED") return true;
  if (code === "ACCESS_DENIED") return hadAuthHeader;

  const message = String(payload?.message || payload?.error || "").toLowerCase();
  if (message.includes("authentication required")) return true;
  if (message.includes("session expired")) return true;
  if (message.includes("invalid token")) return true;
  if (message.includes("forbidden") && hadAuthHeader) return true;

  return hadAuthHeader;
}

export function shouldLogoutAfterRefreshFailure(status, payload) {
  if (status === 401) return true;
  if (status === 403 && isCsrfFailure(payload)) return false;
  if (status === 403) return true;
  return false;
}

/**
 * Decode JWT exp (seconds) without verifying signature — scheduling only.
 * @returns {number|null} ms since epoch
 */
export function decodeJwtExpiryMs(token) {
  if (!token || typeof token !== "string") return null;
  const parts = token.split(".");
  if (parts.length < 2) return null;
  try {
    const payload = JSON.parse(atob(parts[1].replace(/-/g, "+").replace(/_/g, "/")));
    const exp = Number(payload?.exp);
    if (!Number.isFinite(exp) || exp <= 0) return null;
    return exp * 1000;
  } catch {
    return null;
  }
}
