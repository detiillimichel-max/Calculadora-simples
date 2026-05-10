export const ui = {
    init(calc) {
        this.calc = calc;
        this.prevText = document.getElementById('prev-operation');
        this.currText = document.getElementById('current-display');
        this.updateDisplay();
    },

    updateDisplay() {
        this.currText.innerText = this.calc.currentOperand;
        if (this.calc.operation != null) {
            this.prevText.innerText = `${this.calc.previousOperand} ${this.calc.operation}`;
        } else {
            this.prevText.innerText = '';
        }
    }
};

