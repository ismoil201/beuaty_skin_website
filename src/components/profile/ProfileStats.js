import { escapeHtml } from "../../utils/html.js";

export function ProfileStatCard({ action, icon, label, value = "" }) {
  const valueHtml = value !== "" && value !== null && value !== undefined
    ? `<strong class="app-profile-stat-value">${escapeHtml(String(value))}</strong>`
    : "";
  return `
    <button class="app-profile-stat" type="button" data-profile-action="${escapeHtml(action)}">
      <span class="app-profile-stat-icon app-profile-stat-icon--${escapeHtml(action)}">${icon}</span>
      <span class="app-profile-stat-label">${escapeHtml(label)}</span>
      ${valueHtml}
    </button>
  `;
}

export function ProfileStats({ stats = [] }) {
  return `
    <section class="app-profile-stats">
      ${stats.map((stat) => ProfileStatCard(stat)).join("")}
    </section>
  `;
}
