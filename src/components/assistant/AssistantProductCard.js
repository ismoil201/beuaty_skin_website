import { escapeHtml } from "../../utils/html.js";
import { formatPrice } from "../../utils/format.js";
import { numberOrZero } from "../../utils/productMapper.js";
import { StockBadge } from "../common/StockBadge.js";
import { RatingInline } from "../common/Rating.js";
import { t } from "../../i18n/index.js";
import {
  normalizeAssistantProduct,
  PLACEHOLDER_IMAGE,
  assistantLog,
} from "../../utils/assistantNormalize.js";

/**
 * Compact product card for assistant recommendations.
 * Only reads normalized fields — never raw backend keys.
 */
export function AssistantProductCard({
  product: rawOrNormalized,
  isAuthenticated = false,
  isFavorite = false,
}) {
  // Always normalize — never read raw backend field names in the renderer.
  const product = normalizeAssistantProduct(rawOrNormalized);
  if (!product?.id) return "";

  const stock = numberOrZero(product.stock);
  const outOfStock = stock === 0;
  const price = numberOrZero(product.price);
  const discountPrice = numberOrZero(product.discountPrice);
  const hasDiscount = price > discountPrice && discountPrice > 0;
  const displayPrice = hasDiscount ? discountPrice : price || discountPrice;
  const image = product.image || PLACEHOLDER_IMAGE;
  const title = product.title || product.name || "Product";
  const productId = String(product.id);

  if (product._imageFallback) {
    assistantLog("Missing image fallback", { id: productId, title });
  }

  return `
    <article class="assistant-product-card" data-assistant-product="${escapeHtml(productId)}" data-product="${escapeHtml(productId)}">
      <button class="assistant-product-media" type="button" data-product="${escapeHtml(productId)}" aria-label="${escapeHtml(title)}">
        <img
          class="assistant-product-image"
          src="${escapeHtml(image)}"
          alt="${escapeHtml(title)}"
          loading="lazy"
          decoding="async"
          data-assistant-img
          data-placeholder="${escapeHtml(PLACEHOLDER_IMAGE)}"
          onerror="if(this.dataset.fallbackApplied!=='1'){this.dataset.fallbackApplied='1';this.src=this.dataset.placeholder;}"
        />
      </button>
      <div class="assistant-product-info">
        <span class="assistant-product-brand">${escapeHtml(product.brand || "")}</span>
        <button class="assistant-product-name" type="button" data-product="${escapeHtml(productId)}">
          ${escapeHtml(title)}
        </button>
        <div class="assistant-product-price">
          <strong>${formatPrice(displayPrice)}</strong>
          ${hasDiscount ? `<span class="old-price">${formatPrice(price)}</span>` : ""}
        </div>
        ${RatingInline({ ratingAvg: product.rating || product.ratingAvg || 0, reviewCount: product.reviewCount || 0 })}
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
          <button class="secondary-button" type="button" data-product="${escapeHtml(productId)}">
            ${escapeHtml(t("assistant.viewProduct"))}
          </button>
          <button class="primary-button" type="button" data-add="${escapeHtml(productId)}" ${outOfStock ? "disabled" : ""}>
            ${escapeHtml(t("assistant.addToCart"))}
          </button>
          ${isAuthenticated
            ? `<button class="icon-button ${isFavorite ? "active" : ""}" type="button" data-favorite="${escapeHtml(productId)}" aria-label="${escapeHtml(t("favorites.title"))}" aria-pressed="${isFavorite}">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg>
              </button>`
            : ""}
        </div>
      </div>
    </article>
  `;
}
