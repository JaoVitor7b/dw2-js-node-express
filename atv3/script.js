let vetor = ["laranja","maçã","banana"];
document.write(`<p>Nosso vetor: ${vetor}</p>`);
 
// adicionando item ao vetor | indíces que não existem adicionam elementos, índices que já existem substituem elementos
vetor[3] = "morango";
vetor[0] = "pera";
document.write(`<p>Nosso vetor: ${vetor}</p>`);
 
// método PUSH insere um novo elemento no final do vetor
vetor.push("abacaxi");
document.write(`<p>Nosso vetor: ${vetor}</p>`);
 
// método UNSHIFT insere um novo elemento no início do vetor
vetor.unshift("laranja");
document.write(`<p>Nosso vetor: ${vetor}</p>`);
 
// método LENGHT conta o número de elementos do vetor
let nembers = [6, 8, 2, 9, 3, 800, 200];
document.write(`<p>Nosso numero agora é o: ${nembers}</p>`)
document.write(`<p>Nosso numero agora é: ${nembers.length}</p>`)

document.write(`<p>O primeiro elemento do vetor é: ${nembers[0]}</p>`)

let nembersOrdenado = nembers.sort()
document.write(`<p>O valor ordenado é: ${nembersOrdenado}</p>`)

document.write(`<p> A lista de valores ordenados são: ${vetor.sort()}</p>`)

document.write(`<p>Crescente: ${nembers.sort((a, b) => a - b)}</p>`)

document.write(`<p>Decrescente: ${nembers.sort((a, b) => b - a)}</p>`)