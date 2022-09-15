const navToggle = document.querySelector(".navbar-toggler");
const navMenu = document.querySelector(".navbar-collapse");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("navbar-collapse-active");
});
