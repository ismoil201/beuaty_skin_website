import { CONFIG } from "../config/config.js";
import { appStore } from "../stores/index.js";
import { els } from "../utils/dom.js";
import { renderEmpty } from "../pages/shared/productGrid.js";
import { SearchPage } from "../pages/search/SearchPage.js";
import { CatalogPage } from "../pages/catalog/CatalogPage.js";
import { saveSearchHistory } from "../utils/searchPanel.js";
import { closeCatalog, showHomeView } from "../runtime/navigation.js";
import { t } from "../i18n/index.js";

export const SearchController = {
  handleInput(event) {
    clearTimeout(appStore.searchTimer);
    appStore.searchTimer = setTimeout(() => {
      const query = event.target.value;
      SearchController.search(query).catch(() => {
        renderEmpty(els.grid, "Qidiruv vaqtida xatolik yuz berdi.");
        els.status.textContent = "";
      });
      if (query.trim().length >= 2) saveSearchHistory(query);
    }, CONFIG.searchDebounceMs);
  },

  async search(query) {
    return SearchPage.render(query, { showHomeView });
  },

  handleCategoryClick(event) {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    closeCatalog();
    CatalogPage.renderCategoryProducts(button.dataset.category, { showHomeView }).catch(() => {
      renderEmpty(els.grid, "Kategoriya mahsulotlari yuklanmadi.");
      els.status.textContent = "";
    });
    window.setTimeout(() => {
      document.getElementById("products")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  },
};