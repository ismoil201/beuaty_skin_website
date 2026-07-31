import { useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ProductGrid } from "@/components/product/ProductCard";
import { Badge, Button, EmptyState, Price, Rating } from "@/components/ui";
import {
  addToCart,
  fetchProduct,
  fetchProductReviews,
  fetchRecommendations,
} from "@/lib/api/commerceApi";
import { ApiError } from "@/lib/api/client";
import { resolveVariantPrice } from "@/lib/commerce";
import { useCartStore, useUiStore } from "@/stores";

export function ProductDetailPage() {
  const { id = "" } = useParams();
  const t = useUiStore((s) => s.t);
  const pushToast = useUiStore((s) => s.pushToast);
  const setCartCount = useCartStore((s) => s.setCount);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [variantId, setVariantId] = useState<string>("");

  const productQuery = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id),
    enabled: Boolean(id),
  });

  const reviewsQuery = useQuery({
    queryKey: ["reviews", id],
    queryFn: () => fetchProductReviews(id),
    enabled: Boolean(id),
  });

  const recsQuery = useQuery({
    queryKey: ["recommendations", id],
    queryFn: () => fetchRecommendations(id),
    enabled: Boolean(id),
  });

  const product = productQuery.data;
  const selectedVariant = useMemo(() => {
    if (!product?.variants.length) return null;
    return (
      product.variants.find((v) => String(v.id) === String(variantId)) ||
      product.variants.find((v) => v.stock > 0) ||
      product.variants[0]
    );
  }, [product, variantId]);

  const stock = selectedVariant?.stock ?? product?.stock ?? 0;
  const soldOut = Number(stock) <= 0;
  const price = product
    ? resolveVariantPrice(selectedVariant, product)
    : 0;
  const gallery = product?.images?.length ? product.images : product ? [product.image] : [];

  const addMutation = useMutation({
    mutationFn: async (buyNow: boolean) => {
      if (!product) return;
      await addToCart({
        productId: product.id,
        variantId: selectedVariant?.id,
        quantity,
      });
      await queryClient.invalidateQueries({ queryKey: ["cart"] });
      const cart = queryClient.getQueryData<unknown[]>(["cart"]);
      if (Array.isArray(cart)) setCartCount(cart.length);
      pushToast(t("toast.added"), "success");
      if (buyNow) navigate("/checkout");
    },
    onError: (error) => {
      const message =
        error instanceof ApiError ? error.friendly : t("common.error");
      pushToast(message, "error");
      if (error instanceof ApiError && error.status === 401) navigate("/account");
    },
  });

  if (productQuery.isLoading) {
    return (
      <div className="container-page grid gap-8 py-8 lg:grid-cols-2">
        <div className="skeleton aspect-square" />
        <div className="space-y-3">
          <div className="skeleton h-8 w-2/3" />
          <div className="skeleton h-5 w-1/3" />
          <div className="skeleton h-24 w-full" />
        </div>
      </div>
    );
  }

  if (productQuery.isError || !product) {
    return (
      <div className="container-page py-10">
        <EmptyState title={t("common.error")} />
      </div>
    );
  }

  return (
    <div className="pb-24 md:pb-10">
      <div className="container-page grid gap-8 py-6 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-3">
          <div className="overflow-hidden rounded-[1.25rem] bg-[#f0eeeb]">
            <img
              src={gallery[galleryIndex] || product.image}
              alt={product.name}
              className="aspect-square w-full object-cover"
            />
          </div>
          {gallery.length > 1 ? (
            <div className="flex gap-2 overflow-x-auto">
              {gallery.map((image, index) => (
                <button
                  key={`${image}-${index}`}
                  type="button"
                  onClick={() => setGalleryIndex(index)}
                  className={`h-20 w-20 shrink-0 overflow-hidden rounded-xl border ${
                    index === galleryIndex ? "border-ink" : "border-transparent"
                  }`}
                >
                  <img src={image} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          ) : null}
        </div>

        <div className="space-y-5">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              {product.brand}
            </p>
            <h1 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
              {product.name}
            </h1>
            <Rating value={product.ratingAvg} count={product.reviewCount} />
          </div>

          <Price
            value={price}
            original={product.originalPrice}
            discountPercent={product.discountPercent}
          />

          {soldOut ? (
            <Badge tone="danger">{t("product.soldOut")}</Badge>
          ) : (
            <p className="text-sm text-muted">{t("product.stock", { count: stock })}</p>
          )}

          {product.variants.length ? (
            <div className="space-y-2">
              <p className="text-sm font-semibold">{t("product.variants")}</p>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((variant) => {
                  const active = String(selectedVariant?.id) === String(variant.id);
                  const disabled = variant.stock <= 0;
                  return (
                    <button
                      key={String(variant.id)}
                      type="button"
                      disabled={disabled}
                      onClick={() => setVariantId(String(variant.id))}
                      className={`rounded-full border px-4 py-2 text-sm ${
                        active ? "border-ink bg-ink text-white" : "border-line bg-surface"
                      } disabled:opacity-40`}
                    >
                      {variant.label || `#${variant.id}`}
                    </button>
                  );
                })}
              </div>
            </div>
          ) : null}

          <div className="flex items-center gap-3">
            <p className="text-sm font-semibold">{t("product.quantity")}</p>
            <div className="flex items-center rounded-full border border-line">
              <button
                type="button"
                className="px-4 py-2"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              >
                −
              </button>
              <span className="min-w-8 text-center text-sm font-semibold">{quantity}</span>
              <button
                type="button"
                className="px-4 py-2"
                onClick={() => setQuantity((q) => Math.min(stock || 99, q + 1))}
                disabled={soldOut}
              >
                +
              </button>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <Button
              full
              disabled={soldOut || addMutation.isPending}
              onClick={() => addMutation.mutate(false)}
            >
              {soldOut ? t("product.soldOut") : t("product.addToCart")}
            </Button>
            <Button
              full
              variant="secondary"
              disabled={soldOut || addMutation.isPending}
              onClick={() => addMutation.mutate(true)}
            >
              {soldOut ? t("product.soldOut") : t("product.buyNow")}
            </Button>
          </div>

          <p className="text-sm leading-relaxed text-muted">
            {product.description || t("common.empty")}
          </p>
        </div>
      </div>

      <section className="container-page space-y-4 py-6">
        <h2 className="font-display text-3xl font-semibold">{t("product.reviews")}</h2>
        <div className="space-y-3">
          {(reviewsQuery.data || []).slice(0, 6).map((review, index) => {
            const item = review as {
              id?: string | number;
              userName?: string;
              content?: string;
              rating?: number;
            };
            return (
              <article
                key={String(item.id ?? index)}
                className="rounded-[var(--radius-card)] border border-line bg-surface p-4"
              >
                <div className="mb-2 flex items-center justify-between gap-3">
                  <strong className="text-sm">{item.userName || "User"}</strong>
                  <Rating value={Number(item.rating || 0)} />
                </div>
                <p className="text-sm text-muted">{item.content || ""}</p>
              </article>
            );
          })}
          {!reviewsQuery.isLoading && !(reviewsQuery.data || []).length ? (
            <EmptyState title={t("common.empty")} />
          ) : null}
        </div>
      </section>

      {(recsQuery.data || []).length ? (
        <section className="container-page space-y-4 py-6">
          <h2 className="font-display text-3xl font-semibold">{t("product.recommended")}</h2>
          <ProductGrid products={recsQuery.data || []} />
        </section>
      ) : null}

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-surface/95 p-3 backdrop-blur md:hidden">
        <div className="flex items-center gap-3">
          <Price value={price} />
          <Button
            className="ml-auto"
            disabled={soldOut || addMutation.isPending}
            onClick={() => addMutation.mutate(false)}
          >
            {soldOut ? t("product.soldOut") : t("product.addToCart")}
          </Button>
        </div>
      </div>

      <div className="container-page">
        <Link to="/catalog" className="text-sm text-muted hover:text-ink">
          ← {t("nav.catalog")}
        </Link>
      </div>
    </div>
  );
}
