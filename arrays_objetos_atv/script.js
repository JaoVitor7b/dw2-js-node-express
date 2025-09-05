// Criando array de objetos com pelo menos 3 clientes
let listaClientes = [
  { nome: "Ana Silva", endereco: "Rua das Flores, 123", cpf: 12345678900 },
  { nome: "Carlos Souza", endereco: "Av. Brasil, 987", cpf: 98765432100 },
  { nome: "Mariana Lima", endereco: "Rua Central, 55", cpf: 45678912300 },
];

// 2. Exibindo clientes com forEach
document.write("<h3>Lista de Clientes:</h3>");
listaClientes.forEach((cliente) => {
  document.write(
    `Nome: ${cliente.nome} - Endereço: ${cliente.endereco} - CPF: ${cliente.cpf}<br>`
  );
});

// 3. Adicionando cliente ao FINAL
listaClientes.push({
  nome: "Pedro Rocha",
  endereco: "Av. Paulista, 1000",
  cpf: 11223344556,
});

document.write("<h3>Após adicionar no FINAL:</h3>");
listaClientes.forEach((cliente) => {
  document.write(
    `Nome: ${cliente.nome} - Endereço: ${cliente.endereco} - CPF: ${cliente.cpf}<br>`
  );
});

// 4. Adicionando cliente no INÍCIO
listaClientes.unshift({
  nome: "Fernanda Costa",
  endereco: "Rua Nova, 222",
  cpf: 99887766554,
});

document.write("<h3>Após adicionar no INÍCIO:</h3>");
listaClientes.forEach((cliente) => {
  document.write(
    `Nome: ${cliente.nome} - Endereço: ${cliente.endereco} - CPF: ${cliente.cpf}<br>`
  );
});
