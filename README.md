# BEAUTY SKIN KOREA / ZAVEN

Production-oriented e-commerce frontend for Korean beauty and fashion. The app talks to the Railway backend and supports catalog browsing, product detail routes, cart, checkout, orders, favorites, reviews, notifications, and multilingual UI (uz / en / ru / ko).

## Quick start

```bash
npm install
npm run dev
```

Open `http://127.0.0.1:4173`. API calls under `/api` are proxied to production during development.

### Production build

```bash
npm run build
npm run preview
```

Or serve the built bundle with the Node static server (includes API proxy):

```bash
npm run build
npm run start
```

Open `http://127.0.0.1:4174`.

## Backend API

Default production base URL:

`https://cosmetic-server-production.up.railway.app`

In development, leave the in-app API base URL empty so requests go to `/api/...` and Vite (or `server.js`) proxies them to Railway. You can override the base URL from the header **API** dialog; the value is stored under `zaven_base_url`.

## Project structure

```
shopping-site/
  index.html          # App shell (header, drawers, dialogs)
  package.json
  vite.config.js
  server.cjs           # Static server + /api proxy (CommonJS)
  public/
    styles.css         # Full marketplace CSS (linked from index.html)
  .env.example
  src/
    main.js           # Entry: styles + startApp()
    app.js            # Bootstraps DOM refs and commerce runtime
    config/           # CONFIG, constants, demo fallbacks
    api/              # apiClient + domain API modules
    store/            # Global state, cart/favorite helpers
    router/           # Hash routes (#/, #/product/:id)
    i18n/             # uz, en, ru, ko dictionaries
    components/       # UI render helpers (re-export from runtime)
    pages/            # Page-level loaders (re-export from runtime)
    runtime/
      commerce.js     # Commerce UI + flows (migrated from legacy app.js)
    utils/            # DOM, storage, mappers, HTML escape
    styles/           # CSS (variables + legacy marketplace styles)
```

The legacy root `app.js` is kept for reference only; the live app loads `src/main.js`.

## Auth & storage keys

| Key | Purpose |
|-----|---------|
| `zaven_token` | JWT access token |
| `zaven_user` | Cached user profile |
| `beauty_skin_language` | Active locale |
| `zaven_base_url` | Optional API override |
| `zaven_session_id` | Analytics session |
| `zaven_recent_products` | Recently viewed IDs |

Legacy keys `accessToken` / `user` are migrated on startup.

## Checkout contract

Orders are created with:

```json
{
  "receiverId": 1,
  "addressId": 2,
  "cartItemIds": [10, 11]
}
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Vite dev server with API proxy |
| `npm run build` | Production bundle to `dist/` |
| `npm run preview` | Preview production build |
| `npm run sync:css` | Regenerate `public/styles.css` from `src/styles/` |
| `npm run start` | Node static server + API proxy |
