document.addEventListener('DOMContentLoaded', () => {
    // Código para o formulário de contato já existente
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        const whatsappMessage = `Olá, meu nome é ${name}.%0A%0A
E-mail: ${email}%0A
Telefone: ${phone}%0A%0A
Mensagem: ${message}`;

        const encodedMessage = encodeURIComponent(whatsappMessage);
        const phoneNumber = '5599999999999';
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');
        alert('Aguarde, estamos te redirecionando para o WhatsApp!');
        contactForm.reset();
    });

    // NOVO CÓDIGO para o formulário do hero
    const heroForm = document.getElementById('hero-form');
    heroForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Obtém os valores dos campos do formulário do hero
        const name = document.getElementById('hero-name').value;
        const email = document.getElementById('hero-email').value;
        
        // Constrói a mensagem para o WhatsApp
        const whatsappMessage = `Olá, vim pelo seu site e tenho interesse nos serviços da DulciTech. Meu nome é ${name} e meu e-mail é ${email}. Gostaria de agendar uma conversa.`;
        
        // Codifica a mensagem para a URL
        const encodedMessage = encodeURIComponent(encodedMessage);
        
        // Número de telefone para onde a mensagem será enviada
        const phoneNumber = '5561983529676';

        // Constrói a URL completa do WhatsApp
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

        // Abre uma nova aba com o WhatsApp
        window.open(whatsappUrl, '_blank');

        // Feedback para o usuário
        alert('Aguarde, estamos te redirecionando para o WhatsApp!');
        heroForm.reset();
    });
});