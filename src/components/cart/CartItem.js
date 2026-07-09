import { CONFIG } from "../../config/config.js";
import { escapeHtml } from "../../utils/html.js";
import { numberOrZero } from "../../utils/productMapper.js";
import { formatPrice } from "../../utils/format.js";

export function CartItem({
  item,
  selected = false,
  loading = false,
  labels = {},
}) {
  const product = item.product || {};
  const image = item.image || product.image || CONFIG.placeholderImage;
  const originalLine = numberOrZero(product.originalPrice) * item.quantity;
  const hasDiscount = product.originalPrice > item.unitPrice;
  const variantText = [item.variantLabel, product.brand ? `(${product.brand})` : ""].filter(Boolean).join(" ");
  const {
    selectItem = "Select item",
    remove = "Remove",
    shipsToday = "Ships today",
  } = labels;

  return `
    <article class="app-cart-item ${loading ? "loading" : ""}">
      <label class="app-cart-check" title="${escapeHtml(selectItem)}">
        <input
          type="checkbox"
          data-cart-item-check="${escapeHtml(item.id)}"
          ${selected ? "checked" : ""}
          aria-label="${escapeHtml(selectItem)}: ${escapeHtml(item.name)}"
        />
        <span class="app-cart-check-ui ${selected ? "is-checked" : ""}" aria-hidden="true"></span>
      </label>
      <div class="app-cart-item-body">
        <button class="app-cart-item-remove" data-remove="${escapeHtml(item.id)}" type="button" aria-label="${escapeHtml(remove)}">×</button>
        <div class="app-cart-item-main">
          <img src="${escapeHtml(image)}" alt="${escapeHtml(item.name)}" loading="eager" decoding="async" class="app-cart-item-image" />
          <div class="app-cart-item-info">
            <h3>${escapeHtml(item.name)}</h3>
            ${variantText ? `<p class="app-cart-variant">${escapeHtml(variantText)}</p>` : ""}
            <p class="app-cart-ship">${escapeHtml(shipsToday)}</p>
          </div>
        </div>
        <div class="app-cart-item-foot">
          <div class="cart-stepper app-cart-stepper">
            <button data-cart-qty="minus" data-cart-id="${escapeHtml(item.id)}" ${item.quantity <= 1 ? "disabled" : ""} type="button" aria-label="Decrease">-</button>
            <span aria-live="polite">${item.quantity}</span>
            <button data-cart-qty="plus" data-cart-id="${escapeHtml(item.id)}" type="button" aria-label="Increase">+</button>
          </div>
          <div class="app-cart-prices">
            ${hasDiscount ? `<span class="old-price">${formatPrice(originalLine)}</span>` : ""}
            <strong>${formatPrice(item.lineTotal)}</strong>
          </div>
        </div>
      </div>
    </article>
  `;
}
