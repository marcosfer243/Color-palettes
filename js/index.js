console.log("Hello World");

const btn = document.getElementById("btn");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
//PALETTE
const c_one = document.getElementById("c-one");
const c_two = document.getElementById("c-two");
const c_three = document.getElementById("c-three");
const c_four = document.getElementById("c-four");
const c_five = document.getElementById("c-five");
const c_six = document.getElementById("c-six");
//BUTTONS:
//select buttons:
const selectOne = document.getElementById("select-one");
const selectTwo = document.getElementById("select-two");
const selectThree = document.getElementById("select-three");
const selectFour = document.getElementById("select-four");
const selectFive = document.getElementById("select-five");
const selectSix = document.getElementById("select-six");
//copy buttons:
const copyOne = document.getElementById("copy-one");
const copyTwo = document.getElementById("copy-two");
const copyThree = document.getElementById("copy-three");
const copyFour = document.getElementById("copy-four");
const copyFive = document.getElementById("copy-five");
const copySix = document.getElementById("copy-six");
//Input hex:
let inputOne = document.getElementById("input-one");
let inputTwo = document.getElementById("input-two");
let inputThree = document.getElementById("input-three");
let inputFour = document.getElementById("input-four");
let inputFive = document.getElementById("input-five");
let inputSix = document.getElementById("input-six");
//Copy-selected-buttons-palette:
const copySelectedOne = document.getElementById("copy-selected-one");
const copySelectedTwo = document.getElementById("copy-selected-two");
const copySelectedThree = document.getElementById("copy-selected-three");
const copySelectedFour = document.getElementById("copy-selected-four");
const copySelectedFive = document.getElementById("copy-selected-five");
const copySelectedSix = document.getElementById("copy-selected-six");
//Input selected hex:
const inputSelectedOne = document.getElementById("input-selected-one");
const inputSelectedTwo = document.getElementById("input-selected-two");
const inputSelectedThree = document.getElementById("input-selected-three");
const inputSelectedFour = document.getElementById("input-selected-four");
const inputSelectedFive = document.getElementById("input-selected-five");
const inputSelectedSix = document.getElementById("input-selected-six");
//Delete-buttons:
const deleteOne = document.getElementById("delete-one");
const deleteTwo = document.getElementById("delete-two");
const deleteThree = document.getElementById("delete-three");
const deleteFour = document.getElementById("delete-four");
const deleteFive = document.getElementById("delete-five");
const deleteSix = document.getElementById("delete-six");

let color = {};

let hex = {};

function aleatorio(min, max) {
  color = {
    red_one: Math.round(Math.random() * (max - min) + min),
    green_one: Math.round(Math.random() * (max - min) + min),
    blue_one: Math.round(Math.random() * (max - min) + min),
    ////
    red_two: Math.round(Math.random() * (max - min) + min),
    green_two: Math.round(Math.random() * (max - min) + min),
    blue_two: Math.round(Math.random() * (max - min) + min),
    ////
    red_three: Math.round(Math.random() * (max - min) + min),
    green_three: Math.round(Math.random() * (max - min) + min),
    blue_three: Math.round(Math.random() * (max - min) + min),
    ////
    red_four: Math.round(Math.random() * (max - min) + min),
    green_four: Math.round(Math.random() * (max - min) + min),
    blue_four: Math.round(Math.random() * (max - min) + min),
    ////
    red_five: Math.round(Math.random() * (max - min) + min),
    green_five: Math.round(Math.random() * (max - min) + min),
    blue_five: Math.round(Math.random() * (max - min) + min),
    ////
    red_six: Math.round(Math.random() * (max - min) + min),
    green_six: Math.round(Math.random() * (max - min) + min),
    blue_six: Math.round(Math.random() * (max - min) + min),
  };

  hex = {
    hex_one:
      "#" +
      (
        (1 << 24) +
        (color.red_one << 16) +
        (color.green_one << 8) +
        color.blue_one
      )
        .toString(16)
        .slice(1),
    hex_two:
      "#" +
      (
        (1 << 24) +
        (color.red_two << 16) +
        (color.green_two << 8) +
        color.blue_two
      )
        .toString(16)
        .slice(1),
    hex_three:
      "#" +
      (
        (1 << 24) +
        (color.red_three << 16) +
        (color.green_three << 8) +
        color.blue_three
      )
        .toString(16)
        .slice(1),
    hex_four:
      "#" +
      (
        (1 << 24) +
        (color.red_four << 16) +
        (color.green_four << 8) +
        color.blue_four
      )
        .toString(16)
        .slice(1),
    hex_five:
      "#" +
      (
        (1 << 24) +
        (color.red_five << 16) +
        (color.green_five << 8) +
        color.blue_five
      )
        .toString(16)
        .slice(1),
    hex_six:
      "#" +
      (
        (1 << 24) +
        (color.red_six << 16) +
        (color.green_six << 8) +
        color.blue_six
      )
        .toString(16)
        .slice(1),
  };

  one.style.backgroundColor = `rgb(${color.red_one},${color.green_one},${color.blue_one})`;
  two.style.backgroundColor = `rgb(${color.red_two},${color.green_two},${color.blue_two})`;
  three.style.backgroundColor = `rgb(${color.red_three},${color.green_three},${color.blue_three})`;
  four.style.backgroundColor = `rgb(${color.red_four},${color.green_four},${color.blue_four})`;
  five.style.backgroundColor = `rgb(${color.red_five},${color.green_five},${color.blue_five})`;
  six.style.backgroundColor = `rgb(${color.red_six},${color.green_six},${color.blue_six})`;
}

function copyColorOne() {
  if (!inputOne.hasAttribute("value")) {
    inputOne.setAttribute("value", `${hex.hex_one}`);
    inputOne.style.visibility = "visible";
  } else {
    inputOne.removeAttribute("value");
    inputOne.style.visibility = "hidden";
  }
}

function copyColorTwo() {
  if (!inputTwo.hasAttribute("value")) {
    inputTwo.setAttribute("value", `${hex.hex_two}`);
    inputTwo.style.visibility = "visible";
  } else {
    inputTwo.removeAttribute("value");
    inputTwo.style.visibility = "hidden";
  }
}

function copyColorThree() {
  if (!inputThree.hasAttribute("value")) {
    inputThree.setAttribute("value", `${hex.hex_three}`);
    inputThree.style.visibility = "visible";
  } else {
    inputThree.removeAttribute("value");
    inputThree.style.visibility = "hidden";
  }
}

function copyColorFour() {
  if (!inputFour.hasAttribute("value")) {
    inputFour.setAttribute("value", `${hex.hex_four}`);
    inputFour.style.visibility = "visible";
  } else {
    inputFour.removeAttribute("value");
    inputFour.style.visibility = "hidden";
  }
}

function copyColorFour() {
  if (!inputFour.hasAttribute("value")) {
    inputFour.setAttribute("value", `${hex.hex_four}`);
    inputFour.style.visibility = "visible";
  } else {
    inputFour.removeAttribute("value");
    inputFour.style.visibility = "hidden";
  }
}

function copyColorFive() {
  if (!inputFive.hasAttribute("value")) {
    inputFive.setAttribute("value", `${hex.hex_five}`);
    inputFive.style.visibility = "visible";
  } else {
    inputFive.removeAttribute("value");
    inputFive.style.visibility = "hidden";
  }
}

function copyColorSix() {
  if (!inputSix.hasAttribute("value")) {
    inputSix.setAttribute("value", `${hex.hex_six}`);
    inputSix.style.visibility = "visible";
  } else {
    inputSix.removeAttribute("value");
    inputSix.style.visibility = "hidden";
  }
}

let colorCopied = {};

function selectColorOne() {
  if (c_one.style.backgroundColor == "") {
    c_one.style.backgroundColor = `rgb(${color.red_one},${color.green_one},${color.blue_one})`;
  } else if (c_two.style.backgroundColor == "") {
    c_two.style.backgroundColor = `rgb(${color.red_one},${color.green_one},${color.blue_one})`;
  } else if (c_three.style.backgroundColor == "") {
    c_three.style.backgroundColor = `rgb(${color.red_one},${color.green_one},${color.blue_one})`;
  } else if (c_four.style.backgroundColor == "") {
    c_four.style.backgroundColor = `rgb(${color.red_one},${color.green_one},${color.blue_one})`;
  } else if (c_five.style.backgroundColor == "") {
    c_five.style.backgroundColor = `rgb(${color.red_one},${color.green_one},${color.blue_one})`;
  } else if (c_six.style.backgroundColor == "") {
    c_six.style.backgroundColor = `rgb(${color.red_one},${color.green_one},${color.blue_one})`;
  }
}

function selectColorTwo() {
  if (c_one.style.backgroundColor == "") {
    c_one.style.backgroundColor = `rgb(${color.red_two},${color.green_two},${color.blue_two})`;
  } else if (c_two.style.backgroundColor == "") {
    c_two.style.backgroundColor = `rgb(${color.red_two},${color.green_two},${color.blue_two})`;
  } else if (c_three.style.backgroundColor == "") {
    c_three.style.backgroundColor = `rgb(${color.red_two},${color.green_two},${color.blue_two})`;
  } else if (c_four.style.backgroundColor == "") {
    c_four.style.backgroundColor = `rgb(${color.red_two},${color.green_two},${color.blue_two})`;
  } else if (c_five.style.backgroundColor == "") {
    c_five.style.backgroundColor = `rgb(${color.red_two},${color.green_two},${color.blue_two})`;
  } else if (c_six.style.backgroundColor == "") {
    c_six.style.backgroundColor = `rgb(${color.red_two},${color.green_two},${color.blue_two})`;
  }
}

function selectColorThree() {
  if (c_one.style.backgroundColor == "") {
    c_one.style.backgroundColor = `rgb(${color.red_three},${color.green_three},${color.blue_three})`;
  } else if (c_two.style.backgroundColor == "") {
    c_two.style.backgroundColor = `rgb(${color.red_three},${color.green_three},${color.blue_three})`;
  } else if (c_three.style.backgroundColor == "") {
    c_three.style.backgroundColor = `rgb(${color.red_three},${color.green_three},${color.blue_three})`;
  } else if (c_four.style.backgroundColor == "") {
    c_four.style.backgroundColor = `rgb(${color.red_three},${color.green_three},${color.blue_three})`;
  } else if (c_five.style.backgroundColor == "") {
    c_five.style.backgroundColor = `rgb(${color.red_three},${color.green_three},${color.blue_three})`;
  } else if (c_six.style.backgroundColor == "") {
    c_six.style.backgroundColor = `rgb(${color.red_three},${color.green_three},${color.blue_three})`;
  }
}

function selectColorFour() {
  if (c_one.style.backgroundColor == "") {
    c_one.style.backgroundColor = `rgb(${color.red_four},${color.green_four},${color.blue_four})`;
  } else if (c_two.style.backgroundColor == "") {
    c_two.style.backgroundColor = `rgb(${color.red_four},${color.green_four},${color.blue_four})`;
  } else if (c_three.style.backgroundColor == "") {
    c_three.style.backgroundColor = `rgb(${color.red_four},${color.green_four},${color.blue_four})`;
  } else if (c_four.style.backgroundColor == "") {
    c_four.style.backgroundColor = `rgb(${color.red_four},${color.green_four},${color.blue_four})`;
  } else if (c_five.style.backgroundColor == "") {
    c_five.style.backgroundColor = `rgb(${color.red_four},${color.green_four},${color.blue_four})`;
  } else if (c_six.style.backgroundColor == "") {
    c_six.style.backgroundColor = `rgb(${color.red_four},${color.green_four},${color.blue_four})`;
  }
}

function selectColorFour() {
  if (c_one.style.backgroundColor == "") {
    c_one.style.backgroundColor = `rgb(${color.red_four},${color.green_four},${color.blue_four})`;
  } else if (c_two.style.backgroundColor == "") {
    c_two.style.backgroundColor = `rgb(${color.red_four},${color.green_four},${color.blue_four})`;
  } else if (c_three.style.backgroundColor == "") {
    c_three.style.backgroundColor = `rgb(${color.red_four},${color.green_four},${color.blue_four})`;
  } else if (c_four.style.backgroundColor == "") {
    c_four.style.backgroundColor = `rgb(${color.red_four},${color.green_four},${color.blue_four})`;
  } else if (c_five.style.backgroundColor == "") {
    c_five.style.backgroundColor = `rgb(${color.red_four},${color.green_four},${color.blue_four})`;
  } else if (c_six.style.backgroundColor == "") {
    c_six.style.backgroundColor = `rgb(${color.red_four},${color.green_four},${color.blue_four})`;
  }
}

function selectColorFive() {
  if (c_one.style.backgroundColor == "") {
    c_one.style.backgroundColor = `rgb(${color.red_five},${color.green_five},${color.blue_five})`;
  } else if (c_two.style.backgroundColor == "") {
    c_two.style.backgroundColor = `rgb(${color.red_five},${color.green_five},${color.blue_five})`;
  } else if (c_three.style.backgroundColor == "") {
    c_three.style.backgroundColor = `rgb(${color.red_five},${color.green_five},${color.blue_five})`;
  } else if (c_four.style.backgroundColor == "") {
    c_four.style.backgroundColor = `rgb(${color.red_five},${color.green_five},${color.blue_five})`;
  } else if (c_five.style.backgroundColor == "") {
    c_five.style.backgroundColor = `rgb(${color.red_five},${color.green_five},${color.blue_five})`;
  } else if (c_six.style.backgroundColor == "") {
    c_six.style.backgroundColor = `rgb(${color.red_five},${color.green_five},${color.blue_five})`;
  }
}

function selectColorSix() {
  if (c_one.style.backgroundColor == "") {
    c_one.style.backgroundColor = `rgb(${color.red_six},${color.green_six},${color.blue_six})`;
  } else if (c_two.style.backgroundColor == "") {
    c_two.style.backgroundColor = `rgb(${color.red_six},${color.green_six},${color.blue_six})`;
  } else if (c_three.style.backgroundColor == "") {
    c_three.style.backgroundColor = `rgb(${color.red_six},${color.green_six},${color.blue_six})`;
  } else if (c_four.style.backgroundColor == "") {
    c_four.style.backgroundColor = `rgb(${color.red_six},${color.green_six},${color.blue_six})`;
  } else if (c_five.style.backgroundColor == "") {
    c_five.style.backgroundColor = `rgb(${color.red_six},${color.green_six},${color.blue_six})`;
  } else if (c_six.style.backgroundColor == "") {
    c_six.style.backgroundColor = `rgb(${color.red_six},${color.green_six},${color.blue_six})`;
  }
}

function copySelectedColorOne() {
  if (!inputSelectedOne.hasAttribute("value")) {
    inputSelectedOne.setAttribute("value", `${c_one.style.backgroundColor}`);
    inputSelectedOne.style.visibility = "visible";
  } else {
    inputSelectedOne.removeAttribute("value");
    inputSelectedOne.style.visibility = "hidden";
  }
}

function copySelectedColorTwo() {
  if (!inputSelectedTwo.hasAttribute("value")) {
    inputSelectedTwo.setAttribute("value", `${c_two.style.backgroundColor}`);
    inputSelectedTwo.style.visibility = "visible";
  } else {
    inputSelectedTwo.removeAttribute("value");
    inputSelectedTwo.style.visibility = "hidden";
  }
}

function copySelectedColorThree() {
  if (!inputSelectedThree.hasAttribute("value")) {
    inputSelectedThree.setAttribute(
      "value",
      `${c_three.style.backgroundColor}`
    );
    inputSelectedThree.style.visibility = "visible";
  } else {
    inputSelectedThree.removeAttribute("value");
    inputSelectedThree.style.visibility = "hidden";
  }
}

function copySelectedColorFour() {
  if (!inputSelectedFour.hasAttribute("value")) {
    inputSelectedFour.setAttribute("value", `${c_four.style.backgroundColor}`);
    inputSelectedFour.style.visibility = "visible";
  } else {
    inputSelectedFour.removeAttribute("value");
    inputSelectedFour.style.visibility = "hidden";
  }
}

function copySelectedColorFive() {
  if (!inputSelectedFive.hasAttribute("value")) {
    inputSelectedFive.setAttribute("value", `${c_five.style.backgroundColor}`);
    inputSelectedFive.style.visibility = "visible";
  } else {
    inputSelectedFive.removeAttribute("value");
    inputSelectedFive.style.visibility = "hidden";
  }
}

function copySelectedColorSix() {
  if (!inputSelectedSix.hasAttribute("value")) {
    inputSelectedSix.setAttribute("value", `${c_six.style.backgroundColor}`);
    inputSelectedSix.style.visibility = "visible";
  } else {
    inputSelectedSix.removeAttribute("value");
    inputSelectedSix.style.visibility = "hidden";
  }
}

//Event Listeners

deleteOne.addEventListener("click", () => {
  c_one.style.backgroundColor = "";
});

deleteTwo.addEventListener("click", () => {
  c_two.style.backgroundColor = "";
});

deleteThree.addEventListener("click", () => {
  c_three.style.backgroundColor = "";
});

deleteFour.addEventListener("click", () => {
  c_four.style.backgroundColor = "";
});

deleteFive.addEventListener("click", () => {
  c_five.style.backgroundColor = "";
});

deleteSix.addEventListener("click", () => {
  c_six.style.backgroundColor = "";
});

copySelectedOne.addEventListener("click", copySelectedColorOne);
copySelectedTwo.addEventListener("click", copySelectedColorTwo);
copySelectedThree.addEventListener("click", copySelectedColorThree);
copySelectedFour.addEventListener("click", copySelectedColorFour);
copySelectedFive.addEventListener("click", copySelectedColorFive);
copySelectedSix.addEventListener("click", copySelectedColorSix);

selectOne.addEventListener("click", selectColorOne);
selectTwo.addEventListener("click", selectColorTwo);
selectThree.addEventListener("click", selectColorThree);
selectFour.addEventListener("click", selectColorFour);
selectFive.addEventListener("click", selectColorFive);
selectSix.addEventListener("click", selectColorSix);

copyOne.addEventListener("click", copyColorOne);
copyTwo.addEventListener("click", copyColorTwo);
copyThree.addEventListener("click", copyColorThree);
copyFour.addEventListener("click", copyColorFour);
copyFive.addEventListener("click", copyColorFive);
copySix.addEventListener("click", copyColorSix);

btn.addEventListener("click", () => {
  aleatorio(0, 255);
});

document.addEventListener("keyup", (event) => {
  if (event.keyCode == 71) {
    aleatorio(0, 255);
  }
});
