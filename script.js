const heading = document.querySelector(".header");
const press = document.querySelector(".nav-btn");
const abc = function () {
  heading.classList.toggle("active");
}
press.addEventListener("click", abc);
