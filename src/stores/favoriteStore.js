import { createStore } from "./createStore.js";

export const favoriteStore = createStore({
  favoriteProducts: [],
  favoriteIds: new Set(),
  favoritesLoading: false,
  favoritesError: "",
  favoritesCount: 0,
});
