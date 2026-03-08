# Forge Studio — Astro Design Starter

> **[Live Demo →](https://forge-studio-peach.vercel.app)**

A complete, production-grade Astro site demonstrating every pattern from the astro-design skill. Dark theme, Motion.dev animations, Tailwind v4, and astro-icon — all wired up and ready to customize.

## Run it

```bash
npm install && npm run dev
```

That's it. Opens at `http://localhost:4321`.

## What's inside

- **5 pages**: Home, Work, About, Services, Contact
- **Motion.dev**: Staggered hero entrance, scroll-triggered reveals, spring hover, scroll progress bar, number counters
- **Tailwind v4**: CSS-first `@theme` config — no `tailwind.config.js`
- **Astro View Transitions**: Smooth page-to-page navigation
- **Content Collections**: Portfolio work items typed and validated
- **React island**: `MobileMenu.tsx` with animated drawer
- **astro-icon**: Lucide icons, zero runtime cost
- **site.ts**: All content in one file — no hardcoded strings in markup

## Customize

1. Edit `src/config/site.ts` — change every piece of content from one file
2. Edit `src/styles/global.css` — swap colors, fonts, spacing in `@theme`
3. Add work items in `src/content/work/` — just drop in a new `.md` file

## Deploy

```bash
# Cloudflare Pages
npm run build
npx wrangler pages deploy dist

# Or Vercel
npm run build
npx vercel deploy dist
```

## Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Astro | 5.x | Framework |
| Tailwind CSS | 4.x | Styling (CSS-first) |
| Motion.dev | 11.x | Animations |
| React | 18.x | Islands (MobileMenu) |
| astro-icon | 1.x | Icon system |
| TypeScript | 5.x | Type safety |
