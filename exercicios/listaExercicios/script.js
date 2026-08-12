//1 -FUNCAO SIMPLES
function informaGeral (){
  document.write("Joao");
  document.write("18")
  document.write("Sete Barras")
}

//2 - FUNÇÃO COM PARAMETRO
function divisao(n1, n2) {
  return n1 / n2;
}
const n1 = 3;
const n2 = 9;

document.write(`<p>O resultado da divisão é ${divisao(n1, n2)}</p>`);


//3 - FUNCAO COM RETORNO
function multiplicar(n1, n2, n3) {
  return n1 * n2 * n3;
}
const num1 = 4;
const num2 = 3;
const num3 = 9;

document.write(`<p>O resultado da multiplicação é ${multiplicar(num1, num2, num3)}</p>`);

//4 -FUNCAO COM MAIS DE UM RETORNO
function anaIdade(idaAn) {
  if (idaAn >= 18) {
    return "Maior de Idade";
  } else {
    return "Menor de Idade";
  }
}
const idade = 18;

document.write(`<p>Você é ${anaIdade(idade)}</p>`);

//5 - FUNCAO ANONIMA
const nota1 = 8;
const nota2 = 2;

const resultado = function(x) {
  if (x > 5) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
};

document.write(`<p>O aluno foi ${resultado(nota1 / nota2)}</p>`);

//6 - Arrow function com parâmetro único 
const triplo = (y) => {
  return y * 8;
};

const y = 185;

document.write(`<P ">O tripo de ${triplo(y)} é</P>`);