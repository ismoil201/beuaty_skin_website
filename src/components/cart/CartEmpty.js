import { escapeHtml } from "../../utils/html.js";

export function CartEmpty({ title, hint = "", actionLabel = "", actionAttrs = 'data-start-shopping type="button"' }) {
  return `
    <div class="cart-empty app-cart-empty">
      <strong>${escapeHtml(title)}</strong>
      ${hint ? `<p>${escapeHtml(hint)}</p>` : ""}
      ${actionLabel ? `<button class="primary-button" ${actionAttrs}>${escapeHtml(actionLabel)}</button>` : ""}
    </div>
  `;
}

export function CartError({ title, message, retryLabel = "Try again" }) {
  return `
    <div class="cart-empty app-cart-empty">
      <strong>${escapeHtml(title)}</strong>
      <p>${escapeHtml(message)}</p>
      <button class="secondary-button" data-cart-retry type="button">${escapeHtml(retryLabel)}</button>
    </div>
  `;
}
