import { Link, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Badge, Button, EmptyState, Price } from "@/components/ui";
import { fetchOrder, fetchOrders, requestReturn } from "@/lib/api/commerceApi";
import { ApiError } from "@/lib/api/client";
import { getLocalizedErrorMessage } from "@/lib/errors/ErrorCode";
import { useUiStore } from "@/stores";
import type { OrderItem } from "@/types/commerce";

export function OrdersPage() {
  const t = useUiStore((s) => s.t);
  const ordersQuery = useQuery({
    queryKey: ["orders"],
    queryFn: fetchOrders,
    retry: false,
  });

  if (ordersQuery.isLoading) {
    return (
      <div className="container-page space-y-3 py-8">
        <div className="skeleton h-20" />
        <div className="skeleton h-20" />
      </div>
    );
  }

  if (ordersQuery.isError) {
    return (
      <div className="container-page py-10">
        <EmptyState
          title={t("account.login")}
          action={
            <Link to="/account">
              <Button>{t("account.login")}</Button>
            </Link>
          }
        />
      </div>
    );
  }

  const orders = ordersQuery.data || [];
  if (!orders.length) {
    return (
      <div className="container-page py-10">
        <EmptyState title={t("orders.empty")} />
      </div>
    );
  }

  return (
    <div className="container-page space-y-6 py-8">
      <h1 className="font-display text-4xl font-semibold">{t("orders.title")}</h1>
      <div className="space-y-3">
        {orders.map((order) => (
          <Link
            key={String(order.id)}
            to={`/orders/${order.id}`}
            className="flex flex-col gap-3 rounded-[var(--radius-card)] border border-line bg-surface p-4 transition hover:border-ink/30 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="font-semibold tracking-wide">{order.orderNumber}</p>
              <p className="text-sm text-muted">
                {t("orders.date")}: {order.createdAt ? new Date(order.createdAt).toLocaleString() : "—"}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Badge>{order.status}</Badge>
              <Price value={order.totalPrice} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function OrderItemRow({ item, orderId }: { item: OrderItem; orderId: string }) {
  const t = useUiStore((s) => s.t);
  const language = useUiStore((s) => s.language);
  const pushToast = useUiStore((s) => s.pushToast);
  const queryClient = useQueryClient();

  const returnMutation = useMutation({
    mutationFn: () =>
      requestReturn(item.id, {
        reason: "CUSTOMER_CHANGED_MIND",
        description: "",
      }),
    onSuccess: async () => {
      pushToast(t("orders.returnSuccess"), "success");
      await queryClient.invalidateQueries({ queryKey: ["order", orderId] });
      await queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
    onError: (error) => {
      const code = error instanceof ApiError ? error.code : undefined;
      const message =
        error instanceof ApiError
          ? error.friendly
          : getLocalizedErrorMessage(code, language);
      pushToast(message, "error");
    },
  });

  return (
    <article className="flex flex-col gap-3 rounded-[var(--radius-card)] border border-line bg-surface p-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h3 className="font-medium">{item.productName}</h3>
        <p className="text-sm text-muted">
          × {item.quantity}
          {item.variantLabel ? ` · ${item.variantLabel}` : ""}
        </p>
        {!item.returnable && item.returnBlockedReason ? (
          <p className="mt-2 text-xs text-muted">
            {getLocalizedErrorMessage(item.returnBlockedReason, language)}
          </p>
        ) : null}
      </div>
      <div className="flex flex-col items-end gap-2">
        <Price value={item.unitPrice * item.quantity} />
        {item.returnable ? (
          <Button
            variant="secondary"
            disabled={returnMutation.isPending}
            onClick={() => void returnMutation.mutateAsync()}
          >
            {returnMutation.isPending ? t("common.loading") : t("orders.requestReturn")}
          </Button>
        ) : null}
      </div>
    </article>
  );
}

export function OrderDetailPage() {
  const { id = "" } = useParams();
  const t = useUiStore((s) => s.t);
  const orderQuery = useQuery({
    queryKey: ["order", id],
    queryFn: () => fetchOrder(id),
    enabled: Boolean(id),
  });

  if (orderQuery.isLoading) {
    return (
      <div className="container-page py-8">
        <div className="skeleton h-40" />
      </div>
    );
  }

  if (orderQuery.isError || !orderQuery.data) {
    return (
      <div className="container-page py-10">
        <EmptyState title={t("common.error")} />
      </div>
    );
  }

  const order = orderQuery.data;

  return (
    <div className="container-page space-y-6 py-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          {t("orders.detail")}
        </p>
        <h1 className="font-display text-4xl font-semibold">{order.orderNumber}</h1>
        <div className="mt-3 flex flex-wrap gap-3 text-sm text-muted">
          <Badge>{order.status}</Badge>
          <span>{order.createdAt ? new Date(order.createdAt).toLocaleString() : ""}</span>
          <Price value={order.totalPrice} />
        </div>
      </div>

      <div className="space-y-3">
        {(order.items || []).map((item) => (
          <OrderItemRow key={String(item.id)} item={item} orderId={id} />
        ))}
      </div>

      <Link to="/orders" className="text-sm text-muted hover:text-ink">
        ← {t("orders.title")}
      </Link>
    </div>
  );
}
