document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';
    let operator = '';
    let firstOperand = '';
    let secondOperand = '';

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = this.getAttribute('data-value');

            if (value === 'C') {
                currentInput = '';
                operator = '';
                firstOperand = '';
                secondOperand = '';
                display.textContent = '';
            } else if (value === '=') {
                secondOperand = currentInput;
                currentInput = calculate(firstOperand, secondOperand, operator);
                display.textContent = currentInput;
                firstOperand = currentInput;
                operator = '';
                currentInput = '';
            } else if (['+', '-', '*', '/'].includes(value)) {
                if (currentInput !== '') {
                    firstOperand = currentInput;
                    operator = value;
                    currentInput = '';
                }
            } else {
                currentInput += value;
                display.textContent = currentInput;
            }
        });
    });

    function calculate(first, second, operator) {
        const num1 = parseFloat(first);
        const num2 = parseFloat(second);
        switch (operator) {
            case '+':
                return (num1 + num2).toString();
            case '-':
                return (num1 - num2).toString();
            case '*':
                return (num1 * num2).toString();
            case '/':
                return (num1 / num2).toString();
            default:
                return '';
        }
    }
});