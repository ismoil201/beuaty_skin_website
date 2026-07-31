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

export type OrderSummary = {
  id: number | string;
  orderNumber: string;
  status: string;
  createdAt: string;
  totalPrice: number;
  items?: OrderItem[];
};

export type OrderItem = {
  id: number | string;
  productName: string;
  quantity: number;
  unitPrice: number;
  image?: string;
  variantLabel?: string;
};
