import { escapeHtml } from "../../utils/html.js";
import { renderSafeMarkdown } from "../../utils/assistantMarkdown.js";
import { AssistantProductCard } from "./AssistantProductCard.js";
import { SuggestionChips } from "./SuggestionChips.js";
import { ActionButtons } from "./ActionButtons.js";
import { CitationsBlock } from "./Citations.js";
import { ChatError } from "./ChatError.js";
import { t } from "../../i18n/index.js";

export function UserMessage({ message }) {
  const failed = message.status === "error";
  return `
    <div class="assistant-msg assistant-msg--user ${failed ? "is-failed" : ""}" data-message-id="${escapeHtml(message.id)}">
      <div class="assistant-bubble assistant-bubble--user">
        <p>${escapeHtml(message.content)}</p>
      </div>
      ${failed ? ChatError({
        message: message.errorMessage || t("assistant.errorGeneric"),
        retryId: message.id,
      }) : ""}
    </div>
  `;
}

export function AssistantMessage({
  message,
  isAuthenticated = false,
  favoriteIds = new Set(),
  citationsOpen = false,
}) {
  const productsHtml = (message.products || [])
    .map((product) =>
      AssistantProductCard({
        product,
        isAuthenticated,
        isFavorite: favoriteIds.has(String(product.id)),
      })
    )
    .join("");

  return `
    <div class="assistant-msg assistant-msg--assistant" data-message-id="${escapeHtml(message.id)}">
      <div class="assistant-avatar" aria-hidden="true">
        <svg viewBox="0 0 24 24"><path d="M12 2a7 7 0 0 1 7 7c0 3-2 5.5-4.5 6.5V18h-5v-2.5C7 14.5 5 12 5 9a7 7 0 0 1 7-7Zm-2 18h4v2h-4v-2Z"/></svg>
      </div>
      <div class="assistant-msg-body">
        <div class="assistant-bubble assistant-bubble--assistant">
          <div class="assistant-md">${renderSafeMarkdown(message.content)}</div>
        </div>
        ${productsHtml ? `<div class="assistant-products">${productsHtml}</div>` : ""}
        ${ActionButtons({ actions: message.actions || [] })}
        ${CitationsBlock({ citations: message.citations || [], messageId: message.id, open: citationsOpen })}
        ${SuggestionChips({ questions: message.followUpQuestions || [] })}
      </div>
    </div>
  `;
}

export function ChatMessage(props) {
  if (props.message?.role === "user") return UserMessage(props);
  return AssistantMessage(props);
}
