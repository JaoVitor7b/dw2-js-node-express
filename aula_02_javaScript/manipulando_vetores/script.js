//Metodos de Manipulação de Vetores

let frutas = ["Banana", "Maçã", "Uva"];

document.write(`<p>Os tipos de itens do nosso vetor são: ${frutas}</p>`);

frutas[3] = `Morango`;

document.write(`<p>A lista agora é: ${frutas}</p>`);

//MÉTODO PUSH: Insere um novo elemento no Final do Vetor
frutas.push(`Abacaxi`);

document.write(`<p>A lista agora é: ${frutas}</p>`);

//METODO UNSHIFT: Insere um novo elemento no inicio do vetor
// frutas[0] = `Pera`

frutas.unshift(`Pera`);
document.write(`<p>A lista agora é: ${frutas}</p>`);

//METODO LENGTH: Retorna o numero de elementos do veotor

document.write(`<p>Agora temos ${frutas.length} frutas.</p>`);

//METODO SORT: Ordena os itens do vetor
document.write(`<p>O primeiro item da lista é ${frutas[0]}</p>`);

let frutasOdenadas = frutas.sort();

document.write(`<p>O primeiro item da lista agora é: ${frutasOdenadas[0]}</p>`);

document.write(`<p>A lista ordenada agora é: ${frutasOdenadas}</p>`);

//METODO SORT: Ordenado em ordem Crescente e Decrescente
let numeros = [6, 8, 2, 9, 3, 800, 200];

document.write(`<p>Os numeros são: ${numeros}</p>`);

//Numeros Ordenados
document.write(`<p>Os numeros ordenados são: ${numeros.sort()}</p>`);

// ORDENANDO CORRETAMENTE OS NUMERO
// ORDEM CRESCENTE
document.write(`<p>Os numeos são: ${numeros.sort((a, b) => a - b)}</p>`);

// ORDEM DECRESCENTE
document.write(`<p>Os numeos são: ${numeros.sort((a, b) => b - a)}</p>`);