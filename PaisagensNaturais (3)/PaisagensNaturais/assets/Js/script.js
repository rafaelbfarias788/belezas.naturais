function alternarVisibilidade(id) {
    const element = document.getElementById(id);
    if (element.classList.contains('hidden')) {
      element.classList.remove('hidden');
    } else {
      element.classList.add('hidden');
    }
}

  function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    let errorMessage = '';
  
    if (!name) {
      errorMessage += 'Por favor, insira seu nome.\n';
    }
  
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errorMessage += 'Por favor, insira um e-mail válido.\n';
    }
  
    if (!message) {
      errorMessage += 'Por favor, escreva sua mensagem.\n';
    }
  
    if (errorMessage) {
      alert(errorMessage);
    } else {
      alert('Feedback enviado com sucesso! Obrigado.');
      // Aqui, você pode adicionar lógica para enviar o formulário, como uma integração com um back-end.
      document.getElementById('feedbackForm').reset();
    }
  }