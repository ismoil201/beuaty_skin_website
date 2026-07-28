# PDP CRO + Quality Checklist

## CRO Acceptance Criteria

- Add to cart:
  - CTA click rate increases against pre-launch baseline.
  - Out-of-stock states do not produce failed cart attempts.
- Buy now:
  - Buy-now clicks increase against pre-launch baseline.
  - Variant + quantity flow remains stable for checkout preparation.
- AOV:
  - Recommendation strip CTR improves.
  - Frequently bought and trending modules increase multi-item cart creation.
- Trust and return usage:
  - Higher interaction with trust/seller sections and lower PDP bounce.

## Web Vitals Targets

- LCP < 2.5s
- CLS < 0.1
- INP < 200ms

## Accessibility Gates

- Keyboard navigation for tabs, gallery controls, and CTA actions.
- Focus-visible styles remain clear on all new interactive controls.
- Added controls keep descriptive labels (`aria-label` where icon-only).

## Phase Checkpoints

- Phase 1:
  - Validate SEO tags on PDP route change.
  - Validate add-to-cart/buy-now, coupon fallback, and share/copy actions.
- Phase 2:
  - Validate gallery controls, social-proof rendering, and merchandising rails.
  - Validate mobile floating actions and sticky buy behavior.
- Phase 3:
  - Validate adapter fallback behavior when API flags are false.
  - Validate TODO placeholders do not block conversion flow.

## Instrumentation Hooks

- Keep existing event posting:
  - `/events/view`
  - `/events/click`
  - `/events/impression`
  - `/api/behavior/track`
- Compare KPI deltas:
  - PDP view -> add-to-cart rate
  - PDP view -> buy-now rate
  - Recommendation impression -> click rate
