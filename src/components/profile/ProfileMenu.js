import { escapeHtml } from "../../utils/html.js";

export function ProfileMenuRow({ action, icon, label, trailing = "" }) {
  return `
    <button class="app-profile-menu-row" type="button" data-profile-action="${escapeHtml(action)}">
      <span class="app-profile-menu-icon" aria-hidden="true">${icon}</span>
      <span class="app-profile-menu-label">${escapeHtml(label)}</span>
      ${trailing ? `<span class="app-profile-menu-trailing">${trailing}</span>` : ""}
      <svg class="app-profile-menu-chevron" viewBox="0 0 24 24" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg>
    </button>
  `;
}

export function ProfileMenu({ rows = [] }) {
  return rows.map((row) => ProfileMenuRow(row)).join("");
}
