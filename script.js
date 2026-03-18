
const display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

function erase() {
    let display = document.getElementById("display");
    display.value =
    display.value.slice(0,-1);
}

