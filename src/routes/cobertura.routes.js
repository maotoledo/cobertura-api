import { Router } from "express";
import {
  getClientes,
  getClient
} from "../controllers/cobertura.controller.js";

const router = Router();

// Routes
router.get("/clientes/", getClientes);
router.get("/clientes/:id_cliente", getClient);

export default router;
