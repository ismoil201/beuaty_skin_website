import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ProductGrid } from "@/components/product/ProductCard";
import { EmptyState } from "@/components/ui";
import { searchProducts, searchSuggest } from "@/lib/api/commerceApi";
import { useUiStore } from "@/stores";

export function SearchPage() {
  const t = useUiStore((s) => s.t);
  const [params, setParams] = useSearchParams();
  const q = params.get("q") || "";
  const [input, setInput] = useState(q);
  const [debounced, setDebounced] = useState(q);

  useEffect(() => {
    setInput(q);
    setDebounced(q);
  }, [q]);

  useEffect(() => {
    const timer = window.setTimeout(() => setDebounced(input.trim()), 250);
    return () => window.clearTimeout(timer);
  }, [input]);

  const suggestQuery = useQuery({
    queryKey: ["suggest", debounced],
    queryFn: () => searchSuggest(debounced),
    enabled: debounced.length >= 2 && debounced !== q,
  });

  const resultsQuery = useQuery({
    queryKey: ["search", q],
    queryFn: () => searchProducts({ q, page: 0, size: 24 }),
    enabled: Boolean(q),
  });

  const suggestions = useMemo(() => suggestQuery.data || [], [suggestQuery.data]);

  return (
    <div className="container-page space-y-6 py-8">
      <div className="space-y-3">
        <h1 className="font-display text-4xl font-semibold">{t("search.results")}</h1>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              const next = new URLSearchParams(params);
              next.set("q", input.trim());
              setParams(next);
            }
          }}
          placeholder={t("search.placeholder")}
          className="w-full rounded-full border border-line bg-surface px-5 py-3 text-sm outline-none focus:border-ink/40"
        />
        {suggestions.length ? (
          <ul className="overflow-hidden rounded-2xl border border-line bg-surface">
            {suggestions.map((suggestion) => (
              <li key={suggestion}>
                <button
                  type="button"
                  className="w-full px-4 py-3 text-left text-sm hover:bg-canvas"
                  onClick={() => {
                    const next = new URLSearchParams(params);
                    next.set("q", suggestion);
                    setParams(next);
                  }}
                >
                  {suggestion}
                </button>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      {!q ? (
        <EmptyState title={t("search.placeholder")} />
      ) : resultsQuery.isError ? (
        <EmptyState title={t("common.error")} />
      ) : !resultsQuery.isLoading && !(resultsQuery.data || []).length ? (
        <EmptyState title={t("search.empty")} />
      ) : (
        <ProductGrid products={resultsQuery.data || []} loading={resultsQuery.isLoading} />
      )}
    </div>
  );
}
