import { useNavigate } from "react-router-dom";
import type { BannerResponse } from "@/types/commerce";
import { APP_CONFIG } from "@/config";
import { resolveBannerHref } from "@/lib/bannerLinks";

type Props = {
  banners: BannerResponse[];
  loading?: boolean;
};

export function HomeBannerStrip({ banners, loading }: Props) {
  const navigate = useNavigate();

  if (loading) {
    return <div className="skeleton h-40 w-full rounded-none" />;
  }

  if (!banners.length) return null;

  return (
    <section className="space-y-3" aria-label="Promotions">
      <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-1">
        {banners.map((banner) => {
          const href = resolveBannerHref(banner);
          const clickable = Boolean(href);
          const title = banner.title?.trim() || "";
          const subtitle = banner.subtitle?.trim() || "";

          return (
            <article
              key={String(banner.id ?? `${banner.title}-${banner.imageUrl}`)}
              role={clickable ? "link" : undefined}
              tabIndex={clickable ? 0 : undefined}
              onClick={() => {
                if (href) navigate(href);
              }}
              onKeyDown={(event) => {
                if (!href) return;
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  navigate(href);
                }
              }}
              className={`relative h-44 w-[min(92vw,420px)] shrink-0 snap-start overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface ${
                clickable ? "cursor-pointer" : "cursor-default"
              }`}
            >
              <img
                src={banner.imageUrl || APP_CONFIG.placeholderImage}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
              {(title || subtitle) && (
                <div className="absolute inset-x-0 bottom-0 z-10 space-y-1 p-4 text-white">
                  {title ? (
                    <strong className="block max-w-full truncate font-display text-lg leading-tight md:text-xl">
                      {title}
                    </strong>
                  ) : null}
                  {subtitle ? (
                    <p className="line-clamp-2 max-w-full text-sm text-white/85">{subtitle}</p>
                  ) : null}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
