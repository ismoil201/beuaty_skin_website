export function LoadingSkeletonCard() {
  return `
    <div class="skeleton-card" aria-hidden="true">
      <div class="ds-skeleton" style="aspect-ratio:1/1.05;border-radius:14px;margin-bottom:12px"></div>
      <div class="ds-skeleton" style="height:12px;width:40%;margin-bottom:8px;border-radius:6px"></div>
      <div class="ds-skeleton" style="height:14px;width:90%;margin-bottom:8px;border-radius:6px"></div>
      <div class="ds-skeleton" style="height:18px;width:55%;border-radius:6px"></div>
    </div>
  `;
}

export function LoadingSkeletonGrid({ count = 12 } = {}) {
  return Array.from({ length: count }, () => LoadingSkeletonCard()).join("");
}

export function mountLoadingSkeleton(container, count = 12) {
  if (!container) return;
  container.innerHTML = LoadingSkeletonGrid({ count });
}
