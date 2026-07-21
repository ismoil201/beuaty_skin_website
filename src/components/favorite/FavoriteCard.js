import { CONFIG } from "../../config/config.js";
import { escapeHtml } from "../../utils/html.js";
import { numberOrZero } from "../../utils/productMapper.js";
import { formatPrice } from "../../utils/format.js";
import { getCurrentLanguage } from "../../i18n/index.js";

function formatRating(value) {
  const locale = getCurrentLanguage() === "uz" ? "uz-UZ" : getCurrentLanguage();
  return numberOrZero(value).toLocaleString(locale, {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
}

export function FavoriteCard({ product, categoryLabel = "", favoritesTitle = "Favorites" }) {
  const rating = formatRating(product.ratingAvg);
  const reviews = numberOrZero(product.reviewCount);
  return `
    <div class="app-fav-card" data-product="${escapeHtml(product.id)}" data-screen="favorites" role="link" tabindex="0" aria-label="${escapeHtml(product.name)}">
      <div class="app-fav-media">
        <img src="${escapeHtml(product.image || CONFIG.placeholderImage)}" alt="${escapeHtml(product.name)}" loading="lazy" decoding="async" />
        <button class="app-fav-heart" type="button" data-favorite="${escapeHtml(product.id)}" aria-label="${escapeHtml(favoritesTitle)}" aria-pressed="true">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7-4.35-9.5-8.5C.8 9.6 2 6 5.2 6c1.9 0 3.2 1 3.8 2 .6-1 1.9-2 3.8-2 3.2 0 4.4 3.6 2.7 6.5C19 16.65 12 21 12 21Z"/></svg>
        </button>
      </div>
      <div class="app-fav-body">
        <div class="app-fav-price-row">
          ${product.discountPercent ? `<span class="app-fav-discount">-${product.discountPercent}%</span>` : ""}
          ${product.discountPercent ? `<span class="app-fav-old-price">${formatPrice(product.originalPrice)}</span>` : ""}
        </div>
        <p class="app-fav-price">${formatPrice(product.finalPrice)}</p>
        ${categoryLabel ? `<p class="app-fav-category">${escapeHtml(categoryLabel)}</p>` : ""}
        <h3 class="app-fav-name">${escapeHtml(product.name)}</h3>
        <div class="app-fav-rating">
          <span class="star" aria-hidden="true">★</span>
          <span>${rating}</span>
          <span class="count">(${reviews})</span>
          <span class="flags" aria-hidden="true">🇰🇷 🚚</span>
        </div>
      </div>
    </div>
  `;
}

export function FavoritesHeartIcon() {
  return `
    <img
      class="app-favorites-heart-img"
      src="/images/favorites-heart.png"
      alt=""
      width="96"
      height="96"
      decoding="async"
    />
  `;
}
