import { CONFIG } from "../../config/config.js";
import { escapeHtml } from "../../utils/html.js";
import { formatMoney } from "../../utils/format.js";

export function OrderStatusBadge({ statusLabel, statusModifier }) {
  return `
    <span class="app-orders-status app-orders-status--${statusModifier}">
      ${escapeHtml(statusLabel)}
    </span>
  `;
}

export function OrderListThumbs({ items = [] }) {
  if (!items.length) {
    return `<span class="app-orders-thumb app-orders-thumb--empty" aria-hidden="true"></span>`;
  }
  return items.slice(0, 6).map((item) => `
    <img
      src="${escapeHtml(item.image || CONFIG.placeholderImage)}"
      alt=""
      class="app-orders-thumb"
      loading="lazy"
      decoding="async"
    />
  `).join("");
}

export function OrderCard({
  order,
  statusBadgeHtml,
  thumbsHtml,
  orderLabel,
  itemsCountLabel,
  itemsLabel,
  totalLabel,
  addressLabel,
  viewDetailsLabel,
  lineCount,
  itemCount,
}) {
  const timestamp = order.createdAt ? String(order.createdAt) : "";
  return `
    <article class="app-orders-card">
      <div class="app-orders-card-top">
        <span class="app-orders-timestamp">${escapeHtml(timestamp)}</span>
        ${statusBadgeHtml}
      </div>
      <div class="app-orders-thumbs">${thumbsHtml}</div>
      <h3 class="app-orders-card-title">
        ${escapeHtml(orderLabel)} #${escapeHtml(order.id)} · ${escapeHtml(itemsCountLabel)}
      </h3>
      <p class="app-orders-card-meta">${escapeHtml(itemsLabel)}</p>
      <div class="app-orders-card-total">
        <span>${escapeHtml(totalLabel)}</span>
        <strong>${formatMoney(order.totalAmount)}</strong>
      </div>
      <p class="app-orders-card-name">${escapeHtml(order.fullName || "")}</p>
      <p class="app-orders-card-phone">${escapeHtml(order.phone || "")}</p>
      <p class="app-orders-card-address">${escapeHtml(addressLabel)} ${escapeHtml(order.address || "")}</p>
      <button class="app-orders-details-btn" data-order-detail="${escapeHtml(order.id)}" type="button">
        ${escapeHtml(viewDetailsLabel)}
      </button>
    </article>
  `;
}
