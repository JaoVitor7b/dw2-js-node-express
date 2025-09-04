//  CLASSES JAVASCRIP
//  nomes de classe devem ser colocados em letra maiuscula.
class Carro {
  // para colocar os ATRIBUTOS da classe se utiliza o metodo "constructor"

  constructor(marca, modelo, ano) {
    // this. repersenta a instancia do objeto (o valor que for colocado sera atribuido a instancia.)
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }
  // METODOS
  buzinar() {
    return "Beep! Beep!";
  }
}

// criando instancias (objetos) derivadas da classe carro
const carroPopular = new Carro("Fiat", "Uno", 2012);
document.write(
  `<p>carro ${carroPopular.marca} modelo ${
    carroPopular.modelo
  } ano de ${carroPopular.ano}. Qunado buzina faz ${carroPopular.buzinar()}</p>`
);

// Objeto - Carro Esportivo
const carroEsportivo = new Carro();
carroEsportivo.marca = "Chevrolet"
carroEsportivo.modelo = "Camaro"
carroEsportivo.ano = 2012

document.write(
  `<p>carro ${carroEsportivo.marca} modelo ${
    carroEsportivo.modelo
  } ano de ${carroEsportivo.ano}. Qunado buzina faz ${carroEsportivo.buzinar()}</p>`
);

// como  adicioner um novo atributo
carroEsportivo.corNeon = "Azul";

// Adicionar um novo metedos
carroEsportivo.turbo = () => {
  return "Vruuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuummmmm!!!";
};

document.write(`<p>O carro ${carroEsportivo.marca} ${carroEsportivo.modelo} tambem possui neon da cor ${carroEsportivo.corNeon}. E quando ativa o turbo faz ${carroEsportivo.turbo()} </p>`);