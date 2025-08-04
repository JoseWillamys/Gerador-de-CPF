import eventoNoBotao from "./eventoNoBotao";

export default function geraElementos (geraCPF) {
    const cpfGerado = document.querySelector('.cpf-gerado');
    const cpf = new geraCPF();

    if(!cpf) {
        console.error('O CPF não foi gerado.');
        return;
    } else if (!cpfGerado) {
        console.error('Elemento DOM não encontrado.');
        return;
    }
    
    const p = document.createElement('p');
    p.innerHTML = cpf.geraNovoCpf();
    const button = document.createElement('button');
    button.setAttribute('class', 'gerar');
    button.innerHTML = 'Gerar novo CPF';

    cpfGerado.appendChild(p);
    cpfGerado.appendChild(button);
    eventoNoBotao(geraElementos, geraCPF);
}