    // Exibir data e hora atuais
    const dataAtual = new Date();
    document.write("<p>Data e hora atual: " + dataAtual.toString() + "</p>");

    // Criar variável compraInternacional
    let compraInternacional = 500.75;
    document.write("<p>Valor da compra em dólar: $" + compraInternacional.toFixed(2) + "</p>");

    // Conversão para real (supondo 1 USD = 5.20 BRL)
    let cotacao = 5.20;
    let valorEmReais = compraInternacional * cotacao;
    document.write("<p>Valor da compra em reais: R$" + valorEmReais.toFixed(2) + "</p>");

    // Calcular data de entrega (12 dias depois da data atual)
    let dataEntrega = new Date();
    dataEntrega.setDate(dataAtual.getDate() + 12);

    let dia = String(dataEntrega.getDate()).padStart(2, '0');
    let mes = String(dataEntrega.getMonth() + 1).padStart(2, '0');
    let ano = dataEntrega.getFullYear();

    document.write("<p>Data de entrega estimada: " + dia + "/" + mes + "/" + ano + "</p>");