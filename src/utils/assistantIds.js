import { CONFIG } from "../config/config.js";
import { getSessionId } from "./storage.js";
import { getCurrentLanguage } from "../i18n/index.js";

const CONVERSATION_KEY = CONFIG.storageKeys.assistantConversationId;

export function createConversationId() {
  return `conv-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

export function getPersistedConversationId() {
  return localStorage.getItem(CONVERSATION_KEY) || "";
}

export function persistConversationId(conversationId) {
  if (!conversationId) {
    localStorage.removeItem(CONVERSATION_KEY);
    return;
  }
  localStorage.setItem(CONVERSATION_KEY, conversationId);
}

export function clearPersistedConversationId() {
  localStorage.removeItem(CONVERSATION_KEY);
}

export function getAssistantSessionId() {
  return getSessionId();
}

/** Map app language codes to BCP-47 locales for the assistant API. */
export function getAssistantLocale() {
  const lang = getCurrentLanguage();
  const map = {
    uz: "uz-UZ",
    en: "en-US",
    ru: "ru-RU",
    ko: "ko-KR",
  };
  return map[lang] || Intl.DateTimeFormat().resolvedOptions().locale || "uz-UZ";
}

export function getAssistantTimezone() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
  } catch {
    return "UTC";
  }
}

export function createMessageId() {
  return `msg-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

/** Ensure storage key stays discoverable via CONFIG for future use. */
export const ASSISTANT_STORAGE = Object.freeze({
  conversationId: CONVERSATION_KEY,
  sessionId: CONFIG.storageKeys.sessionId,
});
