import { favoriteStore } from "../stores/favoriteStore.js";
import { productStore } from "../stores/productStore.js";

export function setFavoriteProducts(products) {
  favoriteStore.favoriteProducts = products.filter(
    (product) => product.id !== undefined && product.id !== null
  );
  favoriteStore.favoriteIds = new Set(favoriteStore.favoriteProducts.map((product) => String(product.id)));
  favoriteStore.favoritesCount = favoriteStore.favoriteProducts.length;
  syncProductFavorites();
}

export function clearFavoritesState() {
  favoriteStore.favoriteProducts = [];
  favoriteStore.favoriteIds = new Set();
  favoriteStore.favoritesLoading = false;
  favoriteStore.favoritesError = "";
  favoriteStore.favoritesCount = 0;
  syncProductFavorites();
}

export function syncProductFavorites() {
  productStore.products = productStore.products.map((product) => ({
    ...product,
    favorite: favoriteStore.favoriteIds.has(String(product.id)),
  }));
  productStore.todayDeals = productStore.todayDeals.map((product) => ({
    ...product,
    favorite: favoriteStore.favoriteIds.has(String(product.id)),
  }));
  if (productStore.selectedDetailProduct?.id !== undefined) {
    productStore.selectedDetailProduct = {
      ...productStore.selectedDetailProduct,
      favorite: favoriteStore.favoriteIds.has(String(productStore.selectedDetailProduct.id)),
    };
  }
}
