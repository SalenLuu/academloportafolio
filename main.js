const ham = document.querySelector(".ham");
const enlaces = document.querySelector(".menu");
const bars = document.querySelectorAll(".ham span");

ham.addEventListener("click", () => {
  enlaces.classList.toggle("activado");
  bars.forEach((child) => {
    child.classList.toggle("animado");
  });
});
