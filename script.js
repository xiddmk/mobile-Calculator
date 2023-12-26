let outputScreen = document.getElementById("output-screen");

function display(value) {
    outputScreen.value += value;
}

function calculate() {
    try {
        outputScreen.value = eval(outputScreen.value);
    } catch (err) {
        outputScreen.value = "Invalid Expression";
    }
}

function clearInput() {
    outputScreen.value = "";
}

function deleteLast() {
    outputScreen.value = outputScreen.value.slice(0, -1);
}