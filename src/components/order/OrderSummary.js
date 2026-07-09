import { escapeHtml } from "../../utils/html.js";
import { formatMoney } from "../../utils/format.js";

export function OrderSummary({
  lineCount,
  itemCount,
  totalAmount,
  goodsLabel,
  totalAmountLabel,
}) {
  return `
    <div class="app-orders-detail-summary">
      <div class="app-orders-detail-summary-row">
        <span>${escapeHtml(goodsLabel)}</span>
        <strong>${escapeHtml(lineCount || itemCount)}</strong>
      </div>
      <div class="app-orders-detail-summary-row">
        <span>${escapeHtml(totalAmountLabel)}</span>
        <strong>${formatMoney(totalAmount)}</strong>
      </div>
    </div>
  `;
}

export function OrderDetailStatusPill({ status = "NEW" }) {
  const key = String(status || "NEW").toUpperCase();
  return `
    <span class="app-orders-detail-status-pill">
      <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
      ${escapeHtml(key)}
    </span>
  `;
}
