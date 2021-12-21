let firstValue = document.getElementById("screen").textContent;
let znak;
document.getElementById("figures").addEventListener("click",
  function screenWrite1() {
    if (event.srcElement.id == "reset") {
      document.getElementById("screen").textContent = "";
    } else if (event.srcElement.id == "back") {
      let screen = document.getElementById("screen").textContent;
      document.getElementById("screen").textContent = document.getElementById("screen").textContent.slice(
        0, -1);
    } else {
      document.getElementById("screen").textContent += event.srcElement.id;
    }
  });
document.getElementById("plus").addEventListener("click", sign1);
document.getElementById("minus").addEventListener("click", sign2);
document.getElementById("times").addEventListener("click", sign3);
document.getElementById("divide").addEventListener("click", sign4);
document.getElementById("dot").addEventListener("click", sing5)

document.getElementById("equals").addEventListener("click",
  function screenWrite3() {
    let a;
    if (znak == 1) {
      a = parseFloat(document.getElementById("screen")
        .textContent) + parseFloat(firstValue);
    }
    else if (znak == 2) {
      a =  parseFloat(firstValue)- parseFloat(document.getElementById("screen")
        .textContent);
    }
    else if (znak == 3) {
      a = parseFloat(document.getElementById("screen")
        .textContent) * parseFloat(firstValue);
    }
    else if (znak == 4) {
      a = parseFloat(firstValue)/ parseFloat(document.getElementById("screen")
        .textContent) ;
    }
    document.getElementById("screen").textContent = a;


    console.log(typeof firstValue);
    console.log(typeof document.getElementById("screen").textContent);
    // console.log(parseFloat(document.getElementById("screen")
    //   .textContent) + parseFloat(firstValue));
    // console.log( firstValue);
    console.log(document.getElementById("screen").textContent);
    console.log(a);
  });
function screenWrite2() {
  // alert(event.srcElement.id);
  firstValue = document.getElementById("screen").textContent;
  document.getElementById("screen").textContent = "";
}

function sign1() {
  znak = 1;
  screenWrite2();
}
function sign2() {
  znak = 2;
  screenWrite2();
}
function sign3() {
  znak = 3;
  screenWrite2();
}
function sign4() {
  znak = 4;
  screenWrite2();
}
function sing5() {
  document.getElementById("screen").textContent += "."
}