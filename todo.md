# ADS Website TODO and Maintenance Guide

This file tracks current placeholders and explains how to update content safely.

## High Priority Placeholders

- Replace the production domain if needed.
- Replace placeholder social media URLs with real ADS profiles.
- Replace placeholder contact email if a real business email is confirmed.
- Add real event dates once available.
- Replace Instagram/social preview cards with dedicated social images if desired.

## Domain and Sitemap

Current placeholder/final-intended domain:

```text
https://anjanadance.pages.dev
```

Update domain in:

- `astro.config.mjs`
- `public/robots.txt`

After changing the domain, run `npm run build` and confirm:

- `dist/sitemap-index.xml`
- `dist/sitemap-0.xml`
- Canonical URLs in generated page HTML

## SEO Metadata

SEO defaults live in:

```text
src/layouts/MainLayout.astro
```

Page-specific SEO lives at the top of:

- `src/pages/index.astro`
- `src/pages/about.astro`
- `src/pages/classes.astro`
- `src/pages/gallery.astro`
- `src/pages/events.astro`
- `src/pages/contact.astro`

Update page titles, descriptions, and canonical paths through the `MainLayout` props:

```astro
<MainLayout title={pageTitle} description={pageDescription} canonical="/classes/">
```

Keep every page title and description unique.

## Local Business Schema

Structured data lives in:

```text
src/components/seo/LocalBusinessSchema.astro
```

It currently includes the business name, description, Central Florida service area, tagline, and placeholder social profiles.

Do not add fake address, phone number, business hours, or reviews. Add them only when confirmed.

## Social Preview Image

Current OpenGraph, Twitter, Facebook, and WhatsApp preview image:

```text
public/og-image.png
```

To replace it:

1. Create a 1200 x 630 PNG.
2. Save it as `public/og-image.png`.
3. Run `npm run build`.
4. Check that generated HTML references the correct absolute URL.

If the filename changes, update the default `image` value in `src/layouts/MainLayout.astro`.

## Logos and Favicons

Logo assets live in:

```text
src/assets/logo/
```

Currently used:

- Full transparent logo: `anjana-dance-school-logo-transparent.png`
- Simplified icon: `ads-icon-transparent.png`
- Favicons: `public/favicon.png`, `favicon-192.png`, `favicon-512.png`, and `favicon.ico`

Logo imports appear in:

- `src/components/common/Navbar.tsx`
- `src/components/common/Footer.tsx`
- `src/components/home/Hero.tsx`

## Hero and Gallery Images

Hero image:

```text
src/assets/hero/IMG-20251018-WA0193.jpg
```

Used in:

- `src/components/home/Hero.tsx`
- `src/components/common/PageBanner.tsx`
- The current `public/og-image.png` composition

Gallery photos live in:

```text
src/assets/gallery/
```

They are referenced by `src/components/home/HomeSections.tsx` and `src/data/instagram.ts`.

To replace an image:

1. Add it to the appropriate assets folder.
2. Update the import in the component or data file.
3. Update its alt text.
4. Run `npm run build`.

## YouTube Videos

YouTube data lives in:

```text
src/data/videos.ts
```

Example:

```ts
{
  title: 'ADS Kids 3 Event Performance 1',
  videoId: 'S4plHTJbhr4',
  category: 'Stage Performances',
}
```

To add or replace a video:

1. Copy the ID from the YouTube URL.
2. Update `videoId` and `title`.
3. Select a category:
   - `Stage Performances`
   - `Competitions`
   - `Practice Sessions`
   - `Student Highlights`
4. Run `npm run build`.

The first video in the array is the homepage featured performance.

## Instagram Profile and Handle

Instagram data lives in:

```text
src/data/instagram.ts
```

Current placeholder profile:

```ts
export const instagramProfileUrl = 'https://www.instagram.com/';
```

Replace it with the complete ADS profile URL, for example:

```ts
export const instagramProfileUrl = 'https://www.instagram.com/your_ads_handle/';
```

The visible handle is not currently displayed. To show it, add a handle constant in `src/data/instagram.ts` and render it in:

- `src/components/social/InstagramCTA.tsx`
- `src/components/social/InstagramGrid.tsx`
- `src/components/common/Footer.tsx`

## Instagram Cards and Images

Each card in `src/data/instagram.ts` contains:

```ts
{
  id: 'ads-event-stage',
  title: 'Stage Energy',
  image: stageImage,
  type: 'performance',
  caption: 'Bright stage lights...',
  instagramUrl: instagramProfileUrl,
}
```

To update social images:

1. Create `src/assets/social/instagram/` if it does not exist.
2. Add the image.
3. Import it in `src/data/instagram.ts`.
4. Assign it to a card and update the caption/title/type.

Allowed types:

- `reel`
- `performance`
- `practice`
- `event`

Card URLs may point to the main Instagram profile or individual posts/reels.

## Footer Social Links

Footer links live in:

```text
src/components/common/Footer.tsx
```

Current placeholders:

- Instagram: `https://www.instagram.com/`
- YouTube: `https://www.youtube.com/`
- Facebook: `https://www.facebook.com/`

Replace each with the real ADS profile or channel URL.

## Contact Information

Contact page:

```text
src/pages/contact.astro
```

Current email placeholder:

```text
info@anjanadance.com
```

Replace it only with verified business information. Do not add an unconfirmed phone number or address.

## Events Page

Events placeholder content lives in:

```text
src/pages/events.astro
```

Update it when real showcase dates, competitions, registration deadlines, or community events are available.

## Validation Checklist

After content changes, run:

```sh
npm run build
```

Confirm:

- Build succeeds.
- `dist/sitemap-index.xml` exists.
- `dist/sitemap-0.xml` exists.
- `public/robots.txt` exists.
- `public/og-image.png` exists.
- Page titles and descriptions remain unique.
- YouTube and social links open correctly.
- No fake address or phone number has been added.

Optional local checks:

```sh
npm run dev
npm run preview
```
