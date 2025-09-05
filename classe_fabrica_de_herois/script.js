// Classe base
class Heroi {
    constructor(nome, vida, velocidade, forca) {
        this.nome = nome;
        this.vida = vida;
        this.velocidade = velocidade;
        this.forca = forca;
    }

    correr() {
        return `${this.nome} está correndo!`;
    }
    andar() {
        return `${this.nome} está andando!`;
    }
    atacar() {
        return `${this.nome} está atacando!`;
    }
    defender() {
        return `${this.nome} está se defendendo!`;
    }
}

// Homem-Aranha
class HomemAranha extends Heroi {
    constructor(nome, vida, velocidade, forca, teia) {
        super(nome, vida, velocidade, forca);
        this.teia = teia; // 0 ou 1
    }

    sentidoAranha() {
        return `${this.nome} <p class="m1">detectou perigo com seu sentido aranha!</p>`;
    }
}

// Superman
class Superman extends Heroi {
    constructor(nome, vida, velocidade, forca, podeVoar) {
        super(nome, vida, velocidade, forca);
        this.podeVoar = podeVoar; // 0 ou 1
    }

    visaoCalor() {
        return `${this.nome} <p class="m1">está usando a visão de calor!</p>`;
    }
}

// Batman
class Batman extends Heroi {
    constructor(nome, vida, velocidade, forca, esconder) {
        super(nome, vida, velocidade, forca);
        this.esconder = esconder; // 0 ou 1
    }

    investigar() {
        return `${this.nome} <p class="m1"> está investigando um crime!</p>`;
    }
}

// Instanciando heróis
let homemAranha = new HomemAranha(`<p class="miranha">Homem-Aranha`, 100, 80, 70, 1);
let superman = new Superman(`<p class="super">Superman`, 200, 90, 100, 1);
let batman = new Batman(`<p class="bat">Batman`, 120, 70, 85, 0);

// Testando atributos e métodos
document.write(`<h3 class="m1">Testando os Heróis:</h3>`);
document.write(homemAranha.sentidoAranha() + "<br>");
document.write(superman.visaoCalor() + "<br>");
document.write(batman.investigar() + "<br>");
document.write(batman.correr() + "<br>");
