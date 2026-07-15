import { escapeHtml } from "../../utils/html.js";
import { t } from "../../i18n/index.js";
import { assistantIconImg } from "./assistantIcon.js";

export function ChatError({ message, retryId = "" }) {
  return `
    <div class="assistant-error" role="alert">
      <p>${escapeHtml(message || t("assistant.errorGeneric"))}</p>
      ${retryId
        ? `<button class="secondary-button" type="button" data-assistant-retry="${escapeHtml(retryId)}">${escapeHtml(t("assistant.retry"))}</button>`
        : `<button class="secondary-button" type="button" data-assistant-retry-last>${escapeHtml(t("assistant.retry"))}</button>`}
    </div>
  `;
}

export function ChatEmptyState() {
  return `
    <div class="assistant-empty">
      <div class="assistant-empty-icon" aria-hidden="true">
        ${assistantIconImg({ className: "assistant-empty-img" })}
      </div>
      <h3>${escapeHtml(t("assistant.emptyTitle"))}</h3>
      <p>${escapeHtml(t("assistant.emptyHint"))}</p>
    </div>
  `;
}
