const hamburger = document.querySelector(".navbar__hamburger");
const navbar = document.querySelector(".navbar");
const header = document.querySelector("header");
const arrow = document.querySelector(".hero__scroll-down");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
});

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("is-active");
});

window.addEventListener("scroll", () =>
  header.classList.toggle("sticky", window.scrollY > 0)
);

window.addEventListener("scroll", () =>
  arrow.classList.toggle("hidden", window.scrollY > 0)
);

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
