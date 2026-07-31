import type { Language } from "@/config";

export type BusinessErrorCode =
  | "OUT_OF_STOCK"
  | "ORDER_NOT_PAID"
  | "ORDER_CANCELED"
  | "RETURN_ALREADY_EXISTS"
  | "SELLER_MISSING";

export type ReturnBlockedReason =
  | "ORDER_NOT_PAID"
  | "ORDER_CANCELED"
  | "RETURN_ALREADY_EXISTS"
  | "SELLER_MISSING";

type LocalizedMap = Record<Language, string>;

export const ErrorMessages: Record<BusinessErrorCode, LocalizedMap> = {
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
};

const FALLBACK: LocalizedMap = {
  en: "Something went wrong. Please try again.",
  ko: "문제가 발생했습니다. 다시 시도해 주세요.",
  ru: "Произошла ошибка. Попробуйте снова.",
  uz: "Xatolik yuz berdi. Qayta urinib ko‘ring.",
};

export function isBusinessErrorCode(code: unknown): code is BusinessErrorCode {
  return typeof code === "string" && code in ErrorMessages;
}

export function getLocalizedErrorMessage(
  code: unknown,
  language: Language = "uz",
  fallback?: string,
): string {
  if (isBusinessErrorCode(code)) {
    return ErrorMessages[code][language] || ErrorMessages[code].en;
  }
  if (fallback && !looksTechnical(fallback)) return fallback.slice(0, 180);
  return FALLBACK[language] || FALLBACK.en;
}

function looksTechnical(text: string) {
  const lower = text.toLowerCase();
  return (
    lower.includes("sql") ||
    lower.includes("exception") ||
    lower.includes("stack") ||
    lower.includes("null pointer") ||
    lower.includes("hibernate") ||
    lower.includes("jdbc")
  );
}

export function extractErrorCode(payload: unknown): string | undefined {
  if (!payload || typeof payload !== "object") return undefined;
  const obj = payload as { code?: unknown; errorCode?: unknown; error?: unknown };
  if (typeof obj.code === "string") return obj.code;
  if (typeof obj.errorCode === "string") return obj.errorCode;
  if (typeof obj.error === "string" && isBusinessErrorCode(obj.error)) return obj.error;
  return undefined;
}
