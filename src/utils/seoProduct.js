function ensureMeta(attr, value, useProperty = false) {
  const selector = useProperty ? `meta[property="${attr}"]` : `meta[name="${attr}"]`;
  let node = document.head.querySelector(selector);
  if (!node) {
    node = document.createElement("meta");
    if (useProperty) node.setAttribute("property", attr);
    else node.setAttribute("name", attr);
    document.head.appendChild(node);
  }
  node.setAttribute("content", value);
}

function ensureCanonical(url) {
  let node = document.head.querySelector('link[rel="canonical"]');
  if (!node) {
    node = document.createElement("link");
    node.setAttribute("rel", "canonical");
    document.head.appendChild(node);
  }
  node.setAttribute("href", url);
}

function ensureJsonLd(id, payload) {
  let node = document.getElementById(id);
  if (!node) {
    node = document.createElement("script");
    node.id = id;
    node.type = "application/ld+json";
    document.head.appendChild(node);
  }
  node.textContent = JSON.stringify(payload);
}

export function applyProductSeo(product) {
  try {
    if (!product?.id) return;
    const canonicalUrl = `${window.location.origin}${window.location.pathname}#/product/${encodeURIComponent(product.id)}`;
    const title = `${product.name} - BEAUTY SKIN KOREA`;
    const description = (product.description || `${product.name} by ${product.brand || "Beauty Skin Korea"}`).slice(0, 160);
    const image = product.image || "";
    const price = Number(product.finalPrice || 0);
    const currency = "UZS";

    document.title = title;
    ensureCanonical(canonicalUrl);
    ensureMeta("description", description);
    ensureMeta("og:type", "product", true);
    ensureMeta("og:title", title, true);
    ensureMeta("og:description", description, true);
    ensureMeta("og:image", image, true);
    ensureMeta("og:url", canonicalUrl, true);
    ensureMeta("twitter:card", "summary_large_image");
    ensureMeta("twitter:title", title);
    ensureMeta("twitter:description", description);
    ensureMeta("twitter:image", image);

    ensureJsonLd("pdpProductSchema", {
      "@context": "https://schema.org",
      "@type": "Product",
      name: product.name,
      image: product.images?.length ? product.images : [image].filter(Boolean),
      description,
      sku: product.raw?.sku || `BSK-${product.id}`,
      brand: {
        "@type": "Brand",
        name: product.brand || "Beauty Skin Korea",
      },
      offers: {
        "@type": "Offer",
        priceCurrency: currency,
        price: price || 0,
        availability: Number(product.stock || 0) > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
        itemCondition: "https://schema.org/NewCondition",
        url: canonicalUrl,
      },
      aggregateRating: Number(product.reviewCount || 0) > 0
        ? {
            "@type": "AggregateRating",
            ratingValue: Number(product.ratingAvg || 0).toFixed(1),
            reviewCount: Number(product.reviewCount || 0),
          }
        : undefined,
    });
  } catch (error) {
    console.error("[PDP] applyProductSeo failed", error);
  }
}
