import { useState, type FormEvent } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { SUPPORTED_LANGUAGES, type Language, APP_CONFIG } from "@/config";
import { useAuthStore, useCartStore, useUiStore } from "@/stores";
import { cn } from "@/lib/cn";

const navClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    "text-sm font-medium transition",
    isActive ? "text-ink" : "text-muted hover:text-ink",
  );

export function Header() {
  const t = useUiStore((s) => s.t);
  const language = useUiStore((s) => s.language);
  const setLanguage = useUiStore((s) => s.setLanguage);
  const cartCount = useCartStore((s) => s.count);
  const user = useAuthStore((s) => s.user);
  const navigate = useNavigate();
  const [q, setQ] = useState("");

  const onSearch = (event: FormEvent) => {
    event.preventDefault();
    const query = q.trim();
    if (!query) return;
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-surface/90 backdrop-blur-xl">
      <div className="container-page flex items-center gap-3 py-3 md:gap-6 md:py-4">
        <Link to="/" className="shrink-0 animate-fade-up">
          <div className="font-display text-xl font-semibold tracking-[0.04em] text-ink md:text-2xl">
            {APP_CONFIG.brand}
          </div>
          <div className="hidden text-[10px] uppercase tracking-[0.22em] text-muted sm:block">
            Korean Beauty
          </div>
        </Link>

        <form onSubmit={onSearch} className="hidden min-w-0 flex-1 md:block">
          <label className="sr-only" htmlFor="header-search">
            {t("nav.search")}
          </label>
          <input
            id="header-search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={t("search.placeholder")}
            className="w-full rounded-full border border-line bg-canvas px-5 py-3 text-sm outline-none transition focus:border-ink/40"
          />
        </form>

        <nav className="ml-auto flex items-center gap-3 md:gap-5" aria-label="Main">
          <NavLink to="/catalog" className={navClass}>
            {t("nav.catalog")}
          </NavLink>
          <NavLink to="/orders" className={cn(navClass, "hidden sm:inline")}>
            {t("nav.orders")}
          </NavLink>
          <NavLink to="/cart" className={navClass}>
            {t("nav.cart")}
            {cartCount > 0 ? (
              <span className="ml-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1 text-[11px] text-white">
                {cartCount}
              </span>
            ) : null}
          </NavLink>
          <NavLink to="/account" className={navClass}>
            {user?.fullName || user?.email || t("nav.account")}
          </NavLink>
          <label className="hidden items-center gap-1 text-xs text-muted lg:flex">
            <span className="sr-only">Language</span>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as Language)}
              className="rounded-full border border-line bg-transparent px-2 py-1"
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang} value={lang}>
                  {lang.toUpperCase()}
                </option>
              ))}
            </select>
          </label>
        </nav>
      </div>

      <form onSubmit={onSearch} className="container-page pb-3 md:hidden">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={t("search.placeholder")}
          className="w-full rounded-full border border-line bg-canvas px-4 py-2.5 text-sm outline-none"
        />
      </form>
    </header>
  );
}

export function Footer() {
  const t = useUiStore((s) => s.t);
  return (
    <footer className="mt-16 border-t border-line bg-surface">
      <div className="container-page grid gap-8 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="font-display text-3xl font-semibold">{APP_CONFIG.brand}</div>
          <p className="mt-3 max-w-sm text-sm text-muted">{t("footer.tagline")}</p>
        </div>
        <div className="space-y-2 text-sm text-muted">
          <Link to="/catalog">{t("nav.catalog")}</Link>
          <div>
            <Link to="/orders">{t("nav.orders")}</Link>
          </div>
          <div>
            <Link to="/account">{t("nav.account")}</Link>
          </div>
        </div>
        <div className="text-sm text-muted">
          <p>© {new Date().getFullYear()} {APP_CONFIG.brand}</p>
          <p className="mt-2">{t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
}

export function MobileTabBar() {
  const t = useUiStore((s) => s.t);
  const cartCount = useCartStore((s) => s.count);
  const items = [
    { to: "/", label: t("nav.home") },
    { to: "/catalog", label: t("nav.catalog") },
    { to: "/search", label: t("nav.search") },
    { to: "/cart", label: t("nav.cart"), badge: cartCount },
    { to: "/account", label: t("nav.account") },
  ];

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-surface/95 px-2 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden">
      <ul className="grid grid-cols-5 gap-1 py-2">
        {items.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "relative flex flex-col items-center gap-1 rounded-xl px-1 py-2 text-[11px] font-medium",
                  isActive ? "bg-accent-soft text-accent" : "text-muted",
                )
              }
            >
              <span>{item.label}</span>
              {item.badge ? (
                <span className="absolute right-2 top-1 h-4 min-w-4 rounded-full bg-accent px-1 text-[10px] leading-4 text-white">
                  {item.badge}
                </span>
              ) : null}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
