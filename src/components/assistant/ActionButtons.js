import { escapeHtml } from "../../utils/html.js";
import { normalizeAssistantActions } from "../../utils/assistantNormalize.js";

export function ActionButtons({ actions = [] }) {
  // Accept already-normalized or raw actions.
  const supported = normalizeAssistantActions(actions);
  if (!supported.length) return "";

  return `
    <div class="assistant-actions">
      ${supported
        .map(
          (action) => `
        <button
          class="secondary-button assistant-action-btn"
          type="button"
          data-assistant-action="${escapeHtml(action.type)}"
          data-assistant-action-product="${escapeHtml(action.productId ?? "")}"
          data-assistant-action-variant="${escapeHtml(action.variantId ?? "")}"
          data-assistant-action-category="${escapeHtml(action.category ?? "")}"
          data-assistant-action-brand="${escapeHtml(action.brand ?? "")}"
        >
          ${escapeHtml(action.label)}
        </button>`
        )
        .join("")}
    </div>
  `;
}
