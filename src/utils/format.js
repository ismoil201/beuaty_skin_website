import { getCurrentLanguage } from "../i18n/index.js";
import { numberOrZero } from "./productMapper.js";

export function formatPrice(value) {
  const currentLanguage = getCurrentLanguage();
  const currencyLabels = { uz: "so'm", en: "UZS", ru: "сум", ko: "UZS" };
  const locale = currentLanguage === "uz" ? "uz-UZ" : currentLanguage;
  return `${new Intl.NumberFormat(locale).format(numberOrZero(value))} ${currencyLabels[currentLanguage] || "UZS"}`;
}

export function formatMoney(amount) {
  return formatPrice(amount);
}

export function formatDateTime(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return String(value);
  const currentLanguage = getCurrentLanguage();
  return new Intl.DateTimeFormat(currentLanguage, {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

export function formatOrderDetailDate(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return String(value);
  const lang = getCurrentLanguage();
  const datePart = new Intl.DateTimeFormat(lang, {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
  const timePart = new Intl.DateTimeFormat(lang, {
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
  return `${datePart} • ${timePart}`;
}
