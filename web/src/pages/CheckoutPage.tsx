import { useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import { Button, EmptyState, Price } from "@/components/ui";
import { ApiError } from "@/lib/api/client";
import {
  createOrder,
  fetchAddresses,
  fetchCart,
  fetchReceivers,
} from "@/lib/api/commerceApi";
import { normalizeOrder } from "@/lib/commerce";
import { useUiStore } from "@/stores";

export function CheckoutPage() {
  const t = useUiStore((s) => s.t);
  const pushToast = useUiStore((s) => s.pushToast);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [receiverId, setReceiverId] = useState("");
  const [addressId, setAddressId] = useState("");
  const [orderNumber, setOrderNumber] = useState("");

  const cartQuery = useQuery({ queryKey: ["cart"], queryFn: fetchCart });
  const receiversQuery = useQuery({
    queryKey: ["receivers"],
    queryFn: fetchReceivers,
    retry: false,
  });
  const addressesQuery = useQuery({
    queryKey: ["addresses"],
    queryFn: fetchAddresses,
    retry: false,
  });

  const receivers = useMemo(() => {
    const data = receiversQuery.data;
    if (Array.isArray(data)) return data as Array<Record<string, unknown>>;
    return [];
  }, [receiversQuery.data]);

  const addresses = useMemo(() => {
    const data = addressesQuery.data;
    if (Array.isArray(data)) return data as Array<Record<string, unknown>>;
    return [];
  }, [addressesQuery.data]);

  const items = cartQuery.data || [];
  const subtotal = items.reduce((sum, item) => sum + item.lineTotal, 0);

  const placeOrder = useMutation({
    mutationFn: async () => {
      const payload = await createOrder({
        receiverId: receiverId || String(receivers[0]?.id || ""),
        addressId: addressId || String(addresses[0]?.id || ""),
        cartItemIds: items.map((item) => item.id),
      });
      return normalizeOrder((payload || {}) as Record<string, unknown>);
    },
    onSuccess: async (order) => {
      setOrderNumber(order.orderNumber);
      await queryClient.invalidateQueries({ queryKey: ["cart"] });
      await queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
    onError: (error) => {
      pushToast(error instanceof ApiError ? error.friendly : t("common.error"), "error");
      if (error instanceof ApiError && error.status === 401) navigate("/account");
    },
  });

  if (orderNumber) {
    return (
      <div className="container-page py-16">
        <div className="mx-auto max-w-lg rounded-[var(--radius-card)] border border-line bg-surface p-8 text-center shadow-[var(--shadow-soft)]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            BEAUTY SKIN KOREA
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold">{t("checkout.success")}</h1>
          <p className="mt-4 text-sm text-muted">{t("checkout.orderNumber")}</p>
          <p className="mt-2 font-display text-3xl font-semibold tracking-wide">{orderNumber}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button onClick={() => navigate("/orders")}>{t("nav.orders")}</Button>
            <Button variant="secondary" onClick={() => navigate("/")}>
              {t("nav.home")}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (!items.length && !cartQuery.isLoading) {
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
    <div className="container-page grid gap-8 py-8 lg:grid-cols-[1.2fr_0.8fr]">
      <section className="space-y-6">
        <h1 className="font-display text-4xl font-semibold">{t("checkout.title")}</h1>

        <div className="rounded-[var(--radius-card)] border border-line bg-surface p-5">
          <h2 className="mb-3 font-semibold">{t("checkout.address")}</h2>
          <div className="grid gap-3 md:grid-cols-2">
            <label className="text-sm">
              <span className="mb-1 block text-muted">Receiver</span>
              <select
                value={receiverId}
                onChange={(e) => setReceiverId(e.target.value)}
                className="w-full rounded-xl border border-line px-3 py-2"
              >
                <option value="">Select</option>
                {receivers.map((receiver) => (
                  <option key={String(receiver.id)} value={String(receiver.id)}>
                    {String(receiver.fullName || receiver.name || receiver.id)}
                  </option>
                ))}
              </select>
            </label>
            <label className="text-sm">
              <span className="mb-1 block text-muted">Address</span>
              <select
                value={addressId}
                onChange={(e) => setAddressId(e.target.value)}
                className="w-full rounded-xl border border-line px-3 py-2"
              >
                <option value="">Select</option>
                {addresses.map((address) => (
                  <option key={String(address.id)} value={String(address.id)}>
                    {String(address.fullAddress || address.addressLine || address.id)}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>

        <div className="rounded-[var(--radius-card)] border border-line bg-surface p-5">
          <h2 className="mb-2 font-semibold">{t("checkout.delivery")}</h2>
          <p className="text-sm text-muted">Courier · 2–3 days · Uzbekistan</p>
        </div>

        <div className="rounded-[var(--radius-card)] border border-line bg-surface p-5">
          <h2 className="mb-2 font-semibold">{t("checkout.payment")}</h2>
          <p className="text-sm text-muted">Cash on delivery / Card on delivery</p>
        </div>
      </section>

      <aside className="h-fit rounded-[var(--radius-card)] border border-line bg-surface p-5 shadow-[var(--shadow-soft)]">
        <h2 className="font-display text-2xl font-semibold">{t("checkout.summary")}</h2>
        <ul className="mt-4 space-y-3">
          {items.map((item) => (
            <li key={String(item.id)} className="flex justify-between gap-3 text-sm">
              <span className="truncate">
                {item.name} × {item.quantity}
              </span>
              <span>{Math.round(item.lineTotal).toLocaleString("uz-UZ")}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex items-center justify-between border-t border-line pt-4">
          <span>{t("cart.subtotal")}</span>
          <Price value={subtotal} />
        </div>
        <Button
          full
          className="mt-6"
          disabled={placeOrder.isPending || !items.length}
          onClick={() => placeOrder.mutate()}
        >
          {t("checkout.placeOrder")}
        </Button>
      </aside>
    </div>
  );
}
