/**
 * Stores a single protected-action intent while the user authenticates.
 * Cleared after one successful run or explicit cancel.
 */

export const PENDING_ACTION_TYPES = Object.freeze({
  ADD_TO_CART: "ADD_TO_CART",
  BUY_NOW: "BUY_NOW",
  TOGGLE_FAVORITE: "TOGGLE_FAVORITE",
  OPEN_FAVORITES: "OPEN_FAVORITES",
  CHECKOUT: "CHECKOUT",
});

let pendingAction = null;
let executing = false;

export function setPendingAction(action) {
  if (!action || !action.type) return;
  pendingAction = {
    type: action.type,
    productId: action.productId ?? null,
    variantId: action.variantId ?? null,
    quantity: action.quantity ?? 1,
    hash: typeof window !== "undefined" ? window.location.hash : "",
    createdAt: Date.now(),
  };
}

export function getPendingAction() {
  return pendingAction;
}

export function hasPendingAction() {
  return Boolean(pendingAction);
}

export function clearPendingAction() {
  pendingAction = null;
}

/** Returns and clears the pending action (one-shot). */
export function consumePendingAction() {
  const action = pendingAction;
  pendingAction = null;
  return action;
}

export function isPendingExecuting() {
  return executing;
}

export function setPendingExecuting(value) {
  executing = Boolean(value);
}
