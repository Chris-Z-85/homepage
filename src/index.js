//Hamburger menu
const hamburger = document.querySelector(".navbar__hamburger");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
});

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("is-active");
});

//Header
const header = document.querySelector("header");
window.addEventListener("scroll", () =>
  header.classList.toggle("sticky", window.scrollY > 0)
);

//Scroll down
const arrow = document.querySelector(".scroll-down");

window.addEventListener("scroll", () =>
  arrow.classList.toggle("hidden", window.scrollY > 0)
);

//Scroll to top
const arrowUp = document.querySelector(".scroll-to-top");

window.addEventListener("scroll", () =>
  arrowUp.classList.toggle("visible", window.scrollY > 0)
);

arrowUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

//Intersection Observer Setup
window.addEventListener("DOMContentLoaded", setup);

function setup() {
  const options = {
    rootMargin: "0px 0px -150px 0px",
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      } else {
        return;
      }
    });
  }, options);

  const h1 = document.querySelectorAll("h1");
  h1.forEach((h1) => observer.observe(h1));

  const p = document.querySelectorAll("p");
  p.forEach((p) => observer.observe(p));
}
