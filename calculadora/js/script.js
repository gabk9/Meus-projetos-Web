const result = document.getElementById('result');
const buttons = document.querySelectorAll('button');

let current = '';
let display = '';

function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}

function getSymbol(op) {
    return { '+': '+', '-': '−', '*': '×', '/': '÷' }[op];
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (button.id === 'Erase-all') {
            current = '';
            display = '';
        } else if (button.id === 'Delete') {
            current = current.slice(0, -1);
            display = display.slice(0, -1);
        } else if (button.id === 'equal') {
            try {
                current = eval(current).toString();
                display = current;
            } catch (e) {
                current = '';
                display = 'Erro';
            }
        } else {
            const operators = {
                '+': '+',
                '−': '-',
                '×': '*',
                '÷': '/'
            };

            if (operators[value]) {
                if (isOperator(current.slice(-1))) {
                    current = current.slice(0, -1) + operators[value];
                    display = display.slice(0, -1) + value;
                } else {
                    current += operators[value];
                    display += value;
                }
            } else {
                current += value;
                display += value;
            }
        }

        result.textContent = display || '0';
    });
});
