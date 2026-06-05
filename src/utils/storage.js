import { CONFIG } from "../config/config.js";

export function readJsonStorage(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key) || "null") || fallback;
  } catch {
    return fallback;
  }
}

export function normalizeSavedBaseUrl(value) {
  const clean = value.trim().replace(/\/+$/, "");
  return clean.includes("cosmetic-server-production.up.railway.app") ? "" : clean;
}

export function getToken() {
  return (
    localStorage.getItem(CONFIG.storageKeys.accessToken) ||
    localStorage.getItem(CONFIG.storageKeys.legacyAccessToken) ||
    ""
  );
}

export function getSessionId() {
  let sessionId = localStorage.getItem(CONFIG.storageKeys.sessionId);
  if (!sessionId) {
    sessionId = `web-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
    localStorage.setItem(CONFIG.storageKeys.sessionId, sessionId);
  }
  return sessionId;
}

export function migrateAuthStorage() {
  const oldToken = localStorage.getItem(CONFIG.storageKeys.legacyAccessToken);
  const token = localStorage.getItem(CONFIG.storageKeys.accessToken);
  if (!token && oldToken) {
    localStorage.setItem(CONFIG.storageKeys.accessToken, oldToken);
  }

  const oldUser = localStorage.getItem(CONFIG.storageKeys.legacyUser);
  const user = localStorage.getItem(CONFIG.storageKeys.user);
  if (!user && oldUser) {
    localStorage.setItem(CONFIG.storageKeys.user, oldUser);
  }
}
