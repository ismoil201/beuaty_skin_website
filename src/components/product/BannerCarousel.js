import { escapeHtml } from "../../utils/html.js";

export function BannerCarousel({ banners = [] }) {
  if (!banners.length) return "";

  return `
    <button class="banner-arrow prev" data-banner-nav="prev" type="button" aria-label="Oldingi banner">‹</button>
    <div class="banner-track">
      ${banners.map((banner) => `
        <article class="banner-card ${banner.imageUrl ? "has-image" : ""}" data-banner-link-type="${escapeHtml(banner.linkType)}" data-banner-link-id="${escapeHtml(banner.linkId ?? "")}">
          ${banner.imageUrl ? `<img src="${escapeHtml(banner.imageUrl)}" alt="${escapeHtml(banner.title || "Banner")}" />` : `
          <div>
            <strong>${escapeHtml(banner.title || "BEAUTY SKIN KOREA")}</strong>
            ${banner.subtitle ? `<p>${escapeHtml(banner.subtitle)}</p>` : ""}
          </div>`}
        </article>
      `).join("")}
    </div>
    <button class="banner-arrow next" data-banner-nav="next" type="button" aria-label="Keyingi banner">›</button>
    <div class="banner-dots" role="tablist" aria-label="Banner slides">
      ${banners.map((_, index) => `
        <button
          class="banner-dot ${index === 0 ? "active" : ""}"
          type="button"
          data-banner-dot="${index}"
          role="tab"
          aria-label="Banner ${index + 1}"
          aria-selected="${index === 0 ? "true" : "false"}"
        ></button>
      `).join("")}
    </div>
  `;
}
