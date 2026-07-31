import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { Button, EmptyState } from "@/components/ui";
import { ApiError, clearAccessToken } from "@/lib/api/client";
import { login } from "@/lib/api/commerceApi";
import { useAuthStore, useUiStore } from "@/stores";

export function AccountPage() {
  const t = useUiStore((s) => s.t);
  const pushToast = useUiStore((s) => s.pushToast);
  const user = useAuthStore((s) => s.user);
  const setSession = useAuthStore((s) => s.setSession);
  const clearSession = useAuthStore((s) => s.clearSession);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginMutation = useMutation({
    mutationFn: () => login(email.trim(), password),
    onSuccess: (payload) => {
      const token = payload.accessToken || payload.token || "";
      if (!token) {
        pushToast(t("common.error"), "error");
        return;
      }
      const nextUser =
        (payload.user as { id?: string | number; email?: string; fullName?: string }) || {
          email,
        };
      setSession(token, nextUser);
      pushToast(t("account.login"), "success");
    },
    onError: (error) => {
      pushToast(error instanceof ApiError ? error.friendly : t("common.error"), "error");
    },
  });

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    loginMutation.mutate();
  };

  if (user) {
    return (
      <div className="container-page space-y-6 py-8">
        <h1 className="font-display text-4xl font-semibold">{t("account.title")}</h1>
        <div className="rounded-[var(--radius-card)] border border-line bg-surface p-6">
          <p className="text-sm text-muted">{t("account.profile")}</p>
          <p className="mt-2 text-xl font-semibold">{user.fullName || user.email}</p>
          {user.email ? <p className="text-sm text-muted">{user.email}</p> : null}
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Link className="rounded-2xl border border-line bg-surface p-4" to="/orders">
            {t("nav.orders")}
          </Link>
          <Link className="rounded-2xl border border-line bg-surface p-4" to="/cart">
            {t("nav.cart")}
          </Link>
          <div className="rounded-2xl border border-line bg-surface p-4 text-muted">
            {t("account.addresses")}
          </div>
          <div className="rounded-2xl border border-line bg-surface p-4 text-muted">
            {t("nav.favorites")}
          </div>
        </div>
        <Button
          variant="secondary"
          onClick={() => {
            clearAccessToken();
            clearSession();
          }}
        >
          {t("account.logout")}
        </Button>
      </div>
    );
  }

  return (
    <div className="container-page py-10">
      <div className="mx-auto max-w-md rounded-[var(--radius-card)] border border-line bg-surface p-6 shadow-[var(--shadow-soft)]">
        <h1 className="font-display text-3xl font-semibold">{t("account.login")}</h1>
        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <label className="block text-sm">
            <span className="mb-1 block text-muted">{t("account.email")}</span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-line px-3 py-3"
            />
          </label>
          <label className="block text-sm">
            <span className="mb-1 block text-muted">{t("account.password")}</span>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-line px-3 py-3"
            />
          </label>
          <Button full disabled={loginMutation.isPending}>
            {t("account.login")}
          </Button>
        </form>
        <div className="mt-6">
          <EmptyState title={t("account.title")} description={t("footer.tagline")} />
        </div>
      </div>
    </div>
  );
}
