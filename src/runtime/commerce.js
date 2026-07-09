/**
 * Thin backward-compatible facade over the runtime modules.
 *
 * Historically this file contained the entire commerce runtime (~3.7k lines).
 * The logic now lives in dedicated modules:
 *   - bootstrap.js        -> app init / dependency wiring
 *   - eventDispatcher.js  -> bindEvents + DOM event handlers
 *   - uiInit.js           -> premium/phase-2 UI initialisation
 *   - controllers/*       -> use-case orchestration
 *   - pages/*             -> view rendering
 *   - runtime/navigation.js, runtime/router.js -> navigation & routing
 *
 * This module only re-exports the public surface that the rest of the app
 * (and legacy shim modules) still import from "runtime/commerce.js".
 */

import { apiFetch } from '../api/apiClient.js';
import { showToast } from '../utils/toast.js';

import { init } from './bootstrap.js';
import { bindEvents } from './eventDispatcher.js';
import { handleRoute } from './router.js';
import {
  navigateToProduct,
  routeHome,
  showHomeView,
  showProductView,
  openCart,
  closeCart,
} from './navigation.js';

import { HomePage, loadHome, loadHomeApi } from '../pages/home/HomePage.js';
import { CatalogPage } from '../pages/catalog/CatalogPage.js';
import { SearchPage } from '../pages/search/SearchPage.js';
import { CartPage } from '../pages/cart/CartPage.js';
import { CheckoutPage } from '../pages/checkout/CheckoutPage.js';
import { ProductDetailPage } from '../pages/product/ProductDetailPage.js';
import { FavoritesPage } from '../pages/favorites/FavoritesPage.js';
import { OrdersPage } from '../pages/orders/OrdersPage.js';
import { NotificationsPage } from '../pages/notifications/NotificationsPage.js';
import {
  productCard,
  renderProductList,
  renderSkeleton,
  renderEmpty,
} from '../pages/shared/productGrid.js';

import { CartController } from '../controllers/CartController.js';
import { CheckoutController } from '../controllers/CheckoutController.js';
import { ProductController } from '../controllers/ProductController.js';
import { AuthController } from '../controllers/AuthController.js';
import { FavoriteController } from '../controllers/FavoriteController.js';

export { init, bindEvents, apiFetch, showToast, handleRoute };
export { navigateToProduct, routeHome, showHomeView, showProductView, openCart, closeCart };
export { loadHome, loadHomeApi };
export { productCard, renderProductList, renderSkeleton, renderEmpty };

/* ================= BACKWARD-COMPAT DELEGATES ================= */

export const renderBanners = (...args) => HomePage.renderBanners(...args);
export const renderCategories = (...args) => CatalogPage.renderCategories(...args);
export const renderCart = (...args) => CartPage.render(...args);
export const renderCheckout = (...args) => CheckoutPage.render(...args);
export const renderProductDetail = (...args) => ProductDetailPage.renderProductDetail(...args);
export const renderFavorites = (...args) => FavoritesPage.render(...args);
export const renderOrders = (...args) => OrdersPage.render(...args);
export const renderNotifications = (...args) => NotificationsPage.render(...args);

export const loadCart = (...args) => CartController.load(...args);
export const addToCart = (productId, variantId, quantity) =>
  CartController.add(productId, variantId, quantity, { showLoginRequired: AuthController.showLoginRequired });
export const toggleFavorite = (productId) => FavoriteController.toggle(productId);

export const openAuthDialog = (mode = "login") => AuthController.openDialog(mode);
export const prepareCheckout = () => CheckoutController.prepare({ showLoginRequired: AuthController.showLoginRequired });
export const placeOrder = () => CheckoutController.openConfirm();

export const loadProductDetailPage = (productId) => ProductController.loadDetailPage(productId);
export const renderSearchResults = (query) => SearchPage.render(query, { showHomeView });
export const renderCategoryProducts = (category) => CatalogPage.renderCategoryProducts(category, { showHomeView });
