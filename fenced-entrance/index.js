const entrance = document.querySelector(".entrance");
const fenceCon = document.querySelector(".fence-con");
const content = document.querySelectorAll(".content");
const loading = document.querySelectorAll(".loading");
const modal = document.querySelector(".loading-modal");

entrance.addEventListener("mouseover", () => {
  fenceCon.style.animation =
    "fence-con-over 0.5s ease-in-out 0s 1 normal forwards";
});

entrance.addEventListener("mouseout", () => {
  fenceCon.style.animation =
    "fence-con-out 0.7s cubic-bezier(0,-0.1, 1,-1) 0s 1 normal forwards";
});

entrance.addEventListener("click", () => {
  modal.style.animation =
    "loading-modal-hidden 0.7s linear 0s 1 normal forwards";
});

setTimeout(() => {
  loading.forEach((line) => {
    line.style.backgroundColor = "rgba(255,255,255,0.3)";
  });
  content[0].style.color = "transparent";
  content[1].style.color = "white";
}, 3000);
