function appendToDisplay(value) {
  const display = document.getElementById("display");
  if (display.innerHTML === "0") {
    display.innerHTML = value;
  } else {
    display.innerHTML += value;
  }
}

function clearDisplay() {
  document.getElementById("display").innerHTML = "0";
}

function deleteLast() {
  const display = document.getElementById("display");
  display.innerHTML = display.innerHTML.slice(0, -1) || "0";
}

function calculateResult() {
  const display = document.getElementById("display");
  try {
    display.innerHTML = eval(display.innerHTML);
  } catch {
    display.innerHTML = "Error";
  }
}
