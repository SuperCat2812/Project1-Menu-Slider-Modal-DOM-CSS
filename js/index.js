let toggle = document.querySelector("#toggle");
let nav = document.querySelector(".nav");
let header = document.querySelector(".header");
let movei;
let y = "absolute";
function Move() {
  y = "sticky";
  movei = setInterval(() => {
    mover();
  }, 100);
  console.log(11);
}
function Remove() {
  y = "absolute";
  movei = setInterval(() => {
    movel();
  }, 100);
  console.log(22);
}
function mover() {
  let leftn = window.getComputedStyle(nav).getPropertyValue("left");
  let lefth = window.getComputedStyle(header).getPropertyValue("left");
  console.log(668);

  leftn = parseInt(leftn);
  lefth = parseInt(lefth);
  console.log(leftn);
  console.log(lefth);
  if (leftn == 0 || lefth == 150) {
    clearInterval(movei);
    console.log(99);
  } else {
    leftn += 15;
    lefth += 15;
    header.style.left = lefth + "px";
    nav.style.left = leftn + "px";
    console.log(88);
  }
}
function movel() {
  let leftn = window.getComputedStyle(nav).getPropertyValue("left");
  let lefth = window.getComputedStyle(header).getPropertyValue("left");
  console.log(6689);

  leftn = parseInt(leftn);
  lefth = parseInt(lefth);
  console.log(leftn);
  console.log(lefth);
  if (leftn == -150 || lefth == 0) {
    clearInterval(movei);
    console.log(997);
  } else {
    leftn -= 15;
    lefth -= 15;
    header.style.left = lefth + "px";
    nav.style.left = leftn + "px";
    console.log(882);
  }
}

toggle.addEventListener("click", v);
function v() {
  if (y == "absolute") {
    Move();
  } else if (y == "sticky") {
    Remove();
  }
}
