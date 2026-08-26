//OBJETO
const produto = {
  nome: "Computador",
  marca: "Lenovo",
  preco: "3000",
  descricao: "Possui I7 12300hx e 16gb ram",
};

document.write(`<p>${produto}</p>`);

//Acessando os atributos do Objeto
document.write(
  `<p>${produto.nome},${produto.marca}, ${produto.preco} <br> ${produto.descricao}</p>`,
);

//Array de Objetos
document.write("<h3>Array de Objetos:</h3>");
const listaProdutos = [
  {
    nome: "Computador",
    marca: "Lenovo",
    preco: "3000",
    descricao: "Possui I7 12300hx e 16gb ram",
  },
  {
    nome: "Tablet",
    marca: "Samsung",
    preco: "2000",
    descricao: "Possui Exnnos 2400 e 8gb ram",
  },
  {
    nome: "Celular",
    marca: "Iphone",
    preco: "13000",
    descricao: "Possui A13 Bayonic 16gb ram",
  },
];

//Exibindo as informações dos produtos com forEach
document.write(`<h3>Produtos em promoção:</h3>`);

listaProdutos.forEach(produto => {
    document.write(`<div class="cardjs"
        Produto: ${produto.nome}<br>
        Marca: ${produto.marca}<br>
        Preço: ${produto.preco}<br>
        Descrição: ${produto.descricao}<br><br>
    </div   >`)
})
