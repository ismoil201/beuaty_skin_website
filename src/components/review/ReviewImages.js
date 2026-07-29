import { escapeHtml } from "../../utils/html.js";

export function ReviewImages({ imageUrls = [] } = {}) {
  const urls = Array.isArray(imageUrls) ? imageUrls.filter(Boolean).slice(0, 5) : [];
  if (!urls.length) return "";
  return `
    <div class="review-images">
      ${urls
        .map(
          (url) =>
            `<img src="${escapeHtml(url)}" alt="Review image" loading="lazy" decoding="async" />`
        )
        .join("")}
    </div>
  `;
}
