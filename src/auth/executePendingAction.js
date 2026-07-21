import {
  PENDING_ACTION_TYPES,
  consumePendingAction,
  isPendingExecuting,
  setPendingExecuting,
} from "./pendingActionManager.js";

/**
 * Runs the queued protected action once after successful login.
 * Dynamic imports avoid circular dependency with controllers.
 */
export async function executePendingAction() {
  if (isPendingExecuting()) return false;

  const action = consumePendingAction();
  if (!action) return false;

  setPendingExecuting(true);
  try {
    switch (action.type) {
      case PENDING_ACTION_TYPES.ADD_TO_CART: {
        const { CartController } = await import("../controllers/CartController.js");
        await CartController.add(action.productId, action.variantId, action.quantity);
        break;
      }
      case PENDING_ACTION_TYPES.BUY_NOW: {
        const { CartController } = await import("../controllers/CartController.js");
        await CartController.buyNow(action.productId, action.variantId, action.quantity);
        break;
      }
      case PENDING_ACTION_TYPES.TOGGLE_FAVORITE: {
        const { FavoriteController } = await import("../controllers/FavoriteController.js");
        await FavoriteController.toggle(action.productId);
        break;
      }
      case PENDING_ACTION_TYPES.CHECKOUT: {
        const { CheckoutController } = await import("../controllers/CheckoutController.js");
        await CheckoutController.prepare();
        break;
      }
      case PENDING_ACTION_TYPES.OPEN_PROFILE: {
        const { ProfileController } = await import("../controllers/ProfileController.js");
        await ProfileController.open();
        break;
      }
      case PENDING_ACTION_TYPES.PROFILE_ORDERS: {
        const { ProfileController } = await import("../controllers/ProfileController.js");
        const { OrderController } = await import("../controllers/OrderController.js");
        await ProfileController.open();
        ProfileController.close();
        await OrderController.show();
        break;
      }
      case PENDING_ACTION_TYPES.PROFILE_NOTIFICATIONS: {
        const { ProfileController } = await import("../controllers/ProfileController.js");
        const { NotificationController } = await import("../controllers/NotificationController.js");
        await ProfileController.open();
        ProfileController.close();
        await NotificationController.open();
        break;
      }
      case PENDING_ACTION_TYPES.PROFILE_REVIEWS: {
        const { ProfileController } = await import("../controllers/ProfileController.js");
        await ProfileController.open();
        ProfileController.close();
        const { deps } = await import("../runtime/deps.js");
        await deps.reviews?.open?.();
        break;
      }
      case PENDING_ACTION_TYPES.PROFILE_PROMOTIONS: {
        const { ProfileController } = await import("../controllers/ProfileController.js");
        await ProfileController.open();
        const { showToast } = await import("../utils/toast.js");
        const { t } = await import("../i18n/index.js");
        showToast(t("profile.comingSoon"), "info");
        break;
      }
      default:
        break;
    }
    return true;
  } finally {
    setPendingExecuting(false);
  }
}
