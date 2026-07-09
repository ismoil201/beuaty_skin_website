import { mountEmptyState } from "../common/EmptyState.js";

export function ProductGridHtml({ products, renderCard }) {
  return products.map((product, index) => renderCard(product, index)).join("");
}

export function mountProductGrid(container, { products, emptyMessage, emptyActionLabel, renderCard }) {
  if (!products.length) {
    mountEmptyState(container, { message: emptyMessage, actionLabel: emptyActionLabel });
    return false;
  }
  container.innerHTML = ProductGridHtml({ products, renderCard });
  return true;
}
