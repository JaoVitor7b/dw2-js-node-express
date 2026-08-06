// FUNÇÃO SIMPLES
function showMessage() {
  const message = "<h2>Olá Bem Vindo!</h2>";
  document.write(message);
}

// INVOCANDO A FUNÇÃO
showMessage();

//FUNÇÃO COM PARÂMETRO / ARGUMENTO
const user = "João";

//ESSA FUNÇÃO RECEBE UM PARÂMETRO
function userMessage(username) {
  document.write(`<h3>O que deseja fazer hoje, ${username}?</h3>`);
}

//INVOCANDO FUNÇÃO COM UM ARGUMENTO
userMessage(user);

//FUNÇÃO COM MAIS DE UM PARÂMETRO
const n1 = 10;
const n2 = 5;

function soma(n1, n2) {
  let resultado = n1 + n2;
  document.write(`A soma de ${n1} + ${n2} é igual a ${resultado}.`);
}

soma(n1, n2);
