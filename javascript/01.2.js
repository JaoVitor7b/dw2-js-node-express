// função anônima tradicional
const soma = function (n1, n2) {
  return n1 + n2;
};
document.write(`<p>O resultado da soma é ${soma(8, 7)}.</p>`);

const tipo = typeof soma;
document.write(`<p>O tipo da função soma é: ${tipo}</p>`);

// arrow function (função anônima)
const dobro = (x) => {
  return x * 2;
};
document.write(`<p>O dobro do número é ${dobro(900)}</p>`);

// arrow function com mais de um parâmetro
const calc = (num1, operator, num2) => {
  return eval(`${num1} ${operator} ${num2}`);
};
// eval no JavaScript é uma função nativa que executa expressões passadas como string
document.write(`<p>O resultado da operação é ${calc(1100, "-", 1)}</p>`);

// simplificando arrow function com único retorno
const calculadora = (num1, operator, num2) => eval(`${num1} ${operator} ${num2}`);
document.write(`<p>O resultado da operação é ${calculadora(1100, "+", 1)}</p>`);

// IIFE - função imediata (Immediately Invoked Function Expression)
(function () {
  document.write(`<p>Estou sendo executada imediatamente</p>`);
})();

//  IIFE com parametro
const loadUser = (function (user){
    document.white(
        `<p>Carregando as informações do usuarios: <strong>${user}</strong>...</p>`
    )
})("victor");