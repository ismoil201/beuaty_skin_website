import { escapeHtml } from "../../utils/html.js";
import { numberOrZero } from "../../utils/productMapper.js";

export function Rating({ rating, label = "Rating", className = "stars" }) {
  const safeRating = Math.min(5, Math.max(0, Math.round(numberOrZero(rating))));
  return `
    <span class="${escapeHtml(className)}" role="img" aria-label="${escapeHtml(label)} ${safeRating} out of 5">
      ${Array.from({ length: 5 }, (_, index) => `<span class="${index < safeRating ? "filled" : ""}">★</span>`).join("")}
    </span>
  `;
}

export function RatingInline({ ratingAvg, reviewCount = 0, className = "rating" }) {
  const rating = numberOrZero(ratingAvg);
  return `
    <span class="${escapeHtml(className)}">
      <span class="star" aria-hidden="true">★</span>
      ${rating.toFixed(1)}
      <span class="review-count">(${reviewCount})</span>
    </span>
  `;
}

export function RatingLine({ ratingAvg, reviewCount = 0 }) {
  if (!ratingAvg) return "";
  return `
    <div class="rating-line">
      <span class="star" aria-hidden="true">★</span>
      ${numberOrZero(ratingAvg).toFixed(1)}
      <span class="review-count">(${reviewCount})</span>
    </div>
  `;
}
