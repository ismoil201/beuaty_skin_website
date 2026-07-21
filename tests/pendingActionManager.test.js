import test from "node:test";
import assert from "node:assert/strict";
import {
  PENDING_ACTION_TYPES,
  setPendingAction,
  getPendingAction,
  consumePendingAction,
  clearPendingAction,
  hasPendingAction,
} from "../src/auth/pendingActionManager.js";

test("stores and consumes a pending add-to-cart action once", () => {
  clearPendingAction();
  setPendingAction({
    type: PENDING_ACTION_TYPES.ADD_TO_CART,
    productId: "42",
    variantId: "7",
    quantity: 2,
  });

  assert.equal(hasPendingAction(), true);
  const peek = getPendingAction();
  assert.equal(peek.type, PENDING_ACTION_TYPES.ADD_TO_CART);
  assert.equal(peek.productId, "42");
  assert.equal(peek.quantity, 2);

  const consumed = consumePendingAction();
  assert.equal(consumed.productId, "42");
  assert.equal(hasPendingAction(), false);
  assert.equal(consumePendingAction(), null);
});

test("replaces previous pending action", () => {
  clearPendingAction();
  setPendingAction({ type: PENDING_ACTION_TYPES.TOGGLE_FAVORITE, productId: "1" });
  setPendingAction({ type: PENDING_ACTION_TYPES.CHECKOUT });
  assert.equal(getPendingAction().type, PENDING_ACTION_TYPES.CHECKOUT);
  clearPendingAction();
});
