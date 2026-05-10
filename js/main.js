import { Calculator } from './modules/calculator.js';
import { ui } from './modules/ui.js';

const calc = new Calculator();

document.addEventListener('DOMContentLoaded', () => {
    ui.init(calc);

    document.querySelectorAll('.btn.num').forEach(button => {
        button.addEventListener('click', () => {
            calc.appendNumber(button.innerText);
            ui.updateDisplay();
        });
    });

    document.querySelectorAll('.btn.op').forEach(button => {
        button.addEventListener('click', () => {
            calc.chooseOperation(button.getAttribute('data-op'));
            ui.updateDisplay();
        });
    });

    document.getElementById('btn-equal').addEventListener('click', () => {
        calc.compute();
        ui.updateDisplay();
    });

    document.querySelector('[data-action="clear"]').addEventListener('click', () => {
        calc.clear();
        ui.updateDisplay();
    });

    document.querySelector('[data-action="delete"]').addEventListener('click', () => {
        calc.delete();
        ui.updateDisplay();
    });

    // Registro do Service Worker para PWA
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js');
    }
});

