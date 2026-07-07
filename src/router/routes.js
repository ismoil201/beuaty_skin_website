export const ROUTES = {
  home: "#/",
  product: (id) => `#/product/${encodeURIComponent(id)}`,
  brand: (name) => `#/brand/${encodeURIComponent(name)}`,
  search: "#/search",
};
