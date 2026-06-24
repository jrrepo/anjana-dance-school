# Anjana Dance School Website

Production-quality Astro website for Anjana Dance School (ADS), a Central Florida dance school focused on freestyle and cinematic dance classes for kids and adults.

Tagline: `Express yourself through the art of dance`

## Tech Stack

- Astro
- React
- TypeScript
- Tailwind CSS
- Astro Sitemap
- Static site output for Cloudflare Pages
- Node.js 24 LTS

## Current Features

- Cinematic, performance-focused homepage
- Responsive navigation and mobile menu
- Reusable Astro layout with SEO metadata support
- Local business JSON-LD structured data
- Sitemap and robots.txt support
- Branded favicon and social preview image
- YouTube performance embeds using static video data
- Instagram-style social preview cards using static image data
- Placeholder pages for About, Classes, Gallery, Events, and Contact

## Project Structure

```text
src/
  assets/
    gallery/        Performance and student photos
    hero/           Homepage and banner hero imagery
    icons/          Brand/icon reference assets
    logo/           ADS logos, transparent logos, favicon source assets
    references/     Brand concept, social, YouTube, business card references
    social/         Reserved for future Instagram/social-specific images
  components/
    common/         Navbar, Footer, shared page banner
    home/           Homepage sections and hero
    media/          YouTube embed component
    seo/            LocalBusiness schema
    social/         Instagram CTA and grid components
  data/
    videos.ts       YouTube video data
    instagram.ts    Instagram/social card data
  layouts/
    MainLayout.astro
  pages/
    index.astro
    about.astro
    classes.astro
    gallery.astro
    events.astro
    contact.astro
  styles/
    global.css

public/
  favicon.png
  favicon-192.png
  favicon-512.png
  favicon.ico
  og-image.png
  robots.txt
  _headers
  _redirects
```

## Important Files

- Main site shell and SEO: `src/layouts/MainLayout.astro`
- Navigation: `src/components/common/Navbar.tsx`
- Footer/social links: `src/components/common/Footer.tsx`
- Homepage hero: `src/components/home/Hero.tsx`
- Homepage content sections: `src/components/home/HomeSections.tsx`
- Homepage YouTube section: `src/components/home/FeaturedPerformances.tsx`
- YouTube embed: `src/components/media/YouTubeEmbed.tsx`
- Instagram CTA/grid: `src/components/social/InstagramCTA.tsx`, `src/components/social/InstagramGrid.tsx`
- YouTube data: `src/data/videos.ts`
- Instagram data: `src/data/instagram.ts`
- Local business schema: `src/components/seo/LocalBusinessSchema.astro`
- Astro config and sitemap site URL: `astro.config.mjs`

## Commands

Install dependencies:

```sh
npm install
```

Run local development server:

```sh
npm run dev
```

Build production output:

```sh
npm run build
```

Run Astro and TypeScript validation:

```sh
npm run check
```

Preview the production build locally:

```sh
npm run preview
```

## Cloudflare Pages

Recommended Cloudflare Pages settings:

- Framework preset: Astro
- Build command: `npm run build`
- Output directory: `dist`
- Root directory: `/`
- Node version: `24` LTS
- Environment variables: none required for V1

The site is configured as a static build and should deploy cleanly to Cloudflare Pages.

Full deployment instructions are in `DEPLOYMENT.md`. Launch validation is tracked in `PRODUCTION_CHECKLIST.md`.

## SEO

SEO is handled by `src/layouts/MainLayout.astro`.

Each page passes:

- `title`
- `description`
- `canonical`

The default production site URL is configured in `astro.config.mjs`:

```js
site: 'https://anjanadance.pages.dev'
```

Update this if the final domain changes. `public/robots.txt` also references this domain.

## Social Sharing

Social sharing image:

```text
public/og-image.png
```

This image is used for OpenGraph and Twitter card previews, including WhatsApp/Facebook-style previews.

## Content Model

YouTube videos are managed in:

```text
src/data/videos.ts
```

Instagram/social cards are managed in:

```text
src/data/instagram.ts
```

This keeps media updates out of layout/component code.

## Notes

- The Instagram implementation intentionally does not use the Instagram API, Meta developer setup, or access tokens.
- The YouTube implementation uses the real ADS channel URL, static video IDs, and `youtube-nocookie.com` embeds.
- Do not add fake address or phone data to schema or contact sections. Only use confirmed business details.

## Future Enhancements

- Replace placeholder Instagram and Facebook profile URLs.
- Add a Cloudflare Pages Function or Worker for server-side contact submissions.
- Add confirmed class schedules, pricing, and enrollment details.
- Add real event dates and registration links.
- Add privacy-conscious analytics after launch requirements are confirmed.
- Add Google Search Console after the custom domain is live.
