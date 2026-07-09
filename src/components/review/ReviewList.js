import { escapeHtml } from "../../utils/html.js";
import { formatDateTime } from "../../utils/format.js";
import { Rating } from "../common/Rating.js";

export function ReviewListItem({ item, starsHtml }) {
  const review = item.review;
  return `
    <article class="my-review-item">
      <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}" />
      <div>
        <strong>${escapeHtml(item.name)}</strong>
        <p class="hint">${escapeHtml(item.brand || "BEAUTY SKIN KOREA")} ${item.orderId ? `· Order #${escapeHtml(item.orderId)}` : ""}</p>
        ${review?.rating || review?.content ? `
          <div class="written-review">
            ${starsHtml || Rating({ rating: review.rating })}
            <p>${escapeHtml(review.content || "No text review.")}</p>
            <p class="hint">${formatDateTime(review.createdAt)}</p>
          </div>
        ` : "<p class=\"hint\">Review not written yet.</p>"}
      </div>
      <div class="review-action-cell">
        ${item.reviewable ? `
          <button class="secondary-button" data-write-review="${escapeHtml(item.productId)}" data-review-order="${escapeHtml(item.orderId)}" data-review-name="${escapeHtml(item.name)}" type="button">Write review</button>
        ` : review?.content || review?.rating ? "<span class=\"status-badge status-delivered\">Reviewed</span>" : "<span class=\"hint\">Not reviewable</span>"}
      </div>
    </article>
  `;
}

export function ReviewList({ itemsHtml = "" }) {
  return `<div class="my-reviews-list">${itemsHtml}</div>`;
}
