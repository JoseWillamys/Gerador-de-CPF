import GeraCPF from './modules/GeraCPF';
import GeraElementos from './modules/GeradorDeElementosHTML';

import './assets/css/style.css';

(function () {
    const cpfGerado = document.querySelector('.cpf-gerado');
    const btnIniciar = document.querySelector('.iniciar');
    btnIniciar.addEventListener('click', () => {
        cpfGerado.innerHTML = '';
        GeraElementos(GeraCPF);
    })
})();