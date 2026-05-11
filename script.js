// Inicialização do EmailJS
emailjs.init('6wQtcJOL6DBOOxdqB');

// Adiciona event listener ao formulário de contato
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    

    const nameEl = document.getElementById('name');
    const emailEl = document.getElementById('email');
    const messageEl = document.getElementById('message');

    // Verificação de segurança: garante que os elementos existem antes de acessar .value
    if (!nameEl || !emailEl || !messageEl) {
        alert('Elementos do formulário não encontrados. Verifique o HTML.');
        console.error('Form elements not found:', { nameEl, emailEl, messageEl });
        return;
    }

    const name = nameEl.value.trim();
    const email = emailEl.value.trim();
    const message = messageEl.value.trim();

    // Validação básica dos campos
    if (!name || !email || !message) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Validação de e-mail 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um e-mail válido.');
        return;
    }

    // Parâmetros do template - mapeados dos IDs do HTML para os nomes esperados no template EmailJS
    // 
    const templateParams = {
        user_name: name,
        user_email: email,
        message: message
    };

    // Integração com EmailJS, usando send() com parâmetros manuais
    
    emailjs.send('service_5m2dc98', 'template_dzubq6b', templateParams)
        .then(function(response) {
            console.log('Sucesso!', response.status, response.text);
            alert('Mensagem enviada com sucesso!');

            // Limpa os campos
            nameEl.value = '';
            emailEl.value = '';
            messageEl.value = '';
        }, function(error) {
            console.log('Falha...', error);
            alert('Erro ao enviar a mensagem. Tente novamente.');
        });
});







