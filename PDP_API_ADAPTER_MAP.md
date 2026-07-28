# PDP API Integration and Adapter Contracts

## Implemented Endpoint Mapping

- Product core data: `GET /api/products/{id}`
- Review feed: `GET /api/reviews/product/{productId}`
- Recommendation blocks:
  - `GET /api/recommendations/product/{productId}`
  - `GET /api/products/{id}/recommend`
- Trending/social proof sources:
  - `GET /api/recommendations/trending`
  - `GET /api/behavior/trending`
- Seller trust block:
  - `GET /api/sellers/{id}`
- Conversion actions:
  - `POST /api/cart`
  - `POST /api/favorites/{productId}/toggle`
- Behavior telemetry:
  - `POST /api/behavior/track`
  - `POST /events/view`
  - `POST /events/click`
  - `POST /events/impression`

## Missing APIs (No Fabrication)

- Coupons and promo code verification endpoint
- Product Q&A read/write endpoints
- Public delivery quote endpoint
- Server-side recently viewed endpoint

## Adapter Contract (Implemented)

`src/services/PdpFeatureAdapter.js`

- `featureFlags()`:
  - returns capability flags for unavailable APIs
- `applyCoupon({ code, subtotal })`:
  - local fallback validation (safe), with TODO for backend integration
- `loadSocialProof(productId)`:
  - derives social-proof indicators from existing trending endpoints
- `loadSellerProfile(product)`:
  - resolves seller details using existing seller endpoint when sellerId exists
- `resolveProductMeta(product)`:
  - normalizes SKU/country/made-in metadata with safe fallback values
- `resolveDeliveryMeta(product)`:
  - normalizes shipping/courier/warehouse/COD/pickup metadata with safe defaults

## TODO Integration Notes

- TODO(api): replace local coupon fallback when coupon endpoint is exposed.
- TODO(api): replace Q&A placeholder tab when product Q&A endpoint is exposed.
- TODO(api): replace shipping defaults when quote endpoint is exposed.
- TODO(api): replace local recently viewed persistence with server endpoint when exposed.
