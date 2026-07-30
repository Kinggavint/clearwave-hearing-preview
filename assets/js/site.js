/* Clearwave Hearing and Audiology: small progressive enhancements.
   No dependencies. Everything works without JS. */
(function () {
  "use strict";

  /* Mobile navigation toggle */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.querySelector(".nav-toggle-label").textContent = open ? "Close" : "Menu";
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.querySelector(".nav-toggle-label").textContent = "Menu";
        toggle.focus();
      }
    });
  }

  /* Current year in the footer */
  var years = document.querySelectorAll("[data-year]");
  var now = String(new Date().getFullYear());
  for (var i = 0; i < years.length; i += 1) {
    years[i].textContent = now;
  }

  /* Form handling placeholder.
     No backend is connected on this proof build, so submissions are
     intercepted and a confirmation message is shown instead.
     Replace with the live form endpoint before launch. */
  var forms = document.querySelectorAll("form[data-proof-form]");
  for (var f = 0; f < forms.length; f += 1) {
    forms[f].addEventListener("submit", function (event) {
      event.preventDefault();
      var status = this.querySelector(".form-status");
      if (status) {
        status.hidden = false;
        status.setAttribute("role", "status");
        status.textContent =
          "Thank you. This proof build is not connected to a live form endpoint yet, " +
          "so nothing was sent. Please call (910) 555-0100 to reach the office.";
        status.scrollIntoView({ block: "center" });
      }
    });
  }
})();
