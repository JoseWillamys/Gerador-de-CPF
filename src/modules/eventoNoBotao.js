export default function eventoNoBotao() {
    const button = document.querySelector('.gerar');
    button.addEventListener('click', () => {
        location.reload();
    })
}