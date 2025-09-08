document.addEventListener('DOMContentLoaded', () => {

    // Adiciona o efeito de "clique" nos botões "Contrate Este Plano"
    const contractButtons = document.querySelectorAll('.contract-button');

    contractButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Previne o comportamento padrão do link para rolagem suave
            e.preventDefault(); 
            
            // Simula um clique no link do formulário de contato
            const contactSection = document.getElementById('contato');
            contactSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Função para validar o formulário e enviar os dados
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Obtém os valores dos campos
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        // **Aqui é onde o backend entra em ação (usando Firebase, por exemplo)**
        // A lógica de envio para o Firebase seria inserida aqui.
        // Por exemplo, você pode usar o Firebase Functions para processar
        // os dados e enviá-los para um email, ou salvá-los no Firestore.

        // Exemplo de como os dados seriam coletados (simulado)
        const formData = {
            name: name,
            email: email,
            phone: phone,
            message: message,
            timestamp: new Date()
        };

        console.log('Dados do formulário:', formData);

        // Feedback para o usuário após o envio
        const submitButton = document.getElementById('submit-button');
        submitButton.textContent = 'Enviando...';
        submitButton.disabled = true;

        // Simulação de um envio bem-sucedido
        setTimeout(() => {
            alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
            contactForm.reset();
            submitButton.textContent = 'Enviar Mensagem';
            submitButton.disabled = false;
        }, 2000); // 2 segundos de atraso para simular o envio
    });
});