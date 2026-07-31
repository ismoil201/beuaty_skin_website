import { escapeHtml } from "../../utils/html.js";
import { formatDateTime } from "../../utils/format.js";
import { Rating } from "../common/Rating.js";
import { ReviewImages } from "./ReviewImages.js";
import { t } from "../../i18n/index.js";

function initials(name) {
  const text = String(name || "U").trim();
  return (text.slice(0, 1) || "U").toUpperCase();
}

function attributeChecklist(rating) {
  const score = Number(rating) || 0;
  const items = [
    { label: t("reviews.attrScent"), good: score >= 3.5 },
    { label: t("reviews.attrMoisture"), good: score >= 4 },
    { label: t("reviews.attrTexture"), good: score >= 3 },
  ];
  return `
    <ul class="review-attr-list">
      ${items.map((item) => `
        <li class="${item.good ? "is-good" : "is-ok"}">
          <span>${item.good ? "●" : "○"}</span>
          ${escapeHtml(item.label)}
        </li>
      `).join("")}
    </ul>
  `;
}

export function ReviewCard({
  review,
  helpful = false,
  helpfulCount = 0,
  verifiedLabel = t("reviews.verified"),
  noTextLabel = t("reviews.noText"),
  helpfulLabel = t("reviews.helpful"),
  reportLabel = t("reviews.report"),
  expertLabel = t("reviews.expert"),
}) {
  const verified = Boolean(review.orderId);
  const expert = verified && Number(review.rating || 0) >= 4.5;
  const variantLabel = review.variantLabel || review.optionName || review.productOption || "";
  const count = Math.max(helpfulCount, Number(review.helpfulCount || 0), helpful ? 1 : 0);

  return `
    <article class="review-card-premium">
      <div class="review-head">
        <div class="review-user">
          <span class="review-avatar" aria-hidden="true">${escapeHtml(initials(review.userName))}</span>
          <div>
            <div class="review-user-line">
              <strong>${escapeHtml(review.userName || t("reviews.anonymous"))}</strong>
              ${expert ? `<span class="review-expert">${escapeHtml(expertLabel)}</span>` : ""}
              ${verified ? `<span class="review-verified">✓ ${escapeHtml(verifiedLabel)}</span>` : ""}
            </div>
            <p class="hint">${formatDateTime(review.createdAt)}</p>
          </div>
        </div>
        ${Rating({ rating: review.rating })}
      </div>
      ${variantLabel ? `<p class="review-variant">${escapeHtml(t("reviews.purchasedOption", { option: variantLabel }))}</p>` : ""}
      ${review.imageUrls?.length ? ReviewImages({ imageUrls: review.imageUrls }) : ""}
      <p class="review-body">${escapeHtml(review.content || noTextLabel)}</p>
      ${attributeChecklist(review.rating)}
      <div class="review-actions">
        <button class="review-helpful ${helpful ? "active" : ""}" data-review-helpful="${escapeHtml(review.id)}" type="button">
          ${escapeHtml(helpfulLabel)}${count ? ` (${count})` : ""}${helpful ? " ✓" : ""}
        </button>
        <button class="review-report" data-review-report="${escapeHtml(review.id)}" type="button">${escapeHtml(reportLabel)}</button>
      </div>
    </article>
  `;
}
