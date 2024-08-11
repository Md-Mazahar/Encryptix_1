document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    
    let currentInput = '';
    let previousInput = '';
    let operator = null;
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const key = button.dataset.key;
            
            if (key === 'C') {
                currentInput = '';
                previousInput = '';
                operator = null;
                display.value = '';
            } else if (key === '=') {
                if (previousInput && currentInput && operator) {
                    const result = calculate(parseFloat(previousInput), parseFloat(currentInput), operator);
                    display.value = result;
                    currentInput = result;
                    previousInput = '';
                    operator = null;
                }
            } else if (['+', '-', '*', '/'].includes(key)) {
                if (currentInput) {
                    operator = key;
                    previousInput = currentInput;
                    currentInput = '';
                    display.value = `${previousInput} ${operator}`;
                }
            } else {
                currentInput += key;
                display.value = operator ? `${previousInput} ${operator} ${currentInput}` : currentInput;
            }
        });
    });

    function calculate(num1, num2, operator) {
        switch (operator) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '/':
                return num1 / num2;
            default:
                return 0;
        }
    }
});