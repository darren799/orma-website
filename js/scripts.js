// ===============================
// ORMA Global Scripts
// ===============================

// Mobile Navigation Toggle
document.addEventListener("DOMContentLoaded", function () {

  const btn = document.querySelector('.hamburger');
  const nav = document.getElementById('navLinks');

  if (btn && nav) {
    btn.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }

  // Countdown (only runs if #countdown exists)
  const countdownEl = document.getElementById("countdown");

  if (countdownEl) {
    const eventDate = new Date("May 16, 2026 09:00:00").getTime();

    setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      countdownEl.innerText =
        distance > 0
          ? `⏳ ${Math.floor(distance / 86400000)} days until the Blessing of the Fleet`
          : "🚤 The Blessing of the Fleet is happening today!";
    }, 1000);
  }

  // Sponsor Form Submission (only runs if form exists)
  const sponsorForm = document.getElementById("sponsorForm");

  if (sponsorForm) {
    sponsorForm.addEventListener("submit", async e => {
      e.preventDefault();

      const status = document.getElementById("status");
      if (status) status.textContent = "Submitting…";

      const data = Object.fromEntries(new FormData(e.target).entries());

      try {
        const res = await fetch(
          "https://script.google.com/macros/s/AKfycbxJcEphVfTiRv_tWIV-7t5Qk24Z7LsL-LgQBP4chiBkyVCz4qkBWGnAUeyJrYxw_nHOhw/exec",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
          }
        );

        if (status) {
          status.textContent = res.ok
            ? "Thank you — ORMA will follow up."
            : "Submission error. Please try again.";
        }
      } catch (error) {
        if (status) status.textContent = "Submission error. Please try again.";
      }
    });
  }

});
