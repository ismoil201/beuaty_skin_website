import { ProductService } from "./ProductService.js";

export const CatalogService = {
  async search(query, options) {
    const result = await ProductService.search(query, options);
    return Array.isArray(result) ? result : result?.products || [];
  },

  loadByCategory(category, options) {
    return ProductService.loadByCategory(category, options);
  },
};
