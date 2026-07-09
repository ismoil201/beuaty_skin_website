import { els } from "../../utils/dom.js";
import { escapeHtml } from "../../utils/html.js";
import { categoryLabel } from "../../utils/productMapper.js";
import { t } from "../../i18n/index.js";
import { productStore, favoriteStore } from "../../stores/index.js";
import { FavoriteService } from "../../services/FavoriteService.js";
import { setFavoriteProducts, clearFavoritesState, syncProductFavorites } from "../../store/favoriteStore.js";
import { FavoriteCard, FavoritesHeartIcon } from "../../components/favorite/FavoriteCard.js";
import { FavoriteGrid, FavoriteGridSkeleton } from "../../components/favorite/FavoriteGrid.js";
import { initLazyImages } from "../../utils/imageLoader.js";
import { renderProductList } from "../shared/productGrid.js";

function shouldRenderFavorites(options = {}) {
  return Boolean(options.render || els.favoritesDialog?.open);
}

export const FavoritesPage = {
  updateUi() {
    if (els.favoritesCount) els.favoritesCount.textContent = favoriteStore.favoritesCount;
    if (els.favoritesSummary) {
      els.favoritesSummary.textContent = `${favoriteStore.favoritesCount} product${favoriteStore.favoritesCount === 1 ? "" : "s"}`;
    }
  },

  renderShell(bodyHtml) {
    return `
      <div class="app-favorites-page">
        <header class="app-favorites-header">
          <div class="app-favorites-header-top">
            <button class="app-favorites-back" type="button" data-favorites-close aria-label="${escapeHtml(t("checkout.back"))}">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 6-6 6 6 6"/></svg>
            </button>
            <h2>${escapeHtml(t("favorites.title"))}</h2>
            <span aria-hidden="true"></span>
          </div>
          <p class="app-favorites-count">${escapeHtml(t("favorites.count", { count: favoriteStore.favoritesCount || 0 }))}</p>
        </header>
        <div class="app-favorites-scroll">
          ${bodyHtml}
        </div>
      </div>
    `;
  },

  renderCard(product) {
    const categoryLabelText = product.category ? categoryLabel(product.category) : (product.brand || "");
    return FavoriteCard({
      product,
      categoryLabel: categoryLabelText,
      favoritesTitle: t("favorites.title"),
    });
  },

  render() {
    if (!els.favoritesContent) return;

    FavoritesPage.updateUi();

    if (favoriteStore.favoritesLoading) {
      els.favoritesContent.innerHTML = FavoritesPage.renderShell(FavoriteGridSkeleton());
      return;
    }

    if (favoriteStore.favoritesError) {
      els.favoritesContent.innerHTML = FavoritesPage.renderShell(`
        <div class="app-favorites-state">
          <span class="app-favorites-state-icon" aria-hidden="true">${FavoritesHeartIcon()}</span>
          <h3>${escapeHtml(t("favorites.unavailable"))}</h3>
          <p>${escapeHtml(favoriteStore.favoritesError)}</p>
          <button class="app-favorites-state-btn" data-favorites-retry type="button">${escapeHtml(t("common.tryAgain"))}</button>
        </div>
      `);
      return;
    }

    if (!favoriteStore.favoriteProducts.length) {
      els.favoritesContent.innerHTML = FavoritesPage.renderShell(`
        <div class="app-favorites-state">
          <span class="app-favorites-state-icon" aria-hidden="true">${FavoritesHeartIcon()}</span>
          <h3>${escapeHtml(t("favorites.empty"))}</h3>
          <p>${escapeHtml(t("favorites.emptyHint"))}</p>
          <button class="app-favorites-state-btn" data-favorites-start type="button">${escapeHtml(t("favorites.browse"))}</button>
        </div>
      `);
      return;
    }

    els.favoritesContent.innerHTML = FavoritesPage.renderShell(
      FavoriteGrid({
        products: favoriteStore.favoriteProducts,
        renderCard: (product) => FavoritesPage.renderCard(product),
      })
    );
    initLazyImages(els.favoritesContent);
  },

  async load(options = {}, { isLoggedIn, onSessionExpired } = {}) {
    const { render = false } = options;
    if (!isLoggedIn?.()) {
      clearFavoritesState();
      return;
    }

    favoriteStore.favoritesLoading = true;
    favoriteStore.favoritesError = "";
    if (shouldRenderFavorites(options)) FavoritesPage.render();

    try {
      const result = await FavoriteService.loadFavorites();
      favoriteStore.favoritesLoading = false;

      if (!result.success) {
        if (result.sessionExpired) {
          clearFavoritesState();
          onSessionExpired?.();
          if (shouldRenderFavorites(options)) FavoritesPage.render();
          return;
        }
        favoriteStore.favoritesError = result.error;
        FavoritesPage.updateUi();
        if (shouldRenderFavorites(options)) FavoritesPage.render();
        return;
      }

      setFavoriteProducts(result.products);
      if (productStore.products.length) {
        renderProductList(els.grid, productStore.products, "Mahsulot topilmadi.");
      }
      if (productStore.todayDeals.length) {
        renderProductList(els.dealsGrid, productStore.todayDeals.slice(0, 8), "Bugungi takliflar topilmadi.");
      }
      if (shouldRenderFavorites(options)) FavoritesPage.render();
    } catch (error) {
      console.error("[LOAD FAVORITES FAILED]", error);
      favoriteStore.favoritesLoading = false;
      favoriteStore.favoritesError = "Favorites could not be loaded.";
      FavoritesPage.updateUi();
      if (shouldRenderFavorites(options)) FavoritesPage.render();
    }
  },

  handleClick(event, { close, reload, handleProductGridClick } = {}) {
    if (event.target.closest("[data-favorites-close]")) {
      close?.();
      return;
    }
    if (event.target.closest("[data-favorites-retry]")) {
      reload?.();
      return;
    }
    if (event.target.closest("[data-favorites-start]")) {
      close?.();
      document.getElementById("products")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    handleProductGridClick?.(event);
  },
};

export const loadFavorites = FavoritesPage.load;
export const renderFavorites = FavoritesPage.render;
