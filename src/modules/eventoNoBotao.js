export default function eventoNoBotao(geraElementos, geraCPF) {
    const cpfGerado = document.querySelector('.cpf-gerado');
    const button = document.querySelector('.gerar');
    button.addEventListener('click', () => {
        cpfGerado.innerHTML = '';
        geraElementos(geraCPF);
    })
}