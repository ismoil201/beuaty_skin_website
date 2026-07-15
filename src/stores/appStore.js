import { CONFIG } from "../config/config.js";
import { normalizeSavedBaseUrl } from "../config/apiBase.js";
import { getSessionId } from "../utils/storage.js";
import { createStore } from "./createStore.js";

export const appStore = createStore({
  baseUrl: normalizeSavedBaseUrl(localStorage.getItem(CONFIG.storageKeys.baseUrl) || ""),
  lastApiError: "",
  lastApiStatus: 0,
  currentRoute: "home",
  sessionId: getSessionId(),
  impressionsSent: new Set(),
  impressionObserver: null,
  isLoading: false,
  searchTimer: null,
  supportFaqOpen: 0,
  flashSaleEnd: null,
  currentSearchQuery: "",
  currentGridScreen: "home",
  orders: [],
  ordersLoading: false,
  ordersError: "",
  selectedOrder: null,
  selectedOrderHistory: [],
  orderDetailLoading: false,
  orderDetailError: "",
  orderHistoryWarning: "",
  savedForLater: [],
});
