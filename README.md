# cabdispatchsystem

The public website for CDS (Cab Dispatch System), served at https://www.cabdispatchsystem.com by GitHub Pages.

Every push to `main` deploys the site straight away (`.github/workflows/static.yml`), so make changes on a branch and merge when they are ready to go live.

## What's here

- Plain static HTML, CSS and a little JavaScript. There is no build step.
- `index.html` is the homepage. Each feature page is a folder with an `index.html` inside, so its address ends in a slash, for example `/taxi-dispatch-software/`.
- `faq/`, `privacy/`, `404.html` and `sms-gateway.html` are the other pages. Keep `sms-gateway.html` at that address, because existing links point to it.
- `assets/site.css` holds the styles, `assets/site.js` the script, `assets/img/` the screenshots and `assets/fonts/` the self-hosted Barlow Semi Condensed font.
- `apps/`, `video/`, `img/` and `favicon/` hold downloads and older assets. The app privacy policies in `apps/` are linked from the Play Store and App Store listings, so don't move them.
- `robots.txt` and `sitemap.xml` are for search engines. When you add a page, add it to `sitemap.xml`.
- `PRODUCT.md` and `.impeccable/` are design notes. The deploy workflow leaves them out of the site, along with this README.

## Preview locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000. Pages use root-relative links like `/assets/site.css`, so opening the files directly from disk won't work.

## Shared header and footer

Every page carries its own copy of the header and footer, between the `<!-- shared: header -->` and `<!-- shared: footer -->` comments. When you change one, make the same change in every page.

The current page's link is marked with `aria-current="page"`.

## Google Analytics

GA4 loads only after a visitor accepts analytics cookies. The measurement ID is `GA_ID` at the top of `assets/site.js`. While it is the placeholder `G-XXXXXXXXXX`, nothing is loaded and no cookie banner is shown.

## Contact form

The form posts to Formspree (`https://formspree.io/f/xbljjnde`), which emails each message on.
