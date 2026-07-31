import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import { Button, EmptyState, Price } from "@/components/ui";
import { ApiError } from "@/lib/api/client";
import { fetchCart, removeCartItem, updateCartItem } from "@/lib/api/commerceApi";
import { useCartStore, useUiStore } from "@/stores";
import { useEffect } from "react";

export function CartPage() {
  const t = useUiStore((s) => s.t);
  const pushToast = useUiStore((s) => s.pushToast);
  const setCount = useCartStore((s) => s.setCount);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const cartQuery = useQuery({
    queryKey: ["cart"],
    queryFn: fetchCart,
    retry: false,
  });

  useEffect(() => {
    if (cartQuery.data) setCount(cartQuery.data.length);
  }, [cartQuery.data, setCount]);

  const refreshOnStockError = async (error: unknown) => {
    if (error instanceof ApiError && error.code === "OUT_OF_STOCK") {
      await queryClient.invalidateQueries({ queryKey: ["cart"] });
      pushToast(t("cart.outOfStock"), "error");
      return;
    }
    pushToast(error instanceof ApiError ? error.friendly : t("common.error"), "error");
  };

  const updateMutation = useMutation({
    mutationFn: ({ id, quantity }: { id: string | number; quantity: number }) =>
      updateCartItem(id, { quantity }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: refreshOnStockError,
  });

  const removeMutation = useMutation({
    mutationFn: (id: string | number) => removeCartItem(id),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: refreshOnStockError,
  });

  const items = cartQuery.data || [];
  const subtotal = items.reduce((sum, item) => sum + item.lineTotal, 0);

  if (cartQuery.isLoading) {
    return (
      <div className="container-page space-y-3 py-8">
        <div className="skeleton h-24" />
        <div className="skeleton h-24" />
      </div>
    );
  }

  if (cartQuery.isError) {
    return (
      <div className="container-page py-10">
        <EmptyState
          title={t("account.login")}
          description={t("common.error")}
          action={
            <Button onClick={() => navigate("/account")}>{t("account.login")}</Button>
          }
        />
      </div>
    );
  }

  if (!items.length) {
    return (
      <div className="container-page py-10">
        <EmptyState
          title={t("cart.empty")}
          action={
            <Link to="/catalog">
              <Button>{t("hero.cta")}</Button>
            </Link>
          }
        />
      </div>
    );
  }

  return (
    <div className="container-page grid gap-8 py-8 lg:grid-cols-[1.4fr_0.8fr]">
      <section className="space-y-4">
        <h1 className="font-display text-4xl font-semibold">{t("cart.title")}</h1>
        {items.map((item) => (
          <article
            key={String(item.id)}
            className="flex gap-4 rounded-[var(--radius-card)] border border-line bg-surface p-4"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-24 w-24 rounded-xl object-cover"
            />
            <div className="min-w-0 flex-1 space-y-2">
              <div>
                <p className="text-xs uppercase tracking-wide text-muted">{item.brand}</p>
                <h3 className="truncate font-medium">{item.name}</h3>
                {item.variantLabel ? (
                  <p className="text-sm text-muted">{item.variantLabel}</p>
                ) : null}
              </div>
              <Price value={item.unitPrice} />
              <div className="flex items-center gap-3">
                <div className="flex items-center rounded-full border border-line">
                  <button
                    type="button"
                    className="px-3 py-1"
                    onClick={() =>
                      updateMutation.mutate({
                        id: item.id,
                        quantity: Math.max(1, item.quantity - 1),
                      })
                    }
                  >
                    −
                  </button>
                  <span className="min-w-8 text-center text-sm">{item.quantity}</span>
                  <button
                    type="button"
                    className="px-3 py-1"
                    onClick={() =>
                      updateMutation.mutate({
                        id: item.id,
                        quantity: item.quantity + 1,
                      })
                    }
                  >
                    +
                  </button>
                </div>
                <button
                  type="button"
                  className="text-sm text-muted hover:text-danger"
                  onClick={() => removeMutation.mutate(item.id)}
                >
                  {t("cart.remove")}
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>

      <aside className="h-fit rounded-[var(--radius-card)] border border-line bg-surface p-5 shadow-[var(--shadow-soft)]">
        <h2 className="font-display text-2xl font-semibold">{t("checkout.summary")}</h2>
        <div className="mt-4 flex items-center justify-between text-sm">
          <span>{t("cart.subtotal")}</span>
          <Price value={subtotal} />
        </div>
        <Button full className="mt-6" onClick={() => navigate("/checkout")}>
          {t("cart.checkout")}
        </Button>
      </aside>
    </div>
  );
}
