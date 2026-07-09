import { appStore, productStore } from "../../stores/index.js";
import { els } from "../../utils/dom.js";
import { t } from "../../i18n/index.js";
import { CatalogService } from "../../services/CatalogService.js";
import { syncProductFavorites } from "../../store/favoriteStore.js";
import { renderSkeleton, applyAndRenderGrid } from "../shared/productGrid.js";
import { CatalogPage } from "../catalog/CatalogPage.js";
import { HomePage } from "../home/HomePage.js";

export const SearchPage = {
  async render(query, { showHomeView } = {}) {
    const trimmed = query.trim();
    appStore.currentSearchQuery = trimmed;
    appStore.currentGridScreen = trimmed ? "search" : "home";
    if (appStore.currentRoute === "product") {
      window.location.hash = "#/";
      showHomeView?.();
    }

    if (!trimmed) {
      productStore.selectedCategory = "ALL";
      CatalogPage.renderCategories();
      els.title.textContent = t("home.popular");
      await HomePage.loadProducts();
      return;
    }

    els.title.textContent = `"${trimmed}" qidiruvi`;
    els.status.textContent = t("home.loading");
    renderSkeleton(els.grid, 10);
    const products = await CatalogService.search(trimmed);
    productStore.products = products;
    syncProductFavorites();
    applyAndRenderGrid(productStore.products, t("home.noProducts"), { screen: "search" });
    els.status.textContent = "";
  },
};

export const renderSearchResults = SearchPage.render;
