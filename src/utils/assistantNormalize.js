import { CONFIG } from "../config/config.js";
import { isDevMode } from "../config/env.js";

/**
 * @typedef {Object} NormalizedAssistantProduct
 * @property {string|number} id
 * @property {string} title
 * @property {string} name
 * @property {string} brand
 * @property {number} price
 * @property {number} discountPrice
 * @property {number} rating
 * @property {number} stock
 * @property {string} image
 * @property {string} currency
 * @property {string} category
 * @property {boolean} favorite
 * @property {string} url
 */

/**
 * @typedef {Object} NormalizedAssistantAction
 * @property {string} type Canonical lowercase type
 * @property {string} label
 * @property {string|null} productId
 * @property {string|null} variantId
 * @property {string|null} category
 * @property {string|null} brand
 * @property {object} payload
 * @property {object} raw
 */

const PLACEHOLDER_IMAGE = CONFIG.placeholderImage;

/** Canonical supported action types (lowercase). */
export const SUPPORTED_ASSISTANT_ACTIONS = Object.freeze({
  open_product: "open_product",
  view_product: "view_product",
  add_to_cart: "add_to_cart",
  open_cart: "open_cart",
  open_category: "open_category",
  open_brand: "open_brand",
});

const ACTION_ALIASES = Object.freeze({
  open_product: "open_product",
  view_product: "view_product",
  add_to_cart: "add_to_cart",
  open_cart: "open_cart",
  open_category: "open_category",
  open_brand: "open_brand",
});

function assistantLog(...args) {
  if (isDevMode()) {
    console.info("[Assistant]", ...args);
  }
}

function firstDefined(...values) {
  for (const value of values) {
    if (value !== undefined && value !== null && value !== "") return value;
  }
  return undefined;
}

function asNumber(value, fallback = 0) {
  const n = Number(value);
  return Number.isFinite(n) ? n : fallback;
}

function asString(value, fallback = "") {
  if (value === undefined || value === null) return fallback;
  return String(value);
}

function pickImageFromList(list) {
  if (!Array.isArray(list) || !list.length) return "";
  const first = list[0];
  if (!first) return "";
  if (typeof first === "string") return first;
  return (
    first.imageUrl ||
    first.image_url ||
    first.url ||
    first.src ||
    first.image ||
    ""
  );
}

/**
 * Resolve product image from every supported response shape.
 * @param {object} raw
 * @param {object} [meta]
 * @returns {{ image: string, usedFallback: boolean, source: string }}
 */
export function resolveAssistantProductImage(raw = {}, meta = {}) {
  const candidates = [
    { source: "image", value: raw.image },
    { source: "imageUrl", value: raw.imageUrl },
    { source: "image_url", value: raw.image_url },
    { source: "mainImageUrl", value: raw.mainImageUrl },
    { source: "main_image_url", value: raw.main_image_url },
    { source: "thumbnail", value: raw.thumbnail },
    { source: "thumbnailUrl", value: raw.thumbnailUrl },
    { source: "metadata.image", value: meta.image },
    { source: "metadata.imageUrl", value: meta.imageUrl },
    { source: "metadata.image_url", value: meta.image_url },
    { source: "metadata.images[0]", value: pickImageFromList(meta.images) },
    { source: "images[0]", value: pickImageFromList(raw.images) },
    { source: "detailImages[0]", value: pickImageFromList(raw.detailImages) },
    { source: "media[0]", value: pickImageFromList(raw.media) },
  ];

  for (const candidate of candidates) {
    const value = asString(candidate.value).trim();
    if (value) {
      return { image: value, usedFallback: false, source: candidate.source };
    }
  }

  assistantLog("Missing image fallback", { id: resolveAssistantProductId(raw, meta) });
  return { image: PLACEHOLDER_IMAGE, usedFallback: true, source: "placeholder" };
}

/**
 * Resolve product id from every supported alias.
 * @param {object} raw
 * @param {object} [meta]
 * @returns {string|number|null}
 */
export function resolveAssistantProductId(raw = {}, meta = {}) {
  const id = firstDefined(
    raw.id,
    raw.productId,
    raw.product_id,
    raw.productID,
    meta.id,
    meta.productId,
    meta.product_id,
    raw.sku,
    meta.sku
  );
  if (id === undefined || id === null || id === "") return null;
  return id;
}

/**
 * Normalize any backend product shape into a stable UI card model.
 * @param {object} raw
 * @returns {NormalizedAssistantProduct|null}
 */
export function normalizeAssistantProduct(raw) {
  if (!raw || typeof raw !== "object") return null;

  const meta =
    raw.metadata && typeof raw.metadata === "object"
      ? raw.metadata
      : raw.meta && typeof raw.meta === "object"
        ? raw.meta
        : {};

  const nestedProduct =
    raw.product && typeof raw.product === "object" ? raw.product : null;
  const source = nestedProduct ? { ...nestedProduct, ...raw } : raw;
  const sourceMeta =
    source.metadata && typeof source.metadata === "object"
      ? { ...meta, ...source.metadata }
      : meta;

  const id = resolveAssistantProductId(source, sourceMeta);
  if (id === null) return null;

  const { image, usedFallback, source: imageSource } = resolveAssistantProductImage(
    source,
    sourceMeta
  );

  const price = asNumber(
    firstDefined(source.price, source.originalPrice, source.original_price, sourceMeta.price),
    0
  );
  const discountPrice = asNumber(
    firstDefined(
      source.discountPrice,
      source.discount_price,
      source.finalPrice,
      source.final_price,
      source.salePrice,
      source.sale_price,
      sourceMeta.discountPrice,
      sourceMeta.discount_price,
      price
    ),
    price
  );
  const rating = asNumber(
    firstDefined(
      source.rating,
      source.ratingAvg,
      source.rating_avg,
      source.averageRating,
      sourceMeta.rating,
      sourceMeta.ratingAvg
    ),
    0
  );
  const stock = asNumber(
    firstDefined(source.stock, source.quantity, source.qty, sourceMeta.stock),
    0
  );
  const title = asString(
    firstDefined(
      source.title,
      source.name,
      source.productName,
      source.product_name,
      sourceMeta.title,
      sourceMeta.name
    ),
    "Product"
  );
  const brand = asString(
    firstDefined(source.brand, source.brandName, source.brand_name, sourceMeta.brand),
    ""
  );
  const category = asString(
    firstDefined(source.category, source.categoryName, source.category_code, sourceMeta.category),
    ""
  );
  const currency = asString(
    firstDefined(source.currency, source.currencyCode, sourceMeta.currency),
    ""
  );
  const url = asString(
    firstDefined(source.url, source.productUrl, source.product_url, sourceMeta.url),
    ""
  );
  const favorite = Boolean(
    firstDefined(source.favorite, source.isFavorite, source.is_favorite, false)
  );

  /** @type {NormalizedAssistantProduct} */
  const normalized = {
    id,
    title,
    name: title,
    brand,
    price,
    discountPrice,
    rating,
    stock,
    image,
    currency,
    category,
    favorite,
    url,
    // Compat aliases used by shared rating/stock UI helpers
    ratingAvg: rating,
    reviewCount: asNumber(firstDefined(source.reviewCount, source.review_count), 0),
    originalPrice: price,
    finalPrice: discountPrice > 0 ? discountPrice : price,
    _imageFallback: usedFallback,
    _imageSource: imageSource,
  };

  return normalized;
}

function pickLaterById(map, normalized) {
  const key = String(normalized.id);
  // Prefer the later occurrence so tool_calls can enrich legacy products[].
  map.set(key, normalized);
}

/**
 * Normalize and dedupe a list of products by id.
 * @param {unknown[]} list
 * @returns {NormalizedAssistantProduct[]}
 */
export function normalizeAssistantProducts(list = []) {
  const map = new Map();
  for (const item of list || []) {
    const normalized = normalizeAssistantProduct(item);
    if (!normalized) continue;
    pickLaterById(map, normalized);
  }
  const products = [...map.values()];
  assistantLog("Normalized Products", products);
  return products;
}

/**
 * Collect products from legacy `products[]` and tool_calls product tools.
 * @param {object} response
 * @returns {NormalizedAssistantProduct[]}
 */
export function extractAssistantProducts(response = {}) {
  const collected = [];

  if (Array.isArray(response.products)) {
    collected.push(...response.products);
  }
  if (Array.isArray(response.data?.products)) {
    collected.push(...response.data.products);
  }

  const toolCalls = Array.isArray(response.tool_calls)
    ? response.tool_calls
    : Array.isArray(response.toolCalls)
      ? response.toolCalls
      : [];

  for (const call of toolCalls) {
    const tool = String(call?.tool || call?.name || call?.type || "").toLowerCase();
    const toolResponse = call?.response || call?.result || call?.output || call?.data || {};
    const isProductTool =
      tool.includes("product") ||
      Array.isArray(toolResponse?.products) ||
      Array.isArray(call?.products);

    if (!isProductTool) continue;

    if (Array.isArray(toolResponse.products)) collected.push(...toolResponse.products);
    if (Array.isArray(call.products)) collected.push(...call.products);
    if (toolResponse.product) collected.push(toolResponse.product);
    if (call.product) collected.push(call.product);
  }

  return normalizeAssistantProducts(collected);
}

/**
 * Canonicalize action type aliases.
 * @param {string} type
 * @returns {string|null}
 */
export function canonicalizeAssistantActionType(type) {
  const key = String(type || "")
    .trim()
    .toLowerCase()
    .replace(/[\s-]+/g, "_");
  return ACTION_ALIASES[key] || null;
}

export function isSupportedAssistantAction(type) {
  return Boolean(canonicalizeAssistantActionType(type));
}

/**
 * Normalize any backend action shape.
 * @param {object} raw
 * @returns {NormalizedAssistantAction|null}
 */
export function normalizeAssistantAction(raw = {}) {
  if (!raw || typeof raw !== "object") return null;

  const payload =
    raw.payload && typeof raw.payload === "object"
      ? raw.payload
      : raw.data && typeof raw.data === "object"
        ? raw.data
        : {};

  const canonical = canonicalizeAssistantActionType(
    raw.type || raw.action || raw.action_type || raw.name || payload.type
  );
  if (!canonical) return null;

  const productIdRaw = firstDefined(
    payload.productId,
    payload.product_id,
    payload.id,
    raw.productId,
    raw.product_id,
    raw.id
  );
  const productId =
    productIdRaw === undefined || productIdRaw === null || productIdRaw === ""
      ? null
      : String(productIdRaw);

  const variantIdRaw = firstDefined(
    payload.variantId,
    payload.variant_id,
    raw.variantId,
    raw.variant_id
  );
  const variantId =
    variantIdRaw === undefined || variantIdRaw === null || variantIdRaw === ""
      ? null
      : String(variantIdRaw);

  const category = asString(
    firstDefined(payload.category, payload.categoryId, payload.category_id, raw.category),
    ""
  ) || null;
  const brand = asString(firstDefined(payload.brand, payload.brandName, raw.brand), "") || null;

  const defaultLabels = {
    open_product: "View product",
    view_product: "View product",
    add_to_cart: "Add to cart",
    open_cart: "Open cart",
    open_category: "Open category",
    open_brand: "Open brand",
  };

  /** @type {NormalizedAssistantAction} */
  const action = {
    type: canonical,
    label: asString(
      firstDefined(raw.label, raw.title, raw.text, payload.label, payload.title),
      defaultLabels[canonical] || canonical
    ),
    productId,
    variantId,
    category,
    brand,
    payload,
    raw,
  };

  return action;
}

/**
 * @param {unknown[]} list
 * @returns {NormalizedAssistantAction[]}
 */
export function normalizeAssistantActions(list = []) {
  const actions = [];
  for (const item of list || []) {
    const normalized = normalizeAssistantAction(item);
    if (normalized) actions.push(normalized);
  }
  assistantLog("Normalized Actions", actions);
  return actions;
}

/**
 * Collect actions from response.actions and tool_calls that expose actions.
 * @param {object} response
 * @returns {NormalizedAssistantAction[]}
 */
export function extractAssistantActions(response = {}) {
  const collected = [];
  if (Array.isArray(response.actions)) collected.push(...response.actions);
  if (Array.isArray(response.data?.actions)) collected.push(...response.data.actions);

  const toolCalls = Array.isArray(response.tool_calls)
    ? response.tool_calls
    : Array.isArray(response.toolCalls)
      ? response.toolCalls
      : [];

  for (const call of toolCalls) {
    const toolResponse = call?.response || call?.result || {};
    if (Array.isArray(toolResponse.actions)) collected.push(...toolResponse.actions);
    if (Array.isArray(call?.actions)) collected.push(...call.actions);
  }

  return normalizeAssistantActions(collected);
}

/**
 * Safe product navigation target using project router `#/product/:id`.
 * @param {string|number|null|undefined} productId
 * @returns {string|null}
 */
export function buildProductNavigationTarget(productId) {
  if (productId === undefined || productId === null || productId === "") return null;
  const id = String(productId).trim();
  if (!id || id === "undefined" || id === "null") return null;
  const target = `#/product/${encodeURIComponent(id)}`;
  assistantLog("Navigation target", target, { id });
  return target;
}

export { assistantLog, PLACEHOLDER_IMAGE };
