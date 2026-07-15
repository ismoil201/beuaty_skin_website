import { escapeHtml } from "../../utils/html.js";
import { normalizeAssistantAction } from "../../utils/assistantHelpers.js";

export function ActionButtons({ actions = [] }) {
  const supported = (actions || [])
    .map((action) => normalizeAssistantAction(action))
    .filter(Boolean);
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
        >
          ${escapeHtml(action.label)}
        </button>`
        )
        .join("")}
    </div>
  `;
}
