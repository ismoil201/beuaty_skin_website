import { CONFIG } from "../config/config.js";
import { getHome } from "../api/productApi.js";
import { getCategories } from "../api/categoryApi.js";
import { getBanners, getAnnouncements } from "../api/bannerApi.js";
import {
  getPageContent,
  normalizeProduct,
  normalizeCategory,
  normalizeCategoryEntity,
  numberOrZero,
} from "../utils/productMapper.js";
import { ProductService } from "./ProductService.js";

export const DEFAULT_CATEGORIES = ["SKINCARE", "MAKEUP", "COLLAGEN", "HAIR_CARE", "FRAGRANCE"];

function uniqueProductById(product, index, list) {
  return product?.id !== undefined
    && list.findIndex((item) => String(item.id) === String(product.id)) === index;
}

export const HomeService = {
  async loadHomeApiData(query = { limit: 10, page: 0, size: 20 }) {
    const response = await getHome(query);
    if (response === null) {
      return { loaded: false };
    }

    const hits = getPageContent(response.hits || []).map(normalizeProduct);
    const discounts = getPageContent(response.discounts || []).map(normalizeProduct);
    const newArrivals = getPageContent(response.newArrivals || []).map(normalizeProduct);
    const popular = getPageContent(response.popular).map(normalizeProduct);
    const hasAny = hits.length || discounts.length || newArrivals.length || popular.length;

    if (!hasAny) {
      return { loaded: false };
    }

    const products = popular.length
      ? popular
      : [...hits, ...discounts, ...newArrivals].filter(uniqueProductById);

    return {
      loaded: true,
      hits,
      discounts,
      newArrivals,
      products,
      todayDeals: discounts,
      homeApiSections: { hits, discounts, newArrivals, popular },
    };
  },

  async loadCategories() {
    const response = await getCategories();
    const page = getPageContent(response);
    const entities = page.map(normalizeCategoryEntity).filter(Boolean);
    const categories = entities.length
      ? entities.map((item) => item.code)
      : page.map(normalizeCategory).filter(Boolean);

    if (categories.length) {
      return { categories, categoryEntities: entities, demoCategories: false };
    }
    return {
      categories: DEFAULT_CATEGORIES,
      categoryEntities: DEFAULT_CATEGORIES.map((code) => ({
        code,
        name: code,
        imageUrl: "",
        icon: "",
      })),
      demoCategories: false,
    };
  },

  async loadBanners() {
    const response = await getBanners();
    return getPageContent(response)
      .map((banner) => ({
        id: banner.id,
        title: banner.title || "",
        subtitle: banner.subtitle || "",
        imageUrl: banner.imageUrl || "",
        linkType: String(banner.linkType || "NONE").toUpperCase(),
        linkId: banner.linkId,
        position: numberOrZero(banner.position),
      }))
      .sort((a, b) => a.position - b.position);
  },

  async loadAnnouncements() {
    const response = await getAnnouncements();
    return getPageContent(response)
      .map((item) => ({
        title: item.title || "",
        message: item.content || item.message || "",
        type: String(item.type || "SYSTEM").toUpperCase(),
        createdAt: item.createdAt || "",
      }))
      .filter((item) => item.title || item.message);
  },

  getRecentProductIds() {
    try {
      return JSON.parse(localStorage.getItem(CONFIG.storageKeys.recentProducts) || "[]").filter(Boolean);
    } catch {
      return [];
    }
  },

  addRecentProduct(productId) {
    if (!productId || String(productId).startsWith("demo-")) return;
    const ids = [
      String(productId),
      ...this.getRecentProductIds().filter((id) => String(id) !== String(productId)),
    ].slice(0, 12);
    localStorage.setItem(CONFIG.storageKeys.recentProducts, JSON.stringify(ids));
  },

  async loadRecentlyViewed() {
    const ids = this.getRecentProductIds();
    if (!ids.length) return [];
    return ProductService.loadProductsByIds(ids);
  },
};
