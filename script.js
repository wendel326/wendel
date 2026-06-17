// Seleciona o botão pelo seu ID
const botao = document.getElementById('btn-contato');

// Adiciona um "ouvinte de evento" ao clique do botão
botao.addEventListener('click', function() {

  // Cria uma caixa de diálogo pedindo o nome do visitante
  const nome = prompt('Olá! Qual é o seu nome?');

  // Verifica se o usuário digitou alguma coisa
  if (nome && nome.trim() !== '') {
    alert(`Obrigada pelo contato, ${nome}! Wendel Ryan vai responder em breve. 😊`);
  } else {
    alert('Por favor, informe seu nome para entrarmos em contato!');
  }

});
