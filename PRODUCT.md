# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML/CSS with a little vanilla JS, no build step, served by GitHub Pages from this repo (`.github/workflows/static.yml` deploys every push to `main`). Shared header and footer are copied into each page by hand.

## Users

- Owners and managers of small to mid-sized UK minicab and private-hire offices (many TfL-licensed in London), weighing up a booking and dispatch system.
- Existing customers of the legacy product, CDS Desktop, who are moving to the cloud system or still need the CDS Driver app and SMS app downloads.

Both audiences matter equally.

## Product Purpose

This site sells CDS, the cloud booking and dispatch system at app.cabdispatchsystem.com. A visitor should come away understanding what a CDS office does every day and then ask for a demo or a quote. It also serves as the download point for the legacy CDS Desktop apps.

## Positioning

- CDS is one browser portal for the whole office: phone bookings priced by fixed fares or mileage, a live dispatch board, texts sent in the office's own words, an online booking page, caller ID, account invoicing, driver pay and TfL PCO returns.
- There is no hardware to buy. Offices use their own SMS provider, including a free Android phone app, and their own email.
- It is built for UK offices: postcode fixed fares, airports, stations and London Underground and DLR places, and TfL weekly returns.

## Operating Context

- Offices are onboarded by hand. There is no self sign-up and no free trial.
- Setup includes a 30-minute screen-share to connect SMS and email.
- Each office's subscription is sized by its number of drivers. No prices are published.
- Contact goes through the Formspree form, email at cds@deltatechglobal.co.uk, or WhatsApp on +44 7778 675286.

## Capabilities and Constraints

**Confirmed capabilities (cloud 1.6.0):**
- Dispatch board with a driver queue and late-job alerts
- Book a ride with a Google Maps route, alternative routes, luggage and child seats
- Mileage rates and postcode fixed fares, including a fare grid
- A places catalogue of airports, rail stations, and LU and DLR stations
- Airport drop-off charges and parking
- Online booking at book.cabdispatchsystem.com, as a hosted page or a widget
- SIP caller ID pop-up, up to 6 lines
- SMS templates, an inbox, opt-outs and customer campaigns
- A driver link page with the driver's and vehicle's photos
- HTML trip emails
- Account customers and invoices with VAT
- Driver pay statements
- Driver document compliance and reminders
- PCO weekly returns as CSV files
- Analytics
- Up to 5 business names per office

**The site must not claim:**
- A cloud driver app (not live yet; drivers get jobs by text)
- Online card payment (Card means paid in the car)
- Live GPS (map positions are estimated)
- Automatic upload to TfL (the office uploads the files)
- A free trial or self sign-up
- Sending from Outlook.com or Hotmail
- Microsoft Teams Phone caller ID
- WhatsApp messaging

## Brand Commitments

- **Name:** "CDS · Cab Dispatch System". The legacy product is called "CDS Desktop".
- **Logo:** red "CDS" letters #E81A22 with a blue dot and wordmark #00A9EC. Vector at `img/cds-logo.svg`, sourced from `cds-youtube-channel/src/cds-logo.svg`.
- **Tagline:** "Book. Dispatch. Notify."
- **Voice:** plain, practical UK English written for office owners. It uses the portal's own names (Book a ride, Dispatch, Driver pay, PCO returns).

## Evidence on Hand

- In business since 2010.
- The 30-second product demo: `video/cds-demo.mp4`, poster `img/cds-demo-poster.jpg`, OG image `img/cds-demo-og.jpg`.
- 33 how-to videos on YouTube (@CabDispatchSystem) in three playlists.
- Real portal screenshots, which can be captured from the local stack with the demo office.
- There are no customer names, testimonials, counts or benchmarks. Do not invent any.

## Product Principles

- Show the real product. Screenshots and the demo do the convincing, not adjectives.
- Every claim must be true of the live cloud system today.
- Speak to the office's day: the phone call, the board and the Monday paperwork.
- Make the next step obvious: book a demo or get a quote.

## Accessibility & Inclusion

Aim for WCAG 2.2 AA. Pages must work at 360 px wide with no sideways scrolling, and must respect reduced-motion settings.
