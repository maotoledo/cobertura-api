import { Router } from "express";
import {
  getClientes,
  getClient,
  createCliente,
  getMarcas,
  getCoberturas
} from "../controllers/cobertura.controller.js";
import auth from '../middleware/auth.js'

const router = Router();

// Routes
router.get("/clientes/", auth, getClientes);
router.get("/clientes/:id_cliente", auth, getClient);
router.post("/cliente", auth, createCliente);
router.get("/marcas/", auth, getMarcas);
router.get("/coberturas/", auth, getCoberturas);

export default router;
