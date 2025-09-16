// Seleciona todos os cards do portfólio
const portfolioCards = document.querySelectorAll('.portfolio-card');

// Cria o observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show-card'); // adiciona classe de animação
      observer.unobserve(entry.target); // para não ficar repetindo
    }
  });
}, { threshold: 0.2 }); // dispara quando 20% do card aparece

// Observa cada card
portfolioCards.forEach(card => {
  observer.observe(card);
});