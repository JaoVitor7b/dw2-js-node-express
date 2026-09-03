const dataAtual = new Date();

document.write(`<h2 class=card>Compra Internacional</h2>
    <p class=cardjs>
        Data e hora atual:
        ${dataAtual.toLocaleString("pt-BR")}
    </p>
`);

const compraInternacional = 500.75;
const valorDolar = compraInternacional.toLocaleString("en-US", {
  style: "currency",
  currency: "USD",
});

document.write(`
    <p class=cardjs>Valor da compra: ${valorDolar}</p>
`);

const cotacaoDolar = 5.4;
const valorReal = compraInternacional * cotacaoDolar;
const valorRealFormatado = valorReal.toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL",
});

document.write(`
    <p class=cardjs>Valor convertido: ${valorRealFormatado}</p>
`);

const dataEntrega = new Date();
dataEntrega.setDate(dataEntrega.getDate() + 12);

document.write(`
    <p class=cardjs>
        Data prevista de entrega:
        ${dataEntrega.toLocaleDateString("pt-BR")}
    </p>
`);

document.write(`<h2 class=card>Formatação do nome</h2>`);

// 5. Formatação do nome
let nomeCliente = "jOÃO vItOR rOsA";

nomeCliente = nomeCliente.toLowerCase();

nomeCliente = nomeCliente
  .split(" ")
  .map((nome) => nome.charAt(0).toUpperCase() + nome.slice(1))
  .join(" ");

document.write(`<p class=cardjs>Cliente: ${nomeCliente}</p>
`);
