# BEAUTY SKIN KOREA — React Storefront

Premium React + TypeScript marketplace UI (Musinsa / Sephora inspired).

Lives in `/web` so the current production Vanilla SPA keeps working.

## Stack

- React 19 + Vite 8 + TypeScript
- Tailwind CSS 4
- TanStack Query
- Zustand
- React Router
- i18n: uz / en / ru / ko

## Run

```bash
npm run web:dev
```

Open http://localhost:5174

API calls go to `/api/**` and are proxied to Railway.

## Build

```bash
npm run web:build
```

## Pages

- `/` Home + infinite feed (`GET /api/home/feed`)
- `/catalog` Filters + sort
- `/product/:id` Gallery, variants, SOLD OUT, reviews, recs
- `/cart` Qty + `OUT_OF_STOCK` handling
- `/checkout` Address/payment summary → shows `orderNumber` (e.g. BSK-000123)
- `/orders`, `/orders/:id`
- `/search` + suggest
- `/account` Login / profile links

## Auth note

Access token is kept **in memory** (Zustand). Refresh uses HttpOnly cookie + CSRF (`POST /api/auth/refresh`). This avoids persisting JWT in `localStorage` for the new app.
