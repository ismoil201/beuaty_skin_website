import { appStore, productStore } from "../../stores/index.js";
import { els } from "../../utils/dom.js";
import { t } from "../../i18n/index.js";
import { SearchService } from "../../services/SearchService.js";
import { syncProductFavorites } from "../../store/favoriteStore.js";
import { renderSkeleton, applyAndRenderGrid } from "../shared/productGrid.js";
import { CatalogPage } from "../catalog/CatalogPage.js";
import { HomePage } from "../home/HomePage.js";
import { clearAllFilters } from "../../utils/phase2Ui.js";
import { CONFIG } from "../../config/config.js";

let searchRequestId = 0;

export const SearchPage = {
  async render(query, { showHomeView } = {}) {
    const trimmed = String(query || "").trim();
    const requestId = ++searchRequestId;

    appStore.currentSearchQuery = trimmed;
    appStore.currentGridScreen = trimmed ? "search" : "home";

    if (appStore.currentRoute === "product") {
      window.location.hash = "#/";
      showHomeView?.();
    }

    if (!trimmed) {
      productStore.selectedCategory = "ALL";
      CatalogPage.renderCategories();
      if (els.title) els.title.textContent = t("home.popular");
      if (els.loadMore) els.loadMore.hidden = false;
      await HomePage.loadProducts();
      return;
    }

    // Stale client filters (price/brand/etc.) were hiding API hits in the main grid
    // while the dropdown showed unfiltered results from the same search API.
    clearAllFilters();

    if (els.title) els.title.textContent = t("search.queryTitle", { query: trimmed });
    if (els.status) els.status.textContent = t("home.loading");
    if (els.loadMore) els.loadMore.hidden = true;
    renderSkeleton(els.grid, 10);

    const result = await SearchService.searchProducts({
      q: trimmed,
      page: 0,
      size: CONFIG.defaultPageSize,
    });

    // Ignore outdated responses when the user typed quickly.
    if (requestId !== searchRequestId || appStore.currentSearchQuery !== trimmed) {
      return;
    }

    const products = Array.isArray(result?.products) ? result.products : [];
    productStore.products = products;
    productStore.sourceProducts = products;
    syncProductFavorites();
    applyAndRenderGrid(products, t("home.noProducts"), { screen: "search" });
    if (els.status) {
      els.status.textContent = products.length
        ? t("search.resultCount", { count: products.length })
        : "";
    }
  },
};

export const renderSearchResults = SearchPage.render;
