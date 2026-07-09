import { escapeHtml } from "../../utils/html.js";

export function AnnouncementBar({ announcements = [], limit = 3 }) {
  return announcements.slice(0, limit).map((item) => `
    <article class="announcement-item ${item.type.toLowerCase()}">
      <strong>${escapeHtml(item.title || item.type)}</strong>
      <span>${escapeHtml(item.message)}</span>
    </article>
  `).join("");
}
