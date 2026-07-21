import { AuthService } from "../services/AuthService.js";
import {
  clearPendingAction,
  setPendingAction,
} from "./pendingActionManager.js";

let loginRequestOpen = false;
let openLoginHandler = null;

/**
 * Wire once from AuthController to avoid circular imports at module load.
 */
export function configureRequireAuth({ openLogin } = {}) {
  if (typeof openLogin === "function") {
    openLoginHandler = openLogin;
  }
}

export function resetLoginModalGate() {
  loginRequestOpen = false;
}

export function markLoginModalOpen() {
  loginRequestOpen = true;
}

/**
 * Lazy auth gate.
 * @param {object|null} pendingAction - stored if login is required
 * @returns {boolean} true when the caller may proceed
 */
export function requireAuth(pendingAction = null) {
  if (AuthService.isLoggedIn()) {
    return true;
  }

  if (pendingAction) {
    setPendingAction(pendingAction);
  }

  if (!loginRequestOpen) {
    loginRequestOpen = true;
    openLoginHandler?.();
  }

  return false;
}

export function cancelPendingAuth() {
  clearPendingAction();
  resetLoginModalGate();
}
