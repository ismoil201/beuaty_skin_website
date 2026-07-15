import { escapeHtml } from "../../utils/html.js";
import { renderSafeMarkdown } from "../../utils/assistantMarkdown.js";
import { AssistantProductCard } from "./AssistantProductCard.js";
import { SuggestionChips } from "./SuggestionChips.js";
import { ActionButtons } from "./ActionButtons.js";
import { CitationsBlock } from "./Citations.js";
import { ChatError } from "./ChatError.js";
import { assistantIconImg } from "./assistantIcon.js";
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
        ${assistantIconImg({ className: "assistant-avatar-img" })}
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
