(() => {
  "use strict";

  // Footer jaartal
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobiel menu sluiten na klik op ankerlink
  const navCollapseEl = document.getElementById("mainNav");
  if (navCollapseEl && window.bootstrap) {
    const bsCollapse = window.bootstrap.Collapse.getOrCreateInstance(navCollapseEl, { toggle: false });
    navCollapseEl.querySelectorAll("a.nav-link, a.btn-call").forEach((link) => {
      link.addEventListener("click", () => {
        if (navCollapseEl.classList.contains("show")) bsCollapse.hide();
      });
    });
  }

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
