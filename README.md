# Lifeshots Photography

Static HTML/CSS/JavaScript website. This repository is intended to become the source of truth for the production redesign. The visual prototype is preserved unchanged in this preparation package.

## Local preview

Run `python3 -m http.server 8080 --directory dist`, then open http://localhost:8080.

## Checks

Run `python3 scripts/check_site.py` and `node --check dist/app.js`.
GitHub Actions runs these checks and packages `dist/` for review. It does **not** deploy anywhere.

## Ownership and deployment

Private GitHub repository: https://github.com/anchitsharma15/lifeshots-website. GitHub is the source of truth for the redesign. No deployment integration is configured; the workflow validates and packages only.

The original Sites repository and its hosting identity are separate. This package deliberately excludes `.openai/hosting.json` and Sites credentials; do not push GitHub changes to the Sites repository by mistake.

Read `docs/production-plan.md` before configuring hosting. Only `dist/` is intended for the web document root. Never upload the repository, backups, documentation, or `.git/` into the public document root.

## Inquiry behavior

The form prepares a WhatsApp or email message. It does not store leads, send automatically, confirm availability, or reserve dates. Films link to Instagram. Keep these statements accurate in production.

## Content provenance

Source baseline: `86d663d303a173f1fd3dc803cb88ed60ca5ddef5`, copied from the existing local prototype on 23 October 2026. Photography came from public @lifeshots4u posts according to the original README; original exports and client approval are still required. Testimonials are labelled summaries of feedback on lifeshots.in. Do not add unverified ratings, prices, awards, or statistics.

The source uses the contact-page address but abbreviates it. Update it to the full verified contact-page address before release; the live homepage still differs. See the production plan for details.
