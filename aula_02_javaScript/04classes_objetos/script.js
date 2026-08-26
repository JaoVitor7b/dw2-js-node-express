//CLASSE DE OBJETOS

class Carro {
  //Nome da classe deve iniciar com a primeira letra maiuscula.

  //Atributos
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }
  //Metodo
  buzinar() {
    return "Beep! Beep!";
  }
}

//Criando uma instancia (objeto) da classe Carro

const carroPopular = new Carro("Fiat", "Uno", "2012");

//Acessando os ATRIBUTOS e METODOS do Objeto
document.write(`<p class="cardjs"> O carro popular ${carroPopular.marca}
  modelo ${carroPopular.modelo}
  é do ano ${carroPopular.ano}
  e quando buzina faz ${carroPopular.buzinar()}</p>`);
