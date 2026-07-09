import { appStore, productStore, favoriteStore, cartStore } from "../../stores/index.js";
import { els } from "../../utils/dom.js";
import { categoryLabel } from "../../utils/productMapper.js";
import { t } from "../../i18n/index.js";
import { ProductCard as ProductCardView } from "../../components/product/ProductCard.js";
import { mountProductGrid } from "../../components/product/ProductGrid.js";
import { mountEmptyState } from "../../components/common/EmptyState.js";
import { mountLoadingSkeleton } from "../../components/common/LoadingSkeleton.js";
import { initLazyImages } from "../../utils/imageLoader.js";
import { getCompareIds } from "../../store/compareStore.js";
import {
  setSourceProducts,
  getFilteredProducts,
  renderFilterSidebar,
  renderFilterChips,
  applyViewMode,
} from "../../utils/phase2Ui.js";
import { observeProductImpressions } from "./analytics.js";

function productCardLabels() {
  return {
    favoritesTitle: t("favorites.title"),
    todayOnly: t("home.todayOnly"),
    lowStock: t("product.lowStock"),
    outOfStock: t("product.outOfStock"),
    freeShipping: t("product.freeShipping"),
    quickView: t("product.quickView"),
    compare: t("product.compare"),
    adding: t("product.adding"),
    addToCart: t("product.addToCart"),
    viewDetails: t("product.viewDetails"),
  };
}

export function productCard(product, meta = {}) {
  const labels = productCardLabels();
  labels.sold = t("product.sold", { count: product.soldCount });
  return ProductCardView({
    product,
    screen: meta.screen || appStore.currentGridScreen || "home",
    position: meta.position ?? 0,
    isFavorite: favoriteStore.favoriteIds.has(String(product.id)) || Boolean(product.favorite),
    isCompared: getCompareIds().includes(String(product.id)),
    isAdding: cartStore.addingProductIds.has(String(product.id)),
    labels,
  });
}

export function renderSkeleton(container, count = 12) {
  mountLoadingSkeleton(container, count);
}

export function renderEmpty(container, message, actionLabel = t("home.showAll")) {
  mountEmptyState(container, { message, actionLabel });
}

export function renderProductList(container, products, emptyMessage, meta = {}) {
  const mounted = mountProductGrid(container, {
    products,
    emptyMessage,
    emptyActionLabel: t("home.showAll"),
    renderCard: (product, index) => productCard(product, { ...meta, position: index }),
  });
  if (!mounted) return;
  observeProductImpressions(container);
  initLazyImages(container);
  applyViewMode(container, productStore.filters?.viewMode || "grid");
}

export function applyAndRenderGrid(products, emptyMessage, meta = {}) {
  setSourceProducts(products);
  renderFilterSidebar(t, categoryLabel);
  renderFilterChips(t);
  const filtered = getFilteredProducts();
  renderProductList(els.grid, filtered, emptyMessage, meta);
  const sortSelect = document.getElementById("sortSelect");
  if (sortSelect && sortSelect.value !== productStore.filters.sort) sortSelect.value = productStore.filters.sort;
}

export function setModeBadge(element, visible) {
  if (!element) return;
  element.hidden = !visible;
}

export function syncModeBadges() {
  setModeBadge(els.productsMode, productStore.demoProducts);
  setModeBadge(els.dealsMode, productStore.demoDeals);
}
