import { appStore, productStore } from "../../stores/index.js";
import { els } from "../../utils/dom.js";
import { t } from "../../i18n/index.js";
import { escapeHtml } from "../../utils/html.js";
import { SearchService } from "../../services/SearchService.js";
import { syncProductFavorites } from "../../store/favoriteStore.js";
import {
  renderSkeleton,
  applyAndRenderSearchGrid,
} from "../shared/productGrid.js";
import { clearAllFilters } from "../../utils/phase2Ui.js";
import { CONFIG } from "../../config/config.js";
import { navigateToSearch, routeHome } from "../../runtime/navigation.js";
import { closeSearchPanel } from "../../utils/searchPanel.js";

let searchRequestId = 0;

function setHeading(query, count = null) {
  if (els.searchResultsTitle) {
    els.searchResultsTitle.textContent = query;
  }
  if (els.searchBreadcrumbQuery) {
    els.searchBreadcrumbQuery.textContent = `"${query}"`;
  }
  if (els.searchResultsCount) {
    if (count == null) {
      els.searchResultsCount.textContent = t("home.loading");
    } else {
      els.searchResultsCount.textContent = t("search.resultCountLabel", { count });
    }
  }
  document.title = `${query} — BEAUTY SKIN KOREA`;
}

async function renderQuickChips(query) {
  const host = els.searchQuickChips || document.getElementById("searchQuickChips");
  if (!host) return;
  try {
    const suggest = await SearchService.suggest(query, { limit: 10 });
    const chips = [...new Set([
      ...suggest.related,
      ...suggest.autocomplete,
      ...suggest.trending,
      ...suggest.popular,
    ])]
      .map((item) => String(item || "").trim())
      .filter((item) => item && item.toLowerCase() !== query.toLowerCase())
      .slice(0, 10);

    if (!chips.length) {
      host.hidden = true;
      host.innerHTML = "";
      return;
    }

    host.hidden = false;
    host.innerHTML = chips
      .map(
        (label) =>
          `<button type="button" class="search-quick-chip" data-search-chip="${escapeHtml(label)}">${escapeHtml(label)}</button>`
      )
      .join("");
  } catch {
    host.hidden = true;
    host.innerHTML = "";
  }
}

export const SearchPage = {
  /** Navigate to dedicated Uzum-style results page (Enter / chip / submit). */
  open(query) {
    const trimmed = String(query || "").trim();
    if (!trimmed) {
      routeHome();
      return;
    }
    if (els.searchInput) els.searchInput.value = trimmed;
    closeSearchPanel();
    navigateToSearch(trimmed);
  },

  /** Called by router after `#/search?q=...` is active. */
  async loadResults(query) {
    const trimmed = String(query || "").trim();
    const requestId = ++searchRequestId;

    if (!trimmed) {
      routeHome();
      return;
    }

    appStore.currentSearchQuery = trimmed;
    appStore.currentGridScreen = "search";
    if (els.searchInput && els.searchInput.value.trim() !== trimmed) {
      els.searchInput.value = trimmed;
    }

    clearAllFilters();
    setHeading(trimmed, null);
    const grid = els.searchProductGrid || document.getElementById("searchProductGrid");
    const status = els.searchProductStatus || document.getElementById("searchProductStatus");
    if (status) status.textContent = t("home.loading");
    renderSkeleton(grid, 12);
    renderQuickChips(trimmed);

    const result = await SearchService.searchProducts({
      q: trimmed,
      page: 0,
      size: CONFIG.defaultPageSize,
    });

    if (requestId !== searchRequestId || appStore.currentSearchQuery !== trimmed) {
      return;
    }

    const products = Array.isArray(result?.products) ? result.products : [];
    productStore.products = products;
    productStore.sourceProducts = products;
    syncProductFavorites();
    applyAndRenderSearchGrid(products, t("home.noProducts"));
    setHeading(trimmed, products.length);
    if (status) status.textContent = "";
  },

  /** Back-compat alias used by older callers. */
  async render(query) {
    SearchPage.open(query);
  },
};

export const renderSearchResults = SearchPage.render;
