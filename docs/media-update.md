# LifeShots media update

## Implemented

- Restored every image reference from the 11 published business pages in the WordPress backup: 164 unique photographs across 169 placements. Category galleries retain their original assignment and order: pre-wedding 44, wedding 36, fashion 14, celebrities 16, baby 24, maternity 19; homepage 9, founder 1, directory covers 6.
- Optimized JPEGs retain original /wp-content/uploads/ paths. Galleries use separate small WebP thumbnails, lazy loading, native aspect ratios, and an accessible full-screen viewer. Original backup files remain untouched. The migration manifest records each source and destination.
- Added 11 verified public videos from LifeShots Photography: six current channel videos and all five previously embedded films. Two working privacy-enhanced embeds are featured on the homepage and films page; nine other films use thumbnail links to YouTube because some videos reject embedded playback.
- Added a category directory entry point from the homepage and YouTube footer links.
- Added a link to the client-supplied Google listing beside the existing clearly labelled testimonial summaries.

## Open items

**Address:** Client confirmed Showroom 94, Amayra Emporio, Kharar - Kurali Rd, Sahibzada Ajit Singh Nagar, Punjab 140301. Homepage, contact page, directions and structured data use this address.

**Instagram:** The public profile was retrieved, but its recent-post data endpoint requires login. Browser access to Chrome was not approved. No fresh photos were imported and no automatic Instagram feed is claimed. Continue from a user-authorized Instagram connection or client-provided original exports and post links; the existing eight Instagram images remain.

**Google reviews:** The client chose a manual public snapshot instead of API access. The website now includes 113 selected public ratings of three stars or higher from 24 October 2026: 103 attributed comment/tag summaries and ten rating-only entries, with source links and a snapshot label. See reviews-source.md. This does not update automatically.

Primary references:
- https://developers.google.com/my-business/reference/rest/v4/accounts.locations.reviews/list
- https://developers.google.com/my-business/content/review-data
- https://support.google.com/youtube/answer/171780

Media packs preserve the imported files and are restored with a SHA-256 integrity check before previews and deployment. This keeps the source transfer manageable through the connected GitHub integration.

## Verification

Local resource, anchor and unique-ID checks passed. All three JavaScript files pass syntax checks. Migration manifest checked against restored files. YouTube oEmbed metadata verified all 11 videos as belonging to LifeShots Photography. Browser checked the celebrity gallery, next-photo navigation, Escape, focus return and narrow-screen overflow. Browser checks found several videos block embedded playback; these now use thumbnail links instead. Two player previews loaded successfully. Playback still depends on YouTube/network availability.
