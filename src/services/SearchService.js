import {
  searchMarketplaceProducts,
  getSearchSuggest,
  postSearchSuggest,
  aiSearch,
  postSearchFeedback,
} from "../api/searchApi.js";
import { ProductService } from "./ProductService.js";
import { getSessionId } from "../utils/storage.js";
import { normalizeProduct, getPageContent } from "../utils/productMapper.js";

function normalizeSuggest(payload) {
  if (!payload || typeof payload !== "object") {
    return { autocomplete: [], popular: [], recent: [], trending: [], related: [] };
  }
  const pick = (key) => (Array.isArray(payload[key]) ? payload[key].filter(Boolean).map(String) : []);
  return {
    autocomplete: pick("autocomplete"),
    popular: pick("popular"),
    recent: pick("recent"),
    trending: pick("trending"),
    related: pick("related"),
  };
}

export const SearchService = {
  async searchProducts(params = {}) {
    return ProductService.search(params.q || params.query || "", params);
  },

  async suggest(prefix, { limit = 8, recentSearches = [] } = {}) {
    const trimmed = String(prefix || "").trim();
    if (!trimmed) {
      const empty = await getSearchSuggest("", limit);
      return normalizeSuggest(empty);
    }

    let response = await getSearchSuggest(trimmed, limit);
    if (response === null) {
      response = await postSearchSuggest({
        prefix: trimmed,
        limit,
        recentSearches,
      });
    }
    return normalizeSuggest(response);
  },

  async aiSearch(query, extras = {}) {
    const body = {
      query: String(query || "").trim(),
      sessionId: getSessionId(),
      limit: 20,
      offset: 0,
      locale: "uz-UZ",
      device: "web",
      recentSearches: [],
      recentViews: [],
      filters: {},
      ...extras,
    };
    const response = await aiSearch(body);
    if (response === null) return { products: [], raw: null };
    const products = Array.isArray(response.products)
      ? response.products.map(normalizeProduct)
      : getPageContent(response).map(normalizeProduct);
    return { products, raw: response };
  },

  async sendFeedback(body) {
    return postSearchFeedback(body);
  },

  async marketplaceSearch(query) {
    return searchMarketplaceProducts(query);
  },
};
