import { escapeHtml } from "../../utils/html.js";

export function Badge({ text, className = "badge" }) {
  if (!text) return "";
  return `<span class="${escapeHtml(className)}">${escapeHtml(text)}</span>`;
}

export function ProductBadges({ discountPercent, todayDeal, isNew, todayDealLabel }) {
  return `
    <div class="badge-row">
      ${discountPercent ? `<span class="badge ds-badge--sale">-${discountPercent}%</span>` : ""}
      ${todayDeal ? `<span class="badge today ds-badge--deal">${escapeHtml(todayDealLabel)}</span>` : ""}
      ${isNew ? `<span class="badge ds-badge--new">NEW</span>` : ""}
    </div>
  `;
}
