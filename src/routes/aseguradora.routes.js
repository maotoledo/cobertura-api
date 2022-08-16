import { Router } from "express";
import {
  getClientes,
} from "../controllers/aseguradora.controller.js";

const router = Router();

// Routes
router.get("/", getClientes);

export default router;
