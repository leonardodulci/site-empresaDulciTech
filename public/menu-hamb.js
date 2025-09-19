document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function () {
        // Apenas alterna as classes para ativar/desativar o menu
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Opcional: Fechar o menu ao clicar em um link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
});