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
        return 'Error: Division by zero';
    }
    return a / b;
}

// Clears the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Appends a value to the display
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

// Evaluates the expression in the display
function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Use eval to calculate the result (ensure input is sanitized in real-world apps)
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error'; // Handle invalid expressions
    }
}

// Add event listeners to buttons after DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value'); // Correctly fetch the data-value attribute
            if (value === '=') {
                calculateResult();
            } else if (value === 'C') {
                clearDisplay();
            } else {
                appendToDisplay(value);
            }
        });
    });
});