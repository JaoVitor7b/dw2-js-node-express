// Importando o framework Express
import express from "express";
// router(); método do Express para criar rotas
const router = express.Router();

import Pedido from "../models/Pedido.js";

// ROTA PEDIDOS
router.get("/pedidos", async (req, res) => {
  try {
    const pedidos = await Pedido.findAll();
    res.render("pedidos", { pedidos });
  } catch (error) {
    console.error("Erro ao consultar pedidos:", error);
    res.status(500).send("Erro ao carregar os pedidos.");
  }
});


export default router;