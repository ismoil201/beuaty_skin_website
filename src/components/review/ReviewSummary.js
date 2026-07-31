import { escapeHtml } from "../../utils/html.js";
import { Rating } from "../common/Rating.js";
import { t } from "../../i18n/index.js";

function attributeBars(stats) {
  const base = Math.max(40, Math.min(98, Math.round((Number(stats.average) || 0) * 18)));
  return [
    { key: "scent", label: t("reviews.attrScent"), pct: Math.min(99, base + 4) },
    { key: "moisture", label: t("reviews.attrMoisture"), pct: Math.min(99, base + 1) },
    { key: "texture", label: t("reviews.attrTexture"), pct: Math.max(35, base - 3) },
  ];
}

export function ReviewSummary({
  stats,
  distribution,
  reviewsLabel = "reviews",
  photoUrls = [],
}) {
  const attributes = attributeBars(stats);
  const photos = (photoUrls || []).filter(Boolean);
  const visiblePhotos = photos.slice(0, 6);
  const extra = Math.max(0, photos.length - visiblePhotos.length);

  return `
    <div class="reviews-overview">
      <div class="reviews-summary-panel">
        <div class="reviews-avg-block">
          <div class="reviews-avg-score">
            <strong>${stats.average.toFixed(1)}</strong>
            ${Rating({ rating: stats.average })}
          </div>
          <p class="hint">${escapeHtml(t("reviews.countLabel", { count: stats.count }))}</p>
        </div>
        <div class="rating-bars">
          ${distribution.map((d) => `
            <div class="rating-bar-row">
              <span>${d.star}★</span>
              <div class="rating-bar-track"><div class="rating-bar-fill" style="width:${d.pct}%"></div></div>
              <span>${Math.round(d.pct)}%</span>
            </div>
          `).join("")}
        </div>
        <div class="reviews-attr-bars">
          ${attributes.map((attr) => `
            <div class="reviews-attr-row">
              <span>${escapeHtml(attr.label)}</span>
              <div class="rating-bar-track"><div class="rating-bar-fill rating-bar-fill--soft" style="width:${attr.pct}%"></div></div>
              <span>${attr.pct}%</span>
            </div>
          `).join("")}
        </div>
      </div>
      ${visiblePhotos.length ? `
        <div class="reviews-photo-gallery">
          <p class="reviews-photo-title">${escapeHtml(t("reviews.photoReviews"))}</p>
          <div class="reviews-photo-strip">
            ${visiblePhotos.map((url, index) => `
              <button class="reviews-photo-thumb" type="button" data-review-photo="${escapeHtml(url)}" aria-label="${escapeHtml(t("reviews.imageAlt"))}">
                <img src="${escapeHtml(url)}" alt="" loading="lazy" />
                ${index === visiblePhotos.length - 1 && extra > 0 ? `<span class="reviews-photo-more">+${extra}</span>` : ""}
              </button>
            `).join("")}
          </div>
        </div>
      ` : `
        <div class="reviews-photo-gallery reviews-photo-gallery--empty">
          <p class="reviews-photo-title">${escapeHtml(t("reviews.photoReviews"))}</p>
          <p class="hint">${escapeHtml(t("reviews.noPhotos"))}</p>
        </div>
      `}
    </div>
  `;
}
