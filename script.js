const display = document.getElementById("display");
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) {
        alert("Cannot divide by zero");
        return 0;
    }

    return a / b;
}
function modulus(a, b) {
    return a % b;
}

function evaluateExpression(expression) {
    const tokens = expression.match(/(\d+|\+|\-|\*|\/|\%)/g);
    if (!tokens) return "";
    let result = Number(tokens[0]);
    for (let i = 1; i < tokens.length; i += 2) {
        let operator = tokens[i];
        let number = Number(tokens[i + 1]);
        switch (operator) {
            case "+":
                result = add(result, number);
                break;
            case "-":
                result = subtract(result, number);
                break;
            case "*":
                result = multiply(result, number);
                break;
            case "/":
                result = divide(result, number);
                break;
            case "%":
                result = modulus(result, number);
                break;
        }
    }
    return result;
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.dataset.value;
        if (value) {
            display.value += value;
        }

        if (button.id === "clear") {
            display.value = "";
        }

        if (button.id === "equals") {
            display.value = evaluateExpression(display.value);
        }

    });
});
document.addEventListener("keydown", (event) => {
    const allowedKeys = "0123456789+-*/%";
    if (allowedKeys.includes(event.key)) {
        display.value += event.key;
    }
    else if (event.key === "Backspace") {

        display.value = display.value.slice(0, -1);
    }
    else if (event.key === "Enter") {
        display.value = evaluateExpression(display.value);
    }
    else {
        alert("Invalid key! Use numbers or operators only.");
        event.preventDefault();

    }

});