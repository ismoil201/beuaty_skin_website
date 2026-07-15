import { escapeHtml } from "../../utils/html.js";
import { t } from "../../i18n/index.js";

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
        <svg viewBox="0 0 24 24"><path d="M12 2a7 7 0 0 1 7 7c0 3-2 5.5-4.5 6.5V18h-5v-2.5C7 14.5 5 12 5 9a7 7 0 0 1 7-7Zm-2 18h4v2h-4v-2Z"/></svg>
      </div>
      <h3>${escapeHtml(t("assistant.emptyTitle"))}</h3>
      <p>${escapeHtml(t("assistant.emptyHint"))}</p>
    </div>
  `;
}
