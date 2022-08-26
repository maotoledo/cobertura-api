import { Router } from "express";
import {
  getClientes,
  getClient,
  createCliente,
  getMarcas,
  getCoberturas
} from "../controllers/cobertura.controller.js";

const router = Router();

// Routes
router.get("/clientes/", getClientes);
router.get("/clientes/:id_cliente", getClient);
router.post("/cliente", createCliente);
router.get("/marcas/", getMarcas);
router.get("/coberturas/", getCoberturas);

export default router;
