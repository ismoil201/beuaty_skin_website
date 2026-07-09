import { CONFIG } from "../../config/config.js";
import { appStore, productStore } from "../../stores/index.js";
import { els } from "../../utils/dom.js";
import { escapeHtml } from "../../utils/html.js";
import { categoryLabel } from "../../utils/productMapper.js";
import { QUICK_CATEGORIES } from "../../config/constants.js";
import { t } from "../../i18n/index.js";
import { CatalogService } from "../../services/CatalogService.js";
import { ProductService } from "../../services/ProductService.js";
import { syncProductFavorites } from "../../store/favoriteStore.js";
import { CategoryChipRow } from "../../components/product/CategoryChip.js";
import { renderSkeleton, applyAndRenderGrid, syncModeBadges } from "../shared/productGrid.js";
import { HomePage } from "../home/HomePage.js";

const POPULAR_SEARCHES = ["SNAIL CREAM", "COSRX", "SUNSCREEN", "LIP TINT", "VITAMIN C", "COLLAGEN"];

export const CatalogPage = {
  renderCategories() {
    const categories = ["ALL", ...productStore.categories];
    els.categoryToolbar.innerHTML = CategoryChipRow({
      categories,
      selectedCategory: productStore.selectedCategory,
      labelFor: (category) => (category === "ALL" ? t("home.all") : categoryLabel(category)),
    });
    CatalogPage.renderCatalogList();
    CatalogPage.renderQuickCategories();
  },

  renderCatalogList() {
    const categories = ["ALL", ...productStore.categories];
    els.catalogList.innerHTML = categories.map((category) => `
      <button class="catalog-item ${productStore.selectedCategory === category ? "active" : ""}" data-category="${escapeHtml(category)}" type="button">
        <span>${category === "ALL" ? escapeHtml(t("home.showAll")) : escapeHtml(categoryLabel(category))}</span>
        <span>${category === "ALL" ? "→" : "›"}</span>
      </button>
    `).join("");
  },

  renderQuickCategories() {
    els.quickCategoryGrid.innerHTML = QUICK_CATEGORIES.map((item) => `
      <button class="quick-card" data-category="${escapeHtml(item.category)}" type="button">
        <span>${escapeHtml(item.icon)}</span>
        ${escapeHtml(categoryLabel(item.category))}
      </button>
    `).join("");
    CatalogPage.renderMegaMenu();
    CatalogPage.renderPopularSearches();
    CatalogPage.renderMobileNav();
  },

  renderPopularSearches() {
    const container = document.getElementById("popularSearchesChips");
    if (!container) return;
    container.innerHTML = POPULAR_SEARCHES.map((term) => `
      <button class="search-chip" type="button" data-search-chip="${escapeHtml(term)}" data-chip-type="trending">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m21 21-4.3-4.3m1.3-5.2a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z"/></svg>
        ${escapeHtml(term)}
      </button>
    `).join("");
  },

  renderMegaMenu() {
    const mega = document.getElementById("megaMenuContent");
    if (!mega) return;
    const groups = [
      { title: t("home.categories"), items: productStore.categories.slice(0, 8) },
      { title: t("home.quickCategories"), items: QUICK_CATEGORIES.map((c) => c.category) },
    ];
    mega.innerHTML = groups.map((group) => `
      <div class="mega-menu-group">
        <h3>${escapeHtml(group.title)}</h3>
        ${group.items.map((cat) => `
          <button type="button" data-category="${escapeHtml(cat)}">${escapeHtml(categoryLabel(cat))}</button>
        `).join("")}
      </div>
    `).join("");
  },

  renderMobileNav() {
    const nav = document.getElementById("mobileNavLinks");
    if (!nav) return;
    const links = [
      { id: "ordersButton", label: t("header.orders") },
      { id: "favoritesButton", label: t("favorites.title") },
      { id: "cartButton", label: t("cart.title") },
      { id: "loginButton", label: t("auth.login") },
    ];
    nav.innerHTML = `
      ${["ALL", ...productStore.categories].map((category) => `
        <button class="mobile-nav-link" type="button" data-category="${escapeHtml(category)}">
          ${category === "ALL" ? escapeHtml(t("home.all")) : escapeHtml(categoryLabel(category))}
        </button>
      `).join("")}
      ${links.map((link) => `<button class="mobile-nav-link" type="button" data-mobile-action="${escapeHtml(link.id)}">${escapeHtml(link.label)}</button>`).join("")}
    `;
  },

  async loadMoreProducts() {
    if (productStore.feedLoading) return;
    productStore.feedLoading = true;
    els.loadMore.disabled = true;
    els.loadMore.textContent = "Yuklanmoqda...";

    const { products, nextProducts, nextFeedPage } = await ProductService.loadMoreProducts({
      feedPage: productStore.feedPage,
      existingProducts: productStore.products,
    });

    productStore.feedPage = nextFeedPage;
    productStore.products = products;
    syncProductFavorites();
    applyAndRenderGrid(productStore.products, "Mahsulot topilmadi.", { screen: appStore.currentGridScreen || "home" });

    productStore.feedLoading = false;
    els.loadMore.disabled = false;
    els.loadMore.textContent = nextProducts.length ? "Yana yuklash" : "Boshqa mahsulot topilmadi";
  },

  async renderCategoryProducts(category, { showHomeView } = {}) {
    if (appStore.currentRoute === "product") {
      window.location.hash = "#/";
      showHomeView?.();
    }
    productStore.selectedCategory = category;
    appStore.currentGridScreen = category === "ALL" ? "home" : "category";
    appStore.currentSearchQuery = "";
    CatalogPage.renderCategories();

    if (category === "ALL") {
      els.title.textContent = t("home.popular");
      await HomePage.loadProducts();
      return;
    }

    els.title.textContent = categoryLabel(category);
    els.status.textContent = t("home.loading");
    renderSkeleton(els.grid, 10);
    const products = await CatalogService.loadByCategory(category);
    productStore.products = products;
    syncProductFavorites();
    applyAndRenderGrid(productStore.products, t("home.noProducts"), { screen: "category" });
    els.status.textContent = "";
  },
};
