# Addis Eats (Next.js)

The Addis Eats ordering app on the Next.js App Router, with the same UI,
styles, images and behaviour as the React + Vite version.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start
```

| React (Vite) | Next.js (this project) |
| --- | --- |
| `App.jsx` routes | `app/` folders: `page.jsx`, `menu/[id]/page.jsx`, `cart`, `checkout`, `signin` |
| `Layout.jsx` + `<Outlet />` | `app/layout.jsx` with `{children}` |
| `NotFound`, `ErrorBoundary` | `app/not-found.jsx`, `app/error.jsx` |
| `NavLink` | `components/NavLink.jsx` (`usePathname`) |
| `useParams` | `params` prop in `app/menu/[id]/page.jsx` |
| `useSearchParams` | `useSearchParams` from `next/navigation` (inside `<Suspense>`) |
| Cart / Auth providers | `components/Providers.jsx` (Client Component) |
| `src/css/style.css` | `app/globals.css` (unchanged) |
| `public/` assets and `menu.json` | `public/` (unchanged) |
