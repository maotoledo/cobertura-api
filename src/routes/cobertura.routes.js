import { Router } from "express";
import {
  getClientes,
  getClient,
  createCliente
} from "../controllers/cobertura.controller.js";

const router = Router();

// Routes
router.get("/clientes/", getClientes);
router.get("/clientes/:id_cliente", getClient);
router.post("/cliente", createCliente);

export default router;
