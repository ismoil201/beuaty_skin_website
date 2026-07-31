export const APP_CONFIG = {
  brand: "BEAUTY SKIN KOREA",
  pageSize: 24,
  placeholderImage:
    "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80",
  productionApiBase:
    "https://cosmetic-server-production.up.railway.app",
} as const;

export type Language = "uz" | "en" | "ru" | "ko";
export const SUPPORTED_LANGUAGES: Language[] = ["uz", "en", "ru", "ko"];
export const DEFAULT_LANGUAGE: Language = "uz";
