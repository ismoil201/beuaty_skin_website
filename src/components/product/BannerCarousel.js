import { escapeHtml } from "../../utils/html.js";

export function BannerCarousel({ banners = [] }) {
  if (!banners.length) return "";

  return `
    <button class="banner-arrow prev" data-banner-nav="prev" type="button" aria-label="Oldingi banner">‹</button>
    <div class="banner-track">
      ${banners.map((banner) => {
        const linkType = String(banner.linkType || "NONE").toUpperCase();
        const clickable = linkType === "PRODUCT" || linkType === "CATEGORY";
        const title = String(banner.title || "").trim();
        const subtitle = String(banner.subtitle || "").trim();
        const hasText = Boolean(title || subtitle);
        return `
        <article
          class="banner-card ${banner.imageUrl ? "has-image" : ""} ${clickable ? "is-clickable" : "is-static"}"
          data-banner-link-type="${escapeHtml(linkType)}"
          data-banner-link-id="${escapeHtml(banner.linkId ?? "")}"
          ${clickable ? 'role="link" tabindex="0"' : 'aria-disabled="true"'}
        >
          ${banner.imageUrl ? `<img src="${escapeHtml(banner.imageUrl)}" alt="${escapeHtml(title || "Banner")}" />` : ""}
          ${hasText || !banner.imageUrl ? `
          <div class="banner-card-copy">
            <strong>${escapeHtml(title || (!banner.imageUrl ? "BEAUTY SKIN KOREA" : ""))}</strong>
            ${subtitle ? `<p>${escapeHtml(subtitle)}</p>` : ""}
          </div>` : ""}
        </article>
      `;
      }).join("")}
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
