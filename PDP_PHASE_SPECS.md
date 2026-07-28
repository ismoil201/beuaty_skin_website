# PDP Phase Specifications

## Phase 1 - Critical

- Reworked PDP commerce information architecture in `src/pages/product/ProductDetailPage.js`.
- Added core trust/seller/delivery information blocks using existing product and seller payloads.
- Added sticky action improvements with state-aware disable logic for impossible actions.
- Added missing interaction wiring in `src/runtime/eventDispatcher.js`:
  - color swatch variant selection
  - coupon apply action
  - share/copy link actions
  - notify-me placeholder action
- Added production SEO injection in `src/utils/seoProduct.js` and integrated in `src/controllers/ProductController.js`.

## Phase 2 - High Impact

- Enhanced gallery controls:
  - previous/next media navigation
  - zoom/fullscreen continuity
  - swipe compatibility preserved
- Added social proof and merchandising surfaces:
  - viewing now
  - sold today
  - trend score
  - trending in Korea rail
- Expanded tab model for benefits and FAQ while preserving current review data flow.
- Introduced richer mobile utility actions (floating wishlist/share).

## Phase 3 - Enhancement

- Added explicit adapter and placeholders for APIs that do not exist yet:
  - coupon API
  - product Q&A API
  - shipping quote API
  - server recently viewed API
- Added Q&A tab placeholder that is safe in production and clearly marked for future API integration.
- Added notify-me action placeholder with controlled UX feedback and TODO marker.
