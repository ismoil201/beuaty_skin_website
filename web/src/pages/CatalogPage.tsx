import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ProductGrid } from "@/components/product/ProductCard";
import { EmptyState } from "@/components/ui";
import { fetchProducts } from "@/lib/api/commerceApi";
import { useUiStore } from "@/stores";

const SORT_OPTIONS = [
  { value: "popular", key: "filter.popular" },
  { value: "newest", key: "filter.newest" },
  { value: "price_asc", key: "filter.priceAsc" },
  { value: "price_desc", key: "filter.priceDesc" },
  { value: "rating_desc", key: "filter.rating" },
] as const;

export function CatalogPage() {
  const t = useUiStore((s) => s.t);
  const [params, setParams] = useSearchParams();
  const sort = params.get("sort") || "popular";
  const category = params.get("category") || "";
  const brand = params.get("brand") || "";
  const minPrice = params.get("minPrice") || "";
  const maxPrice = params.get("maxPrice") || "";
  const rating = params.get("rating") || "";

  const query = useMemo(
    () => ({
      page: 0,
      size: 24,
      sort,
      category: category || undefined,
      brand: brand || undefined,
      minPrice: minPrice || undefined,
      maxPrice: maxPrice || undefined,
      rating: rating || undefined,
    }),
    [sort, category, brand, minPrice, maxPrice, rating],
  );

  const productsQuery = useQuery({
    queryKey: ["catalog", query],
    queryFn: () => fetchProducts(query),
  });

  const update = (key: string, value: string) => {
    const next = new URLSearchParams(params);
    if (!value) next.delete(key);
    else next.set(key, value);
    setParams(next);
  };

  return (
    <div className="container-page space-y-6 py-8">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          BEAUTY SKIN KOREA
        </p>
        <h1 className="font-display text-4xl font-semibold md:text-5xl">{t("nav.catalog")}</h1>
      </div>

      <div className="grid gap-3 rounded-[var(--radius-card)] border border-line bg-surface p-4 md:grid-cols-5">
        <label className="text-sm">
          <span className="mb-1 block text-muted">{t("filter.sort")}</span>
          <select
            value={sort}
            onChange={(e) => update("sort", e.target.value)}
            className="w-full rounded-xl border border-line px-3 py-2"
          >
            {SORT_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {t(option.key)}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm">
          <span className="mb-1 block text-muted">{t("filter.brand")}</span>
          <input
            value={brand}
            onChange={(e) => update("brand", e.target.value)}
            className="w-full rounded-xl border border-line px-3 py-2"
          />
        </label>
        <label className="text-sm">
          <span className="mb-1 block text-muted">{t("filter.minPrice")}</span>
          <input
            inputMode="numeric"
            value={minPrice}
            onChange={(e) => update("minPrice", e.target.value)}
            className="w-full rounded-xl border border-line px-3 py-2"
          />
        </label>
        <label className="text-sm">
          <span className="mb-1 block text-muted">{t("filter.maxPrice")}</span>
          <input
            inputMode="numeric"
            value={maxPrice}
            onChange={(e) => update("maxPrice", e.target.value)}
            className="w-full rounded-xl border border-line px-3 py-2"
          />
        </label>
        <label className="text-sm">
          <span className="mb-1 block text-muted">{t("filter.ratingLabel")}</span>
          <select
            value={rating}
            onChange={(e) => update("rating", e.target.value)}
            className="w-full rounded-xl border border-line px-3 py-2"
          >
            <option value="">{t("filter.all")}</option>
            <option value="4">4+</option>
            <option value="3">3+</option>
          </select>
        </label>
      </div>

      {productsQuery.isError ? (
        <EmptyState title={t("common.error")} />
      ) : !productsQuery.isLoading && !(productsQuery.data || []).length ? (
        <EmptyState title={t("common.empty")} />
      ) : (
        <ProductGrid products={productsQuery.data || []} loading={productsQuery.isLoading} />
      )}
    </div>
  );
}
