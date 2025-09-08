document.addEventListener('DOMContentLoaded', () => {
    // Função para validar o formulário e enviar os dados
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Obtém os valores dos campos
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        // Constrói a mensagem a ser enviada
        const whatsappMessage = `Olá, meu nome é ${name}. 
E-mail: ${email} 
Telefone: ${phone} 
Mensagem: ${message}`;

        // Codifica a mensagem para ser usada em uma URL
        const encodedMessage = encodeURIComponent(whatsappMessage);

        // Número de telefone para onde a mensagem será enviada
        const phoneNumber = '5561983529676';

        // Constrói a URL completa do WhatsApp
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        // Abre uma nova aba com o WhatsApp
        window.open(whatsappUrl, '_blank');

        // Opcional: Feedback visual imediato e limpa o formulário
        alert('Aguarde, estamos te redirecionando para o WhatsApp!');
        contactForm.reset();
    });
});