import { create } from "zustand";
import { DEFAULT_LANGUAGE, type Language, SUPPORTED_LANGUAGES } from "@/config";
import { dictionaries } from "@/i18n/dictionaries";
import { clearAccessToken, setAccessToken } from "@/lib/api/client";

type Toast = { id: number; message: string; type: "success" | "error" | "info" };

type UiState = {
  language: Language;
  toasts: Toast[];
  setLanguage: (lang: Language) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
  pushToast: (message: string, type?: Toast["type"]) => void;
  dismissToast: (id: number) => void;
};

const LANG_KEY = "beauty_skin_language";

function readLanguage(): Language {
  const saved = localStorage.getItem(LANG_KEY) as Language | null;
  return saved && SUPPORTED_LANGUAGES.includes(saved) ? saved : DEFAULT_LANGUAGE;
}

export const useUiStore = create<UiState>((set, get) => ({
  language: typeof window === "undefined" ? DEFAULT_LANGUAGE : readLanguage(),
  toasts: [],
  setLanguage: (lang) => {
    localStorage.setItem(LANG_KEY, lang);
    document.documentElement.lang = lang;
    set({ language: lang });
  },
  t: (key, params = {}) => {
    const { language } = get();
    const template =
      dictionaries[language]?.[key] ??
      dictionaries.en[key] ??
      dictionaries.uz[key] ??
      key;
    return template.replace(/\{(\w+)\}/g, (_, name: string) =>
      String(params[name] ?? ""),
    );
  },
  pushToast: (message, type = "info") => {
    const id = Date.now() + Math.random();
    set((state) => ({ toasts: [...state.toasts, { id, message, type }] }));
    window.setTimeout(() => get().dismissToast(id), 3200);
  },
  dismissToast: (id) =>
    set((state) => ({ toasts: state.toasts.filter((toast) => toast.id !== id) })),
}));

type AuthState = {
  user: { id?: string | number; email?: string; fullName?: string } | null;
  setSession: (token: string, user?: AuthState["user"]) => void;
  clearSession: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setSession: (token, user = null) => {
    setAccessToken(token);
    set({ user });
  },
  clearSession: () => {
    clearAccessToken();
    set({ user: null });
  },
}));

type CartState = {
  count: number;
  setCount: (count: number) => void;
};

export const useCartStore = create<CartState>((set) => ({
  count: 0,
  setCount: (count) => set({ count }),
}));
