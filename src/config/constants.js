export const CATEGORY_LABELS = {
  SKINCARE: "Skincare",
  MAKEUP: "Makeup",
  COLLAGEN: "Collagen",
  HAIR_CARE: "Hair Care",
  FRAGRANCE: "Fragrance",
  TOP: "Top",
  OUTER: "Outer",
  PANTS: "Pants",
  SHOES: "Shoes",
  BAG: "Bag",
  ACCESSORY: "Accessory",
};

export const SUPPORTED_LANGUAGES = ["uz", "en", "ru", "ko"];
export const DEFAULT_LANGUAGE = "uz";

export const QUICK_CATEGORIES = [
  { category: "SKINCARE", icon: "S" },
  { category: "MAKEUP", icon: "M" },
  { category: "COLLAGEN", icon: "C" },
  { category: "HAIR_CARE", icon: "H" },
  { category: "FRAGRANCE", icon: "F" },
  { category: "BAG", icon: "B" },
  { category: "SHOES", icon: "S" },
  { category: "ACCESSORY", icon: "A" },
];

export const DEMO_PRODUCTS = [
  {
    id: "demo-1",
    name: "Retinol Eye Serum",
    description: "Ko‘z atrofi parvari uchun yengil serum.",
    brand: "Melart Glow",
    price: 99000,
    discountPrice: 80000,
    category: "SKINCARE",
    stock: 8,
    ratingAvg: 4.8,
    reviewCount: 12,
    soldCount: 86,
    todayDeal: true,
    favorite: false,
    imageUrl:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80",
    variants: [
      {
        id: "demo-variant-1",
        label: "30 ml",
        price: 99000,
        discountPrice: 80000,
        stock: 8,
      },
    ],
  },
  {
    id: "demo-2",
    name: "Lip & Cheek Balm",
    description: "Lab va yonoq uchun yumshoq rang beruvchi balm.",
    brand: "Muzigae Mansion",
    price: 150000,
    discountPrice: 110000,
    category: "MAKEUP",
    stock: 4,
    ratingAvg: 5,
    reviewCount: 3,
    soldCount: 21,
    todayDeal: true,
    favorite: false,
    imageUrl:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80",
    variants: [
      {
        id: "demo-variant-2",
        label: "Rose",
        price: 150000,
        discountPrice: 110000,
        stock: 4,
      },
    ],
  },
];
