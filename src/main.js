import GeraCPF from './modules/GeraCPF';
import GeraElementos from './modules/GeradorDeElementosHTML';

import './assets/css/style.css';

(function() {
    // const cpf = new GeraCPF();
    // const cpfGerado = document.querySelector('.cpf-gerado');
    // cpfGerado.innerHTML = cpf.geraNovoCpf();
    GeraElementos(GeraCPF);
})();