document.addEventListener("DOMContentLoaded", function () {
  // Adiciona um ouvinte de evento para os botões de edição
  document
    .querySelector(".botao-salvar")
    .addEventListener("click", function () {
      salvarContato();
    });

  // Adiciona um ouvinte de evento para o botão "Cancelar"
  document
    .querySelector(".botao-cancelar")
    .addEventListener("click", function () {
      resetFormulario();
    });
});

function salvarContato() {
  // Obter os valores dos campos do formulário
  var nomeContato = document.getElementById("nomeContato").value;
  var numContato = document.getElementById("numContato").value;

  // Criar uma nova linha na tabela com os dados do contato
  adicionarContatoNaTabela(nomeContato, numContato);

  // Limpar os campos do formulário após salvar
  document.getElementById("formContato").reset();

  // Atualizar o total de contatos
  atualizarTotalContatos();
}

function resetFormulario() {
  document.getElementById("formContato").reset();
}

function adicionarContatoNaTabela(nome, numero) {
  var tabela = document.querySelector("#listaContatos tbody");

  // Obtém o número da linha antes de inserir a nova linha
  var idContato = tabela.rows.length + 1; // Adiciona 1 para evitar o índice 0

  var novaLinha = tabela.insertRow();
  var colunaID = novaLinha.insertCell(0);
  var colunaContato = novaLinha.insertCell(1);
  var colunaNumero = novaLinha.insertCell(2);

  colunaID.textContent = idContato; // Número da linha na tabela
  colunaContato.textContent = nome;
  colunaNumero.textContent = numero;

  // Atualiza o total de contatos
  atualizarTotalContatos();
}

function atualizarTotalContatos() {
  var totalContatos = document.getElementById("totalContatos");
  totalContatos.textContent = document.querySelector(
    "#listaContatos tbody"
  ).rows.length;
}
