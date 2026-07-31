import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { ProductGrid } from "@/components/product/ProductCard";
import { Button, EmptyState } from "@/components/ui";
import { fetchBanners, fetchCategories, fetchHomeFeed, fetchProducts } from "@/lib/api/commerceApi";
import { useUiStore } from "@/stores";
import { APP_CONFIG } from "@/config";

export function HomePage() {
  const t = useUiStore((s) => s.t);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const bannersQuery = useQuery({
    queryKey: ["banners"],
    queryFn: fetchBanners,
  });

  const categoriesQuery = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const trendingQuery = useQuery({
    queryKey: ["products", "trending"],
    queryFn: () => fetchProducts({ page: 0, size: 10, sort: "popular" }),
  });

  const feedQuery = useInfiniteQuery({
    queryKey: ["home-feed"],
    initialPageParam: null as string | null,
    queryFn: ({ pageParam }) =>
      fetchHomeFeed({ limit: 30, cursor: pageParam }),
    getNextPageParam: (last) => (last.hasMore ? last.nextCursor : undefined),
  });

  useEffect(() => {
    const node = sentinelRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && feedQuery.hasNextPage && !feedQuery.isFetchingNextPage) {
          void feedQuery.fetchNextPage();
        }
      },
      { rootMargin: "400px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [feedQuery]);

  const feedProducts = feedQuery.data?.pages.flatMap((page) => page.products) ?? [];
  const heroBanner = bannersQuery.data?.[0] as
    | { imageUrl?: string; title?: string; subtitle?: string }
    | undefined;

  return (
    <div className="space-y-12 pb-10">
      <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-hidden">
        <div className="relative min-h-[72vh] md:min-h-[78vh]">
          <img
            src={
              heroBanner?.imageUrl ||
              "https://images.unsplash.com/photo-1598440947619-2f45e37c54e8?auto=format&fit=crop&w=2000&q=80"
            }
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent" />
          <div className="container-page relative flex min-h-[72vh] flex-col justify-end gap-5 pb-14 pt-28 text-white md:min-h-[78vh] md:justify-center md:pb-0">
            <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.28em] text-white/75">
              {APP_CONFIG.brand}
            </p>
            <h1 className="animate-fade-up font-display max-w-2xl text-5xl font-semibold leading-[1.05] md:text-7xl">
              {heroBanner?.title || t("hero.title")}
            </h1>
            <p className="animate-fade-up max-w-lg text-base text-white/85 md:text-lg">
              {heroBanner?.subtitle || t("hero.subtitle")}
            </p>
            <div className="animate-fade-up">
              <Link to="/catalog">
                <Button className="bg-white text-ink hover:bg-white/90">{t("hero.cta")}</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page space-y-4">
        <h2 className="font-display text-3xl font-semibold">{t("home.categories")}</h2>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {(categoriesQuery.data || []).slice(0, 12).map((category, index) => {
            const item = category as { id?: string | number; name?: string; code?: string };
            const label = item.name || item.code || `Category ${index + 1}`;
            const value = item.code || item.name || item.id;
            return (
              <Link
                key={String(value)}
                to={`/catalog?category=${encodeURIComponent(String(value || ""))}`}
                className="shrink-0 rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium transition hover:border-ink/40"
              >
                {label}
              </Link>
            );
          })}
        </div>
      </section>

      <section className="container-page space-y-4">
        <div className="flex items-end justify-between gap-3">
          <h2 className="font-display text-3xl font-semibold">{t("home.trending")}</h2>
          <Link to="/catalog?sort=popular" className="text-sm font-medium text-muted hover:text-ink">
            {t("nav.catalog")}
          </Link>
        </div>
        <ProductGrid products={trendingQuery.data || []} loading={trendingQuery.isLoading} />
      </section>

      <section className="container-page space-y-4">
        <h2 className="font-display text-3xl font-semibold">{t("home.feed")}</h2>
        {feedQuery.isError ? (
          <EmptyState
            title={t("common.error")}
            action={
              <Button variant="secondary" onClick={() => void feedQuery.refetch()}>
                {t("common.retry")}
              </Button>
            }
          />
        ) : (
          <>
            <ProductGrid products={feedProducts} loading={feedQuery.isLoading} />
            <div ref={sentinelRef} className="h-8" />
            {feedQuery.isFetchingNextPage ? (
              <p className="text-center text-sm text-muted">{t("common.loading")}</p>
            ) : null}
            {feedQuery.hasNextPage ? (
              <div className="flex justify-center">
                <Button
                  variant="secondary"
                  onClick={() => void feedQuery.fetchNextPage()}
                  disabled={feedQuery.isFetchingNextPage}
                >
                  {t("home.loadMore")}
                </Button>
              </div>
            ) : null}
          </>
        )}
      </section>
    </div>
  );
}
