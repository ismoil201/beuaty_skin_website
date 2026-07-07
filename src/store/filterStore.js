const FILTER_KEY = "beauty_skin_filters";

export const DEFAULT_FILTERS = {
  brands: [],
  minPrice: 0,
  maxPrice: 5000000,
  colors: [],
  sizes: [],
  minRating: 0,
  onSale: false,
  inStock: false,
  fastDelivery: false,
  origin: [],
  seller: [],
  sort: "popular",
  viewMode: "grid",
};

export function loadFilters() {
  try {
    const saved = JSON.parse(localStorage.getItem(FILTER_KEY) || "{}");
    return { ...DEFAULT_FILTERS, ...saved };
  } catch {
    return { ...DEFAULT_FILTERS };
  }
}

export function saveFilters(filters) {
  localStorage.setItem(FILTER_KEY, JSON.stringify({
    brands: filters.brands,
    minPrice: filters.minPrice,
    maxPrice: filters.maxPrice,
    colors: filters.colors,
    sizes: filters.sizes,
    minRating: filters.minRating,
    onSale: filters.onSale,
    inStock: filters.inStock,
    fastDelivery: filters.fastDelivery,
    origin: filters.origin,
    seller: filters.seller,
    sort: filters.sort,
    viewMode: filters.viewMode,
  }));
}

export function resetFilters() {
  return { ...DEFAULT_FILTERS };
}

export function activeFilterCount(filters) {
  let count = 0;
  if (filters.brands.length) count += filters.brands.length;
  if (filters.colors.length) count += filters.colors.length;
  if (filters.sizes.length) count += filters.sizes.length;
  if (filters.origin.length) count += filters.origin.length;
  if (filters.seller.length) count += filters.seller.length;
  if (filters.minRating > 0) count += 1;
  if (filters.onSale) count += 1;
  if (filters.inStock) count += 1;
  if (filters.fastDelivery) count += 1;
  if (filters.minPrice > DEFAULT_FILTERS.minPrice || filters.maxPrice < DEFAULT_FILTERS.maxPrice) count += 1;
  return count;
}
