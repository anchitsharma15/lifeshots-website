# Lifeshots Photography

Static photography website using HTML, CSS and JavaScript. GitHub is the source of truth; GitHub Pages serves the production website.

- Website: https://lifeshots.in/
- Repository: https://github.com/anchitsharma15/lifeshots-website
- Current launch status: [docs/launch-readiness.md](docs/launch-readiness.md)

## Local preview and checks

Run `python3 scripts/prepare_media.py` to restore the versioned media packs, then `python3 -m http.server 8080 --directory dist`, then open http://localhost:8080.

Run `python3 scripts/check_site.py`, `node --check dist/app.js`, and `node --check dist/page.js`.

To reproduce the Pages preview artifact, run:

```
python3 scripts/package_site.py --output pages-preview --preview --base-path /lifeshots-website/
```

The source in dist/ prepares production canonical URLs, robots rules and sitemap for lifeshots.in. Preview packaging adds noindex to every HTML page, blocks robots crawling, fingerprints CSS/JavaScript and adapts 404 asset paths. Noindex is not access control: the preview is public. Do not use preview indexing settings for the approved production launch.

To package production, run `python3 scripts/package_site.py --output pages-production --base-path /`.

## Deployment

`validate.yml` checks source and packages an artifact. `pages-preview.yml` deploys the production package on main-branch website/packager changes or manual dispatch. The user approved the production cutover on 24 October 2026; GoDaddy DNS now points to GitHub Pages. TLS issuance and global propagation were pending at cutover. The original private Sites prototype is separate; its hosting identity and credentials are intentionally excluded.

Only packaged website files belong in the web document root. Never publish backups, SQL, credentials, .git/ or private configuration. Current business paths are listed in docs/url-inventory.csv and retained as real pages.

## Inquiry behavior and content

The visitor reviews a locally prepared message and chooses WhatsApp or email. There is no automatic sending, lead storage, booking, availability confirmation or date reservation. Thirteen YouTube films are included, with two on-site players featured on the homepage and thumbnail links for other films; the original Instagram reel remains linked.

Founder/history, services and contact information come from lifeshots.in. The client-confirmed Amayra Emporio address is used in contact text, directions and structured data. Portfolio photography combines 164 restored legacy-site photos with the existing @lifeshots4u selection; original high-resolution exports and client content review are still outstanding. The official logo source is recorded in docs/logo-source.md. Testimonials are clearly labelled summaries, not new direct quotations or endorsements.

Original visual baseline: 86d663d303a173f1fd3dc803cb88ed60ca5ddef5. docs/source-manifest.json records that historical baseline, not current release hashes.

Imported photography is stored losslessly in numbered media/ archive parts. scripts/prepare_media.py verifies their SHA-256 hashes and restores all image paths before packaging. Keep the parts and manifest together. New standalone media can also be added directly under dist/assets/.

A manually captured Google reviews snapshot is available at /reviews/: 113 selected ratings of three stars or higher, 103 attributed comment/tag summaries, and ten rating-only entries. It is labelled with the capture date and does not auto-refresh. docs/reviews-source.md records provenance. The footer contains the client-requested ArunodayCare maintenance credit.
