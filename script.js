const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navAnchors = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("main section[id]");
const feedbackForm = document.querySelector("#feedbackForm");
const reviews = document.querySelector("#reviews");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navAnchors.forEach((anchor) => {
  anchor.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      navAnchors.forEach((anchor) => {
        anchor.classList.toggle("active", anchor.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: "-45% 0px -45% 0px" }
);

sections.forEach((section) => observer.observe(section));

feedbackForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(feedbackForm);
  const name = String(formData.get("name")).trim();
  const message = String(formData.get("message")).trim();
  const rating = Number(formData.get("rating"));

  if (!name || !message) return;

  const review = document.createElement("article");
  review.className = "review-card";
  review.innerHTML = `
    <strong>${escapeHtml(name)}</strong>
    <span>${"★".repeat(rating)}${"☆".repeat(5 - rating)}</span>
    <p>${escapeHtml(message)}</p>
  `;

  reviews.prepend(review);
  feedbackForm.reset();
});

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "\"": "&quot;",
      "'": "&#039;"
    };

    return entities[char];
  });
}
