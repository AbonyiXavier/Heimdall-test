import { Router } from "express";
import questionOneController from "../controllers/1-questionOne";

const { inputValidation } = questionOneController;

const router = new Router();

router.post("/input-validate", inputValidation);

export default router;
