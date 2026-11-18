# ZenoTech: multi-division update

## Adding or editing a division
Everything (nav, home cards, footer, portfolio filter, contact form, /divisions/:slug pages)
reads from `src/data/divisions.ts`. Add one object to that array to add a division.
Edit the service lists there to match what each expert really offers (Fabrication,
Interior Design and Drafting copy is a first draft).

Add real projects in `src/data/projects.ts` with the matching `division` id.

## Fixed
- /technologies link (now /technology; old URL redirects), /about now exists, /services redirects to /divisions
- Footer links, emails (mailto now matches shown address), phone (+966 53 620 1184), removed UA/EN switcher and placeholder logos
- Service images (were used as CSS classes, never rendered) and the mobile typo
- Dead buttons (View Portfolio, Create New, View Service Details)
- Fake portfolio page replaced by real projects with division filter
- Hero video 31 MB -> 1.5 MB (+ poster), webdev image 8.6 MB -> 290 KB, jwell screenshot -> JPG
- Page title, meta description, social tags, favicon type; scroll-to-top on navigation
- Lint errors; removed unused components and template leftovers

## Unchanged on request
- Telegram setup in api/contact.js (token/chat ID still hard-coded; a Division line was added to the message)
- Company name
