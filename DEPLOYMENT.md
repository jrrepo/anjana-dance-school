# Deployment Guide

This project is a static Astro site prepared for GitHub and Cloudflare Pages.

## Deployment Flow

```text
Local development -> GitHub repository -> Cloudflare Pages -> Custom domain
```

## Prerequisites

- GitHub repository containing this project
- Cloudflare account
- Node.js 24 LTS
- npm

The project pins Node 24 through:

- `package.json` engines
- `.nvmrc`

## Local Release Validation

Run from the project root:

```sh
npm install
npm run check
npm run build
npm run preview
```

The preview command serves the production `dist/` output locally. Stop it with `Ctrl+C`.

## Push to GitHub

Review changes before committing:

```sh
git status
git diff
```

Then:

```sh
git add .
git commit -m "Prepare production deployment"
git push
```

Do not commit secrets, local `.env` files, or generated `dist/` output.

## Cloudflare Pages Settings

Create a Cloudflare Pages project and connect the GitHub repository.

Use:

- Framework preset: `Astro`
- Production branch: the repository's main production branch
- Root directory: `/`
- Build command: `npm run build`
- Build output directory: `dist`
- Node version: `24` LTS
- Environment variables: none required for V1

The official Node.js release schedule lists Node 24 as an LTS release. The local project is configured to use that major version.

## Build Artifacts

The production build creates:

- Static pages in `dist/`
- `dist/sitemap-index.xml`
- `dist/sitemap-0.xml`
- Copied `robots.txt`
- Copied `_headers`
- Copied `_redirects`
- Favicons and `og-image.png`

## Redirects

`public/_redirects` intentionally contains no SPA fallback.

Astro generates actual static HTML routes for:

- `/`
- `/about/`
- `/classes/`
- `/gallery/`
- `/events/`
- `/contact/`

Adding `/* /index.html 200` would incorrectly turn this static multi-page site into an SPA fallback. Add explicit redirects only when a route is renamed.

Example:

```text
/old-classes/ /classes/ 301
```

## Production Headers

Cloudflare Pages reads `public/_headers`.

The configured headers provide:

- Clickjacking protection for ADS pages
- MIME sniffing protection
- Restrictive browser permissions
- Safe referrer behavior
- Long-lived caching for hashed Astro assets

No restrictive Content Security Policy is currently added because the site embeds YouTube videos and uses Google Fonts.

## Custom Domain and SSL

After the first successful deployment:

1. Open the Cloudflare Pages project.
2. Add the custom domain.
3. Confirm DNS records are active.
4. Confirm HTTPS opens without certificate warnings.
5. Confirm HTTP redirects to HTTPS.
6. Update `astro.config.mjs` and `public/robots.txt` when moving from the free Pages domain to a custom domain.
7. Rebuild and redeploy after a domain change.

## Search Launch

After the custom domain is live:

1. Open `https://anjanadance.pages.dev/sitemap-index.xml`.
2. Verify `https://anjanadance.pages.dev/robots.txt`.
3. Add the domain to Google Search Console.
4. Submit `/sitemap-index.xml`.
5. Test the homepage URL with Google URL Inspection.
6. Test the OpenGraph image in social sharing tools.

## Contact Form

V1 uses a static `mailto:` form and requires a configured email application on the visitor's device.

Before launch:

- Confirm `anjanadanceschool@gmail.com` is a valid ADS inbox.
- Replace it in `src/pages/contact.astro` if necessary.
- For server-side submissions later, add a Cloudflare Worker, Pages Function, or trusted form service.

## Rollback

Cloudflare Pages keeps previous deployments. If a production deployment has a problem:

1. Open the Pages deployment history.
2. Select the last known-good deployment.
3. Promote or roll back to that deployment.
4. Fix the issue in Git and deploy again.
