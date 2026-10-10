const display = document.getElementById("display");
function addNumber(number) {
    display.value += number;
}

function addOperator(operator) {
    display.value += operator;
}
function calculate() {
    display.value = eval(display.value);
}
function deleteLast() {
    display.value = display.value.slice(0, -1);
}