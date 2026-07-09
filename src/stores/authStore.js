import { CONFIG } from "../config/config.js";
import { getToken, readJsonStorage } from "../utils/storage.js";
import { createStore } from "./createStore.js";

export const authStore = createStore({
  accessToken: getToken(),
  user: readJsonStorage(CONFIG.storageKeys.user, null),
  role: localStorage.getItem(CONFIG.storageKeys.role) || "",
  authMode: "login",
  authLoading: false,
  profileEditing: false,
  profileLoading: false,
  profileMenuOpen: false,
  profileLoadSeq: 0,
});
