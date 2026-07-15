import { t } from "../i18n/index.js";
import {
  normalizeAssistantProduct,
  normalizeAssistantProducts,
  normalizeAssistantAction,
  normalizeAssistantActions,
  extractAssistantProducts,
  extractAssistantActions,
  canonicalizeAssistantActionType,
  isSupportedAssistantAction,
  SUPPORTED_ASSISTANT_ACTIONS,
  buildProductNavigationTarget,
  resolveAssistantProductId,
  assistantLog,
} from "./assistantNormalize.js";

export {
  normalizeAssistantProduct,
  normalizeAssistantProducts,
  normalizeAssistantAction,
  normalizeAssistantActions,
  extractAssistantProducts,
  extractAssistantActions,
  canonicalizeAssistantActionType,
  isSupportedAssistantAction,
  SUPPORTED_ASSISTANT_ACTIONS,
  buildProductNavigationTarget,
  resolveAssistantProductId,
  assistantLog,
};

/**
 * Map assistant API failures to friendly, retryable messages.
 * Never clears conversation — caller keeps messages intact.
 */
export function getAssistantErrorMessage(status, errorCode) {
  if (errorCode === "timeout" || status === 408) {
    return t("assistant.errorTimeout");
  }
  if (errorCode === "network" || status === 0) {
    return t("assistant.errorNetwork");
  }
  if (status === 400) return t("assistant.error400");
  if (status === 401) return t("assistant.error401");
  if (status === 429) return t("assistant.error429");
  if (status === 500) return t("assistant.error500");
  if (status === 503) return t("assistant.error503");
  return t("assistant.errorGeneric");
}

/** Normalize history payloads — shape beyond the query contract is not fully documented. */
export function normalizeHistoryMessages(payload) {
  let list = [];
  if (Array.isArray(payload)) list = payload;
  else if (Array.isArray(payload?.messages)) list = payload.messages;
  else if (Array.isArray(payload?.history)) list = payload.history;
  else if (Array.isArray(payload?.data)) list = payload.data;
  else if (Array.isArray(payload?.content)) list = payload.content;

  return list
    .map((item, index) => {
      const role = String(item.role || item.sender || "").toLowerCase();
      const isUser = role === "user" || role === "human";
      const isAssistant = role === "assistant" || role === "ai" || role === "bot";
      const text =
        item.content ||
        item.message ||
        item.assistant_message ||
        item.text ||
        "";

      const products = extractAssistantProducts(item);
      const actions = extractAssistantActions(item);

      if (!text && !products.length) return null;
      return {
        id: item.id || `hist-${index}-${Date.now()}`,
        role: isUser ? "user" : "assistant",
        content: text,
        products,
        actions,
        followUpQuestions: Array.isArray(item.follow_up_questions)
          ? item.follow_up_questions
          : Array.isArray(item.followUpQuestions)
            ? item.followUpQuestions
            : [],
        citations: Array.isArray(item.citations) ? item.citations : [],
        status: "ok",
        fromHistory: true,
      };
    })
    .filter(Boolean);
}
