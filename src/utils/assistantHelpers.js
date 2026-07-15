import { t } from "../i18n/index.js";

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

/**
 * Supported action types for CTA buttons.
 * TODO: Confirm exact action `type` strings with the Spring Boot assistant API contract.
 * Only whitelisted types are rendered — unknown types are ignored (not invented).
 */
export const SUPPORTED_ASSISTANT_ACTIONS = Object.freeze({
  view_product: "view_product",
  open_product: "open_product",
  add_to_cart: "add_to_cart",
  open_cart: "open_cart",
});

export function isSupportedAssistantAction(type) {
  return Object.values(SUPPORTED_ASSISTANT_ACTIONS).includes(String(type || "").toLowerCase());
}

export function normalizeAssistantAction(action = {}) {
  const type = String(action.type || action.action_type || "").toLowerCase();
  if (!isSupportedAssistantAction(type)) return null;
  return {
    type,
    label: action.label || action.title || action.text || type,
    productId: action.product_id ?? action.productId ?? null,
    variantId: action.variant_id ?? action.variantId ?? null,
    raw: action,
  };
}

/** Normalize history payloads — shape beyond the query contract is not fully documented. */
export function normalizeHistoryMessages(payload) {
  // TODO: Confirm exact history response schema with backend docs.
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
      if (!text && !Array.isArray(item.products)) return null;
      return {
        id: item.id || `hist-${index}-${Date.now()}`,
        role: isUser ? "user" : isAssistant ? "assistant" : isUser ? "user" : "assistant",
        content: text,
        products: Array.isArray(item.products) ? item.products : [],
        actions: Array.isArray(item.actions) ? item.actions : [],
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
