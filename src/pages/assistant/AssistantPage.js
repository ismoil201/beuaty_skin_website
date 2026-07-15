import { assistantStore } from "../../stores/assistantStore.js";
import { favoriteStore } from "../../stores/favoriteStore.js";
import { els } from "../../utils/dom.js";
import { escapeHtml } from "../../utils/html.js";
import { t } from "../../i18n/index.js";
import { AuthService } from "../../services/AuthService.js";
import { ChatMessage } from "../../components/assistant/ChatMessage.js";
import { ChatLoading } from "../../components/assistant/ChatLoading.js";
import { ChatEmptyState, ChatError } from "../../components/assistant/ChatError.js";
import { SuggestionChips } from "../../components/assistant/SuggestionChips.js";
import { assistantIconImg } from "../../components/assistant/assistantIcon.js";

function renderMessages() {
  const messages = assistantStore.messages || [];
  const isAuthenticated = AuthService.isLoggedIn();
  const favoriteIds = favoriteStore.favoriteIds || new Set();

  if (assistantStore.historyLoading && !messages.length) {
    return `<div class="assistant-history-loading">${escapeHtml(t("assistant.loadingHistory"))}</div>`;
  }

  if (!messages.length && !assistantStore.loading) {
    return ChatEmptyState();
  }

  const list = messages
    .map((message) =>
      ChatMessage({
        message,
        isAuthenticated,
        favoriteIds,
      })
    )
    .join("");

  const loading = assistantStore.loading ? ChatLoading() : "";
  return `${list}${loading}`;
}

function renderComposer({ compact = false, draft = "", sendEnabled = false } = {}) {
  const disabled = assistantStore.loading;
  const canSend = sendEnabled && !disabled && Boolean(String(draft || "").trim());
  const placeholder = t("assistant.placeholder");
  return `
    <form class="assistant-composer" data-assistant-form novalidate>
      ${assistantStore.error && !assistantStore.messages.some((m) => m.status === "error")
        ? ChatError({ message: assistantStore.error })
        : ""}
      ${!compact && (assistantStore.followUpQuestions || []).length
        ? SuggestionChips({ questions: assistantStore.followUpQuestions })
        : ""}
      <div class="assistant-composer-row">
        <textarea
          class="assistant-input"
          data-assistant-input
          rows="1"
          placeholder="${escapeHtml(placeholder)}"
          aria-label="${escapeHtml(placeholder)}"
          ${disabled ? "disabled" : ""}
        >${escapeHtml(draft)}</textarea>
        <button
          class="primary-button assistant-send"
          type="submit"
          data-assistant-send
          ${canSend ? "" : "disabled"}
          aria-label="${escapeHtml(t("assistant.send"))}"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </button>
      </div>
      <p class="assistant-composer-hint">${escapeHtml(t("assistant.composerHint"))}</p>
    </form>
  `;
}

function captureComposerState(root) {
  const input = root?.querySelector?.("[data-assistant-input]");
  if (!input) return { draft: "", focused: false, selectionStart: null, selectionEnd: null };
  return {
    draft: input.value || "",
    focused: document.activeElement === input,
    selectionStart: input.selectionStart,
    selectionEnd: input.selectionEnd,
  };
}

function restoreComposerState(root, state) {
  const input = root?.querySelector?.("[data-assistant-input]");
  if (!input || !state) return;
  input.value = state.draft || "";
  input.style.height = "auto";
  input.style.height = `${Math.min(input.scrollHeight, 140)}px`;
  if (state.focused) {
    input.focus();
    if (state.selectionStart != null && state.selectionEnd != null) {
      try {
        input.setSelectionRange(state.selectionStart, state.selectionEnd);
      } catch {
        /* ignore */
      }
    }
  }
}

function renderShell({ mode = "widget", draft = "" } = {}) {
  const isPage = mode === "page";
  return `
    <div class="assistant-shell assistant-shell--${escapeHtml(mode)}">
      <header class="assistant-header">
        <div class="assistant-header-title">
          <span class="assistant-header-icon" aria-hidden="true">
            ${assistantIconImg({ className: "assistant-header-img" })}
          </span>
          <div>
            <h2>${escapeHtml(t("assistant.title"))}</h2>
            <p class="hint">${escapeHtml(t("assistant.subtitle"))}</p>
          </div>
        </div>
        <div class="assistant-header-actions">
          <button class="secondary-button" type="button" data-assistant-new-chat>
            ${escapeHtml(t("assistant.newChat"))}
          </button>
          ${isPage
            ? ""
            : `<button class="secondary-button" type="button" data-assistant-open-page>${escapeHtml(t("assistant.openFull"))}</button>
               <button class="icon-button" type="button" data-assistant-close aria-label="${escapeHtml(t("assistant.close"))}">
                 <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>
               </button>`}
        </div>
      </header>
      <div class="assistant-messages" data-assistant-messages>
        ${renderMessages()}
      </div>
      ${renderComposer({ compact: !isPage, draft, sendEnabled: Boolean(String(draft || "").trim()) })}
    </div>
  `;
}

function paintRoot(root, mode) {
  if (!root) return;
  const prev = captureComposerState(root);
  root.innerHTML = renderShell({ mode, draft: prev.draft });
  restoreComposerState(root, prev);
}

export const AssistantPage = {
  render() {
    paintRoot(els.assistantWidgetContent, "widget");
    if (els.assistantPageContent && !els.assistantPage?.hidden) {
      paintRoot(els.assistantPageContent, "page");
    }
  },

  renderPageOnly() {
    paintRoot(els.assistantPageContent, "page");
  },
};
