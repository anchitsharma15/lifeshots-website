# Production preparation — 23 October 2026

## Decisions and recommendation

The user will manage content through GitHub. A CMS is not required for this stated workflow. Keep the static architecture and current photography-led design.

Private repository created: https://github.com/anchitsharma15/lifeshots-website, owned by anchitsharma15. The repository was created in the user-authorized GitHub browser session and source is being imported through the connected GitHub plugin. A transfer to a client-owned account can be arranged later if agreed. No automatic production deployment is configured.

Provisional hosting preference: first inspect the existing GoViralHost plan and keep it if adequate. That can avoid adding a hosting provider or moving DNS/email. This is conditional on supported static hosting, isolated staging, SFTP/SSH or another secure deployment method, HTTPS, backup/restore capability, and renewal terms. No final hosting selection or purchase has been made. Do not configure a provider-specific deployment pipeline before these checks. The included workflow only validates and packages.

## Verified source state

- Original checkout: `/Users/anchitsharma/Documents/Codex/2026-10-17/i-x20/work/lifeshots`.
- Clean `main` at `86d663d303a173f1fd3dc803cb88ed60ca5ddef5`; no configured Git remote.
- Existing Sites project: `appgprj_6ad33837f0648191a7d5c6ce99efacdb`; active, version 2, owner-only access with no external visitors.
- Hosted prototype: https://lifeshots-reimagined.ochrewolf65.chatgpt.site/.
- This package copies `dist/` unchanged; source SHA-256 inventory is in `source-manifest.json`.
- Original checkout, Sites deployment, and production website have not been changed.

## Business details

A direct HTTP fetch of https://lifeshots.in/contact-us/ on 23 October 2026 returned visible main-office text for **Showroom 94, Amayra Emporio, Kharar–Kurali Road, Sahibzada Ajit Singh Nagar, Punjab 140301**, phone +91 94655 73973. The branch is 68/3, Sathana Khas, Fatehpur, Kangra, Himachal Pradesh 176025; branch phone +91 99140 67744.

The user requested using the website to resolve the address. Use the current dedicated contact page above. https://lifeshots.in/ still lists 09 Acme Gulmohar, Sector 125, Mohali. An older cached contact-page result also listed Acme; direct retrieval confirms the handoff's newer contact-page address. Normalize this across the new footer/contact page and local business listings before launch. The new source currently abbreviates both addresses; expand them and add the branch phone during production content work.

## Unexpected metadata

The directly retrieved contact-page source contains unrelated Dutch gambling text in its structured metadata description, although the visible contact details did not show that text and no matching gambling links were found among the parsed page anchors. This is an observed metadata anomaly, **not a confirmed diagnosis of compromise**. Preserve a restricted original backup and inspect WordPress users, plugins/themes, SEO metadata, database content, scheduled jobs and files using appropriate access. Do not migrate this metadata into the new static site. A public fetch cannot establish the cause or extent.

## DNS and email evidence

Read-only `dig` results on 23 October 2026:

| Record | Observed value |
| --- | --- |
| NS | ns1.goviralhost.net; ns2.goviralhost.net |
| A apex | 162.55.100.32 |
| www CNAME | lifeshots.in |
| MX | priority 0, lifeshots.in |
| mail hostname | CNAME lifeshots.in; A 162.55.100.32 |
| SPF TXT | v=spf1 ip4:162.55.100.32 +a +mx +ip4:148.251.153.114 ~all |
| Other apex TXT | Google site-verification record present; preserve it |
| _dmarc TXT | No answer returned by this lookup |
| CAA | No answer returned by this lookup |

**Implication:** MX targets the apex, so changing the website's apex address can also change where inbound email goes. `mail` also follows the apex. These records do not prove any mailbox exists or identify all outbound email dependencies. A Gmail contact address does not prove domain mail is unused. Inspect the actual DNS zone, email routing, mailboxes, aliases/forwarders, MX/SPF/DKIM/DMARC, webmail and client configurations before changes. DKIM selectors and full-zone records remain unknown. Do not cancel hosting until mail dependencies and retention are resolved.

Registrar and expiry are handoff information, not freshly verified here. No nameservers or records were changed.

## Access and backup gate — outstanding

Safari access through computer use was not approved. No existing hosting session was inspected; no passwords were requested or handled. Continue through a user-authorized browser surface/session when available. WordPress administrator rights, domain document root, database, plan price, email accounts and backup status remain unverified.

1. In cPanel Domains, record the exact lifeshots.in document root and any redirects/addon domains. Check disk space and PHP/runtime configuration. Keep account IDs and credentials out of GitHub.
2. Inspect the existing wp-config database mapping privately; do not paste its contents or credentials into chat, logs, or the repository.
3. Create a complete files archive (including hidden files such as .htaccess) and matching SQL export. Include uploads, themes, plugins and configuration. Export the DNS zone and record mail settings separately.
4. Download backup copies to a private location outside the document root and Git repository. Record timestamps, file counts, sizes and SHA-256 hashes. Confirm archives list/extract and SQL is readable and contains expected tables.
5. Restore files and database into an isolated, restricted staging environment with separate database credentials. Verify public pages, media and administration. Block outbound mail, webhooks and scheduled tasks that could affect real users. Archive integrity alone does not verify a restorable backup.
6. Record the restore evidence and duration before approving a migration.

## URL and content preservation

`url-inventory.csv` lists the homepage navigation URLs discovered in fetched content. It is not a full crawl or a redirect configuration. Several category pages could not be fetched by the web tool; that is not proof of a 404. Retrieve the real sitemap, WordPress page/post/media export, Search Console pages, analytics landing pages and any valuable external links before finalizing redirects.

Prefer retaining important existing paths with substantive matching content: About, each photography service, Videography and Contact. Do not redirect every service URL to the homepage or an unrelated gallery. Only configure a 301 after a replacement URL and content have been reviewed. Preserve or map important media URLs and any blog posts discovered later. Verify no redirect loops and keep HTTP→HTTPS and www canonical handling consistent.

## Production source work still required

- Obtain original high-resolution photography, permission and preferred crops; generate responsive AVIF/WebP plus fallbacks, explicit image dimensions and suitable loading priorities. Preserve original Instagram attribution where appropriate.
- Add meaningful pages for retained URLs; replace prototype-only wording only after client sign-off.
- Add complete confirmed office details and branch contact. Review summaries against source feedback; never imply invented direct quotations or celebrity endorsements.
- Form review: provide a visible prepared-message preview, trim whitespace-only required values, keep local date limits fresh across midnight, reset copy feedback when content changes, and test long WhatsApp/mailto payloads. Decide if handoff-only inquiries meet the client's lead workflow.
- Accessibility: verify keyboard focus, dialog focus restoration, mobile-menu dismissal, offscreen dock keyboard behavior, status announcements, contrast on glass/photo surfaces and 200% zoom. Mobile input font size is currently 12px and needs review for iOS focus zoom.
- Add approved titles, descriptions, canonical URLs, Open Graph assets and validated business structured data; exclude the legacy metadata anomaly. Add production sitemap and robots rules for actual retained paths.
- Keep staging access-restricted and noindex. Remove indexing blocks only for the approved production deployment. Do not put passwords or secrets in static files.
- Confirm analytics/Search Console/Google Business Profile access and privacy requirements before adding tracking. Ongoing SEO remains separately scoped.

## Staging and acceptance

Use an isolated, access-restricted staging host outside the live document root. Deploy only dist/. Configure host-level HTTPS, caching, compression, MIME types and appropriate security headers after selecting the host. Verify headers and third-party links in that environment.

Test desktop and 390px mobile, narrow 320px width, touch, keyboard, screen reader checks, reduced motion, zoom, gallery filters and modal navigation, hero controls, mobile menu, service preselection, empty/invalid/valid inquiry flows, copy failure and WhatsApp/email handoff. Confirm no message sends without visitor action. Inspect network errors and mobile image loading/performance. Test every preserved route and approved redirect. The previous prototype checks do not count as production acceptance.

## Launch and rollback

Launch is blocked until backups have passed a restore, mail/DNS dependencies are understood, staged acceptance passes, content and URLs are approved, and the user explicitly approves the exact production change.

Prepare a release with Git commit ID, dist artifact hash, retained previous release, verified WordPress backup, restore instructions and responsible owner. Record current DNS TTLs/records, HTTPS state and mail configuration. Keep lead handling and launch monitoring assigned.

For an approved same-host static replacement, prefer a separate release directory and reversible document-root switch if the host supports it. Do not overwrite WordPress files in place or delete its database. Verify server-side redirect behavior and HTTPS before switching. If an atomic switch is unavailable, prepare and rehearse the host-specific alternate procedure on staging first.

For approved external hosting, complete domain verification, TLS and email decoupling in the concrete reviewed plan before altering web records. Nameserver changes require separate explicit approval and a complete zone/mail migration plan. Do not assume an apex change leaves email alone.

Immediately after launch check homepage and all important routes, media, redirects, canonical/noindex state, inquiry handoff, HTTPS and mail delivery where relevant. Roll back for broken key routes, inquiry failure, TLS errors, lost media, or email disruption. Revert the document-root/release switch; if DNS changed, restore recorded values and account for resolver caching. Restore WordPress database only if modified and reconcile any newly received leads. Keep hosting and prior release until the agreed monitoring/retention period is complete. Cancellation requires separate explicit approval.

## Verification completed here

Local integrity checker and JavaScript syntax check passed (see validation.txt). No browser regression test, automated accessibility test, full SEO audit, backup restore, cPanel inspection, GitHub Actions run or deployment test has been performed. Direct public HTTP retrieval and DNS lookups are evidence of public content/configuration only.
