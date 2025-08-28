// Objetos literais possuem atributos e métodos.
// Objeto literal não deriva de classe.

// Dinamicamente tipada: declara o tipo das variáveis conforme o contexto ao qual se encontra.
const pessoa = {};
document.write(typeof pessoa); // object

const carro = {
  modelo: "supra",
  cor: "branco",
  acelerar() {
    return "acelerando....";
  },
  frear() { // corrigido de "freiar" para "frear"
    return "desacelerando.....";
  },
};

// Exibindo as propriedades do objeto
document.write(`<p>O modelo do carro é ${carro.modelo}.</p>`);
document.write(`<p>A cor do carro é ${carro.cor}.</p>`);

// Chamando os métodos do objeto
document.write(`<p>${carro.acelerar()}</p>`);
document.write(`<p>${carro.frear()}</p>`);

const produto = {
  nome: "Computador",
  marca: "Lenovo",
  preco: 3000,
  descricao: "PC moderno com ótimo desempenho",
};

document.write(
  `<p>O ${produto.nome} da marca ${produto.marca} custa apenas R$ ${produto.preco}! ${produto.descricao}</p>`
);

const listProdutos = [
  {
    nome: "Computador",
    marca: "Lenovo",
    preco: 3000,
    descricao: "PC moderno com ótimo desempenho",
  },
  {
    nome: "Tablet",
    marca: "Samsung",
    preco: 2000,
    descricao: "Modernidade e produtividade na palma da mão!",
  },
  {
    nome: "Celular",
    marca: "Apple",
    preco: 6000,
    descricao: "Praticidade e elegância aonde for que esteja!",
  },
];

// Percorrendo a lista de produtos
listProdutos.forEach((produto) => {
  document.write(`<hr>`);
  document.write(`<p>Produto: ${produto.nome}</p>`);
  document.write(`<p>Marca: ${produto.marca}</p>`);
  document.write(`<p>Preço: R$${produto.preco}</p>`);
  document.write(`<p>Descrição: ${produto.descricao}</p>`);
});
