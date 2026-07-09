import { escapeHtml } from "../../utils/html.js";

export function EmptyState({ message, actionLabel = "", actionAttrs = 'data-show-all type="button"' }) {
  const action = actionLabel
    ? `<button class="secondary-button" ${actionAttrs}>${escapeHtml(actionLabel)}</button>`
    : "";
  return `
    <div class="empty-state">
      <strong>${escapeHtml(message)}</strong>
      ${action}
    </div>
  `;
}

export function mountEmptyState(container, options) {
  if (!container) return;
  container.innerHTML = EmptyState(options);
}
