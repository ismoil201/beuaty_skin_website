import { escapeHtml } from "../../utils/html.js";
import { Rating } from "../common/Rating.js";

export function ReviewSummary({ stats, distribution, reviewsLabel = "reviews" }) {
  return `
    <div class="reviews-summary-grid">
      <div class="reviews-avg">
        <strong>${stats.average.toFixed(1)}</strong>
        ${Rating({ rating: stats.average })}
        <p class="hint">${stats.count} ${escapeHtml(reviewsLabel)}</p>
      </div>
      <div class="rating-bars">
        ${distribution.map((d) => `
          <div class="rating-bar-row">
            <span>${d.star}★</span>
            <div class="rating-bar-track"><div class="rating-bar-fill" style="width:${d.pct}%"></div></div>
            <span>${d.count}</span>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}
