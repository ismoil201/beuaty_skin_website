import {
  extractErrorCode,
  getLocalizedBusinessMessage,
  isBusinessErrorCode,
} from "./errorCodes.js";

export function parseResponseBody(text) {
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

function rawApiErrorMessage(payload, status) {
  if (typeof payload === "string" && payload.trim()) return payload;
  return payload?.message || payload?.error || `API xatosi: HTTP ${status}`;
}

/**
 * Never surface raw technical/business backend messages for known codes.
 * Prefer localized message by `code`.
 */
export function getApiErrorMessage(payload, status) {
  const code = extractErrorCode(payload);
  if (isBusinessErrorCode(code)) {
    return getLocalizedBusinessMessage(code);
  }
  const raw = rawApiErrorMessage(payload, status);
  return getLocalizedBusinessMessage(code, undefined, raw);
}

export function getApiErrorCode(payload) {
  return extractErrorCode(payload) || "";
}
