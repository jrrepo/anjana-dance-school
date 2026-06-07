# Production Launch Checklist

Use this checklist before the first launch and for major releases.

## Code and Build

- [x] `npm install` completes.
- [x] `npm run check` passes.
- [x] `npm run build` passes.
- [x] `npm run preview` tested in a browser.
- [x] No required environment variables for V1.
- [x] Node.js 24 LTS configured.
- [x] No hardcoded localhost URLs in source or production configuration.
- [x] No fake business street address or phone number.

## Navigation and Content

- [x] All desktop page routes tested locally.
- [x] Mobile layout smoke-tested locally.
- [ ] All page headings and copy reviewed.
- [ ] Events placeholder reviewed before launch.
- [ ] Confirm `info@anjanadance.com` is a real monitored inbox.

## Media

- [ ] All YouTube embeds load from the live domain.
- [ ] YouTube videos play on mobile.
- [ ] Instagram links point to the real ADS profile/posts.
- [ ] YouTube footer link points to the real ADS channel.
- [ ] Facebook footer link updated or removed.
- [x] Images checked for obvious awkward crops on homepage mobile smoke test.

## Contact

- [ ] Static mailto inquiry form tested on desktop.
- [ ] Static mailto inquiry form tested on mobile.
- [ ] Verified contact email is displayed.
- [ ] Future server-side form handling selected if mailto is insufficient.

## Responsive and Accessibility

- [x] Homepage tested at mobile and desktop widths.
- [x] Gallery tested at mobile and desktop widths.
- [ ] Keyboard navigation tested.
- [ ] Form labels and required validation tested.
- [ ] Color contrast reviewed.

## SEO

- [x] Unique page titles.
- [x] Unique meta descriptions.
- [x] Canonical URLs configured.
- [x] OpenGraph and Twitter metadata configured.
- [x] `public/og-image.png` exists and is 1200 x 630.
- [x] LocalBusiness JSON-LD validates and contains no fake address/phone.
- [x] Sitemap generates during build.
- [x] `public/robots.txt` exists.
- [x] Favicons exist.
- [ ] Google Search Console property created.
- [ ] Sitemap submitted to Google Search Console.

## Performance

- [ ] PageSpeed Insights checked after deployment.
- [ ] Core Web Vitals reviewed.
- [x] YouTube lazy loading confirmed in component markup.
- [x] Production asset caching headers confirmed in build output.

## Cloudflare Pages

- [ ] GitHub repository connected.
- [ ] Framework preset set to Astro.
- [ ] Build command set to `npm run build`.
- [ ] Output directory set to `dist`.
- [ ] Root directory set to `/`.
- [ ] Production branch selected.
- [ ] First Cloudflare build succeeds.
- [x] `_headers` visible in local build output.
- [x] `_redirects` visible in local build output.

## Domain and Analytics

- [ ] Custom domain configured.
- [ ] SSL active.
- [ ] HTTP redirects to HTTPS.
- [ ] Live URL opens on mobile and desktop.
- [ ] Google Analytics or another privacy-conscious analytics tool selected.
- [ ] Analytics consent/privacy requirements reviewed.

## Final Sign-Off

- [ ] Cloudflare build succeeds.
- [ ] Live URL opens.
- [ ] Mobile view works.
- [ ] YouTube videos load.
- [ ] SEO metadata appears.
- [ ] Sitemap exists.
- [ ] `robots.txt` exists.
- [ ] Contact form workflow works.
- [ ] Social links work.
- [ ] No placeholder business address or phone number.
