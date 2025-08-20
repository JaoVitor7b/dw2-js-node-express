  function alternarTema() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      localStorage.setItem("tema", "escuro");
    } else {
      localStorage.setItem("tema", "claro");
    }
  }

  // Carregar tema salvo
  window.onload = function () {
    if (localStorage.getItem("tema") === "escuro") {
      document.body.classList.add("dark");
      document.getElementById("toggle").checked = true;
    }
  };

  document.getElementById("toggle").addEventListener("change", alternarTema);

    // --- 1. Função de Saudação ---
    function saudacaoPersonalizada(nome) {
      document.write(`<p>Olá, <b>${nome}</b>! Bem-vindo(a) à Calculadora Universal!<br><br></p>`);
    }

    let nomeUsuario = prompt("Digite seu nome:");
    saudacaoPersonalizada(nomeUsuario);

    // --- 2. Operações Matemáticas ---
    function operacaoMatematica(num1, operador, num2) {
      let resultado;
      switch (operador) {
        case '+': resultado = num1 + num2; break;
        case '-': resultado = num1 - num2; break;
        case '*': resultado = num1 * num2; break;
        case '/': resultado = num1 / num2; break;
        default: resultado = "Operador inválido";
      }
      document.write(`<p>O resultado de ${num1} ${operador} ${num2} é <b>${resultado}</b>.<br><br></p>`);
    }

    let n1 = Number(prompt("Digite o primeiro número:"));
    let operador = prompt("Digite a operação (+, -, *, /):");
    let n2 = Number(prompt("Digite o segundo número:"));
    operacaoMatematica(n1, operador, n2);

    // --- 3. Função Anônima (Dobro) ---
    const calcularDobro = function (numero) {
      return numero * 2;
    };
    let valorDobro = Number(prompt("Digite um número para calcular o DOBRO:"));
    document.write(`<p>O dobro de <b>${valorDobro}</b> é <b>${calcularDobro(valorDobro)}</b>.<br><br><p>`);

    // --- 4. Arrow Function (Metade) ---
    const calcularMetade = (numero) => numero / 2;
    let valorMetade = Number(prompt("Digite um número para calcular a METADE:"));
    document.write(`<p>A metade de <b>${valorMetade}</b> é <b>${calcularMetade(valorMetade)}</b>.<br><br><p>`);

    // --- 5. IIFE ---
    (function () {
      document.write("<b>Calculadora Universal pronta para uso!</b>");
    })();