import express from "express";

import mysql from "mysql2/promise";

import connection, { databaseConfig } from "./config/sequelize-config.js";

import Produto from "./models/Produto.js";
import Cliente from "./models/Cliente.js";
import Pedido from "./models/Pedido.js";

import ProdutoController from "./controllers/ProdutoController.js";

import PedidoController from "./controllers/Pedido.Controller.js";

import ClienteController from "./controllers/ClienteController.js";

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => res.render("index"));
app.use(ProdutoController, PedidoController, ClienteController);

async function iniciar() {
  // Cria o banco antes de conectar o Sequelize a ele.
  const servidor = await mysql.createConnection({
    host: databaseConfig.host,
    user: databaseConfig.username,
    password: databaseConfig.password,
  });
  try {
    await servidor.query(
      `CREATE DATABASE IF NOT EXISTS \`${databaseConfig.database}\``,
    );
  } finally {
    await servidor.end();
  }

await connection.authenticate();
await Cliente.sync();
await Produto.sync();
await Pedido.sync();
  console.log(
    `Banco de dados ${databaseConfig.database} conectado com sucesso!`,
  );

  const port = Number(process.env.PORT) || 8080;
  app.listen(port, () => {
    console.log(`Servidor iniciado em http://localhost:${port}`);
  });
}

iniciar().catch((error) => {
  console.error("Erro ao iniciar a aplicação:", error);
  process.exitCode = 1;
});
