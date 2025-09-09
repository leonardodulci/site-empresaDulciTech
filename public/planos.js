document.addEventListener('DOMContentLoaded', () => {

    // (Mantenha aqui os códigos JavaScript para os formulários de contato e do hero que já criamos.)

    // NOVO CÓDIGO para os botões dos planos
    const planButtons = document.querySelectorAll('.cards-container .contract-button');
    
    // Objeto para armazenar as mensagens personalizadas para cada plano
    const planMessages = {
        'Plano Básico': 'Olá, gostaria de mais informações sobre o Plano Básico de criação de site.',
        'Plano Essencial': 'Olá, gostaria de mais informações sobre o Plano Essencial, para quem precisa de mais recursos e autoridade digital.',
        'Plano Premium': 'Olá, tenho interesse no Plano Premium, a solução completa para crescimento e análise de dados.',
    };

    planButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); // Impede que o link vá para o href

            // Encontra o título do plano dentro do mesmo cartão
            const card = button.closest('.card');
            const planTitle = card.querySelector('h3').textContent.trim();

            // Pega a mensagem correspondente ao plano
            const message = planMessages[planTitle];

            if (message) {
                const phoneNumber = '5561983529676'; // Mantenha seu número de telefone aqui
                const encodedMessage = encodeURIComponent(message);
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
                window.open(whatsappUrl, '_blank');
            } else {
                console.error('Mensagem para este plano não encontrada.');
            }
        });
    });

});

