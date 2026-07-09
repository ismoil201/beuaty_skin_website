import { escapeHtml } from "../../utils/html.js";
import { formatPrice } from "../../utils/format.js";

export function CartSummary({
  totals,
  labels = {},
}) {
  const {
    yourOrder = "Your order",
    goodsCount = "",
    discount = "Discount",
    deliveryCost = "Delivery",
    freeDelivery = "Free",
    products = "Products",
    total = "Total",
  } = labels;

  return `
    <div class="app-cart-order-card">
      <h3>${escapeHtml(yourOrder)}</h3>
      <div class="app-cart-order-lines">
        <div class="app-cart-order-line">
          <span>${escapeHtml(goodsCount)}</span>
        </div>
        ${totals.discount > 0 ? `
          <div class="app-cart-order-line app-cart-order-discount">
            <span>${escapeHtml(discount)}</span>
            <span>-${formatPrice(totals.discount)}</span>
          </div>
        ` : ""}
        <div class="app-cart-order-line">
          <span>${escapeHtml(deliveryCost)}</span>
          <span>${totals.deliveryFee ? formatPrice(totals.deliveryFee) : escapeHtml(freeDelivery)}</span>
        </div>
        <div class="app-cart-order-line">
          <span>${escapeHtml(products)}</span>
          <strong>${formatPrice(totals.subtotal)}</strong>
        </div>
      </div>
      <div class="app-cart-order-total">
        <span>${escapeHtml(total)}</span>
        <strong>${formatPrice(totals.total)}</strong>
      </div>
    </div>
  `;
}
