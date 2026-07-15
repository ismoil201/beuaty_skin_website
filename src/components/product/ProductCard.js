import { escapeHtml } from "../../utils/html.js";
import { numberOrZero } from "../../utils/productMapper.js";
import { formatPrice } from "../../utils/format.js";
import { ProductBadges } from "../common/Badge.js";
import { RatingLine } from "../common/Rating.js";

/**
 * Marketplace product card — Uzum-inspired vertical layout.
 */
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
    adding = "Adding...",
    addToCart = "Add to cart",
  } = labels;

  const name = product.name || "Product";
  const hasDiscount = numberOrZero(product.discountPercent) > 0;

  return `
    <article class="product-card" data-product="${escapeHtml(product.id)}" data-screen="${escapeHtml(screen)}" data-position="${escapeHtml(position)}" role="link" tabindex="0" aria-label="${escapeHtml(name)}">
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
        <img class="product-image" src="${escapeHtml(product.image)}" alt="${escapeHtml(name)}" loading="lazy" decoding="async" />
        ${outOfStock ? `<span class="product-oos-badge">Omborda yo'q</span>` : ""}
        <div class="card-overlay">
          <button class="icon-button ${isCompared ? "active" : ""}" data-compare="${escapeHtml(product.id)}" type="button" aria-label="Compare" aria-pressed="${isCompared}">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 3h5v5M4 20 21 3M21 16v5h-5M15 15l6 6M4 4l5 5"/></svg>
          </button>
        </div>
      </div>
      <div class="product-info">
        <h3>${escapeHtml(name)}</h3>
        ${RatingLine({ ratingAvg: product.ratingAvg, reviewCount: product.reviewCount || 0 })}
        <div class="price-row">
          <div class="price-stack">
            <span class="price-current">${formatPrice(product.finalPrice)}</span>
            ${hasDiscount ? `<span class="old-price">${formatPrice(product.originalPrice)}</span>` : ""}
          </div>
          <button
            class="product-cart-fab primary-button ${isAdding ? "loading" : ""}"
            data-add="${escapeHtml(product.id)}"
            type="button"
            aria-label="${escapeHtml(addToCart)}"
            ${outOfStock ? "disabled" : ""}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6h15l-1.5 9h-12z"/><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M6 6 5 3H2"/></svg>
          </button>
        </div>
      </div>
      <div class="card-actions">
        <button class="primary-button ${isAdding ? "loading" : ""}" data-add="${escapeHtml(product.id)}" type="button" ${outOfStock ? "disabled" : ""}>
          ${escapeHtml(isAdding ? adding : addToCart)}
        </button>
      </div>
    </article>
  `;
}
