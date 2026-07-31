import { APP_CONFIG } from "@/config";
import type {
  CartItem,
  FeedResponse,
  OrderItem,
  OrderResponse,
  Product,
  ProductVariant,
  ReturnBlockedReason,
} from "@/types/commerce";
import { isBusinessErrorCode } from "@/lib/errors/ErrorCode";

function numberOrZero(value: unknown) {
  const n = Number(value);
  return Number.isFinite(n) ? n : 0;
}

function imageValue(value: unknown): string {
  if (!value) return "";
  if (typeof value === "string") return value;
  if (typeof value === "object" && value) {
    const obj = value as { imageUrl?: string; url?: string };
    return obj.imageUrl || obj.url || "";
  }
  return "";
}

function normalizeImages(images: unknown): string[] {
  if (!Array.isArray(images)) return [];
  return images.map(imageValue).filter(Boolean);
}

function normalizeReturnBlockedReason(value: unknown): ReturnBlockedReason | undefined {
  const code = String(value || "");
  return isBusinessErrorCode(code) && code !== "OUT_OF_STOCK"
    ? (code as ReturnBlockedReason)
    : undefined;
}

function normalizeVariant(variant: Record<string, unknown> = {}): ProductVariant {
  const tiers = Array.isArray(variant.tiers)
    ? variant.tiers
        .map((tier) => {
          const t = tier as { minQty?: unknown; totalPrice?: unknown };
          return {
            minQty: Math.max(1, Math.round(numberOrZero(t.minQty))),
            totalPrice: numberOrZero(t.totalPrice),
          };
        })
        .filter((t) => t.minQty >= 1 && t.totalPrice > 0)
        .sort((a, b) => a.minQty - b.minQty)
    : [];

  return {
    id: (variant.id as number | string) ?? "",
    label: String(variant.label || ""),
    price: numberOrZero(variant.price),
    discountPrice:
      variant.discountPrice == null ? null : numberOrZero(variant.discountPrice),
    stock: numberOrZero(variant.stock),
    active: variant.active !== false,
    tiers,
  };
}

export function normalizeProduct(product: Record<string, unknown> = {}): Product {
  const variants = Array.isArray(product.variants)
    ? product.variants.map((v) => normalizeVariant(v as Record<string, unknown>))
    : [];
  const selected =
    variants.find((v) => Number(v.stock || 0) > 0) || variants[0] || null;
  const images = normalizeImages(product.images);
  const detailImages = normalizeImages(product.detailImages);
  const mainImage =
    imageValue(product.mainImageUrl) ||
    images[0] ||
    String(product.imageUrl || "") ||
    APP_CONFIG.placeholderImage;
  const originalPrice = numberOrZero(product.price ?? selected?.price);
  const finalPrice = numberOrZero(
    selected?.discountPrice ?? product.discountPrice ?? product.price,
  );
  const discountPercent =
    originalPrice > finalPrice && originalPrice > 0
      ? Math.round(((originalPrice - finalPrice) / originalPrice) * 100)
      : 0;

  return {
    id: (product.id as number | string) ?? "",
    name: String(product.name || "Product"),
    description: String(product.description || ""),
    brand: String(product.brand || ""),
    category: String(product.category || ""),
    image: mainImage,
    images: images.length ? images : [mainImage],
    detailImages,
    price: numberOrZero(product.price),
    originalPrice,
    discountPrice: numberOrZero(product.discountPrice),
    finalPrice,
    discountPercent,
    stock: numberOrZero(product.stock),
    ratingAvg: numberOrZero(product.ratingAvg),
    reviewCount: numberOrZero(product.reviewCount),
    soldCount: numberOrZero(product.soldCount),
    favorite: Boolean(product.favorite),
    variants,
    raw: product,
  };
}

export function getPageContent(response: unknown): Record<string, unknown>[] {
  if (Array.isArray(response)) return response as Record<string, unknown>[];
  if (!response || typeof response !== "object") return [];
  const r = response as Record<string, unknown>;
  if (Array.isArray(r.content)) return r.content as Record<string, unknown>[];
  if (Array.isArray(r.items)) return r.items as Record<string, unknown>[];
  if (Array.isArray(r.products)) return r.products as Record<string, unknown>[];
  if (Array.isArray(r.data)) return r.data as Record<string, unknown>[];
  return [];
}

export function normalizeFeed(response: unknown): FeedResponse {
  // Legacy: bare product array
  if (Array.isArray(response)) {
    const products = response.map((item) =>
      normalizeProduct((item || {}) as Record<string, unknown>),
    );
    return { products, nextCursor: null, hasMore: false };
  }

  const r = (response || {}) as Record<string, unknown>;
  const products = getPageContent(response).map(normalizeProduct);
  const nextCursor =
    (typeof r.nextCursor === "string" && r.nextCursor) ||
    (typeof r.cursor === "string" && r.cursor) ||
    null;
  const hasMore =
    typeof r.hasMore === "boolean"
      ? r.hasMore
      : Boolean(nextCursor);

  return {
    products,
    nextCursor,
    hasMore,
  };
}

export function normalizeCartItem(item: Record<string, unknown> = {}): CartItem {
  const product = normalizeProduct(
    (item.product ||
      (item.variant as { product?: Record<string, unknown> })?.product ||
      item) as Record<string, unknown>,
  );
  const quantity = numberOrZero(item.quantity) || 1;
  const unitPrice = numberOrZero(item.unitPrice || product.finalPrice);
  return {
    id: (item.id || item.cartItemId) as number | string,
    productId: product.id,
    product,
    image:
      imageValue(item.image || item.imageUrl || item.mainImageUrl) || product.image,
    name: product.name,
    brand: product.brand,
    variantId: (item.variantId ||
      (item.variant as { id?: number | string })?.id) as number | string | undefined,
    variantLabel: String(
      item.variantLabel || (item.variant as { label?: string })?.label || "",
    ),
    unitPrice,
    lineTotal: numberOrZero(item.lineTotal || unitPrice * quantity),
    quantity,
    stock: numberOrZero(
      item.stock ?? (item.variant as { stock?: number })?.stock ?? product.stock,
    ),
  };
}

export function normalizeOrderItem(item: Record<string, unknown> = {}): OrderItem {
  const reason = normalizeReturnBlockedReason(item.returnBlockedReason);
  return {
    id: (item.id || item.orderItemId) as number | string,
    productName: String(item.productName || item.name || "Product"),
    quantity: numberOrZero(item.quantity),
    unitPrice: numberOrZero(item.unitPrice || item.price),
    image: imageValue(item.image || item.imageUrl),
    variantLabel: String(item.variantLabel || ""),
    returnable: item.returnable === true,
    returnBlockedReason: reason,
  };
}

export function normalizeOrder(order: Record<string, unknown> = {}): OrderResponse {
  const items = Array.isArray(order.items)
    ? order.items.map((raw) => normalizeOrderItem((raw || {}) as Record<string, unknown>))
    : [];

  const id = order.id as number | string;
  const orderNumber = String(
    order.orderNumber || order.orderNo || (id != null && id !== "" ? `BSK-${id}` : ""),
  );

  return {
    id,
    orderNumber,
    status: String(order.status || "PENDING"),
    createdAt: String(order.createdAt || order.created_at || ""),
    totalPrice: numberOrZero(order.totalPrice || order.total || order.amount || order.totalAmount),
    items,
  };
}

export function normalizeBanner(banner: Record<string, unknown> = {}) {
  const linkIdRaw = banner.linkId;
  const linkId =
    linkIdRaw == null || linkIdRaw === ""
      ? null
      : (typeof linkIdRaw === "string" || typeof linkIdRaw === "number"
          ? linkIdRaw
          : String(linkIdRaw));

  return {
    id: banner.id as number | string | undefined,
    title: String(banner.title || ""),
    subtitle: String(banner.subtitle || ""),
    imageUrl: String(banner.imageUrl || banner.image || ""),
    linkType: String(banner.linkType || "NONE").toUpperCase(),
    linkId,
    position: numberOrZero(banner.position),
  };
}

export function formatPrice(value: number, locale = "uz-UZ") {
  return new Intl.NumberFormat(locale, {
    style: "decimal",
    maximumFractionDigits: 0,
  }).format(Math.round(value || 0)) + " so'm";
}

export function resolveVariantPrice(variant: ProductVariant | null, product: Product) {
  if (!variant) return product.finalPrice;
  if (variant.discountPrice != null) return variant.discountPrice;
  return variant.price || product.finalPrice;
}
