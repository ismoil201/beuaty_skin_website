import { cn } from "@/lib/cn";
import { useUiStore } from "@/stores";
import type { ButtonHTMLAttributes, PropsWithChildren, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  full?: boolean;
};

export function Button({
  className,
  variant = "primary",
  full,
  children,
  ...props
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-45",
        variant === "primary" && "bg-ink text-white hover:bg-ink-soft",
        variant === "secondary" &&
          "border border-line bg-surface text-ink hover:border-ink/30",
        variant === "ghost" && "bg-transparent text-ink hover:bg-black/5",
        variant === "danger" && "bg-danger text-white",
        full && "w-full",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function Badge({
  children,
  tone = "neutral",
}: PropsWithChildren<{ tone?: "neutral" | "accent" | "success" | "danger" }>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-wide",
        tone === "neutral" && "bg-black/5 text-ink-soft",
        tone === "accent" && "bg-accent-soft text-accent",
        tone === "success" && "bg-emerald-50 text-success",
        tone === "danger" && "bg-red-50 text-danger",
      )}
    >
      {children}
    </span>
  );
}

export function Rating({ value, count }: { value: number; count?: number }) {
  const stars = Math.round(value || 0);
  return (
    <div className="flex items-center gap-1.5 text-xs text-muted">
      <span className="tracking-tight text-ink" aria-label={`${value} stars`}>
        {"★".repeat(Math.max(0, Math.min(5, stars)))}
        {"☆".repeat(Math.max(0, 5 - Math.min(5, stars)))}
      </span>
      <span>{value?.toFixed?.(1) ?? "0.0"}</span>
      {typeof count === "number" ? <span>({count})</span> : null}
    </div>
  );
}

export function Price({
  value,
  original,
  discountPercent,
}: {
  value: number;
  original?: number;
  discountPercent?: number;
}) {
  const formatted = new Intl.NumberFormat("uz-UZ").format(Math.round(value || 0));
  const originalFormatted =
    original && original > value
      ? new Intl.NumberFormat("uz-UZ").format(Math.round(original))
      : null;

  return (
    <div className="flex flex-wrap items-baseline gap-2">
      <strong className="text-base font-bold text-ink">{formatted} so'm</strong>
      {originalFormatted ? (
        <span className="text-sm text-muted line-through">{originalFormatted}</span>
      ) : null}
      {discountPercent ? <Badge tone="accent">-{discountPercent}%</Badge> : null}
    </div>
  );
}

export function EmptyState({
  title,
  description,
  action,
}: {
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-[var(--radius-card)] border border-dashed border-line bg-surface px-6 py-16 text-center">
      <h3 className="font-display text-2xl font-semibold">{title}</h3>
      {description ? <p className="max-w-md text-sm text-muted">{description}</p> : null}
      {action}
    </div>
  );
}

export function SkeletonCard() {
  return (
    <div className="overflow-hidden rounded-[var(--radius-card)] bg-surface shadow-[var(--shadow-soft)]">
      <div className="skeleton aspect-[4/5] w-full rounded-none" />
      <div className="space-y-2 p-3">
        <div className="skeleton h-3 w-1/3" />
        <div className="skeleton h-4 w-4/5" />
        <div className="skeleton h-4 w-1/2" />
      </div>
    </div>
  );
}

export function ToastViewport() {
  const toasts = useUiStore((s) => s.toasts);
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-20 z-[80] flex flex-col items-center gap-2 px-4 md:bottom-6">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={cn(
            "pointer-events-auto rounded-full px-4 py-2 text-sm font-medium text-white shadow-lg animate-fade-up",
            toast.type === "success" && "bg-success",
            toast.type === "error" && "bg-danger",
            toast.type === "info" && "bg-ink",
          )}
        >
          {toast.message}
        </div>
      ))}
    </div>
  );
}
