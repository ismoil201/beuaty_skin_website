import { ProductService } from "./ProductService.js";

export const CatalogService = {
  search(query, options) {
    return ProductService.search(query, options);
  },

  loadByCategory(category, options) {
    return ProductService.loadByCategory(category, options);
  },
};
