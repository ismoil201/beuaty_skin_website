import { escapeHtml } from "../../utils/html.js";
import { t } from "../../i18n/index.js";

export function ReviewImages({ imageUrls = [] } = {}) {
  const urls = Array.isArray(imageUrls) ? imageUrls.filter(Boolean).slice(0, 5) : [];
  if (!urls.length) return "";
  return `
    <div class="review-images">
      ${urls
        .map(
          (url) =>
            `<button class="review-image-btn" type="button" data-review-photo="${escapeHtml(url)}">
              <img src="${escapeHtml(url)}" alt="${escapeHtml(t("reviews.imageAlt"))}" loading="lazy" decoding="async" />
            </button>`
        )
        .join("")}
    </div>
  `;
}
