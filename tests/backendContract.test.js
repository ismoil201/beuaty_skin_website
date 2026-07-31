import test from "node:test";
import assert from "node:assert/strict";

// Minimal browser globals for modules that touch i18n/storage at import time.
globalThis.localStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
};

const {
  getLocalizedBusinessMessage,
  extractErrorCode,
  isBusinessErrorCode,
} = await import("../src/utils/errorCodes.js");
const { getOrderDisplayNumber, normalizeOrderItem } = await import(
  "../src/utils/productMapper.js"
);

test("business error codes localize without raw messages", () => {
  assert.equal(isBusinessErrorCode("ORDER_NOT_PAID"), true);
  assert.equal(
    getLocalizedBusinessMessage("ORDER_NOT_PAID", "en"),
    "Cannot return an unpaid order.",
  );
  assert.equal(
    getLocalizedBusinessMessage("ORDER_NOT_PAID", "ko"),
    "결제되지 않은 주문은 반품할 수 없습니다.",
  );
  assert.match(getLocalizedBusinessMessage("RETURN_ALREADY_EXISTS", "ru"), /возврат/i);
  assert.match(getLocalizedBusinessMessage("SELLER_MISSING", "uz"), /Qo‘llab-quvvatlash/i);
});

test("extractErrorCode prefers code field", () => {
  assert.equal(extractErrorCode({ code: "OUT_OF_STOCK", message: "sql boom" }), "OUT_OF_STOCK");
  assert.equal(extractErrorCode({ error: "ORDER_CANCELED" }), "ORDER_CANCELED");
});

test("order item returnable fields normalize", () => {
  const blocked = normalizeOrderItem({
    id: 81,
    returnable: false,
    returnBlockedReason: "ORDER_NOT_PAID",
    productName: "Cream",
    quantity: 1,
    unitPrice: 1000,
  });
  assert.equal(blocked.returnable, false);
  assert.equal(blocked.returnBlockedReason, "ORDER_NOT_PAID");

  const ok = normalizeOrderItem({ id: 82, returnable: true });
  assert.equal(ok.returnable, true);
  assert.equal(ok.returnBlockedReason, undefined);
});

test("orderNumber display prefers backend orderNumber", () => {
  assert.equal(getOrderDisplayNumber({ id: 123, orderNumber: "BSK-000123" }), "BSK-000123");
  assert.equal(getOrderDisplayNumber({ id: 99 }), "BSK-99");
});
