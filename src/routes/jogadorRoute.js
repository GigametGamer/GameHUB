import { Router } from "express";
import * as jogadorController from "../controllers/jogadorControllers.js";
import { validarId } from "../utils/validacoes.js";

const router = Router();

router.get("/", jogadorController.listar);
router.get("/:id", validarId, jogadorController.buscarPorId);
router.post("/", jogadorController.criar);
router.put("/:id", validarId, jogadorController.atualizar);
router.delete("/:id", validarId, jogadorController.excluir);

export default router;
