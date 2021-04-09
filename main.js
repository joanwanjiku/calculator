class Calculator {
    constructor(previous, current) {
        this.previous = previous
        this.current = current
        this.clear()
    }
    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }
    
    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }
    findOperation(operation) {
        if (this.currentOperand === '') return
        if (this.previousOperand !== '') {
            this.calculate()
        }

        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }
    calculate() {
        let result
        const prev_num = parseFloat(this.previousOperand)
        const current_num = parseFloat(this.currentOperand)
        if (isNaN(prev_num) || isNaN(current_num)) return 'Not '

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
        this.currentOperand = result
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
        this.current.innerHTML = this.getDisplayNumber(this.currentOperand)
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
const previousOperation = document.querySelector('.display-act')
const resultOperation = document.querySelector('.display-result')


const calculator = new  Calculator(previousOperation , resultOperation)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerHTML)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', e => {
        calculator.findOperation(button.innerHTML)
        calculator.updateDisplay()
    })
})


equalBtn.addEventListener('click', () => {
    console.log('clicked')
    calculator.calculate()
    calculator.updateDisplay()
})

clearBtn.addEventListener('click', () => {
    calculator.clear()
    calculator.updateDisplay()
})
