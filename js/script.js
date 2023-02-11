const toggle = document.querySelector(".header-toggle");
const menu = document.querySelector(".menu");

const header =document.querySelector(".header")


toggle.addEventListener("click", function () {
  menu.classList.add("active");
});

document.addEventListener("click", function (e) {
  console.log(e.target);
  if (!menu.contains(e.target) && !e.target.matches(".header-toggle")) {
    menu.classList.remove("active");
  }
});
