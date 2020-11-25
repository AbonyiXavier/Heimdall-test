import { Router } from "express";
import questionTwoController from "../controllers/3-questionThree";

const { lowestIndex } = questionTwoController;

const router = new Router();

router.post("/lowest-index", lowestIndex);

export default router;
