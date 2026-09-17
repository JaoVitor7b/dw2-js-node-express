//Arquivos com dados de conexão com o banco

//Importando o Sequelize
import Sequelize from "sequelize";

const connetion = new Sequelize({
  // Dados de conexão
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "",
  timezone: "-03:00",
});

//Exportando o modulo
export default connetion;