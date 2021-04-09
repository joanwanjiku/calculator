class Calculator {
    constructor(previous, current) {
        this.previous = previous
        this.current = current
    }
    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }
    findOperation(operation) {
        this.operation = operation
    }
    calculate() {
        let result
        const prev_num = parseFloat(this.previous)
        const current_num = parseFloat(this.current)
        switch (this.operation) {
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
        this.previousOperand = ''
        this.operation = undefined
    }
    getDisplayNumber(number) {
        const strNum = number.toString()
        const intDigits = parseFloat(strNum.split('.')[0])
        const decDigits = strNum.split('.')[1]
        let intDisplay
        if(isNaN(intDigits)) {
            intDisplay =''
        } else {
            intDisplay = intDigits.toLocaleString('en', {maximumFractionDigits: 0})
        }
        if (decDigits != null) {
            return `${intDisplay}.${decDigits}`
          } else {
            return intDisplay
        }
    }

    updateDisplay() {
        this.current.innerText =
          this.getDisplayNumber(this.currentOperand)
        if (this.operation != null) {
          this.previous.innerText =
            `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        } else {
          this.previous.innerText = ''
        }
    }
}

const numberButtons = document.querySelectorAll('.number-item')
const operationButtons = document.querySelectorAll('.key-operator')
const equalBtn = document.querySelector('.key-equal')
const clearBtn = document.querySelector('.clear')
const currentOperation = document.querySelector('.display-act')
const resultOperation = document.querySelector('.display-result')


const calculator = new new Calculator(resultOperation , currentOperation)

equalBtn.addEventListener('click', e => {
    calculator.calculate()
    calculator.updateDisplay()
})