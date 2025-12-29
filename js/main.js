/* =========================================
   NutriShe - Main JavaScript File
   Frontend-only interactions
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {
  highlightActiveNav();
  smoothScroll();
  contactFormHandler();
});

/* =========================================
   Highlight Active Navigation Link
   ========================================= */
function highlightActiveNav() {
  const navLinks = document.querySelectorAll(".nav-links a");
  const currentPage = window.location.pathname.split("/").pop();

  navLinks.forEach(link => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage || (currentPage === "" && linkPage === "index.html")) {
      link.classList.add("active");
    }
  });
}

/* =========================================
   Smooth Scroll for Anchor Links (Future-ready)
   ========================================= */
function smoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);

      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

/* =========================================
   Contact Form Handler (Frontend only)
   ========================================= */
function contactFormHandler() {
  const form = document.querySelector(".contact-form");

  if (!form) return; // Only runs on contact page

  form.addEventListener("submit", e => {
    e.preventDefault();

    const name = form.querySelector("#name").value.trim();
    const email = form.querySelector("#email").value.trim();
    const message = form.querySelector("#message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    // Frontend-only feedback
    alert("Thank you for your message! We will get back to you soon.");

    form.reset();
  });
}
