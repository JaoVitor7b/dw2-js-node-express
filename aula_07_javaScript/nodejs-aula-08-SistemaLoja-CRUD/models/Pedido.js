// Model Pedidos
// Um model e uma representação de uma entidade do sistema (Tabela)

import connection from "../config/sequelize-config.js"; //Importando o arquivo de conexão
import  Sequelize  from "sequelize"; //Importando a biblioteca Squelize

// Define a estrutura de uma tabela no banco de dados
const Pedido = connection.define("pedidos", {
  numero: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  valor: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
});

// O metodo .sync(); sincroniza a estrutura model com a tabela no banco de dados
// ({force: false}) -> sincroniza a tabela somente na primeira inicialização evitando perca de dados


// Exportando modulo para iniciar a criação das tabelas no banco de dados
export default Pedido;