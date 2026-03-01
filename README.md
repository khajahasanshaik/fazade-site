# Fazade

A fazade IT solutions site built with **Next.js** (UI) and **Node.js** (API routes). Dynamic pages and central config make it easy to add new features later.

- **UI:** Next.js 14 (App Router), TypeScript
- **Backend:** Next.js API routes (Node.js)
- **Port:** 8185

## Run locally

Requires **Node.js 18.17+**.

```bash
npm install
npm run dev
```

# or with Docker: docker run -d --name fazade-dev -p 8185:8185 -e HOSTNAME=0.0.0.0 fazade-site

Open [http://localhost:8185](http://localhost:8185).

## Scripts

- `npm run dev` – dev server on port 8185
- `npm run build` – production build
- `npm run start` – run production server on port 8185
- `npm run lint` – ESLint

## Adding new features

- **Site name, nav, contact, offices:** `lib/site-config.ts`
- **Services, copy:** `lib/features.ts`
- **New pages:** add under `app/` (e.g. `app/your-page/page.tsx`)
- **New API:** add under `app/api/` (e.g. `app/api/your-endpoint/route.ts`)
- **Dynamic routes:** follow `app/services/[slug]/page.tsx`

## Project structure

```
app/
  layout.tsx, page.tsx, globals.css
  about/, services/, contact/, privacy/
  services/[slug]/   – dynamic service pages
  api/contact/       – POST contact form
  api/features/      – GET feature content
components/
  Header.tsx, Footer.tsx
lib/
  site-config.ts     – nav, branding, offices
  features.ts        – services, copy
```
