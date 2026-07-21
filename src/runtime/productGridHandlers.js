import { CartController } from "../controllers/CartController.js";
import { FavoriteController } from "../controllers/FavoriteController.js";
import { HomePage } from "../pages/home/HomePage.js";
import { sendProductClick } from "../pages/shared/analytics.js";
import { navigateToProduct } from "./navigation.js";
import { toggleCompareProduct } from "./compareUi.js";

function addToCart(productId, variantId, quantity) {
  return CartController.add(productId, variantId, quantity);
}

export function handleProductCardKeydown(event) {
  if (event.key !== "Enter" && event.key !== " ") return;
  const card = event.target.closest("[data-product]");
  if (!card) return;
  event.preventDefault();
  const productId = card.dataset.product;
  if (!productId) return;
  sendProductClick(productId);
  navigateToProduct(productId);
}

export function handleProductGridClick(event) {
  const showAll = event.target.closest("[data-show-all]");
  const favorite = event.target.closest("[data-favorite]");
  const add = event.target.closest("[data-add]");
  const detail = event.target.closest("[data-detail]");
  const quickView = event.target.closest("[data-quick-view]");
  const compare = event.target.closest("[data-compare]");
  const card = event.target.closest("[data-product]");

  if (showAll) {
    event.stopPropagation();
    HomePage.load({ loadCart: () => CartController.load() });
    return;
  }

  if (compare) {
    event.stopPropagation();
    toggleCompareProduct(compare.dataset.compare);
    return;
  }

  if (quickView) {
    event.stopPropagation();
    sendProductClick(quickView.dataset.quickView);
    navigateToProduct(quickView.dataset.quickView);
    return;
  }

  if (favorite) {
    event.stopPropagation();
    FavoriteController.toggle(favorite.dataset.favorite);
    return;
  }

  if (add) {
    event.stopPropagation();
    addToCart(add.dataset.add, null, 1);
    return;
  }

  if (detail) {
    event.stopPropagation();
    const productId = detail.dataset.detail;
    if (!productId) return;
    sendProductClick(productId);
    navigateToProduct(productId);
    return;
  }

  if (card && !event.target.closest("button, a")) {
    event.preventDefault();
    event.stopPropagation();
    const productId = card.dataset.product;
    if (!productId) return;
    sendProductClick(productId);
    navigateToProduct(productId);
  }
}
