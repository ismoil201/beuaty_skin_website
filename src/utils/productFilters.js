import { numberOrZero } from "./productMapper.js";

const COLOR_KEYWORDS = ["red", "blue", "pink", "black", "white", "green", "nude", "coral", "beige", "brown", "purple", "orange", "yellow", "gray", "grey", "rose", "peach", "ivory", "gold", "silver"];
const SIZE_KEYWORDS = ["xs", "s", "m", "l", "xl", "xxl", "ml", "g", "oz", "50ml", "100ml", "150ml", "200ml", "30ml"];

export function extractFacetOptions(products) {
  const brands = new Set();
  const colors = new Set();
  const sizes = new Set();
  let maxPrice = 0;

  products.forEach((product) => {
    if (product.brand) brands.add(product.brand);
    maxPrice = Math.max(maxPrice, numberOrZero(product.finalPrice));

    product.variants?.forEach((variant) => {
      const label = String(variant.label || "").toLowerCase();
      COLOR_KEYWORDS.forEach((c) => { if (label.includes(c)) colors.add(c.charAt(0).toUpperCase() + c.slice(1)); });
      SIZE_KEYWORDS.forEach((s) => { if (label.includes(s)) sizes.add(s.toUpperCase()); });
      if (variant.color) colors.add(variant.color);
      if (variant.size) sizes.add(variant.size);
    });
  });

  return {
    brands: [...brands].sort(),
    colors: [...colors].sort(),
    sizes: [...sizes].sort(),
    maxPrice: maxPrice || 5000000,
  };
}

export function applyProductFilters(products, filters) {
  let result = [...products];

  if (filters.brands?.length) {
    result = result.filter((p) => filters.brands.includes(p.brand));
  }

  if (filters.minPrice > 0 || filters.maxPrice < 5000000) {
    result = result.filter((p) => {
      const price = numberOrZero(p.finalPrice);
      return price >= filters.minPrice && price <= filters.maxPrice;
    });
  }

  if (filters.minRating > 0) {
    result = result.filter((p) => numberOrZero(p.ratingAvg) >= filters.minRating);
  }

  if (filters.onSale) {
    result = result.filter((p) => numberOrZero(p.discountPercent) > 0 || p.todayDeal);
  }

  if (filters.inStock) {
    result = result.filter((p) => numberOrZero(p.stock) > 0);
  }

  if (filters.fastDelivery) {
    result = result.filter((p) => numberOrZero(p.stock) > 0);
  }

  if (filters.colors?.length) {
    result = result.filter((p) => {
      const labels = (p.variants || []).map((v) => String(v.label || v.color || "").toLowerCase()).join(" ");
      return filters.colors.some((c) => labels.includes(c.toLowerCase()));
    });
  }

  if (filters.sizes?.length) {
    result = result.filter((p) => {
      const labels = (p.variants || []).map((v) => String(v.label || v.size || "").toLowerCase()).join(" ");
      return filters.sizes.some((s) => labels.includes(s.toLowerCase()));
    });
  }

  return sortProducts(result, filters.sort);
}

export function sortProducts(products, sort) {
  const list = [...products];
  switch (sort) {
    case "price-asc":
      return list.sort((a, b) => numberOrZero(a.finalPrice) - numberOrZero(b.finalPrice));
    case "price-desc":
      return list.sort((a, b) => numberOrZero(b.finalPrice) - numberOrZero(a.finalPrice));
    case "rating":
      return list.sort((a, b) => numberOrZero(b.ratingAvg) - numberOrZero(a.ratingAvg));
    case "newest":
      return list.sort((a, b) => numberOrZero(b.id) - numberOrZero(a.id));
    case "discount":
      return list.sort((a, b) => numberOrZero(b.discountPercent) - numberOrZero(a.discountPercent));
    default:
      return list.sort((a, b) => numberOrZero(b.soldCount) - numberOrZero(a.soldCount));
  }
}

export function highlightMatch(text, query) {
  if (!query || !text) return text;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return String(text).replace(new RegExp(`(${escaped})`, "gi"), "<mark>$1</mark>");
}
