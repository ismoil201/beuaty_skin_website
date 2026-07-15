import { CONFIG } from "../config/config.js";
import {
  getProducts,
  getTodayDeals,
  getHomeFeed,
  getHomePopular,
  getProductsByIds,
  getProduct,
  getProductsByCategory,
  searchProducts,
  getRecommendations,
} from "../api/productApi.js";
import { searchMarketplaceProducts } from "../api/searchApi.js";
import {
  getLegacyRecommendations,
  getHomeRecommendations,
  getProductRecommendations,
  getCartRecommendations,
  getTrendingRecommendations,
} from "../api/recommendationApi.js";
import { getTrendingBehaviorIds } from "../api/behaviorApi.js";
import { getPageContent, normalizeProduct } from "../utils/productMapper.js";
import { getSessionId } from "../utils/storage.js";

function uniqueById(products = []) {
  const map = new Map();
  for (const product of products) {
    if (product?.id == null) continue;
    map.set(String(product.id), product);
  }
  return [...map.values()];
}

function recommendationIds(payload) {
  if (!payload) return [];
  if (Array.isArray(payload.recommendations)) {
    return payload.recommendations
      .map((item) => item?.productId ?? item?.id)
      .filter((id) => id != null);
  }
  if (Array.isArray(payload.products)) {
    return payload.products.map((item) => item?.id).filter((id) => id != null);
  }
  return [];
}

export const ProductService = {
  async hydrateProductIds(ids = []) {
    const numericIds = [...new Set(ids.map(Number).filter(Number.isFinite))];
    if (!numericIds.length) return [];

    const byIds = await getProductsByIds(numericIds);
    if (byIds !== null) {
      return getPageContent(byIds).map(normalizeProduct).filter((product) => product.id);
    }

    // Guest / JWT gap: hydrate one-by-one via public detail endpoint.
    const products = await Promise.all(
      numericIds.slice(0, 24).map(async (id) => {
        const detail = await getProduct(id);
        return detail ? normalizeProduct(detail) : null;
      })
    );
    return products.filter(Boolean);
  },

  async loadProducts({ page = 0, size = CONFIG.defaultPageSize } = {}) {
    const response = await getProducts({ page, size });
    if (response === null) {
      return { products: [], demoProducts: false, failed: true };
    }
    return {
      products: getPageContent(response).map(normalizeProduct),
      demoProducts: false,
      failed: false,
    };
  },

  async loadPopular({ page = 0, size = CONFIG.defaultPageSize } = {}) {
    const response = await getHomePopular({ page, size });
    if (response === null) {
      return { products: [], failed: true, page: 0, totalPages: 0 };
    }
    return {
      products: getPageContent(response).map(normalizeProduct),
      failed: false,
      page: Number(response.number ?? page),
      totalPages: Number(response.totalPages ?? 0),
      totalElements: Number(response.totalElements ?? 0),
    };
  },

  async loadMoreProducts({ feedPage, existingProducts, feedCursor = "" }) {
    const query = { limit: 30 };
    if (feedCursor) query.cursor = feedCursor;

    const feedResponse = await getHomeFeed(query);
    let products = getPageContent(feedResponse).map(normalizeProduct);
    let nextCursor =
      feedResponse && typeof feedResponse === "object" && !Array.isArray(feedResponse)
        ? feedResponse.nextCursor || feedResponse.cursor || ""
        : "";

    let nextFeedPage = feedPage;
    if (!products.length) {
      // Prefer paginated popular, then products list.
      const popular = await this.loadPopular({ page: nextFeedPage + 1, size: CONFIG.defaultPageSize });
      if (popular.products.length) {
        products = popular.products;
        nextFeedPage = popular.page;
      } else {
        nextFeedPage += 1;
        const fallback = await getProducts({ page: nextFeedPage, size: CONFIG.defaultPageSize });
        products = getPageContent(fallback).map(normalizeProduct);
      }
    }

    const existingIds = new Set(existingProducts.map((product) => String(product.id)));
    const nextProducts = products.filter((product) => product.id && !existingIds.has(String(product.id)));
    return {
      products: [...existingProducts, ...nextProducts],
      nextProducts,
      nextFeedPage,
      nextCursor,
    };
  },

  async loadTodayDeals() {
    const response = await getTodayDeals();
    if (response === null) {
      return { deals: [], demoDeals: false, failed: true };
    }
    return {
      deals: getPageContent(response).map(normalizeProduct),
      demoDeals: false,
      failed: false,
    };
  },

  async loadProduct(productId, fallbackProduct = null) {
    const response = await getProduct(productId);
    return normalizeProduct(response || fallbackProduct || {});
  },

  async loadProductsByIds(ids) {
    return this.hydrateProductIds(ids);
  },

  /**
   * Marketplace search (`GET /api/search/products`) with legacy fallback.
   */
  async search(query, options = {}) {
    const {
      page = 0,
      size = CONFIG.defaultPageSize,
      brand,
      category,
      minPrice,
      maxPrice,
      minRating,
      sellerId,
      sort = "popular",
      q,
    } = options;

    const searchQuery = {
      q: q ?? query,
      page,
      size,
      brand,
      category,
      minPrice,
      maxPrice,
      minRating,
      sellerId,
      sort,
    };

    const marketplace = await searchMarketplaceProducts(searchQuery);
    if (marketplace !== null) {
      const products = Array.isArray(marketplace.products)
        ? marketplace.products.map(normalizeProduct)
        : getPageContent(marketplace).map(normalizeProduct);
      return {
        products,
        total: Number(marketplace.total ?? products.length),
        engine: marketplace.engine || "mysql",
        query: marketplace.query || searchQuery.q || "",
      };
    }

    const legacy = await searchProducts(searchQuery.q || query, { page, size });
    if (legacy === null) return { products: [], total: 0, engine: "none", query: searchQuery.q || "" };
    const products = getPageContent(legacy).map(normalizeProduct);
    return {
      products,
      total: Number(legacy.totalElements ?? products.length),
      engine: "legacy",
      query: searchQuery.q || "",
    };
  },

  async loadByCategory(category, options = {}) {
    const response = await getProductsByCategory(category, {
      page: 0,
      size: CONFIG.defaultPageSize,
      ...options,
    });
    if (response === null) {
      const viaSearch = await this.search("", { category, size: options.size || CONFIG.defaultPageSize });
      return viaSearch.products;
    }
    return getPageContent(response).map(normalizeProduct);
  },

  async loadBrandProducts(brand, sourceProducts, allProducts) {
    const local = sourceProducts.length
      ? sourceProducts.filter((product) => product.brand === brand)
      : allProducts.filter((product) => product.brand === brand);
    if (local.length) return local;
    const result = await this.search(brand, { brand, page: 0, size: 24 });
    return result.products.filter((product) => product.brand === brand);
  },

  async loadSellerProducts(sellerId, options = {}) {
    const result = await this.search("", { sellerId, ...options });
    return result.products;
  },

  async loadHomeForYou({ limit = 12, sessionId = getSessionId() } = {}) {
    // Prefer legacy card payload.
    const legacy = await getLegacyRecommendations(limit);
    if (legacy?.products?.length) {
      return {
        products: legacy.products.map(normalizeProduct),
        strategy: legacy.strategy || "legacy",
        source: "recommendations",
      };
    }

    const home = await getHomeRecommendations({ limit, sessionId });
    const ids = recommendationIds(home);
    if (ids.length) {
      return {
        products: await this.hydrateProductIds(ids),
        strategy: home?.algorithm || "home",
        source: "recommendations/home",
      };
    }

    const trending = await getTrendingRecommendations(limit);
    const trendingIds = recommendationIds(trending);
    if (trendingIds.length) {
      return {
        products: await this.hydrateProductIds(trendingIds),
        strategy: trending?.algorithm || "trending",
        source: "recommendations/trending",
      };
    }

    const behaviorIds = await getTrendingBehaviorIds(limit);
    const list = Array.isArray(behaviorIds) ? behaviorIds : getPageContent(behaviorIds);
    if (list.length) {
      return {
        products: await this.hydrateProductIds(list),
        strategy: "behavior-trending",
        source: "behavior/trending",
      };
    }

    return { products: [], strategy: "", source: "none" };
  },

  async loadCartRecommendations({ limit = 12, sessionId = getSessionId() } = {}) {
    const response = await getCartRecommendations({ limit, sessionId });
    const ids = recommendationIds(response);
    if (ids.length) {
      return this.hydrateProductIds(ids);
    }
    if (response?.products?.length) {
      return response.products.map(normalizeProduct);
    }
    return [];
  },

  async loadRecommendations(product, sessionId = getSessionId()) {
    const gateway = await getProductRecommendations(product.id, {
      limit: 12,
      sessionId,
    });
    const gatewayIds = recommendationIds(gateway);
    if (gatewayIds.length) {
      const similar = await this.hydrateProductIds(gatewayIds);
      return {
        mode: "api",
        similar: similar.slice(0, 12),
        others: [],
        fallback: [],
        failed: false,
      };
    }

    const recommendResponse = await getRecommendations(product.id, {
      similar: 12,
      others: 24,
      seed: sessionId,
    });

    const similar = getPageContent(recommendResponse?.similar || [])
      .map(normalizeProduct)
      .filter((item) => String(item.id) !== String(product.id));
    const others = getPageContent(recommendResponse?.others || [])
      .map(normalizeProduct)
      .filter((item) => String(item.id) !== String(product.id));

    if (similar.length || others.length) {
      return {
        mode: "api",
        similar: similar.slice(0, 12),
        others: others.slice(0, 12),
        fallback: [],
        failed: false,
      };
    }

    let response = null;
    if (product.category) {
      response = await getProductsByCategory(product.category, { page: 0, size: 12 });
    }

    let products = getPageContent(response).map(normalizeProduct).filter(
      (item) => String(item.id) !== String(product.id),
    );

    if (!products.length) {
      response = await getProducts({ page: 0, size: 12 });
      products = getPageContent(response).map(normalizeProduct).filter(
        (item) => String(item.id) !== String(product.id),
      );
    }

    return {
      mode: "fallback",
      similar: [],
      others: [],
      fallback: uniqueById(products).slice(0, 12),
      failed: !products.length && response === null,
    };
  },

  pickDefaultVariant(product) {
    return product.variants?.find((variant) => Number(variant.stock || 0) > 0)
      || product.variants?.[0]
      || null;
  },

  async resolveAddToCartVariant(productId, variantId) {
    if (variantId) {
      return { variantId, navigateToProduct: false };
    }

    const product = await this.loadProduct(productId);
    const inStockVariants = product.variants.filter((variant) => Number(variant.stock || 0) > 0);

    if (inStockVariants.length === 1) {
      return { variantId: inStockVariants[0].id, navigateToProduct: false, product };
    }
    if (product.variants.length > 1) {
      return { variantId: null, navigateToProduct: true, product };
    }
    return { variantId: this.pickDefaultVariant(product)?.id || null, navigateToProduct: false, product };
  },
};
