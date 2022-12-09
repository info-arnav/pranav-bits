let navLarge = document.querySelector(".nav-full");
let navShort = document.querySelector(".nav-short");
let columns = document.querySelectorAll(".columns-copy");
let column = document.querySelectorAll(".column-copy");
window.onscroll = () => {
  if (window.scrollY < 50) {
    navLarge.classList.remove("nav-bar-after-scroll");
  } else {
    navLarge.classList.add("nav-bar-after-scroll");
  }
};

window.addEventListener("resize", () => {
  if (window.screen.width <= 1160) {
    navLarge.classList.add("none");
    navShort.classList.remove("none");
  } else {
    navLarge.classList.remove("none");
    navShort.classList.add("none");
  }
  if (window.screen.width <= 950) {
    columns.forEach((e) => e.classList.remove("columns"));
    column.forEach((e) => e.classList.remove("column"));
  } else {
    columns.forEach((e) => e.classList.add("columns"));
    column.forEach((e) => e.classList.add("column"));
  }
});

window.addEventListener("load", () => {
  if (window.screen.width <= 1160) {
    navLarge.classList.add("none");
    navShort.classList.remove("none");
  } else {
    navShort.classList.add("none");
    navLarge.classList.remove("none");
  }
  if (window.scrollY < 50) {
    navLarge.classList.remove("nav-bar-after-scroll");
  } else {
    navLarge.classList.add("nav-bar-after-scroll");
  }
  if (window.screen.width <= 950) {
    columns.forEach((e) => e.classList.remove("columns"));
    column.forEach((e) => e.classList.remove("column"));
  } else {
    columns.forEach((e) => e.classList.add("columns"));
    column.forEach((e) => e.classList.add("column"));
  }
});
//950px
