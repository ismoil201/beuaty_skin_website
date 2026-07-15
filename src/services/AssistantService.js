import {
  sendAssistantMessage,
  resetAssistantConversation,
  getAssistantHistory,
} from "../api/assistantApi.js";
import {
  createConversationId,
  getPersistedConversationId,
  persistConversationId,
  clearPersistedConversationId,
  getAssistantSessionId,
  getAssistantLocale,
  getAssistantTimezone,
  createMessageId,
} from "../utils/assistantIds.js";
import {
  getAssistantErrorMessage,
  normalizeHistoryMessages,
  extractAssistantProducts,
  extractAssistantActions,
} from "../utils/assistantHelpers.js";
import { assistantStore } from "../stores/assistantStore.js";
import { authStore } from "../stores/authStore.js";
import { AuthService } from "./AuthService.js";

/**
 * Chat state manager + API orchestration for the shopping assistant.
 * Keeps conversation_id / session_id persisted across refreshes.
 */
export const AssistantService = {
  ensureIds() {
    const sessionId = getAssistantSessionId();
    let conversationId = assistantStore.conversationId || getPersistedConversationId();
    if (!conversationId) {
      conversationId = createConversationId();
      persistConversationId(conversationId);
    }
    assistantStore.sessionId = sessionId;
    assistantStore.conversationId = conversationId;
    return { conversationId, sessionId };
  },

  buildChatPayload(message) {
    const { conversationId, sessionId } = this.ensureIds();
    const payload = {
      message: String(message || "").trim(),
      conversation_id: conversationId,
      session_id: sessionId,
      locale: getAssistantLocale(),
      timezone: getAssistantTimezone(),
      context: {},
    };
    if (AuthService.isLoggedIn() && authStore.user?.id != null) {
      payload.user_id = String(authStore.user.id);
    }
    return payload;
  },

  async loadHistory() {
    const { conversationId } = this.ensureIds();
    if (!conversationId) return { success: true, messages: [] };

    const userId =
      AuthService.isLoggedIn() && authStore.user?.id != null
        ? String(authStore.user.id)
        : undefined;

    const result = await getAssistantHistory({ conversationId, userId });
    if (!result.ok) {
      // History failure should not wipe local conversation — soft-fail.
      return {
        success: false,
        status: result.status,
        error: getAssistantErrorMessage(result.status, result.error),
        messages: [],
      };
    }

    const messages = normalizeHistoryMessages(result.data);
    if (result.data?.conversation_id) {
      assistantStore.conversationId = result.data.conversation_id;
      persistConversationId(result.data.conversation_id);
    }
    if (result.data?.session_id) {
      assistantStore.sessionId = result.data.session_id;
    }
    return { success: true, messages };
  },

  async send(messageText, { clientMessageId } = {}) {
    const text = String(messageText || "").trim();
    if (!text) return { success: false, empty: true };

    const payload = this.buildChatPayload(text);
    const result = await sendAssistantMessage(payload);

    if (!result.ok) {
      return {
        success: false,
        status: result.status,
        error: getAssistantErrorMessage(result.status, result.error),
        clientMessageId,
      };
    }

    const data = result.data || {};
    if (data.conversation_id) {
      assistantStore.conversationId = data.conversation_id;
      persistConversationId(data.conversation_id);
    }
    if (data.session_id) {
      assistantStore.sessionId = data.session_id;
    }

    const products = extractAssistantProducts(data);
    const actions = extractAssistantActions(data);

    const assistantMessage = {
      id: createMessageId(),
      role: "assistant",
      content: data.assistant_message || "",
      products,
      actions,
      followUpQuestions: Array.isArray(data.follow_up_questions) ? data.follow_up_questions : [],
      citations: Array.isArray(data.citations) ? data.citations : [],
      intent: data.intent || "",
      toolCalls: Array.isArray(data.tool_calls) ? data.tool_calls : [],
      status: "ok",
    };

    return {
      success: true,
      assistantMessage,
      conversationId: data.conversation_id || assistantStore.conversationId,
      sessionId: data.session_id || assistantStore.sessionId,
    };
  },

  async reset() {
    const conversationId = assistantStore.conversationId || getPersistedConversationId();
    const payload = {};
    if (conversationId) payload.conversation_id = conversationId;
    if (AuthService.isLoggedIn() && authStore.user?.id != null) {
      payload.user_id = String(authStore.user.id);
    }

    if (conversationId) {
      await resetAssistantConversation(payload);
    }

    const nextId = createConversationId();
    clearPersistedConversationId();
    persistConversationId(nextId);
    assistantStore.conversationId = nextId;
    assistantStore.sessionId = getAssistantSessionId();
    assistantStore.messages = [];
    assistantStore.followUpQuestions = [];
    assistantStore.error = "";
    assistantStore.errorStatus = null;
    assistantStore.citationsOpen = {};
    assistantStore.pendingRetryId = null;
    assistantStore._bootstrapped = true;

    return { conversationId: nextId };
  },
};
