import { CONFIG } from "../config/config.js";
import {
  getProducts,
  getTodayDeals,
  getHomeFeed,
  getProductsByIds,
  getProduct,
  getProductsByCategory,
  searchProducts,
  getRecommendations,
} from "../api/productApi.js";
import { getPageContent, normalizeProduct } from "../utils/productMapper.js";

export const ProductService = {
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

  async loadMoreProducts({ feedPage, existingProducts }) {
    let products = [];
    const feedResponse = await getHomeFeed({ limit: 30 });
    products = getPageContent(feedResponse).map(normalizeProduct);

    let nextFeedPage = feedPage;
    if (!products.length) {
      nextFeedPage += 1;
      const fallback = await getProducts({ page: nextFeedPage, size: CONFIG.defaultPageSize });
      products = getPageContent(fallback).map(normalizeProduct);
    }

    const existingIds = new Set(existingProducts.map((product) => String(product.id)));
    const nextProducts = products.filter((product) => product.id && !existingIds.has(String(product.id)));
    return {
      products: [...existingProducts, ...nextProducts],
      nextProducts,
      nextFeedPage,
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
    const numericIds = ids.map(Number).filter(Number.isFinite);
    if (!numericIds.length) return [];
    const response = await getProductsByIds(numericIds);
    return getPageContent(response).map(normalizeProduct).filter((product) => product.id);
  },

  async search(query, options = {}) {
    const response = await searchProducts(query, {
      page: 0,
      size: CONFIG.defaultPageSize,
      ...options,
    });
    if (response === null) return [];
    return getPageContent(response).map(normalizeProduct);
  },

  async loadByCategory(category, options = {}) {
    const response = await getProductsByCategory(category, {
      page: 0,
      size: CONFIG.defaultPageSize,
      ...options,
    });
    if (response === null) return [];
    return getPageContent(response).map(normalizeProduct);
  },

  async loadBrandProducts(brand, sourceProducts, allProducts) {
    const local = sourceProducts.length
      ? sourceProducts.filter((product) => product.brand === brand)
      : allProducts.filter((product) => product.brand === brand);
    if (local.length) return local;
    const response = await searchProducts(brand, { page: 0, size: 24 });
    return getPageContent(response).map(normalizeProduct).filter((product) => product.brand === brand);
  },

  async loadRecommendations(product, sessionId) {
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
      fallback: products.slice(0, 12),
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
