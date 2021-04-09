class Calculator {
    constructor(previous, current) {
        this.previous = previous
        this.current = current
    }
    findOperation(operation) {
        this.operation = operation
    }
    calculate() {
        let result
        const prev_num = parseFloat(this.previous)
        const current_num = parseFloat(this.current)
        switch (operation) {
            case '+':
                result = prev_num + current_num
                break;
            case '-':
                result = prev_num - current_num
                break;
            case '÷':
                result = prev_num / current_num
                break;
            case '*':
                result = prev_num * current_num
                break;
            default:
                return
        }
        this.current = result

    }
}

const numberButtons = document.querySelectorAll('.number-item')
const operationButtons = document.querySelectorAll('.key-operator')
const equalBtn = document.querySelector('.key-equal')
const clearBtn = document.querySelector('.clear')
const currentOperation = document.querySelector('.display-act')
const resultPlace = document.querySelector('.display-result')