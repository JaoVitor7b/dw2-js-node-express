const container = document.getElementById("container");
const btnEscuro = document.getElementById("btnEscuro");
const btnClaro = document.getElementById("btnClaro");

btnEscuro.onclick = () => {
  container.style.backgroundColor = "#121212";
};

btnClaro.onclick = () => {
  container.style.backgroundColor = "#dcdcdc";
};
