export type ReturnBlockedReason =
  | "ORDER_NOT_PAID"
  | "ORDER_CANCELED"
  | "RETURN_ALREADY_EXISTS"
  | "SELLER_MISSING";

export type BannerLinkType = "PRODUCT" | "CATEGORY" | "NONE" | string;

export type BannerResponse = {
  id?: number | string;
  title?: string;
  subtitle?: string;
  imageUrl?: string;
  linkType?: BannerLinkType;
  linkId?: number | string | null;
  position?: number;
};

export type ProductVariant = {
  id: number | string;
  label: string;
  price: number;
  discountPrice: number | null;
  stock: number;
  active: boolean;
  tiers: Array<{ minQty: number; totalPrice: number }>;
};

export type Product = {
  id: number | string;
  name: string;
  description: string;
  brand: string;
  category: string;
  image: string;
  images: string[];
  detailImages: string[];
  price: number;
  originalPrice: number;
  discountPrice: number;
  finalPrice: number;
  discountPercent: number;
  stock: number;
  ratingAvg: number;
  reviewCount: number;
  soldCount: number;
  favorite: boolean;
  variants: ProductVariant[];
  raw: Record<string, unknown>;
};

export type FeedResponse = {
  products: Product[];
  nextCursor: string | null;
  hasMore: boolean;
};

export type CartItem = {
  id: number | string;
  productId: number | string;
  product: Product;
  image: string;
  name: string;
  brand: string;
  variantId?: number | string;
  variantLabel: string;
  unitPrice: number;
  lineTotal: number;
  quantity: number;
  stock: number;
};

export type OrderItem = {
  id: number | string;
  productName: string;
  quantity: number;
  unitPrice: number;
  image?: string;
  variantLabel?: string;
  returnable: boolean;
  returnBlockedReason?: ReturnBlockedReason;
};

export type OrderResponse = {
  id: number | string;
  orderNumber: string;
  status: string;
  createdAt: string;
  totalPrice: number;
  items?: OrderItem[];
};

/** @deprecated Use OrderResponse */
export type OrderSummary = OrderResponse;

export type ErrorResponse = {
  code?: string;
  message?: string;
  error?: string;
};

export type ReturnResponse = {
  id?: number | string;
  orderItemId?: number | string;
  status?: string;
  code?: string;
  message?: string;
};
