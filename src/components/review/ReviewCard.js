import { escapeHtml } from "../../utils/html.js";
import { formatDateTime } from "../../utils/format.js";
import { Rating } from "../common/Rating.js";
import { ReviewImages } from "./ReviewImages.js";
import { t } from "../../i18n/index.js";

export function ReviewCard({
  review,
  helpful = false,
  verifiedLabel = t("reviews.verified"),
  noTextLabel = t("reviews.noText"),
  helpfulLabel = t("reviews.helpful"),
}) {
  const verified = Boolean(review.orderId);
  return `
    <article class="review-card-premium">
      <div class="review-head">
        <div>
          <strong>${escapeHtml(review.userName)}</strong>
          ${verified ? `<span class="review-verified">✓ ${escapeHtml(verifiedLabel)}</span>` : ""}
          <p class="hint">${formatDateTime(review.createdAt)}</p>
        </div>
        ${Rating({ rating: review.rating })}
      </div>
      <p>${escapeHtml(review.content || noTextLabel)}</p>
      ${review.imageUrls?.length ? ReviewImages({ imageUrls: review.imageUrls }) : ""}
      <button class="review-helpful ${helpful ? "active" : ""}" data-review-helpful="${escapeHtml(review.id)}" type="button">
        👍 ${escapeHtml(helpfulLabel)}${helpful ? " ✓" : ""}
      </button>
    </article>
  `;
}
