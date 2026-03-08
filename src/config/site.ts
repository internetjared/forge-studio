/**
 * Forge Studio — Site Configuration
 *
 * Everything editable in one place. Components import from here.
 * Never hardcode content in markup — update this file instead.
 */

export const siteConfig = {
  // ============================================================
  // Meta
  // ============================================================
  name: "Forge Studio",
  tagline: "We build what others can't",
  description: "Brand strategy, web design, development, and motion design for brands that demand more.",
  url: "https://forge.studio",
  email: "hello@forge.studio",
  phone: "+1 (614) 555-0192",
  address: {
    street: "445 Short North Alley",
    city: "Columbus, OH 43215",
    country: "United States",
  },

  // ============================================================
  // Navigation
  // ============================================================
  nav: {
    links: [
      { label: "Work", href: "/work" },
      { label: "Services", href: "/services" },
      { label: "About", href: "/about" },
    ],
    cta: { label: "Start a project", href: "/contact" },
  },

  // ============================================================
  // Hero
  // ============================================================
  hero: {
    badge: "Now booking Q3 2025",
    title: "We build\nwhat others\ncan't.",
    subtitle: "Brand strategy, web design, development, and motion design for brands that refuse to blend in.",
    cta: {
      primary: { label: "See our work", href: "/work" },
      secondary: { label: "Start a project", href: "/contact" },
    },
  },

  // ============================================================
  // Stats
  // ============================================================
  stats: [
    { value: 150, suffix: "+", label: "Projects shipped" },
    { value: 12, suffix: "", label: "Years in business" },
    { value: 98, suffix: "%", label: "Client retention" },
  ],

  // ============================================================
  // Services
  // ============================================================
  services: [
    {
      icon: "lucide:target",
      title: "Brand Strategy",
      slug: "brand-strategy",
      tagline: "Know exactly what you stand for",
      description: "We excavate what makes your brand worth caring about, then build the architecture to prove it. Positioning, messaging, competitive differentiation — the hard thinking before the pretty pictures.",
      details: [
        "Brand audit and competitive analysis",
        "Positioning and messaging framework",
        "Verbal identity and tone of voice",
        "Brand guidelines documentation",
        "Naming and tagline development",
      ],
    },
    {
      icon: "lucide:layout",
      title: "Web Design",
      slug: "web-design",
      tagline: "Websites people actually remember",
      description: "Opinionated, performant websites built in Astro. We make design decisions — no death-by-committee, no template-filling. Sites that load in under a second and look like nothing else in your category.",
      details: [
        "Discovery and content architecture",
        "Mobile-first responsive design",
        "Custom Astro development",
        "Cloudflare Pages deployment",
        "60-day post-launch support",
      ],
    },
    {
      icon: "lucide:code-2",
      title: "Development",
      slug: "development",
      tagline: "Code that scales",
      description: "Full-stack development when the project outgrows a static site. Astro + Sanity CMS for content-heavy sites, custom integrations, and anything that needs to talk to external APIs.",
      details: [
        "Astro 5 + TypeScript",
        "Sanity CMS integration",
        "API integrations and webhooks",
        "E-commerce (Shopify headless)",
        "Performance optimization audits",
      ],
    },
    {
      icon: "lucide:sparkles",
      title: "Motion Design",
      slug: "motion-design",
      tagline: "Animation that earns its place",
      description: "Motion that communicates, not decorates. Scroll-linked storytelling, product demos, UI micro-interactions — all with Motion.dev for weight-conscious, buttery-smooth animations.",
      details: [
        "Scroll-triggered narrative sequences",
        "UI animation system design",
        "Motion.dev implementation",
        "Video and screen recording",
        "Lottie / interactive SVG animations",
      ],
    },
  ],

  // ============================================================
  // Team
  // ============================================================
  team: [
    {
      name: "Alex Morgan",
      role: "Founder & Creative Director",
      bio: "12 years making things look right and work right. Previously led design at agencies in NYC and London. Moved to Columbus because it's better here.",
      accentColor: "#3b82f6",
    },
    {
      name: "Jordan Reeves",
      role: "Lead Developer",
      bio: "Obsessed with performance budgets, TypeScript type safety, and CSS that doesn't feel like a hostage situation. Astro contributor since v1.",
      accentColor: "#8b5cf6",
    },
    {
      name: "Casey Liu",
      role: "Motion Designer",
      bio: "Makes things move without making things annoying. Motion.dev fanatic. Believes every animation has to earn its place or it's just noise.",
      accentColor: "#10b981",
    },
  ],

  // ============================================================
  // Testimonials
  // ============================================================
  testimonials: [
    {
      quote: "They pushed back on almost every one of our initial ideas. We thought that was a problem. It wasn't — the site they delivered is the best thing our brand has ever produced.",
      author: "Sarah Chen",
      role: "CEO",
      company: "Fenwick & Co.",
      accentColor: "#3b82f6",
    },
    {
      quote: "Lighthouse scores went from 41 to 99. I thought that was impossible without gutting the design. It wasn't — they just knew what they were doing.",
      author: "Marcus Johnson",
      role: "VP Marketing",
      company: "Nourish Health",
      accentColor: "#10b981",
    },
    {
      quote: "On time. On budget. Exactly as scoped. That sounds like a low bar but it's apparently rare. Will hire again without hesitation.",
      author: "Diana Park",
      role: "Founder",
      company: "Park Collective",
      accentColor: "#f59e0b",
    },
  ],

  // ============================================================
  // CTA
  // ============================================================
  cta: {
    title: "Ready to build something worth remembering?",
    subtitle: "We take on four new client projects per quarter. If the timing's right, let's talk.",
    button: { label: "Start a project", href: "/contact" },
    note: "Free 30-min discovery call · No commitment",
  },

  // ============================================================
  // Footer
  // ============================================================
  footer: {
    tagline: "Building the web, one deliberate pixel at a time.",
    links: [
      {
        title: "Work",
        items: [
          { label: "Portfolio", href: "/work" },
          { label: "Services", href: "/services" },
          { label: "About", href: "/about" },
        ],
      },
      {
        title: "Start",
        items: [
          { label: "Contact", href: "/contact" },
          { label: "hello@forge.studio", href: "mailto:hello@forge.studio" },
        ],
      },
    ],
    social: [
      { name: "Twitter", href: "https://twitter.com/forgestudio", icon: "lucide:twitter" },
      { name: "Instagram", href: "https://instagram.com/forgestudio", icon: "lucide:instagram" },
      { name: "LinkedIn", href: "https://linkedin.com/company/forgestudio", icon: "lucide:linkedin" },
      { name: "GitHub", href: "https://github.com/forgestudio", icon: "lucide:github" },
    ],
    copyright: `© ${new Date().getFullYear()} Forge Studio LLC. All rights reserved.`,
  },
};

export type SiteConfig = typeof siteConfig;
export type Service = (typeof siteConfig.services)[number];
export type TeamMember = (typeof siteConfig.team)[number];
export type Testimonial = (typeof siteConfig.testimonials)[number];
export type Stat = (typeof siteConfig.stats)[number];
