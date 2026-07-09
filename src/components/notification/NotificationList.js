export function NotificationList({ itemsHtml = "" }) {
  return `
    <div class="notifications-list">
      ${itemsHtml}
    </div>
  `;
}

export function NotificationListSkeleton() {
  return `
    <div class="notifications-loading">
      <div class="skeleton-card"></div>
      <div class="skeleton-card"></div>
    </div>
  `;
}

import { escapeHtml } from "../../utils/html.js";

export function NotificationListEmpty({ title, message = "", retryLabel = "" }) {
  return `
    <div class="notifications-empty">
      <strong>${escapeHtml(title)}</strong>
      ${message ? `<p>${escapeHtml(message)}</p>` : ""}
      ${retryLabel ? `<button class="secondary-button" data-notifications-retry type="button">${escapeHtml(retryLabel)}</button>` : ""}
    </div>
  `;
}
