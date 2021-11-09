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
