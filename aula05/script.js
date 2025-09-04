document.write("<h3>Manipulando datas:</h3>");
// criar uma instancia da classe Date() do JavaScript

const daAtual = new Date();
document.write(daAtual);

const dia = daAtual.getDate();
document.write(`<p>Hoje é dia: ${dia}</p>`);

const semana = daAtual.getDay();
document.write(`<p>Estamos no ano de: ${semana}</p>`);

const mes = daAtual.getMonth();
document.write(`<p>Estamos no mes: ${mes + 1}</p>`);

const ano = daAtual.getFullYear();
document.write(`<p>Estamos no ano de: ${ano}</p>`);

// adicionando dias meses e anos a data atual.

daAtual.setFullYear(daAtual.setFullYear() + 4);
document.write(`<p>Daqui a 4 anos será: ${daAtual.getFullYear()} </p>`);

const salario = 2300;
const salarioReal = salario.toLocaleString("pt-br", {
  style: "currency",
  currency: "BRL",
});
document.write(`<p>O valor do salário minimo atual é ${salarioReal}</p>`);

// dolar
const salarioDolar = salario.toLocaleString("pt-br", {
  style: "currency",
  currency: "USD",
});
document.write(`<p>O valor do salário minimo atual é ${salarioDolar}</p>`);

const salarioConvertdo = salario * 0.176
document.write(`<p>O valor do salário mínimo atual é 
  ${salarioConvertdo.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  })}
</p>`);

// Formatação de textos
document.write("<h3>Formatação de Strings:</h3>");
const nome = "Joao Vitor";

document.write(`<p>Nome em maiusculas: ${nome.toLocaleUpperCase()}</p>`);

document.write(`<p>Nome em minusculas: ${nome.toLocaleLowerCase()}</p>`);

document.write(`<p>Esse nome tem: ${nome.length} letras.</p>`)

const newName = nome.replace(/\s/g, "")
document.write(`<p>Esse nome tem: ${newName.length}</p>`)