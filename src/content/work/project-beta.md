---
title: "Nourish Health Platform"
client: "Nourish Health"
year: 2024
category: "web"
services: ["Web Design", "Development", "Motion Design"]
accentColor: "#10b981"
featured: true
excerpt: "Consumer health platform with 40,000 monthly active users. Performance audit, design system overhaul, and Astro migration that cut load times by 78%."
results:
  - "Lighthouse performance score: 41 → 99"
  - "78% reduction in page load time"
  - "31% increase in trial sign-ups post-launch"
---

Nourish had a product that worked and users who loved it. Their website was the weakest part of the entire experience — bloated WordPress install, 4MB of JavaScript just to render a marketing page, a design system that had been patched and re-patched for three years.

## The Challenge

The performance problems were causing real business damage. Google's Core Web Vitals algorithm was actively penalizing them in search rankings. Their bounce rate on mobile was 74%. The dev team was spending more time maintaining the site than building the product.

The design challenge was equally real: Nourish's visual identity had evolved organically over three years and felt incoherent. Seven shades of green, three different header styles across the site, buttons that didn't match each other anywhere.

## The Approach

We started with a full technical audit before touching any design. The diagnosis was worse than expected: 47 JavaScript plugins, many loaded on every page regardless of whether they were needed, a theme with 12 font files loaded synchronously, and images that had never been optimized.

**Technical approach**: Migrate to Astro 5, ship zero JavaScript to the marketing site by default. Every interactive element had to justify its JavaScript cost.

**Design system**: Built from scratch. Single shade of green, defined typographic hierarchy using Space Grotesk (headlines) + DM Sans (body), a component library that could scale.

**Performance strategy**: astro:assets for all images (automatic WebP conversion, lazy loading), fonts loaded with `preload`, Cloudflare Pages CDN for global edge distribution.

## The Result

Lighthouse score went from 41 to 99. Not by stripping the design down — by making intentional decisions about what earned its place. The design system cleaned up years of accumulated inconsistency. Trial sign-ups increased 31% in the first month post-launch, attributable to both improved SEO rankings and reduced mobile bounce rate.
