/**
 * Pure banner link resolver — shared by HomeBannerStrip (avoids hardcoding routes in pages).
 */
import type { BannerResponse } from "@/types/commerce";

export function resolveBannerHref(banner: BannerResponse): string | null {
  const type = String(banner.linkType || "NONE").toUpperCase();
  const id = banner.linkId;
  if (id == null || id === "") return null;
  if (type === "PRODUCT") return `/product/${id}`;
  if (type === "CATEGORY") return `/category/${id}`;
  return null;
}
