// function start() {
//   millisecond++;

//   if (millisecond < 9) {
//     millisecondEl.innerText = '0' + millisecond;
//   }
//   if (millisecond > 9) {
//     millisecondEl.innerText = millisecond;
//   }
//   if (millisecond > 99) {
//     second++
//     secondEl.innerText = '0' + second;
//     millisecond = 0;
//     millisecondEl.innerText = '0' + millisecond;
//   }
// }
let millisecondEl = document.querySelector('.millisecond');
let secondEl = document.querySelector('.second');
let minEl = document.querySelector('.min');
let hourEl = document.querySelector('.hour');


let startBtn = document.querySelector('.start');
let stopBtn = document.querySelector('.stop');
let restartBtn = document.querySelector('.restart')

let millisecond = 0;
let second = 0;
let min = 0;
let hour = 0;
let interval
function start() {
  millisecond++;

  if (millisecond < 9) {
    millisecondEl.innerText = '0' + millisecond;
  }
  if (millisecond > 9) {
    millisecondEl.innerText = millisecond;
  }
  if (millisecond > 99) {
    second++
    secondEl.innerText = '0' + second;
    millisecond = 0;
    millisecondEl.innerText = '0' + millisecond;
  }
  if (second > 9) {
    secondEl.innerText = second;
  }
  if (second > 59) {
    min++;
    minEl.innerText = '0' + min;
    second = 0;
    secondEl.innerText = '0' + second;
  }
  if (min > 59) {
    hour++
    hourEl.innerText = '0' + hour;
    min = 0;
    minEl.innerText = '0' + min;
  }
}
restartBtn.onclick = function () {
  minEl.innerText = "00"; secondEl.innerText = "00"; millisecondEl.innerText = "00"; hourEl.innerText = "00";
  min = 0; second = 0; millisecond = 0; hour = 0;
  clearInterval(interval);
}
stopBtn.addEventListener('click', function stop() {
  clearInterval(interval);
});
startBtn.addEventListener('click', function () {
  interval = setInterval(start, 10)
});