//CLASSES NO JAVASCRIPT 

    class Carro {

        //Nome de classes devem iniciar com a primeira letra maiúscula. 

        //ATRIBUTOS: 

        constructor(marca, modelo, ano) {

            this.marca = marca; 
            this.modelo = modelo; 
            this.ano = ano; 
        }

        //MÉTODOS: 

        buzinar() {
            return "Beep! Beep!"; 
        }
    }

    //Criando uma instância (obejto) da classe Carro:
    const carroPopular = new Carro("Fiat", "Uno", "2012"); 

    //Acessando os ATRIBUTOS e MÉTODOS do objeto: 
    document.write(`<p> O carro ${carroPopular.marca}, modelo${carroPopular.modelo} é do ano: ${carroPopular.ano} e quando ele buzina faz: ${carroPopular.buzinar()}</p>`)

    const carroEsportivo = new Carro("Ferrai", "Spider", "Ano"); 
    document.write(`<p>O carro ${carroEsportivo.marca}, ${carroEsportivo.modelo} é do ano: ${carroEsportivo.ano} e faz ${carroEsportivo.buzinar()}`)

    //CRIANDO UMA NOVA INSTANCIA: Carro conversível: 

    const carroConversivel = new Carro(); // - INSTÃNCIA
    carroConversivel.marca = "Chevrolet"; 
    carroConversivel.modelo = "Camaro"; 
    carroConversivel.ano = "2026";
    
    //Adicionando um novo atributo (não previsto na classe): 
    carroConversivel.corNeon = "Azul"; 

    //Adicionando um novo método (não previsto na classe):
    carroConversivel.turbo = function () {
        return "Vrummm! O carro está acelerando!!!"; 
    }; 

   document.write(
    `O carro ${carroConversivel.marca} ${carroConversivel.modelo} tem neo da cor: ${carroConversivel.corNeon},`
   ); 

   document.write(
    `<p> ${carroConversivel.turbo()}</p>`
   ); 