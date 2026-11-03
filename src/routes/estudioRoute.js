import {Router} from "express";
import * as estudioController from "../controllers/estudioController.js";
import {validarId} from "../middlewaresvalidarId.js";

const router = Router();

router.get("/estudios", estudioController.listar);
router.get("/estudios/:id", validarId, estudioController.buscarPorId);
router.post("/estudios", estudioController.criarEstudio);
router.put("/estudios/:id", validarId, estudioController.atualizarEstudio);
router.delete("/estudios/:id", validarId, estudioController.excluirEstudio);

export default router;