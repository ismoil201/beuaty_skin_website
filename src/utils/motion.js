const REDUCED_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)");

export function prefersReducedMotion() {
  return REDUCED_MOTION.matches;
}

export function animate(element, keyframes, options = {}) {
  if (!element || prefersReducedMotion()) {
    if (keyframes.length) {
      const last = keyframes[keyframes.length - 1];
      Object.assign(element.style, last);
    }
    return { finished: Promise.resolve() };
  }
  return element.animate(keyframes, {
    duration: 280,
    easing: "cubic-bezier(0.16, 1, 0.3, 1)",
    fill: "forwards",
    ...options,
  });
}

export function fadeIn(element, duration = 280) {
  return animate(element, [
    { opacity: 0, transform: "translateY(8px)" },
    { opacity: 1, transform: "translateY(0)" },
  ], { duration });
}

export function scaleIn(element) {
  return animate(element, [
    { opacity: 0, transform: "scale(0.96)" },
    { opacity: 1, transform: "scale(1)" },
  ]);
}

export function favoritePop(button) {
  if (!button || prefersReducedMotion()) return;
  button.classList.add("animating");
  window.setTimeout(() => button.classList.remove("animating"), 400);
}

export function flyToCart(imageSrc, fromRect) {
  if (!imageSrc || !fromRect || prefersReducedMotion()) return;

  const cartBtn = document.getElementById("cartButton");
  if (!cartBtn) return;

  const cartRect = cartBtn.getBoundingClientRect();
  const fly = document.createElement("img");
  fly.className = "cart-fly";
  fly.src = imageSrc;
  fly.alt = "";
  fly.style.left = `${fromRect.left}px`;
  fly.style.top = `${fromRect.top}px`;
  document.body.appendChild(fly);

  const dx = cartRect.left + cartRect.width / 2 - fromRect.left - 24;
  const dy = cartRect.top + cartRect.height / 2 - fromRect.top - 24;

  fly.animate([
    { transform: "translate(0, 0) scale(1)", opacity: 1 },
    { transform: `translate(${dx}px, ${dy}px) scale(0.2)`, opacity: 0.6 },
  ], {
    duration: 520,
    easing: "cubic-bezier(0.16, 1, 0.3, 1)",
    fill: "forwards",
  }).finished.then(() => fly.remove());
}

let lastScrollY = 0;
let ticking = false;

export function initHeaderScroll() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  header.classList.add("header-glass");

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      const delta = y - lastScrollY;

      if (y > 80 && delta > 8) {
        header.classList.add("header-hidden");
      } else if (delta < -4 || y < 40) {
        header.classList.remove("header-hidden");
      }

      lastScrollY = y;
      ticking = false;
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });
}

export function initPageTransitions() {
  const homeView = document.getElementById("homeView");
  const productPage = document.getElementById("productDetailPage");

  const observer = new MutationObserver(() => {
    const target = productPage?.hidden === false ? productPage : homeView;
    if (!target || prefersReducedMotion()) return;
    target.classList.remove("page-enter");
    void target.offsetWidth;
    target.classList.add("page-enter");
  });

  if (homeView) observer.observe(homeView, { attributes: true, attributeFilter: ["hidden"] });
  if (productPage) observer.observe(productPage, { attributes: true, attributeFilter: ["hidden"] });
}

export function initOfflineBanner() {
  let banner = document.getElementById("offlineBanner");
  if (!banner) {
    banner = document.createElement("div");
    banner.id = "offlineBanner";
    banner.className = "offline-banner";
    banner.textContent = "You are offline. Some features may be unavailable.";
    document.body.appendChild(banner);
  }

  const update = () => banner.classList.toggle("visible", !navigator.onLine);
  window.addEventListener("online", update);
  window.addEventListener("offline", update);
  update();
}

export function ripple(event, element) {
  if (prefersReducedMotion() || !element) return;

  const rect = element.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const rippleEl = document.createElement("span");
  rippleEl.style.cssText = `
    position:absolute;border-radius:50%;pointer-events:none;
    width:${size}px;height:${size}px;
    left:${event.clientX - rect.left - size / 2}px;
    top:${event.clientY - rect.top - size / 2}px;
    background:rgba(255,255,255,0.35);
    transform:scale(0);opacity:1;
  `;

  const prev = element.style.position;
  if (!prev || prev === "static") element.style.position = "relative";
  element.style.overflow = "hidden";
  element.appendChild(rippleEl);

  rippleEl.animate([
    { transform: "scale(0)", opacity: 1 },
    { transform: "scale(2.5)", opacity: 0 },
  ], { duration: 500, easing: "ease-out" }).finished.then(() => rippleEl.remove());
}
