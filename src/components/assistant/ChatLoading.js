import { escapeHtml } from "../../utils/html.js";
import { t } from "../../i18n/index.js";

export function ChatLoading() {
  return `
    <div class="assistant-msg assistant-msg--assistant assistant-msg--loading" aria-live="polite" aria-busy="true">
      <div class="assistant-avatar" aria-hidden="true">
        <svg viewBox="0 0 24 24"><path d="M12 2a7 7 0 0 1 7 7c0 3-2 5.5-4.5 6.5V18h-5v-2.5C7 14.5 5 12 5 9a7 7 0 0 1 7-7Zm-2 18h4v2h-4v-2Z"/></svg>
      </div>
      <div class="assistant-bubble assistant-bubble--assistant">
        <div class="assistant-typing" aria-label="${escapeHtml(t("assistant.thinking"))}">
          <span></span><span></span><span></span>
        </div>
      </div>
    </div>
  `;
}
