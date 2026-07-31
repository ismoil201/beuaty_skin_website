import { Link } from "react-router-dom";
import { Badge, Price, Rating } from "@/components/ui";
import type { Product } from "@/types/commerce";
import { useUiStore } from "@/stores";

export function ProductCard({ product }: { product: Product }) {
  const t = useUiStore((s) => s.t);
  const soldOut = Number(product.stock) <= 0 && !product.variants.some((v) => v.stock > 0);

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block overflow-hidden rounded-[var(--radius-card)] bg-surface shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-[#f0eeeb]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
        />
        {product.discountPercent > 0 ? (
          <div className="absolute left-3 top-3">
            <Badge tone="accent">-{product.discountPercent}%</Badge>
          </div>
        ) : null}
        {soldOut ? (
          <div className="absolute inset-x-0 bottom-0 bg-ink/80 px-3 py-2 text-center text-xs font-semibold tracking-wide text-white">
            {t("product.soldOut")}
          </div>
        ) : null}
      </div>
      <div className="space-y-2 p-3.5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
          {product.brand || product.category}
        </p>
        <h3 className="line-clamp-2 min-h-[2.6em] text-sm font-medium leading-snug text-ink">
          {product.name}
        </h3>
        <Rating value={product.ratingAvg} count={product.reviewCount} />
        <Price
          value={product.finalPrice}
          original={product.originalPrice}
          discountPercent={product.discountPercent}
        />
      </div>
    </Link>
  );
}

export function ProductGrid({
  products,
  loading,
}: {
  products: Product[];
  loading?: boolean;
}) {
  if (loading) {
    return (
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="skeleton aspect-[3/4]" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {products.map((product) => (
        <ProductCard key={String(product.id)} product={product} />
      ))}
    </div>
  );
}
