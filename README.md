# Lifeshots Photography

Static photography website using HTML, CSS and JavaScript. GitHub is the source of truth; GitHub Pages serves the public preview.

- Preview: https://anchitsharma15.github.io/lifeshots-website/
- Repository: https://github.com/anchitsharma15/lifeshots-website
- Current launch status: [docs/launch-readiness.md](docs/launch-readiness.md)

## Local preview and checks

Run `python3 -m http.server 8080 --directory dist`, then open http://localhost:8080.

Run `python3 scripts/check_site.py`, `node --check dist/app.js`, and `node --check dist/page.js`.

To reproduce the Pages preview artifact, run:

```
python3 scripts/package_site.py --output pages-preview --preview --base-path /lifeshots-website/
```

The source in dist/ prepares production canonical URLs, robots rules and sitemap for lifeshots.in. Preview packaging adds noindex to every HTML page, blocks robots crawling, fingerprints CSS/JavaScript and adapts 404 asset paths. Noindex is not access control: the preview is public. Do not use preview indexing settings for the approved production launch.

## Deployment

`validate.yml` checks source and packages an artifact. `pages-preview.yml` deploys the preview on main-branch website/packager changes or manual dispatch. The production domain and DNS have not been changed. The original private Sites prototype is separate; its hosting identity and credentials are intentionally excluded.

Only packaged website files belong in the web document root. Never publish backups, SQL, credentials, .git/ or private configuration. Current business paths are listed in docs/url-inventory.csv and retained as real pages.

## Inquiry behavior and content

The visitor reviews a locally prepared message and chooses WhatsApp or email. There is no automatic sending, lead storage, booking, availability confirmation or date reservation. Films open their original Instagram reel.

Founder/history, services and contact information come from lifeshots.in. The dedicated contact-page address is used. Portfolio photography comes from @lifeshots4u public posts, as documented in the original prototype; original high-resolution exports and client content review are still outstanding. The official logo source is recorded in docs/logo-source.md. Testimonials are clearly labelled summaries, not new direct quotations or endorsements.

Original visual baseline: 86d663d303a173f1fd3dc803cb88ed60ca5ddef5. docs/source-manifest.json records that historical baseline, not current release hashes.
