import { escapeHtml } from "../../utils/html.js";
import { formatPrice } from "../../utils/format.js";
import { numberOrZero, normalizeProduct } from "../../utils/productMapper.js";
import { StockBadge } from "../common/StockBadge.js";
import { RatingInline } from "../common/Rating.js";
import { t } from "../../i18n/index.js";
import { CONFIG } from "../../config/config.js";

/**
 * Compact product card for assistant recommendations.
 * Uses snake_case-friendly fields via normalizeProduct.
 */
export function AssistantProductCard({
  product: rawProduct,
  isAuthenticated = false,
  isFavorite = false,
}) {
  const product = normalizeProduct(rawProduct || {});
  const stock = numberOrZero(product.stock);
  const outOfStock = stock === 0;
  const hasDiscount =
    product.originalPrice > product.finalPrice && product.originalPrice > 0;
  const image = product.image || CONFIG.placeholderImage;

  return `
    <article class="assistant-product-card" data-assistant-product="${escapeHtml(product.id)}">
      <button class="assistant-product-media" type="button" data-product="${escapeHtml(product.id)}" aria-label="${escapeHtml(product.name)}">
        <img src="${escapeHtml(image)}" alt="${escapeHtml(product.name)}" loading="lazy" decoding="async" />
      </button>
      <div class="assistant-product-info">
        <span class="assistant-product-brand">${escapeHtml(product.brand || "")}</span>
        <h4 class="assistant-product-name">${escapeHtml(product.name)}</h4>
        <div class="assistant-product-price">
          <strong>${formatPrice(product.finalPrice)}</strong>
          ${hasDiscount ? `<span class="old-price">${formatPrice(product.originalPrice)}</span>` : ""}
        </div>
        ${RatingInline({ ratingAvg: product.ratingAvg, reviewCount: product.reviewCount || 0 })}
        <div class="assistant-product-stock">
          ${StockBadge({
            stock,
            lowStockLabel: t("product.lowStock"),
            outOfStockLabel: t("product.outOfStock"),
          }) || (stock > 0
            ? `<span class="assistant-in-stock">${escapeHtml(t("assistant.inStock"))}</span>`
            : "")}
        </div>
        <div class="assistant-product-actions">
          <button class="secondary-button" type="button" data-product="${escapeHtml(product.id)}">
            ${escapeHtml(t("assistant.viewProduct"))}
          </button>
          <button class="primary-button" type="button" data-add="${escapeHtml(product.id)}" ${outOfStock ? "disabled" : ""}>
            ${escapeHtml(t("assistant.addToCart"))}
          </button>
          ${isAuthenticated
            ? `<button class="icon-button ${isFavorite ? "active" : ""}" type="button" data-favorite="${escapeHtml(product.id)}" aria-label="${escapeHtml(t("favorites.title"))}" aria-pressed="${isFavorite}">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg>
              </button>`
            : ""}
        </div>
      </div>
    </article>
  `;
}
