import { CONFIG } from "../../config/config.js";
import { escapeHtml } from "../../utils/html.js";
import { formatMoney } from "../../utils/format.js";
import { getLocalizedBusinessMessage } from "../../utils/errorCodes.js";
import { getCurrentLanguage, t } from "../../i18n/index.js";

export function OrderItem({
  item,
  order = {},
  canReview = false,
  writeReviewLabel = "Write review",
  afterDeliveryHint = "Available after delivery",
}) {
  return `
    <article class="order-item">
      <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}" />
      <div>
        <strong>${escapeHtml(item.name)}</strong>
        <p class="hint">${item.variantLabel ? escapeHtml(item.variantLabel) : "Variant"} · x${item.quantity}</p>
        ${canReview ? `
          <button class="secondary-button order-review-button" data-order-write-review="${escapeHtml(item.productId)}" data-review-order="${escapeHtml(order.id)}" data-review-name="${escapeHtml(item.name)}" type="button">${escapeHtml(writeReviewLabel)}</button>
        ` : item.productId ? `<p class="hint">${escapeHtml(afterDeliveryHint)}</p>` : ""}
        ${renderReturnControls(item)}
      </div>
      <strong>${formatMoney(item.lineTotal || item.unitPrice * item.quantity)}</strong>
    </article>
  `;
}

export function OrderDetailItem({ item }) {
  return `
    <article class="app-orders-detail-product">
      <img src="${escapeHtml(item.image || CONFIG.placeholderImage)}" alt="${escapeHtml(item.name)}" loading="lazy" decoding="async" />
      <div>
        <strong>${escapeHtml(item.name)}</strong>
        <p class="app-orders-detail-muted">x${item.quantity}</p>
        ${renderReturnControls(item)}
      </div>
    </article>
  `;
}

function renderReturnControls(item = {}) {
  if (item.returnable === true) {
    return `
      <button
        class="secondary-button order-return-button"
        type="button"
        data-order-return="${escapeHtml(item.id)}"
      >${escapeHtml(t("orders.requestReturn"))}</button>
    `;
  }

  if (item.returnBlockedReason) {
    return `
      <p class="hint order-return-blocked">
        ${escapeHtml(getLocalizedBusinessMessage(item.returnBlockedReason, getCurrentLanguage()))}
      </p>
    `;
  }

  return "";
}
