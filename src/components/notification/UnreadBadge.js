import { escapeHtml } from "../../utils/html.js";

export function UnreadBadge({ count = 0, className = "app-profile-notify-badge" }) {
  if (count <= 0) return "";
  const text = count > 99 ? "99+" : String(count);
  return `<span class="${escapeHtml(className)}">${escapeHtml(text)}</span>`;
}

export function UnreadCountBadge({ count = 0, hiddenWhenZero = true }) {
  if (hiddenWhenZero && count <= 0) return { text: "0", hidden: true };
  return { text: String(count), hidden: false };
}
