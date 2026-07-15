import { escapeHtml } from "../../utils/html.js";
import { t } from "../../i18n/index.js";
import { assistantIconImg } from "./assistantIcon.js";

export function ChatLoading() {
  return `
    <div class="assistant-msg assistant-msg--assistant assistant-msg--loading" aria-live="polite" aria-busy="true">
      <div class="assistant-avatar" aria-hidden="true">
        ${assistantIconImg({ className: "assistant-avatar-img" })}
      </div>
      <div class="assistant-bubble assistant-bubble--assistant">
        <div class="assistant-typing" aria-label="${escapeHtml(t("assistant.thinking"))}">
          <span></span><span></span><span></span>
        </div>
      </div>
    </div>
  `;
}
