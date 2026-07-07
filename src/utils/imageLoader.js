export function initLazyImages(root = document) {
  const images = root.querySelectorAll("img[data-src], img[loading='lazy']");
  images.forEach((img) => {
    if (img.dataset.loaded) return;
    img.classList.add("img-loading");
    const onLoad = () => {
      img.classList.remove("img-loading");
      img.classList.add("img-loaded");
      img.dataset.loaded = "1";
    };
    if (img.complete && img.naturalWidth) {
      onLoad();
      return;
    }
    img.addEventListener("load", onLoad, { once: true });
    img.addEventListener("error", () => img.classList.remove("img-loading"), { once: true });
  });

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const img = entry.target;
        if (img.dataset.src && !img.src) {
          img.src = img.dataset.src;
        }
        observer.unobserve(img);
      });
    }, { rootMargin: "200px" });

    root.querySelectorAll("img[data-src]").forEach((img) => observer.observe(img));
  }
}

export function prefetchImage(url) {
  if (!url) return;
  const link = document.createElement("link");
  link.rel = "prefetch";
  link.as = "image";
  link.href = url;
  document.head.appendChild(link);
}
