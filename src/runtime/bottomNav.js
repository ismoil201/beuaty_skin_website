import {
  openCart,
  showHomeView,
  syncBottomNav,
} from "./navigation.js";
import { closeOtherShellTabs } from "./shellTabs.js";
import { FavoriteController } from "../controllers/FavoriteController.js";
import { ProfileController } from "../controllers/ProfileController.js";

/**
 * Single entry for mobile bottom navigation.
 * Shell tab opens already close siblings; Home closes all shell tabs.
 */
export async function switchMobileTab(tab) {
  if (tab === "home") {
    closeOtherShellTabs();
    if (window.location.hash && window.location.hash !== "#/" && window.location.hash !== "#") {
      window.location.hash = "#/";
    } else {
      showHomeView();
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
    syncBottomNav();
    return;
  }

  if (tab === "cart" || tab === "cartButton") {
    openCart();
    syncBottomNav();
    return;
  }

  if (tab === "favorites" || tab === "favoritesButton") {
    await FavoriteController.open();
    syncBottomNav();
    return;
  }

  if (tab === "profile" || tab === "loginButton") {
    await ProfileController.open();
    syncBottomNav();
  }
}
