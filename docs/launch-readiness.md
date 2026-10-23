# Lifeshots launch readiness — 24 October 2026

This is the current status. `production-plan.md` records the earlier preparation context and contains decisions that have since changed.

## Architecture and access

- Public GitHub repository: https://github.com/anchitsharma15/lifeshots-website.
- GitHub Pages preview: https://anchitsharma15.github.io/lifeshots-website/.
- The intended domain registrar and DNS host is GoDaddy. Production nameservers have not been changed.
- Existing WordPress hosting remains active on GoViralHost. No production files, database, DNS or mail settings were changed in this work.
- The user has deferred Zoho setup, accepts losing existing domain email, and does not require mailbox migration. The separate Gmail contact remains in use. Do not create or advertise info@lifeshots.in until it actually exists.

## Implemented in this preparation pass

- Matching static pages for all 11 photography/business URLs discovered in the live WordPress page sitemap, including the legacy gallery path. Titles, descriptions, canonicals, Open Graph data, internal navigation, production sitemap and robots files are prepared.
- Existing visual direction and original portfolio preserved. Official logo is used with cache-safe CSS/JS packaging.
- Homepage business schema uses verified public contact details and founder name; no ratings, prices, awards, opening hours or client counts were invented.
- Complete main-office and branch details, with both telephone links.
- Inquiry message preview, whitespace trimming, fresh date limit on focus/submission, invalidation when fields change, accessible copy status and manual-copy fallback. No lead storage or automatic sending was added.
- Service-page links preselect the homepage inquiry occasion.
- Hidden floating dock excluded from keyboard interaction/visibility; Escape and outside-click dismissal for mobile menus. Mobile inputs use 16px text.
- Shared packaging applies versioned assets and noindex to every preview HTML page, including subpages. Production indexing files are not deployed unchanged to the preview.
- Custom 404 page prepared. GitHub Pages does not support arbitrary server-side 301/410 configuration; existing business paths are retained to avoid redirect dependence.

## Legacy content findings

The publicly retrieved WordPress sitemap index lists four post sitemaps with 641 post URLs, plus 11 business pages and six category archive URLs. Samples of post paths concern gambling, gaming and pharmaceuticals; no post path matched wedding, photography, portrait, shoot or Ganesh keywords. This is evidence of unrelated published material, not a forensic diagnosis of how it arrived. None of those posts or their metadata has been copied into the replacement.

The 11 business-page paths are in `url-inventory.csv`. There are 169 unique legacy media URLs referenced in the page sitemap; `legacy-media-inventory.csv` records them. They are not currently copied or redirected on the new site. Before launch, review which have search traffic/backlinks and preserve relevant files at their existing paths where appropriate, or decide their disposition explicitly. Do not redirect unrelated spam posts to the homepage. Unknown removed paths should return a real 404 (or 410 on a host that supports it).

Search Console Security Issues, Manual Actions, indexed pages, Performance pages/queries and Links need review before launch. The assistant has not accessed Search Console or verified any manual action. Retain domain verification records when moving DNS. Do not submit the preview sitemap or remove preview noindex.

## Verification completed

- All source local links, assets, anchors and unique IDs checked; JavaScript syntax checks passed.
- All 11 business pages have one H1, one canonical and one description. Business JSON parses; sitemap lists all 11 paths.
- All 12 packaged preview HTML files (including 404) contain noindex and versioned CSS references.
- Browser spot checks: valid inquiry preparation and focus, whitespace-only rejection, service preselection, wedding filtering, keyboard gallery navigation/Escape/focus return, 320px Contact layout/menu, 390px homepage overflow and 16px form input text.
- No inquiry was sent to WhatsApp or email. No actual booking, date reservation, payment or backend exists.

These are targeted checks, not a complete accessibility audit or a full mobile performance/SEO certification. Original high-resolution image exports are still requested; current portfolio uses public Instagram resolutions.

## Outstanding before production approval

1. Verify the downloaded files/database backups and ideally rehearse an isolated restore. The user reports a 1.48 GB home archive and 73 MB SQL download, but only screenshots were inspected; integrity and restore are unverified. Keep backups and wp-config.php out of GitHub.
2. Review Search Console and the legacy media inventory; decide any additional legitimate content to preserve. Do not carry over unrelated metadata or posts.
3. Review business/service copy and photo usage/crops with the client, without contacting them unless the user explicitly authorizes it.
4. Inspect the current GoDaddy domain/DNS access, export the full current zone, record TTLs, DNSSEC/DS state, verification records and the exact existing web records needed for rollback. A GoDaddy registration alone does not establish that DNS has moved there.
5. Prepare the final GitHub Pages domain settings, production indexing/release configuration and GoDaddy DNS records. Do not change nameservers, connect the production domain or cancel GoViralHost until the user approves that concrete plan.
6. Post-launch: test HTTPS and hostname canonical behavior, all 11 retained paths and a genuine unknown URL, inquiry handoff, media, indexability and Search Console. Keep rollback hosting/backup through the agreed monitoring period. Cancellation remains a separate approval.
