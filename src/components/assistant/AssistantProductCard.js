import { escapeHtml } from "../../utils/html.js";
import { formatPrice } from "../../utils/format.js";
import { numberOrZero } from "../../utils/productMapper.js";
import { t } from "../../i18n/index.js";
import {
  normalizeAssistantProduct,
  PLACEHOLDER_IMAGE,
  assistantLog,
} from "../../utils/assistantNormalize.js";

/**
 * Marketplace-style product card (Uzum-like vertical layout).
 * Only reads normalized fields — never raw backend keys.
 */
export function AssistantProductCard({
  product: rawOrNormalized,
  isAuthenticated = false,
  isFavorite = false,
}) {
  const product = normalizeAssistantProduct(rawOrNormalized);
  if (!product?.id) return "";

  const stock = numberOrZero(product.stock);
  const outOfStock = stock === 0;
  const price = numberOrZero(product.price);
  const discountPrice = numberOrZero(product.discountPrice);
  const hasDiscount = price > discountPrice && discountPrice > 0;
  const displayPrice = hasDiscount ? discountPrice : price || discountPrice;
  const discountPercent = hasDiscount
    ? Math.round(((price - discountPrice) / price) * 100)
    : 0;
  const image = product.image || PLACEHOLDER_IMAGE;
  const title = product.title || product.name || "Product";
  const productId = String(product.id);
  const rating = Number(product.rating || product.ratingAvg || 0);
  const reviewCount = numberOrZero(product.reviewCount);

  if (product._imageFallback) {
    assistantLog("Missing image fallback", { id: productId, title });
  }

  return `
    <article class="assistant-product-card" data-assistant-product="${escapeHtml(productId)}" data-product="${escapeHtml(productId)}" role="link" tabindex="0" aria-label="${escapeHtml(title)}">
      <div class="assistant-product-media">
        ${discountPercent > 0
          ? `<span class="assistant-product-discount">-${discountPercent}%</span>`
          : ""}
        ${isAuthenticated
          ? `<button class="assistant-product-fav icon-button ${isFavorite ? "active" : ""}" type="button" data-favorite="${escapeHtml(productId)}" aria-label="${escapeHtml(t("favorites.title"))}" aria-pressed="${isFavorite}">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg>
            </button>`
          : ""}
        <button class="assistant-product-image-btn" type="button" data-product="${escapeHtml(productId)}" aria-label="${escapeHtml(title)}">
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
        ${outOfStock
          ? `<span class="assistant-product-oos">${escapeHtml(t("product.outOfStock"))}</span>`
          : ""}
      </div>
      <div class="assistant-product-info">
        <div class="assistant-product-price">
          <strong>${formatPrice(displayPrice)}</strong>
          ${hasDiscount ? `<span class="old-price">${formatPrice(price)}</span>` : ""}
        </div>
        ${product.brand
          ? `<span class="assistant-product-brand">${escapeHtml(product.brand)}</span>`
          : ""}
        <button class="assistant-product-name" type="button" data-product="${escapeHtml(productId)}">
          ${escapeHtml(title)}
        </button>
        <div class="assistant-product-rating" aria-label="${rating.toFixed(1)}">
          <span class="assistant-product-star" aria-hidden="true">★</span>
          <span>${rating.toFixed(1)}</span>
          ${reviewCount > 0 ? `<span class="assistant-product-reviews">(${reviewCount})</span>` : ""}
        </div>
        <button
          class="assistant-product-cart primary-button"
          type="button"
          data-add="${escapeHtml(productId)}"
          ${outOfStock ? "disabled" : ""}
        >
          ${escapeHtml(t("assistant.addToCart"))}
        </button>
      </div>
    </article>
  `;
}
