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

  /* Patient Portal Mock Logic */
  var loginForm = document.getElementById("login-form");
  var portalLogin = document.getElementById("portal-login");
  var portalContent = document.getElementById("portal-content");
  var logoutBtn = document.getElementById("logout-btn");
  var loginError = document.getElementById("login-error");

  if (loginForm && portalLogin && portalContent) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var email = document.getElementById("email").value;
      var pass = document.getElementById("password").value;

      // Mock authentication for proof-of-concept
      if (email.length > 3 && pass === "password") {
        portalLogin.hidden = true;
        portalContent.hidden = false;
        loginError.hidden = true;
      } else {
        loginError.hidden = false;
      }
    });

    if (logoutBtn) {
      logoutBtn.addEventListener("click", function () {
        portalLogin.hidden = false;
        portalContent.hidden = true;
        loginForm.reset();
      });
    }
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
          "so nothing was sent. Please call (910) 262-4478 to reach the office.";
        status.scrollIntoView({ block: "center" });
      }
    });
  }
})();