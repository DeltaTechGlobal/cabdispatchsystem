---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: []
---

# Surface brief: www.cabdispatchsystem.com (marketing site)

Scope: homepage `index.html`, 7 keyword landing pages, `/faq/`, `/privacy/`, `404.html`, re-shelled `sms-gateway.html`. Mode: Persuade.

Audience: owners/managers of small–mid UK minicab and private-hire offices, and existing CDS Desktop customers, equally. Job: understand what a CDS office does all day, then book a demo or ask for a quote. Proof: real portal screenshots (how-to recording frames, Alpha Cabs dev data), the 30s demo video, 33 how-to videos, "since 2010". No testimonials, counts, prices. Constraints: plain static HTML on GitHub Pages; keep old homepage anchors; legacy Driver app + SMS app sections stay on the homepage; GA4 behind consent.

Chosen direction: user-pinned "clean product-led" canon, craft bar Intercom / Monzo Business / GoCardless (friendly UK business SaaS, colour blocks). concept-seed not run because the user pinned the direction.

Memorable moment: one booking travels the page — the caller-ID card, Book a ride with the £75 fixed fare, the board, the passenger's text — told in the "From call to cab" sticky sequence.

Unresolved: GA4 measurement ID (user to supply); screenshots are 1440×900 frames (1x), replace with 2x captures from the demo office later.

## Direction contract

THESIS: "Phone rings. Cab's on the way." The page follows one real booking from the ringing phone to the passenger's text, using the product's own screens. It refuses the category default of a headline over three icon cards and a stock photo of a smiling man.

OWN-WORLD: white ground with ink #09090b; CDS red #E81A22 used as a committed colour field (the UK band, primary buttons) not a sprinkle; a soft sky tint from logo blue #00A9EC (#E8F6FD) and warm zinc panels #F4F4F5 as alternating section grounds; large 24px-radius frames holding real screenshots with soft offset shadows; Barlow Semi Condensed 700 display (echoes the DIN wordmark), system UI body; HTML-built product atoms (incoming-call card, SMS bubble, yellow UK number plate) drawn in the portal's own component language.

STORY: in the first viewport the visitor sees the product taking a call. Scrolling, they watch the four steps, the 30-second demo, everything else the office runs, why it fits UK offices (postcodes, airports, LU/DLR, TfL returns), what it connects to, how pricing and setup work, then a contact form.

FIRST VIEWPORT: left column (5/12) the H1 at display size, a one-sentence sub naming UK minicab and private-hire offices, red "Book a demo" plus "Watch the 30-second demo" ghost button, a small line of three facts. Right column (7/12) the Book a ride screenshot in a large frame, an incoming-call card overlapping its top-left edge, and a phone-width SMS bubble overlapping its bottom-right edge. Nav above with a red "Book a demo" button.

FORM: canon (user-pinned), #1 on the list, executed at the bar of Intercom / Monzo Business / GoCardless. Signature interaction: "From call to cab": four steps scroll past a sticky framed screen that swaps screenshot per step (IntersectionObserver, cross-fade with a slight scale, reduced-motion = instant), and every step is readable without JS. seed: none (direction pinned by user; concept-seed not run)

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
