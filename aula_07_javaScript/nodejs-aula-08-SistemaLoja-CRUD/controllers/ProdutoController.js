// Importando o framework Express
import express from "express";
// router(); método do Express para criar rotas
const router = express.Router();

import Produto from "../models/Produto.js";

// ROTA PEDIDOS
router.get("/produtos", async (req, res) => {
  try {
    const produtos = await Produto.findAll();
    res.render("produtos", { produtos });
  } catch (error) {
    console.error("Erro ao consultar produtos:", error);
    res.status(500).send("Erro ao carregar os produtos.");
  }
});


export default router;