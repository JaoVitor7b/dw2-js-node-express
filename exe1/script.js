const listClientes = [
  {
    nome: "Albertin",
    endereco: "Rua Bragança Paulista n 168",
    cpf: 2375495346,
    telefone: 1338218043,
  },
  {
    nome: "Cleidson",
    endereco: "Rua Sete n 143",
    cpf: 3487593053,
    telefone: 1243749537,
  },
  {
    nome: "Betin",
    endereco: "Rua Alisson Campos n 174",
    cpf: 6349284762,
    telefone: 342947392,
  },
];

// Percorrendo a lista de produtos
listClientes.forEach((clientes) => {
  document.write(`<hr>`);
  document.write(`<p>Nome: ${clientes.nome}</p>`);
  document.write(`<p>Endereço: ${clientes.endereco}</p>`);
  document.write(`<p>Clientes: ${clientes.cpf}</p>`);
  document.write(`<p>Telefone: ${clientes.telefone}</p>`);
});

listClientes.push({
  nome: "Arthur",
  endereco: "Lorenzo Noro n 14",
  cpf: 4857304594,
  telefone: 12483940,
});
