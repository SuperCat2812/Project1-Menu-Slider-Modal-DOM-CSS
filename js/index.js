let toggle = document.querySelector("#toggle");
let nav = document.querySelector(".nav");
let header = document.querySelector(".header");
let container = document.querySelector(".container");
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
let leftc=window.getComputedStyle(container).getPropertyValue("left");
  console.log(668);
leftc=parseInt(leftc);
  leftn = parseInt(leftn);
  lefth = parseInt(lefth);
  console.log(leftn);
  console.log(lefth);
  if (leftn == 0 || lefth == 150||leftc==150) {
    clearInterval(movei);
    console.log(99);
  } else {
    leftn += 15;
    lefth += 15;
    leftc+= 15;
    header.style.left = lefth + "px";
    nav.style.left = leftn + "px";
    container.style.left=leftc+"px";
    console.log(88);
  }
}
function movel() {
  let leftn = window.getComputedStyle(nav).getPropertyValue("left");
  let lefth = window.getComputedStyle(header).getPropertyValue("left");
  let leftc=window.getComputedStyle(container).getPropertyValue("left");
  console.log(6689);
leftc=parseInt(leftc);
  leftn = parseInt(leftn);
  lefth = parseInt(lefth);
  console.log(leftn);
  console.log(lefth);
  if (leftn == -150 || lefth == 0||leftc==0) {
    clearInterval(movei);
    console.log(997);
  } else {
    leftn -= 15;
    lefth -= 15;
    leftc -= 15;
    header.style.left = lefth + "px";
    nav.style.left = leftn + "px";
    container.style.left=leftc+"px";
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
const close = document.getElementById("close");
const open = document.getElementById("open");
const modal = document.getElementById("modal");
open.addEventListener("click", showModal);
function showModal() {
  modal.classList.add("show-modal");
}

// Hide modal
close.addEventListener("click", hideModal);
function hideModal() {
  modal.classList.remove("show-modal");
}