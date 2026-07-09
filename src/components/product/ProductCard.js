import { escapeHtml } from "../../utils/html.js";
import { numberOrZero } from "../../utils/productMapper.js";
import { formatPrice } from "../../utils/format.js";
import { ProductBadges } from "../common/Badge.js";
import { StockBadge } from "../common/StockBadge.js";
import { RatingInline, RatingLine } from "../common/Rating.js";

export function ProductCard({
  product,
  screen = "home",
  position = 0,
  isFavorite = false,
  isCompared = false,
  isAdding = false,
  labels = {},
}) {
  const stock = numberOrZero(product.stock);
  const outOfStock = stock === 0;
  const {
    favoritesTitle = "Favorites",
    todayOnly = "Today only",
    lowStock = "Low stock",
    outOfStock: outOfStockLabel = "Out of stock",
    freeShipping = "Free shipping",
    quickView = "Quick view",
    compare = "Compare",
    sold = "",
    adding = "Adding...",
    addToCart = "Add to cart",
    viewDetails = "View details",
  } = labels;

  return `
    <article class="product-card" data-product="${escapeHtml(product.id)}" data-screen="${escapeHtml(screen)}" data-position="${escapeHtml(position)}" role="link" tabindex="0" aria-label="${escapeHtml(product.name)}">
      <div class="card-media">
        ${ProductBadges({
          discountPercent: product.discountPercent,
          todayDeal: product.todayDeal,
          isNew: product.isNew,
          todayDealLabel: todayOnly,
        })}
        <button class="icon-button favorite-float ${isFavorite ? "active" : ""}" data-favorite="${escapeHtml(product.id)}" type="button" aria-label="${escapeHtml(favoritesTitle)}" aria-pressed="${isFavorite}">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg>
        </button>
        <img class="product-image" src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" loading="lazy" decoding="async" />
        <div class="card-badges-bottom">
          ${StockBadge({ stock, lowStockLabel: lowStock, outOfStockLabel })}
          <span class="ds-badge ds-badge--delivery">${escapeHtml(freeShipping)}</span>
        </div>
        <div class="card-overlay">
          <button class="secondary-button" data-quick-view="${escapeHtml(product.id)}" type="button">${escapeHtml(quickView)}</button>
          <button class="icon-button ${isCompared ? "active" : ""}" data-compare="${escapeHtml(product.id)}" type="button" aria-label="${escapeHtml(compare)}" aria-pressed="${isCompared}">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 3h5v5M4 20 21 3M21 16v5h-5M15 15l6 6M4 4l5 5"/></svg>
          </button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-meta">
          <span class="brand-name">${escapeHtml(product.brand || product.category || "BEAUTY SKIN KOREA")}</span>
          ${RatingInline({ ratingAvg: product.ratingAvg, reviewCount: product.reviewCount || 0 })}
        </div>
        <h3>${escapeHtml(product.name)}</h3>
        <p>${escapeHtml(product.description || `${product.soldCount} dona sotilgan`)}</p>
        <div class="price-row">
          <span>${formatPrice(product.finalPrice)}</span>
          ${product.discountPercent ? `<span class="old-price">${formatPrice(product.originalPrice)}</span>` : ""}
        </div>
        ${RatingLine({ ratingAvg: product.ratingAvg, reviewCount: product.reviewCount || 0 })}
        <p class="hint">${escapeHtml(sold)}</p>
      </div>
      <div class="card-actions">
        <button class="primary-button ${isAdding ? "loading" : ""}" data-add="${escapeHtml(product.id)}" type="button" ${outOfStock ? "disabled" : ""}>
          ${escapeHtml(isAdding ? adding : addToCart)}
        </button>
        <button class="icon-button" data-detail="${escapeHtml(product.id)}" type="button" aria-label="${escapeHtml(viewDetails)}">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
        </button>
      </div>
    </article>
  `;
}
