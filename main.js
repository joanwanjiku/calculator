const calc_keys = document.querySelector('.calc-keys')
console.log(calc_keys)
calc_keys.addEventListener('click', e=> {
    if (e.target.matches('button')) {
        const key = e.target
        const action = key.dataset.action
        const keyedNumber = key.textContent
        let display = document.querySelector('.display-act')
        let displayedNum = display.innerHTML
        console.log(display)
        if (!action) {
            if (keyedNumber === '0') {
                display.innerHTML += keyedNumber
            } else {
                display.innerHTML =  displayedNum + keyedNumber
            }
        } else if (action == 'decimal') {
            display.innerHTML += '.'
        } else {
            console.log(typeof(action))
            switch (action) {
                case 'add':
                    display.innerHTML += '+'
                    break;
                case 'subtract': 
                    display.innerHTML += '-'
                    break;
                case 'divide':
                    display.innerHTML += '/'
                    break;
                case 'multiply':
                    display.innerHTML += 'x'
                    break;
                default:
                    'none'
            }
        }
    }
})