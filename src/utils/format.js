import { getCurrentLanguage } from "../i18n/index.js";
import { numberOrZero } from "./productMapper.js";

export function formatPrice(value) {
  const currentLanguage = getCurrentLanguage();
  const currencyLabels = { uz: "so'm", en: "UZS", ru: "сум", ko: "UZS" };
  const locale = currentLanguage === "uz" ? "uz-UZ" : currentLanguage;
  return `${new Intl.NumberFormat(locale).format(numberOrZero(value))} ${currencyLabels[currentLanguage] || "UZS"}`;
}
