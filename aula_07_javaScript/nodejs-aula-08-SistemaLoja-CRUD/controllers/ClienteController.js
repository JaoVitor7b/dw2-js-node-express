// Importando o framework Express
import express from "express";
// Importando o Model
import Cliente from "../models/Cliente.js";

// router(); método do Express para criar rotas
const router = express.Router();

// ROTA CLIENTES
router.get("/clientes", function (req, res) {
  // Selecionando todos os clientes do banco de dados
  Cliente.findAll().then((clientes) => {
    res.render("clientes", {
// Enviando a listade clientes para pagina HTML
      clientes: clientes,
    });
  }).catch(error => {
    console.log(`Ocorreu um erro ao consultar a tabela clientes. Erro: ${error}`)
  })
});

// Exportando o módulo
export default router;
