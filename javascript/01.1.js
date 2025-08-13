//função simples
function showMessage() {
  document.write("<p>Esta mensagem é exibida usando uma função simples</p>");
}
//invocando a função;
showMessage();

//função com parâmetros;
const message = "Janeiro";
const year = 2023;
function userMessage(a) {
  document.write("<p>O parâmetro usado na função é: " + a + "</p>"); //concatenação
}
userMessage(message); //argumento

function userMessage2(b) {
  document.write(`<p>O parâmetro usado na função é: ${b} </p>`); //template string ou literal string
}

userMessage2(year); //argumento

// variáveis podem ser declaradas de 3 formas diferentes;
// VAR: melhor evitar, pois é um modo antigo de declarar variáveis e é global, podendo causar problemas de escopo/segurança;
var nome = "João";
var nome = "Maria";
// LET: modo de variável local, ou seja, acessível apenas dentro do escopo onde foi declarada - utilize quando for necessário reatribuir o valor da variável;
// declaração != atribuição;
let idade = 30;
// CONST: variável constante, ou seja, não pode ser alterada após a declaração (não pode ser reatribuídam, mas sempre deve ser inicializado na declaração);
const cidade = "São Paulo";
//const cidade = "Registro";

// função com mais de um parâmetro
const n1 = 10;
const n2 = 12;

function mult(n1, n2) {
    // essa função recebe dois parâmetros
  let result = n1 * n2;
  document.write(`A multiplicação de ${n1} e ${n2} é igual a ${result}.`);
}
mult(n1, n2);

const num1 = 10;
const num2 = 12;

function div(num1, num2) {
    return num1 / num2
}
document.while (`<p>A divisão dos valores é ${num1} e ${num2} é igual a ${div(num1, num2)}.</p>`);

const nember = 7

function parImpar(nember) {
    if (nember % 2 == 0) {
        return "par"
    }else{
        return "impar";
    }
}
document.while (`<p>o numero e ${nember} é igual a <strong>${parImpar(nember)}</strong>.</p>`);