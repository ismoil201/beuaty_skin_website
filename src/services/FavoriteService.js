import { getFavorites, toggleFavorite as toggleFavoriteApi } from "../api/favoriteApi.js";
import { getPageContent, normalizeFavoriteItem } from "../utils/productMapper.js";
import { createApiFailure } from "./serviceHelpers.js";

export const FavoriteService = {
  async loadFavorites() {
    const response = await getFavorites();
    if (response === null) {
      return createApiFailure("Favorites could not be loaded.");
    }
    return {
      success: true,
      products: getPageContent(response).map(normalizeFavoriteItem),
    };
  },

  async toggle(productId, wasFavorite) {
    const response = await toggleFavoriteApi(productId);
    if (response === null) return null;
    const isFavorite = typeof response === "object" && "favorite" in response
      ? Boolean(response.favorite)
      : !wasFavorite;
    return { isFavorite, response };
  },
};
