document.write("<h3>Manipulação de Datas</h3>");

//Para começar a manipular datas no javaScript, precisamos primeiro criar uma instancia da classe Date, que é nativa do javaScript

const dataAtual = new Date();

document.write(dataAtual);

//Pegando o dia atual
const dia = dataAtual.getDate();
document.write(`<p class= cardjs>Hoje é dia ${dia}.</p>`);

//Pegando o mês atual
const mes = dataAtual.getMonth() + 1;
document.write(`<p class= cardjs>Hoje é mês ${mes}</p>`);

//Pegando o ano atual
const ano = dataAtual.getFullYear();
document.write(`<p class= cardjs>Estamos no ano ${ano}</p>`);

//Exibindo a data completa
document.write(`<p class= cardjs>Hoje é ${dia}/0${mes}/${ano}</p>`);

document.write("<h3>Adicionando dias, meses e anos a data atual</h3>");

//Adicionando dias, meses e anos a data atual:
dataAtual.setDate(dataAtual.getDate() + 4);
//Exibindo a nova data:
document.write(
  `<p class= cardjs>Daqui a 4 dias será ${dataAtual.getDate()}</p>`,
);

//Adicionando 3 meses a data atual:
dataAtual.setMonth(dataAtual.getMonth() + 4);
//Exibindo a nova data:
document.write(
  `<p class= cardjs>Daqui a 4 meses será ${dataAtual.getMonth()}</p>`,
);

//Adicionando 3 meses a data atual:
dataAtual.setFullYear(dataAtual.getFullYear() + 2);
//Exibindo a nova data:
document.write(
  `<p class= cardjs>Daqui a 2 anos será ${dataAtual.getFullYear()}</p>`,
);

//######################################################################

//Formatacao de moedas
document.write("<h3>Manipulação de Moedas:</h3>");

const futuroSalario = 3000.3;
document.write(`<p class= cardjs>${futuroSalario}</p>`);

//Mostrando casas decimais
document.write(`<p class= cardjs>${futuroSalario.toFixed(2)}</p>`);

//Trocando o indentificador de casas decimais
document.write(`<p class= cardjs>${futuroSalario.toFixed(0)}</p>`);

//Trocando o indentificador de casas decimais
document.write(
  `<p class= cardjs>${futuroSalario.toFixed(2).replace(".", ",")}</p>`,
);

document.write("<h3>Formatando moeda local</h3>");

// Formatando para dolar (R$)
document.write(
  `<p class= cardjs>${futuroSalario.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  })}</p>`,
);

// Formatando para real (R$)
document.write(
  `<p class= cardjs>${futuroSalario.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  })}</p>`,
);

//######################################################################

//Formatacao de Strings
document.write("<h3>Formatando letras</h3>");

const nome = "João Vitor";
//Alterando strings para letra maiuscula
document.write(`<p>${nome.toLocaleUpperCase()}</p>`);
//Alterando strings para letra minuscula
document.write(`<p>${nome.toLocaleLowerCase()}</p>`);

//Colocando as letras iniciais em letras maiusculas
const cidade = "sete barras";
const cidadeFormatada = cidade
  .split(" ")
  .map((palavra) => palavra.charAt(0).toLocaleUpperCase() + palavra.slice(1))
  .join(" ");

//Exibindo
document.write(`<p class= cardjs>Cidade formatada ${cidadeFormatada}</p >`);

//Contatando o Numero de caracteres
document.write(`<p>Seu nome tem ${nome.replace(/\s/g, "").length} letras.</p>`);
