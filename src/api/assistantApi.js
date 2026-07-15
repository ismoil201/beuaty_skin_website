import { buildApiUrl } from "./apiClient.js";
import { getToken } from "../utils/storage.js";
import { getApiErrorMessage, parseResponseBody } from "../utils/errorHandler.js";
import { isDevMode } from "../config/env.js";

const ASSISTANT_TIMEOUT_MS = 60_000;

/**
 * Dedicated assistant fetch — preserves snake_case contracts and exposes HTTP status
 * for friendly retry messaging (400 / 401 / 429 / 500 / 503 / timeout / network).
 */
async function assistantFetch(path, { method = "GET", body, query, timeoutMs = ASSISTANT_TIMEOUT_MS } = {}) {
  const url = buildApiUrl(path, query);
  const headers = {
    Accept: "application/json",
    ...(body ? { "Content-Type": "application/json" } : {}),
  };
  const token = getToken();
  if (token) headers.Authorization = `Bearer ${token}`;

  const controller = new AbortController();
  let timedOut = false;
  const timeoutId =
    timeoutMs > 0
      ? setTimeout(() => {
          timedOut = true;
          controller.abort();
        }, timeoutMs)
      : null;

  try {
    if (isDevMode()) {
      console.info("[ASSISTANT REQUEST]", { path, method, url, body, query });
    }

    const response = await fetch(url, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
      signal: controller.signal,
    });
    const text = await response.text();
    const payload = text ? parseResponseBody(text) : null;

    if (isDevMode()) {
      console.info("[ASSISTANT RESPONSE]", { url, status: response.status, payload });
    }

    if (!response.ok) {
      return {
        ok: false,
        status: response.status,
        data: null,
        error: getApiErrorMessage(payload, response.status),
      };
    }

    return { ok: true, status: response.status, data: payload, error: null };
  } catch (error) {
    if (error?.name === "AbortError") {
      return {
        ok: false,
        status: timedOut ? 408 : 0,
        data: null,
        error: timedOut ? "timeout" : "aborted",
      };
    }
    return { ok: false, status: 0, data: null, error: "network" };
  } finally {
    if (timeoutId) clearTimeout(timeoutId);
  }
}

/** POST /api/assistant/chat — snake_case request body as documented. */
export function sendAssistantMessage(payload) {
  return assistantFetch("/api/assistant/chat", {
    method: "POST",
    body: payload,
  });
}

/** POST /api/assistant/reset */
export function resetAssistantConversation(payload) {
  return assistantFetch("/api/assistant/reset", {
    method: "POST",
    body: payload,
  });
}

/** GET /api/assistant/history?conversationId=&userId= */
export function getAssistantHistory({ conversationId, userId } = {}) {
  return assistantFetch("/api/assistant/history", {
    method: "GET",
    query: {
      conversationId,
      ...(userId ? { userId } : {}),
    },
  });
}
