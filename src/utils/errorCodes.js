/** Vanilla SPA — business error localization (never show raw backend messages). */

import { getCurrentLanguage } from "../i18n/index.js";

export const BUSINESS_ERROR_CODES = Object.freeze([
  "OUT_OF_STOCK",
  "ORDER_NOT_PAID",
  "ORDER_CANCELED",
  "RETURN_ALREADY_EXISTS",
  "SELLER_MISSING",
]);

const MESSAGES = Object.freeze({
  OUT_OF_STOCK: {
    en: "This item is out of stock.",
    ko: "재고가 없습니다.",
    ru: "Товара нет в наличии.",
    uz: "Mahsulot omborda yo‘q.",
  },
  ORDER_NOT_PAID: {
    en: "Cannot return an unpaid order.",
    ko: "결제되지 않은 주문은 반품할 수 없습니다.",
    ru: "Нельзя вернуть неоплаченный заказ.",
    uz: "To‘lanmagan buyurtmani qaytarib bo‘lmaydi.",
  },
  ORDER_CANCELED: {
    en: "Canceled orders cannot be returned.",
    ko: "취소된 주문은 반품할 수 없습니다.",
    ru: "Отменённые заказы нельзя вернуть.",
    uz: "Bekor qilingan buyurtmani qaytarib bo‘lmaydi.",
  },
  RETURN_ALREADY_EXISTS: {
    en: "This item already has an active return request.",
    ko: "이미 진행 중인 반품 요청이 있습니다.",
    ru: "По этому товару уже есть активный запрос на возврат.",
    uz: "Bu mahsulot uchun faol qaytarish so‘rovi allaqachon mavjud.",
  },
  SELLER_MISSING: {
    en: "Unable to process return. Please contact support.",
    ko: "반품을 처리할 수 없습니다. 고객센터로 문의해 주세요.",
    ru: "Не удалось оформить возврат. Обратитесь в поддержку.",
    uz: "Qaytarishni bajarib bo‘lmadi. Qo‘llab-quvvatlashga murojaat qiling.",
  },
});

const FALLBACK = Object.freeze({
  en: "Something went wrong. Please try again.",
  ko: "문제가 발생했습니다. 다시 시도해 주세요.",
  ru: "Произошла ошибка. Попробуйте снова.",
  uz: "Xatolik yuz berdi. Qayta urinib ko‘ring.",
});

export function isBusinessErrorCode(code) {
  return typeof code === "string" && Object.prototype.hasOwnProperty.call(MESSAGES, code);
}

export function extractErrorCode(payload) {
  if (!payload || typeof payload !== "object") return "";
  if (typeof payload.code === "string") return payload.code;
  if (typeof payload.errorCode === "string") return payload.errorCode;
  if (typeof payload.error === "string" && isBusinessErrorCode(payload.error)) return payload.error;
  return "";
}

function looksTechnical(text) {
  const lower = String(text || "").toLowerCase();
  return (
    lower.includes("sql") ||
    lower.includes("exception") ||
    lower.includes("stack") ||
    lower.includes("null pointer") ||
    lower.includes("hibernate") ||
    lower.includes("jdbc")
  );
}

export function getLocalizedBusinessMessage(code, language = getCurrentLanguage(), fallback = "") {
  const lang = ["uz", "en", "ru", "ko"].includes(language) ? language : "uz";
  if (isBusinessErrorCode(code)) {
    return MESSAGES[code][lang] || MESSAGES[code].en;
  }
  if (fallback && !looksTechnical(fallback)) return String(fallback).slice(0, 180);
  return FALLBACK[lang] || FALLBACK.en;
}
