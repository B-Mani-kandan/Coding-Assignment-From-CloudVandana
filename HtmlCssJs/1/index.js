let buttons = document.getElementsByTagName("button");

let result = document.getElementById("result");

for (i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
    let input = this.innerText;
    updateDisplay(input);
  };
}
function updateDisplay(input) {
  let currentDisplay = result.innerText;
  if (currentDisplay == "0") {
    if (input != "AC" && input != "DEL" && input != "=") {
      result.innerText = "";
      result.innerText = input;
    }
  } else {
    if (input == "AC") {
      result.innerText = "0";
    }
    if (input != "AC" && input != "DEL" && input != "=") {
      result.innerText += input;
      x = x + 6;
      x += 7;
    }

    if (input == "=") {
      let display = result.innerText;
      result.innerText = eval(display);
    }
  }
}
