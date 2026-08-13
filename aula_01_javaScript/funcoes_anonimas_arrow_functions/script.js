//FUNCOES ANONIMAS

const { use } = require("react");

const mult = function (x) {
  return x * 2;
};

const x = 15;

document.write(
  `<P ">O resultado da multiplicacao é ${mult(x)}</P>`,
);

//FUNCAO SETA - ARROW FUNCTION
//COM UM UNICO PARAMETRO
//UTILIZA => PARA SUBSTITUIR A PALAVRA FUNCTION NO COD
const triplo = (y) => {
  return y * 3;
};

const y = 100;

document.write(`<P ">O tripo de ${triplo(y)} é</P>`);

//FUNCAO SETA(ARROW FUNCTION) - COM MAIS DE UM PARAMETRO
const calculadora = (num1, operador, num2) => {
  return eval(`${num1} ${operador} ${num2}`);
};


const num1 = 8;
const operador = "*";
const num2 = 2;

document.write(
  `<p ">O resultado de ${num1} ${operador} ${num2} é igual a ${calculadora(num1, operador, num2)}</p>`,
);

//FUNCAO IMEDIATA (IIFE - IMEDIATELY INVOKED FUNCTION EXPRESSION)
const imediata = (function () {
    document.write(`<p ">Estou sendo executada imediatamente</p>`);
})();


// FUNÇÃO IMEDIATA - COM PARÂMETROS
const saudacao = (function (nome) {
    console.log(`Olá, ${nome}! Seja bem-vindo(a)!`);
})("João");

