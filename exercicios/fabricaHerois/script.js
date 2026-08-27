class Heroi {
    constructor(nome, vida, velocidade, forca) {
        this.nome = nome;
        this.vida = vida;
        this.velocidade = velocidade;
        this.forca = forca;
    }

    correr() {
        return `${this.nome} está correndo.`;
    }

    andar() {
        return `${this.nome} está andando.`;
    }

    atacar() {
        return `${this.nome} está atacando.`;
    }

    defender() {
        return `${this.nome} está se defendendo.`;
    }
}


const homemAranha = new Heroi(
    "Homem-Aranha",
    100,
    90,
    80
);

homemAranha.teia = 1;

homemAranha.sentidoAranha = function () {
    return `${this.nome} detectou perigo com o sentido aranha!`;
};


const superman = new Heroi(
    "Superman",
    150,
    100,
    100
);


superman.podeVoar = 1;

superman.visaoCalor = function () {
    return `${this.nome} está usando sua visão de calor!`;
};

const batman = new Heroi(
    "Batman",
    100,
    80,
    75
);

batman.esconder = 1;

batman.investigar = function () {
    return `${this.nome} está investigando um crime.`;
};


document.write(`<h2>Fábrica de Heróis</h2>`);

document.write(`<h3 class = cardbt>${batman.nome}</h3>`);
document.write(`<p class = cardbt>${batman.correr()}</p>`);
document.write(`<p class = cardbt>${batman.investigar()}</p>`);

document.write(`<h3 class = cardsm>${superman.nome}</h3>`);
document.write(`<p class = cardsm>${superman.atacar()}</p>`);
document.write(`<p class = cardsm>${superman.visaoCalor()}</p>`);

document.write(`<h3 class = cardsp>${homemAranha.nome}</h3>`);
document.write(`<p class = cardsp>${homemAranha.defender()}</p>`);
document.write(`<p class = cardsp>${homemAranha.sentidoAranha()}</p>`);