// NOVO CÓDIGO para o menu de navegação fixo
const mainHeader = document.querySelector('.main-nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        mainHeader.classList.add('scrolled');
    } else {
        mainHeader.classList.remove('scrolled');
    }
});