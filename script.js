const hamburgerMenu = document.querySelector(".hamburger-menu");
const mobileMenu = document.querySelector(".mobile");

hamburgerMenu.addEventListener("click", function () {
  mobileMenu.classList.toggle("active");
});
