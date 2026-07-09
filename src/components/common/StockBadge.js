import { escapeHtml } from "../../utils/html.js";

export function StockBadge({ stock, lowStockLabel, outOfStockLabel }) {
  const lowStock = stock > 0 && stock <= 5;
  const outOfStock = stock === 0;
  if (!lowStock && !outOfStock) return "";
  const label = outOfStock ? outOfStockLabel : lowStockLabel;
  return `<span class="ds-badge ds-badge--stock">${escapeHtml(label)}</span>`;
}
