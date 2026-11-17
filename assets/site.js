// CDS marketing site: header, menus, the call-to-cab steps, the video player, the contact form and analytics consent.
// No dependencies. Every page works without it; it only adds behaviour.
(function () {
  "use strict";

  // GA4 measurement ID. While it is the placeholder, nothing is loaded and no banner shows.
  var GA_ID = "G-FD7YFQ0GYM";
  var CONSENT_KEY = "cds-analytics-consent";

  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () { header.classList.toggle("is-scrolled", window.scrollY > 8); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // <details> menus: close on outside click, Escape, or following a link inside.
  var menus = document.querySelectorAll("details.nav-menu, details.menu-toggle");
  menus.forEach(function (menu) {
    menu.addEventListener("click", function (event) {
      if (event.target.closest("a")) menu.removeAttribute("open");
    });
  });
  document.addEventListener("click", function (event) {
    menus.forEach(function (menu) {
      if (menu.open && !menu.contains(event.target)) menu.removeAttribute("open");
    });
  });
  document.addEventListener("keydown", function (event) {
    if (event.key !== "Escape") return;
    menus.forEach(function (menu) {
      if (!menu.open) return;
      menu.removeAttribute("open");
      var summary = menu.querySelector("summary");
      if (summary) summary.focus();
    });
  });

  // From call to cab: the step in the middle of the screen picks the screenshot on the sticky stage.
  var steps = document.querySelectorAll("[data-step]");
  var stage = document.querySelector("[data-stage]");
  if (steps.length && stage && "IntersectionObserver" in window) {
    var shots = stage.querySelectorAll("[data-shot]");
    var label = document.querySelector("[data-stage-label]");
    var show = function (step) {
      var key = step.getAttribute("data-step");
      steps.forEach(function (s) { s.classList.toggle("is-active", s === step); });
      shots.forEach(function (img) { img.classList.toggle("is-active", img.getAttribute("data-shot") === key); });
      if (label) label.textContent = step.getAttribute("data-label") || "";
    };
    show(steps[0]);
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) { if (entry.isIntersecting) show(entry.target); });
    }, { rootMargin: "-45% 0px -45% 0px" });
    steps.forEach(function (step) { observer.observe(step); });
  }

  // Analytics: gtag.js is only loaded after the visitor accepts.
  var readConsent = function () {
    try { return localStorage.getItem(CONSENT_KEY); } catch (e) { return null; }
  };
  var saveConsent = function (value) {
    try { localStorage.setItem(CONSENT_KEY, value); } catch (e) { /* private mode: ask again next visit */ }
  };
  var analyticsOn = false;
  var startAnalytics = function () {
    if (analyticsOn) return;
    analyticsOn = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", GA_ID, { anonymize_ip: true });
    var script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(GA_ID);
    document.head.appendChild(script);
  };
  var track = function (name, params) {
    if (analyticsOn && window.gtag) window.gtag("event", name, params || {});
  };

  var analyticsConfigured = /^G-[A-Z0-9]+$/.test(GA_ID) && GA_ID !== "G-XXXXXXXXXX";
  var banner = document.querySelector("[data-consent]");
  var settingsButtons = document.querySelectorAll("[data-consent-settings]");
  if (!analyticsConfigured) {
    settingsButtons.forEach(function (button) { button.hidden = true; });
  } else {
    var choice = readConsent();
    if (choice === "granted") startAnalytics();
    var openBanner = function () { if (banner) banner.hidden = false; };
    if (!choice) openBanner();
    if (banner) {
      banner.addEventListener("click", function (event) {
        var button = event.target.closest("[data-consent-choice]");
        if (!button) return;
        var value = button.getAttribute("data-consent-choice");
        saveConsent(value);
        banner.hidden = true;
        if (value === "granted") {
          startAnalytics();
        } else if (analyticsOn) {
          // Already loaded this visit: reload so the tag goes away.
          window.location.reload();
        }
      });
    }
    settingsButtons.forEach(function (button) { button.addEventListener("click", openBanner); });
  }

  // Video player: links marked data-player play their YouTube video in an overlay on this page.
  // The player is YouTube's own (privacy-enhanced embed), so plays count as views on the channel.
  // Nothing from YouTube loads until a visitor opens a video. Without JS, or with a
  // modifier key or middle click, the link still opens the video on YouTube.
  var playerLinks = document.querySelectorAll("a[data-player]");
  if (playerLinks.length && typeof HTMLDialogElement === "function") {
    var player = document.createElement("dialog");
    player.className = "player";
    player.setAttribute("aria-labelledby", "player-title");
    player.innerHTML =
      '<div class="player-box">' +
        '<div class="player-bar">' +
          '<h2 class="player-title" id="player-title"></h2>' +
          '<button type="button" class="player-close" aria-label="Close video">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true" focusable="false"><path d="M6 6l12 12M18 6L6 18"/></svg>' +
          "</button>" +
        "</div>" +
        '<div class="player-frame"></div>' +
        '<a class="player-yt" href="" target="_blank" rel="noopener">Watch on YouTube</a>' +
      "</div>";
    document.body.appendChild(player);
    var playerTitle = player.querySelector(".player-title");
    var playerFrame = player.querySelector(".player-frame");
    var playerYt = player.querySelector(".player-yt");
    var lastTrigger = null;

    var openPlayer = function (link) {
      var url;
      try { url = new URL(link.href); } catch (e) { return false; }
      var id = url.searchParams.get("v");
      if (!id || !/^[\w-]{11}$/.test(id)) return false;
      var list = url.searchParams.get("list");
      var src = "https://www.youtube-nocookie.com/embed/" + id +
        "?autoplay=1&rel=0&playsinline=1" + (list && /^[\w-]+$/.test(list) ? "&list=" + list : "");
      var title = link.getAttribute("data-player") || "CDS video";
      var frame = document.createElement("iframe");
      frame.src = src;
      frame.title = title;
      frame.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
      frame.allowFullscreen = true;
      frame.referrerPolicy = "strict-origin-when-cross-origin";
      playerFrame.replaceChildren(frame);
      playerTitle.textContent = title;
      playerYt.href = link.href;
      lastTrigger = link;
      player.showModal();
      track("video_open", { video_id: id, video_title: title });
      return true;
    };

    playerLinks.forEach(function (link) {
      link.addEventListener("click", function (event) {
        if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        if (openPlayer(link)) event.preventDefault();
      });
    });
    player.querySelector(".player-close").addEventListener("click", function () { player.close(); });
    // A click on the dimmed area around the box closes it.
    player.addEventListener("click", function (event) { if (event.target === player) player.close(); });
    player.addEventListener("close", function () {
      playerFrame.replaceChildren(); // stops playback
      if (lastTrigger) lastTrigger.focus();
    });
  }

  // Contact form: sent to Formspree in the background, with a plain POST as the no-JS fallback.
  var form = document.getElementById("contact-form");
  if (form && window.fetch) {
    var status = form.querySelector("[data-form-status]");
    var submit = form.querySelector("button[type=submit]");
    var setStatus = function (state, html) {
      status.setAttribute("data-state", state);
      status.innerHTML = html;
    };
    var fallback = ' Please email <a href="mailto:cds@deltatechglobal.co.uk">cds@deltatechglobal.co.uk</a> or message us on <a href="https://wa.me/447778675286">WhatsApp</a>.';
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!form.reportValidity()) return;
      submit.disabled = true;
      var label = submit.textContent;
      submit.textContent = "Sending…";
      setStatus("", "");
      fetch(form.action, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } })
        .then(function (response) {
          if (response.ok) {
            form.reset();
            setStatus("ok", "Thanks, we’ve got your message. We’ll be in touch soon.");
            track("generate_lead", { form: "contact" });
            return;
          }
          return response.json().then(function (data) {
            var message = data && data.errors ? data.errors.map(function (e) { return e.message; }).join(", ") + "." : "We couldn’t send your message.";
            setStatus("error", message + fallback);
          });
        })
        .catch(function () { setStatus("error", "We couldn’t send your message." + fallback); })
        .finally(function () { submit.disabled = false; submit.textContent = label; });
    });
  }
})();
