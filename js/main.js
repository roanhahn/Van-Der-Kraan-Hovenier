(() => {
  "use strict";

  // Footer jaartal
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Header: transparant over de hero-foto, vaste ink-achtergrond zodra er gescrold is
  // (zodat de balk leesbaar blijft boven secties zonder achtergrondfoto).
  const header = document.getElementById("siteHeader");
  if (header) {
    const SCROLL_THRESHOLD = 40;
    const syncScrolledState = () => {
      header.classList.toggle("is-scrolled", window.scrollY > SCROLL_THRESHOLD);
    };
    syncScrolledState();
    window.addEventListener("scroll", syncScrolledState, { passive: true });
  }

  // Mobiel menu: dichtklappen én pas dán scrollen (met de juiste header-offset), zodat een
  // klik op een ankerlink tijdens een openstaand menu niet meer tegen een verkeerde/springende
  // positie aan scrollt.
  const navCollapseEl = document.getElementById("mainNav");
  const bsCollapse =
    navCollapseEl && window.bootstrap
      ? window.bootstrap.Collapse.getOrCreateInstance(navCollapseEl, { toggle: false })
      : null;

  if (navCollapseEl && header) {
    navCollapseEl.addEventListener("show.bs.collapse", () => header.classList.add("is-menu-open"));
    navCollapseEl.addEventListener("hidden.bs.collapse", () => header.classList.remove("is-menu-open"));
  }

  // Werkelijke hoogte van de (sticky) header meten en als CSS-variabele zetten, in plaats
  // van een vaste px-aanname per breakpoint — voorkomt witruimte/verkeerde scroll-offset
  // zodra het logo, lettertype of menu ooit van formaat verandert. ResizeObserver reageert
  // op elke daadwerkelijke hoogteverandering (webfont-swap, logo-svg die laadt, viewport-resize)
  // i.p.v. te gokken op welk los event er als laatste vuurt.
  if (header) {
    const syncHeaderHeight = () => {
      // Terwijl het mobiele menu open- of dichtklapt is de header zelf tijdelijk hoger (de
      // uitklappende lijst telt mee in zijn hoogte); daar --header-h aan ophangen zou de hero
      // er middenin de klap-animatie ook nog eens laten meebewegen, wat juist de jank veroorzaakt
      // die soepel moet worden. Alleen bijwerken als het menu dicht is (of er geen is, desktop).
      if (
        navCollapseEl &&
        (navCollapseEl.classList.contains("show") || navCollapseEl.classList.contains("collapsing"))
      ) {
        return;
      }
      // offsetHeight rondt af naar het dichtstbijzijnde hele pixel en kan zo net iets te
      // laag uitkomen (bv. 83.6 -> 84 is prima, maar 83.4 -> 83 laat een haarlijntje
      // gebroken wit zien boven de hero). Naar boven afronden met de exacte, niet-afgeronde
      // hoogte voorkomt dat 1px randje altijd, ook op schermen met een hoge pixeldichtheid.
      const exactHeight = header.getBoundingClientRect().height;
      document.documentElement.style.setProperty("--header-h", `${Math.ceil(exactHeight)}px`);
    };
    syncHeaderHeight();
    if (window.ResizeObserver) {
      new ResizeObserver(syncHeaderHeight).observe(header);
    } else {
      window.addEventListener("resize", syncHeaderHeight);
      window.addEventListener("orientationchange", syncHeaderHeight);
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(syncHeaderHeight);
      window.addEventListener("load", syncHeaderHeight);
    }
  }

  const EXTRA_SCROLL_GAP = 0; // geen extra lucht: sectie sluit direct aan op de sticky header

  const scrollToHash = (hash) => {
    const target = document.querySelector(hash);
    if (!target) return;
    const headerH = header ? header.getBoundingClientRect().height : 0;
    const top = target.getBoundingClientRect().top + window.scrollY - headerH - EXTRA_SCROLL_GAP;
    window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
  };

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    const hash = link.getAttribute("href");
    if (!hash || hash.length < 2) return; // negeer kale "#"

    link.addEventListener("click", (event) => {
      if (!document.querySelector(hash)) return; // laat de browser zijn eigen ding doen

      event.preventDefault();

      const menuIsOpen = navCollapseEl && navCollapseEl.classList.contains("show");
      if (menuIsOpen && bsCollapse) {
        // Eerst het menu laten dichtklappen; twee rAF's wachten tot de browser de kortere
        // header ook echt heeft doorgerekend (het "hidden"-event zelf vuurt soms net iets
        // voor die reflow klaar is), pas dan de offset berekenen.
        navCollapseEl.addEventListener(
          "hidden.bs.collapse",
          () => requestAnimationFrame(() => requestAnimationFrame(() => scrollToHash(hash))),
          { once: true }
        );
        bsCollapse.hide();
      } else {
        scrollToHash(hash);
      }

      history.pushState(null, "", hash);
    });
  });

  // Contactformulier: front-end validatie + Formspree-verzending (AJAX, geen page reload)
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      event.stopPropagation();

      if (!form.checkValidity()) {
        form.classList.add("was-validated");
        const firstInvalid = form.querySelector(":invalid");
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      form.classList.add("was-validated");
      const submitBtn = form.querySelector("button[type='submit']");
      const originalLabel = submitBtn ? submitBtn.textContent : "";
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Bezig met versturen…";
      }
      if (status) {
        status.textContent = "";
        status.className = "contact-form__status";
      }

      const actionUrl = form.getAttribute("action") || "";
      const isConfigured = actionUrl.includes("formspree.io") && !actionUrl.includes("VUL_HIER_UW_FORMSPREE_ID_IN");

      if (!isConfigured) {
        // Formspree-ID nog niet ingesteld: gebruik mailto-fallback zodat het formulier altijd werkt.
        const data = new FormData(form);
        const lines = [
          `Naam: ${data.get("naam") || ""}`,
          `E-mail: ${data.get("email") || ""}`,
          `Telefoon: ${data.get("telefoon") || ""}`,
          `Gewenste dienst: ${data.get("dienst") || ""}`,
          "",
          `${data.get("bericht") || ""}`,
        ].join("\n");
        const mailto = `mailto:info@vdkraanhoveniers.nl?subject=${encodeURIComponent(
          "Aanvraag via website: " + (data.get("dienst") || "offerte")
        )}&body=${encodeURIComponent(lines)}`;
        window.location.href = mailto;
        if (status) {
          status.textContent = "Uw e-mailprogramma wordt geopend om de aanvraag te versturen.";
          status.classList.add("is-success");
        }
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = originalLabel;
        }
        return;
      }

      try {
        const response = await fetch(actionUrl, {
          method: "POST",
          body: new FormData(form),
          headers: { Accept: "application/json" },
        });

        if (response.ok) {
          form.reset();
          form.classList.remove("was-validated");
          if (status) {
            status.textContent = "Bedankt! Uw aanvraag is verstuurd — we nemen zo snel mogelijk contact op.";
            status.classList.add("is-success");
          }
        } else {
          throw new Error("Formspree gaf een foutstatus terug.");
        }
      } catch (err) {
        if (status) {
          status.textContent =
            "Verzenden is niet gelukt. Bel ons gerust direct op 06 85103892 of mail naar info@vdkraanhoveniers.nl.";
          status.classList.add("is-error");
        }
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = originalLabel;
        }
      }
    });
  }
})();
