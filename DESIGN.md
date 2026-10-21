---
name: CDS · Cab Dispatch System
description: "Book. Dispatch. Notify." Marketing site for the CDS cloud booking and dispatch system for UK minicab and private-hire offices.
colors:
  ink: "#09090b"
  ink-2: "#27272a"
  muted: "#52525b"
  line: "#e4e4e7"
  line-strong: "#d4d4d8"
  paper: "#ffffff"
  panel: "#f4f4f5"
  sky: "#e8f6fd"
  sky-line: "#bfe6f8"
  red: "#e81a22"
  red-dark: "#c3121a"
  red-tint: "#fde8e9"
  blue: "#00a9ec"
  blue-ink: "#0367a6"
  green: "#047857"
  green-tint: "#d1fae5"
  plate: "#f8d33a"
typography:
  display:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 1.2rem + 3.9vw, 4.75rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.005em"
  display-page:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, system-ui, sans-serif"
    fontSize: "clamp(2.4rem, 1.5rem + 3.6vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.005em"
  headline:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.45rem + 2.3vw, 3.25rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.005em"
  title:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 1.25rem + 1vw, 1.875rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.005em"
  title-body:
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 650
    lineHeight: 1.3
  lede:
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 650
    lineHeight: 1.2
  caption:
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.45
  mono:
    fontFamily: "ui-monospace, SF Mono, Menlo, Consolas, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
rounded:
  plate: "4px"
  s: "10px"
  field: "12px"
  md: "16px"
  bubble: "22px"
  l: "24px"
  pill: "999px"
spacing:
  gutter: "clamp(16px, 4vw, 40px)"
  section: "clamp(72px, 9vw, 128px)"
  max: "1200px"
  grid-gap: "20px"
  actions-gap: "12px"
  column-gap: "clamp(32px, 5vw, 80px)"
  section-head-gap: "clamp(40px, 5vw, 64px)"
components:
  button-primary:
    backgroundColor: "{colors.red}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "12px 22px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.red-dark}"
    textColor: "{colors.paper}"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "12px 22px"
    height: "48px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "12px 22px"
    height: "48px"
  button-ghost-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  button-white:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "12px 22px"
    height: "48px"
  button-small:
    rounded: "{rounded.pill}"
    padding: "8px 16px"
    height: "40px"
  nav-link:
    textColor: "{colors.ink-2}"
    rounded: "{rounded.pill}"
    padding: "8px 12px"
    height: "44px"
  nav-link-hover:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
  input:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.field}"
    padding: "11px 14px"
    height: "48px"
  product-frame:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.l}"
  tile:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.l}"
    padding: "clamp(24px, 3vw, 32px)"
  tile-sky:
    backgroundColor: "{colors.sky}"
  tile-panel:
    backgroundColor: "{colors.panel}"
  tile-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  call-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "14px"
    padding: "14px 16px 16px"
    width: "272px"
  sms-card:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.bubble}"
    padding: "14px 14px 16px"
    width: "264px"
  sms-bubble:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink-2}"
    typography: "{typography.caption}"
    padding: "10px 12px"
  number-plate:
    backgroundColor: "{colors.plate}"
    textColor: "#111111"
    rounded: "{rounded.plate}"
    padding: "1px 7px"
  fare-chip:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "16px 18px"
    width: "420px"
  cta-band:
    backgroundColor: "{colors.red}"
    textColor: "{colors.paper}"
    rounded: "{rounded.l}"
    padding: "clamp(32px, 5vw, 64px)"
---

# Design System: CDS · Cab Dispatch System

## Overview

**Creative North Star: "The Live Booking"**

The site follows one real booking from the ringing phone to the passenger's text, and the system exists to keep that booking visible. Real portal screens sit in large, softly lifted frames; around them, small HTML-built product atoms (the incoming-call card, the SMS card with its yellow UK number plate, the fare chip) are drawn in the portal's own component language and overlap the frames' edges, so the page reads as the product working rather than a description of it. Every screenshot and atom carries sample data and says so in a quiet caption.

The ground is white with near-black ink. CDS red is a committed colour field, not a sprinkle: it fills the UK band, the closing call-to-action band and the primary buttons, and little else. A soft sky tint taken from the logo blue and a warm zinc panel alternate with white as section grounds, and two ink bands (the demo video and the contact form) give the page its dark beats. Display type is Barlow Semi Condensed 700, a narrow, sturdy face that echoes the DIN-style CDS wordmark; body copy is the visitor's own system UI face, set large (17px) and calm.

Density is friendly UK business SaaS: generous section padding, wide gutters, rounded pill buttons, ruled lists instead of card rows wherever the content is a list. Motion is small and purposeful: the call icon rings four times, the hero SMS arrives once, the "From call to cab" stage cross-fades between screens, and all of it stops under reduced motion.

Repository note: DESIGN.md and PRODUCT.md (with README.md and `.impeccable/`) are excluded from the deployed site by the rsync step in `.github/workflows/static.yml`; they are working documents, not pages.

**Key Characteristics:**
- Real portal screenshots in 24px-radius frames with a browser bar and soft, deep shadows.
- HTML product atoms (call card, SMS card, number plate, fare chip) overlapping the frames, labelled as sample data.
- Red used as a whole field or a primary action, never as decoration.
- White, sky and zinc panel section grounds alternating, with ink bands for dark beats.
- Barlow Semi Condensed 700 headings over a system UI body.
- Pill buttons, 48px tall; ruled lists for facts, related links and "works with" grids.

## Colors

A white-and-ink palette carried by one committed brand red, with a cool sky tint and warm zinc panel as alternate grounds and two functional accents (green for done, yellow for number plates).

### Primary
- **CDS Red** (`red`): the brand's own red from the logo. Fills the UK band and the closing CTA band as whole colour fields, the primary "Book a demo" button, the active step number in "From call to cab", the SMS avatar, the onboarding step counters, text selection and form accent/caret colour. Inline "Works with" icons and the hover state of text links and FAQ questions borrow it.
- **Pressed Red** (`red-dark`): the primary button's hover state only.
- **Red Tint** (`red-tint`): background of the form's error status message.

### Secondary
- **Logo Blue** (`blue`): the focus ring on every interactive element (3px outline), the field focus glow, contact-method icons on ink and the footer wordmark. Never used for text on white.
- **Link Blue** (`blue-ink`): the accessible text-link colour on light grounds, the header wordmark, and links inside SMS bubbles.
- **Sky** (`sky`) and **Sky Line** (`sky-line`): a soft section ground and tile fill derived from the logo blue, with its matching border; also the note box inside the legacy apps panels.

### Tertiary
- **Done Green** (`green`) and **Green Tint** (`green-tint`): check marks in feature lists and hero facts, the ringing call icon, and the form's success message. Green means "yes, this works" and nothing else.
- **Plate Yellow** (`plate`): the UK number plate atom only, with a darker `#d9b21b` edge and `#111` text.

### Neutral
- **Ink** (`ink`): body text, headings, default and hover button fill, the ink section bands, the footer.
- **Ink 2** (`ink-2`): secondary dark text such as nav links, list items and SMS bubble copy.
- **Muted** (`muted`): ledes, paragraph copy under headings, captions, labels.
- **Line** (`line`) and **Line Strong** (`line-strong`): hairline borders and dividers; the stronger one for ghost button and field strokes.
- **Paper** (`paper`): the page ground and the fill of frames, tiles, forms and atoms.
- **Panel** (`panel`): warm zinc section ground, tile fill, nav hover pill and the SMS bubble.

On ink grounds, copy steps down through `#d4d4d8` (paragraphs) and `#a1a1aa` (captions, small print), with `#3f3f46` and `#27272a` as borders.

### Named Rules
**The Colour Field Rule.** Red appears as a whole band, a primary button, or a single active marker. If red is being added to make something "pop", it does not belong there.

**The Two Blues Rule.** Logo Blue marks focus and brand; Link Blue carries readable text. Never swap them.

**The Green Means Done Rule.** Green is reserved for checks, success and a live call. It is never a decorative accent.

## Typography

**Display Font:** Barlow Semi Condensed 600/700, self-hosted WOFF2 (with Arial Narrow, system-ui fallback)
**Body Font:** system UI stack (system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial)
**Label/Mono Font:** ui-monospace stack, used only for the URL in a frame's browser bar

**Character:** A narrow, sturdy industrial display face that rhymes with the CDS wordmark, set tight and balanced, over the visitor's familiar system face for everything they actually read.

### Hierarchy
- **Display** (700, `display`, 0.98): the homepage H1 only; its second line is set in CDS Red as a block.
- **Display page** (700, `display-page`, 1.02, max 16ch): H1 of feature pages, FAQ, privacy and 404.
- **Headline** (700, `headline`, 1.02): section H2s. Split sections and CTA bands use a smaller clamp (about 1.9–3rem).
- **Title** (700, `title`, 1.1): step titles and H3s; tile titles run slightly larger (up to 2rem). The UK band's list terms and related-link names also use the display face at title scale.
- **Title body** (650, 1.25rem, 1.3): H3s inside ruled grids, fact lists and prose, set in the body face so dense lists stay readable.
- **Lede** (400, 1.25rem, 1.5, max about 38–46rem): the sentence under each H1 and section H2, in Muted.
- **Body** (400, 1.0625rem, 1.6): all running copy; prose blocks cap at 42rem.
- **Label** (650, 1rem): buttons, FAQ questions (1.125rem), form labels (600, 0.9375rem).
- **Caption** (400, 0.8125rem): sample-data captions and SMS bubble copy.

Headings use `text-wrap: balance`; paragraphs use `text-wrap: pretty`. Numbers in the call card and price lists are tabular.

### Named Rules
**The Display Is For Headings Rule.** Barlow Semi Condensed sets headings, prices, step numbers and plate text. Paragraphs, labels and buttons stay in the body face.

**The Sentence Case Rule.** Headings and buttons are sentence case. Uppercase with tracking appears only in the brand wordmark and the number plate.

## Layout

A single centred container (`max` 1200px plus `gutter` on each side) holds every section. Sections are full-bleed colour grounds with `section` vertical padding; a section head (max 46rem) sits above content with `section-head-gap` below it.

Two-column layouts are asymmetric 5/7 or 4/8 splits (hero, "From call to cab", UK band, contact, feature-page splits, demo, FAQ), with `column-gap` between columns; feature-page splits alternate sides with a flip variant. The feature mosaic is a 12-column grid with `grid-gap` gutters and tiles spanning 7/5, 6/6 or 4/4/4. Lists of facts, related pages and integrations are ruled three-column grids (hairline top and bottom rules with vertical dividers), not card rows.

The homepage hero places the H1 column beside a Book a ride screenshot frame that overhangs the column (128% width) with the call card overlapping its top-left edge and the SMS card its bottom-right. "From call to cab" pins a framed stage at 104px from the top while four 70vh steps scroll past it.

Breakpoints: 960px collapses every two-column grid and the mosaic to one column, hides the sticky stage (each step shows its own screenshot) and swaps the nav for a disclosure menu; 860px and 600px collapse the three-column ruled lists; 600px restacks the hero atoms in flow around a narrower frame. Pages must hold at 360px with no sideways scroll.

## Elevation & Depth

Depth is soft and ambient: shadows are ink-tinted, with a strong negative spread so they pool under an object rather than outlining it. Elevation belongs to product objects (frames, atoms, the open nav panel, the cookie notice); text containers stay flat with a hairline border.

### Shadow Vocabulary
- **Lift** (`box-shadow: 0 1px 2px rgb(9 9 11 / 0.05), 0 28px 56px -20px rgb(9 9 11 / 0.28)`): product frames, floating atoms, hovered tiles, the nav menu panel and the cookie notice.
- **Rest** (`box-shadow: 0 1px 2px rgb(9 9 11 / 0.06), 0 4px 12px -4px rgb(9 9 11 / 0.1)`): flat frames on feature pages and atoms set inside tiles.
- **Video** (`box-shadow: 0 40px 80px -30px rgb(0 0 0 / 0.7)`): the demo video frame on its ink band.
- **Red-band chip** (`box-shadow: 0 24px 48px -24px rgb(80 0 0 / 0.55)`): the fare chip on the red field.
- **Header** (`box-shadow: 0 6px 20px -16px rgb(9 9 11 / 0.35)`): the sticky header once the page has scrolled, with a Line border.

### Named Rules
**The Soft Lift Rule.** Shadows are diffuse with a negative spread, tinted by the ground they sit on. No hard offset shadows, no zero-blur outlines.

**The Objects Float, Text Sits Rule.** Screens and product atoms may lift; tiles, panels and lists sit flat at rest and lift only on hover when they are links.

## Shapes

Generous, friendly rounding that scales with the object: 24px (`l`) for screenshot frames, tiles, panels, forms and CTA bands; 16px (`md`) for flat frames, the nav panel, the cookie notice and the fare chip; 14px for the call card and contact rows; 12px (`field`) for inputs, status messages and in-tile list rows; 10px (`s`) for menu items and store badges; 4px (`plate`) for the number plate. Buttons, nav links and the mobile menu toggle are full pills. Circles mark step numbers, onboarding counters, the call icon, the SMS avatar and the FAQ toggle.

The SMS bubble uses an asymmetric 16/16/16/4 corner so it reads as a received message. Tile screenshots bleed off the tile's right and bottom edges with only the top-left corner rounded (12px). Borders are 1px hairlines; interactive strokes (buttons, fields, step numbers) are 1.5px.

## Components

### Buttons
Confident pills that lift a pixel on hover.
- **Shape:** full pill (`pill`), 48px minimum height, 1.5px border, label in the body face at 650.
- **Primary:** CDS Red fill with white text; "Book a demo" in the header and every hero. Hover deepens to Pressed Red.
- **Ink (default):** Ink fill with white text, for neutral actions such as the form submit.
- **Ghost:** transparent with Line Strong stroke and Ink text; hover fills with Ink. Pairs with the primary ("Watch the 30-second demo", "Get a quote").
- **White / Outline light:** for red and ink grounds; white fill or a 55% white stroke, both turning over on hover.
- **Small:** 40px tall, 8px 16px padding; used in the header and the cookie notice.
- **Hover / Focus:** `translateY(-1px)` with a 0.2s ease-out colour change; focus is a 3px Logo Blue outline offset 3px. Disabled drops to 60% opacity.

### Text links
Arrow links in Ink at 650 with a 16px masked arrow that slides 3px right on hover while the text turns red. Running-text links are Link Blue with a thin underline offset 0.2em.

### Cards / Containers
- **Corner Style:** 24px.
- **Background:** Paper, Sky (with Sky Line border), Panel, or Ink (white text, `#d4d4d8` copy).
- **Shadow Strategy:** flat at rest; linked tiles lift with Lift and rise 3px on hover (see Elevation & Depth).
- **Border:** 1px Line, strengthening to Line Strong on hover.
- **Internal Padding:** `clamp(24px, 3vw, 32px)` for tiles; plans and app panels up to 48px.
- **Tile anatomy:** text block on top, then either a screenshot crop bleeding off the bottom-right edge, a product atom, or a list of 12px-radius rows with tabular prices on the right.

### Inputs / Fields
- **Style:** Paper fill, 1.5px Line Strong stroke, 12px radius, 48px minimum height; labels above at 600 with "(optional)" in Muted. Selects carry a drawn chevron.
- **Focus:** stroke turns Ink with a 4px Logo Blue glow at 25%; caret is red.
- **Error / Status:** invalid fields get a red stroke after interaction; the status line is a 12px-radius block in Green Tint or Red Tint.

### Navigation
A sticky white header (97% opaque), 72px tall, that gains a hairline and a soft shadow once scrolled. Logo and uppercase wordmark on the left; pill nav links (44px, Ink 2 at 550) with Panel hover and a Panel pill for the current page; a "Features" disclosure opening a two-column panel of name and one-line description; "Sign in" plus a small red "Book a demo" on the right. Below 960px it becomes a pill "Menu" toggle that opens a full-width ruled list with grouped headings and paired action buttons. The footer is an Ink band with a four-column link grid.

### Product frame
The signature container for every real screenshot: Paper, 24px radius, Line border, Lift shadow, and a 34px browser bar (three grey dots and the URL in mono). Feature pages use the flat variant (16px, Rest shadow).

### Product atoms
HTML, not images, drawn in the portal's component language and always captioned as sample data.
- **Incoming-call card:** 272px, 14px radius, green circular phone icon that rings four times (reduced motion: still), title and state, a tabular phone number, the returning-customer line and a small ink "Book a ride" button. After the call it greys out.
- **SMS card:** 264px, 22px radius, a red initials avatar with sender and time, a hairline, then a Panel bubble with the 4px tail corner; links inside are Link Blue.
- **Number plate:** inline yellow plate, 4px radius, display face 700 with 0.06em tracking.
- **Fare chip:** white 16px chip on the red band with route on the left and a display-face price on the right.

### Steps ("From call to cab")
Numbered circles (40px, 1.5px stroke, display numerals) that fill red when their step is active, beside a sticky framed stage that cross-fades between screenshots with a 1.015 scale settle. Every step is readable without JS, and below 960px each step carries its own screenshot.

### Ruled lists
Facts, related links, the UK band's terms and "Works with" use hairline rows and vertical dividers instead of boxes. Related links end in an arrow that slides on hover; the UK band uses translucent white rules on red.

### CTA band
A red 24px-radius block closing every feature page: headline and lede on the left, white and outline-light buttons on the right.

## Do's and Don'ts

### Do:
- **Do** show the real portal: put screenshots in the product frame and label sample data with a quiet caption ("Real screens, sample data.").
- **Do** build product atoms in HTML from the existing call card, SMS card, plate and fare chip styles rather than drawing new illustrations.
- **Do** use red as a full band (`section--red`, CTA band) or the primary button, and keep everything else ink, white, sky and panel.
- **Do** alternate section grounds (white, panel, sky, ink, red) so each section reads as its own block.
- **Do** keep buttons as 48px pills with a red primary beside a ghost secondary.
- **Do** set lists of facts, links and integrations as ruled grids with hairlines.
- **Do** keep motion small, once-only where possible, and fully off under `prefers-reduced-motion`.
- **Do** keep focus visible with the 3px Logo Blue outline on every interactive element.

### Don't:
- **Don't** open a page or section with a headline over a row of three icon cards, or use stock photography; the product's own screens carry the page.
- **Don't** use hard offset shadows or zero-blur outlines; depth is the soft, negative-spread lift.
- **Don't** add uppercase tracked labels (eyebrows or kickers) above headings.
- **Don't** set Link Blue or Logo Blue as a fill, or use green or plate yellow for anything but their single jobs.
- **Don't** put product screenshots in un-framed images or crop them without the frame or tile-bleed treatment.
- **Don't** use Barlow Semi Condensed for paragraphs, buttons or form labels.
