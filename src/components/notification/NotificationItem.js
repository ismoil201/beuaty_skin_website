import { escapeHtml } from "../../utils/html.js";
import { formatDateTime } from "../../utils/format.js";

export function NotificationItem({
  notification,
  updating = false,
  labels = {},
}) {
  const {
    unreadLabel = "Unread",
    readLabel = "Read",
    savingLabel = "Saving...",
    markReadLabel = "Mark read",
    typeLabel = "",
    typeIcon = "i",
  } = labels;

  return `
    <article class="notification-card ${notification.read ? "read" : "unread"} ${updating ? "loading" : ""}" data-notification-card="${escapeHtml(notification.id)}">
      <div class="notification-icon type-${escapeHtml(notification.type.toLowerCase())}" aria-hidden="true">${typeIcon}</div>
      <div>
        <div class="notification-head">
          <strong>${escapeHtml(notification.title)}</strong>
          ${notification.read ? "" : `<span class="unread-dot" aria-label="${escapeHtml(unreadLabel)}"></span>`}
        </div>
        <p>${escapeHtml(notification.message)}</p>
        <div class="notification-meta">
          <span>${escapeHtml(typeLabel)}</span>
          <span>${formatDateTime(notification.createdAt)}</span>
        </div>
      </div>
      <button class="secondary-button notification-read-button" data-notification-read="${escapeHtml(notification.id)}" ${notification.read || updating ? "disabled" : ""} type="button">
        ${notification.read ? escapeHtml(readLabel) : updating ? escapeHtml(savingLabel) : escapeHtml(markReadLabel)}
      </button>
    </article>
  `;
}

export function notificationTypeIcon(type) {
  const icons = { ORDER: "O", PROMO: "%", SYSTEM: "i" };
  return icons[type] || "i";
}
