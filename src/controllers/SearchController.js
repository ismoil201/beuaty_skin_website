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
    // Live dropdown only — dedicated results page opens on Enter / chip / submit.
    clearTimeout(appStore.searchTimer);
    const query = event.target.value;
    appStore.searchTimer = setTimeout(() => {
      if (String(query || "").trim().length >= 2) saveSearchHistory(query);
    }, CONFIG.searchDebounceMs);
  },

  async search(query) {
    const trimmed = String(query || "").trim();
    if (!trimmed) {
      showHomeView();
      return;
    }
    saveSearchHistory(trimmed);
    SearchPage.open(trimmed);
  },

  submitFromForm(event) {
    event.preventDefault();
    const query = els.searchInput?.value || "";
    SearchController.search(query);
  },

  handleCategoryClick(event) {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    closeCatalog();
    CatalogPage.renderCategoryProducts(button.dataset.category, { showHomeView }).catch(() => {
      renderEmpty(els.grid, t("home.noProducts"));
      if (els.status) els.status.textContent = "";
    });
    window.setTimeout(() => {
      document.getElementById("products")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  },
};
