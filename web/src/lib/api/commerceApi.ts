import { apiFetch } from "@/lib/api/client";
import {
  getPageContent,
  normalizeBanner,
  normalizeCartItem,
  normalizeFeed,
  normalizeOrder,
  normalizeProduct,
} from "@/lib/commerce";
import type {
  BannerResponse,
  CartItem,
  FeedResponse,
  OrderSummary,
  Product,
  ReturnResponse,
} from "@/types/commerce";

export async function fetchHomeFeed(params: {
  limit?: number;
  cursor?: string | null;
}): Promise<FeedResponse> {
  const data = await apiFetch("/api/home/feed", {
    query: {
      limit: params.limit ?? 30,
      cursor: params.cursor || undefined,
    },
  });
  return normalizeFeed(data);
}

export async function fetchProducts(query: Record<string, string | number | undefined>) {
  const data = await apiFetch("/api/products", { query });
  return getPageContent(data).map(normalizeProduct);
}

export async function fetchProduct(id: string | number): Promise<Product> {
  const data = await apiFetch(`/api/products/${id}`);
  return normalizeProduct((data || {}) as Record<string, unknown>);
}

export async function fetchRecommendations(productId: string | number) {
  try {
    const data = await apiFetch(`/api/products/${productId}/recommend`, {
      query: { limit: 8 },
    });
    return getPageContent(data).map(normalizeProduct);
  } catch {
    return [] as Product[];
  }
}

export async function searchProducts(query: Record<string, string | number | undefined>) {
  const data = await apiFetch("/api/search/products", { query });
  return getPageContent(data).map(normalizeProduct);
}

export async function searchSuggest(q: string) {
  if (!q.trim()) return [] as string[];
  const data = await apiFetch<unknown>("/api/search/suggest", {
    query: { q, limit: 8 },
  });
  if (Array.isArray(data)) return data.map(String);
  const payload = data as { suggestions?: unknown[]; items?: unknown[] };
  const list = payload.suggestions || payload.items || [];
  return list.map((item) => {
    if (typeof item === "string") return item;
    return String((item as { text?: string; name?: string }).text || (item as { name?: string }).name || "");
  }).filter(Boolean);
}

export async function fetchCart(): Promise<CartItem[]> {
  const data = await apiFetch("/api/cart", {
    requireAuth: true,
    silentAuth: true,
  });
  const content = getPageContent(data);
  if (content.length) return content.map(normalizeCartItem);
  if (Array.isArray((data as { items?: unknown[] })?.items)) {
    return ((data as { items: Record<string, unknown>[] }).items).map(normalizeCartItem);
  }
  return [];
}

export async function addToCart(body: {
  productId: number | string;
  variantId?: number | string;
  quantity: number;
}) {
  return apiFetch("/api/cart", {
    method: "POST",
    body,
    requireAuth: true,
  });
}

export async function updateCartItem(
  cartItemId: number | string,
  body: { quantity: number },
) {
  return apiFetch(`/api/cart/${cartItemId}`, {
    method: "PUT",
    body,
    requireAuth: true,
  });
}

export async function removeCartItem(cartItemId: number | string) {
  return apiFetch(`/api/cart/${cartItemId}`, {
    method: "DELETE",
    requireAuth: true,
  });
}

export async function fetchOrders(): Promise<OrderSummary[]> {
  const data = await apiFetch("/api/orders", {
    requireAuth: true,
    silentAuth: true,
  });
  return getPageContent(data).map(normalizeOrder);
}

export async function fetchOrder(id: string | number): Promise<OrderSummary> {
  const data = await apiFetch(`/api/orders/${id}`, { requireAuth: true });
  return normalizeOrder((data || {}) as Record<string, unknown>);
}

export async function createOrder(body: {
  receiverId: number | string;
  addressId: number | string;
  cartItemIds: Array<number | string>;
}) {
  return apiFetch("/api/orders", {
    method: "POST",
    body,
    requireAuth: true,
    csrf: true,
  });
}

export async function login(email: string, password: string) {
  return apiFetch<{ accessToken?: string; token?: string; user?: unknown }>(
    "/api/auth/login",
    {
      method: "POST",
      body: { email, password },
      csrf: true,
    },
  );
}

export async function fetchMe() {
  return apiFetch("/api/users/me", { requireAuth: true, silentAuth: true });
}

export async function fetchReceivers() {
  return apiFetch("/api/receivers", { requireAuth: true, silentAuth: true });
}

export async function fetchAddresses() {
  return apiFetch("/api/addresses", { requireAuth: true, silentAuth: true });
}

export async function fetchCategories() {
  try {
    const data = await apiFetch("/api/categories");
    return getPageContent(data);
  } catch {
    return [];
  }
}

export async function fetchBanners(): Promise<BannerResponse[]> {
  try {
    const data = await apiFetch("/api/banners");
    return getPageContent(data)
      .map(normalizeBanner)
      .sort((a, b) => (a.position || 0) - (b.position || 0));
  } catch {
    return [];
  }
}

export async function requestReturn(
  orderItemId: number | string,
  body: { reason: string; description?: string },
): Promise<ReturnResponse> {
  return apiFetch(`/api/orders/items/${orderItemId}/return`, {
    method: "POST",
    body,
    requireAuth: true,
    csrf: true,
  });
}

export async function fetchProductReviews(productId: string | number) {
  try {
    const data = await apiFetch(`/api/reviews/product/${productId}`);
    return getPageContent(data);
  } catch {
    return [];
  }
}
