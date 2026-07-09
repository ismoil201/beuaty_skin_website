import { productStore, favoriteStore } from "../stores/index.js";
import { els } from "../utils/dom.js";
import { FavoriteService } from "../services/FavoriteService.js";
import { syncProductFavorites } from "../store/favoriteStore.js";
import { FavoritesPage } from "../pages/favorites/FavoritesPage.js";
import { ProductDetailPage } from "../pages/product/ProductDetailPage.js";
import { renderProductList } from "../pages/shared/productGrid.js";
import { favoritePop } from "../utils/motion.js";
import { showToast } from "../utils/toast.js";
import { t } from "../i18n/index.js";
import { lockBody, unlockBodyIfNoOverlay, syncBottomNav } from "../runtime/navigation.js";
import { AuthController } from "./AuthController.js";

export const FavoriteController = {
  findKnownProduct(productId) {
    return [...productStore.products, ...productStore.todayDeals, ...favoriteStore.favoriteProducts, productStore.selectedDetailProduct]
      .filter(Boolean)
      .find((product) => String(product.id) === String(productId));
  },

  async open() {
    if (!AuthController.isLoggedIn()) {
      AuthController.showLoginRequired();
      return;
    }
    if (!els.favoritesDialog) return;
    if (!els.favoritesDialog.open) {
      els.favoritesDialog.show();
    }
    lockBody();
    syncBottomNav();
    favoriteStore.favoritesLoading = true;
    favoriteStore.favoritesError = "";
    FavoritesPage.render();
    await FavoriteController.load({ render: true });
  },

  close() {
    els.favoritesDialog.close();
    unlockBodyIfNoOverlay();
    syncBottomNav();
  },

  async load(options = {}) {
    return FavoritesPage.load(options, {
      isLoggedIn: AuthController.isLoggedIn,
      onSessionExpired: () => {
        if (els.favoritesDialog.open) els.favoritesDialog.close();
      },
    });
  },

  updateUi() {
    FavoritesPage.updateUi();
  },

  async toggle(productId) {
    if (!AuthController.isLoggedIn()) {
      AuthController.showLoginRequired();
      return;
    }

    const wasFavorite = favoriteStore.favoriteIds.has(String(productId));
    const result = await FavoriteService.toggle(productId, wasFavorite);
    if (result === null) return;

    const { isFavorite } = result;
    const existingProduct = FavoriteController.findKnownProduct(productId);

    if (isFavorite) {
      const product = existingProduct ? { ...existingProduct, favorite: true } : null;
      if (product && !favoriteStore.favoriteProducts.some((item) => String(item.id) === String(productId))) {
        favoriteStore.favoriteProducts = [product, ...favoriteStore.favoriteProducts];
      }
    } else {
      favoriteStore.favoriteProducts = favoriteStore.favoriteProducts.filter((p) => String(p.id) !== String(productId));
    }

    favoriteStore.favoriteIds = new Set(favoriteStore.favoriteProducts.map((p) => String(p.id)));
    favoriteStore.favoritesCount = favoriteStore.favoriteProducts.length;
    syncProductFavorites();
    FavoriteController.updateUi();
    if (productStore.products.length) renderProductList(els.grid, productStore.products, "Mahsulot topilmadi.");
    if (productStore.todayDeals.length) renderProductList(els.dealsGrid, productStore.todayDeals.slice(0, 8), "Bugungi takliflar topilmadi.");
    if (productStore.selectedDetailProduct?.id !== undefined && String(productStore.selectedDetailProduct.id) === String(productId)) {
      ProductDetailPage.renderProductDetail(productStore.selectedDetailProduct);
    }
    if (els.favoritesDialog.open) FavoritesPage.render();
    const favBtn = document.querySelector(`[data-favorite="${productId}"]`);
    if (favBtn && isFavorite) favoritePop(favBtn);
    showToast(isFavorite ? t("favorites.added") : t("favorites.removed"), "success");
    if (isFavorite && !existingProduct) await FavoriteController.load({ render: els.favoritesDialog.open });
  },
};
