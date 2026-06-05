import { state } from "./state.js";

export function setFavoriteProducts(products) {
  state.favoriteProducts = products.filter(
    (product) => product.id !== undefined && product.id !== null
  );
  state.favoriteIds = new Set(state.favoriteProducts.map((product) => String(product.id)));
  state.favoritesCount = state.favoriteProducts.length;
  syncProductFavorites();
}

export function clearFavoritesState() {
  state.favoriteProducts = [];
  state.favoriteIds = new Set();
  state.favoritesLoading = false;
  state.favoritesError = "";
  state.favoritesCount = 0;
  syncProductFavorites();
}

export function syncProductFavorites() {
  state.products = state.products.map((product) => ({
    ...product,
    favorite: state.favoriteIds.has(String(product.id)),
  }));
  state.todayDeals = state.todayDeals.map((product) => ({
    ...product,
    favorite: state.favoriteIds.has(String(product.id)),
  }));
  if (state.selectedDetailProduct?.id !== undefined) {
    state.selectedDetailProduct = {
      ...state.selectedDetailProduct,
      favorite: state.favoriteIds.has(String(state.selectedDetailProduct.id)),
    };
  }
}
