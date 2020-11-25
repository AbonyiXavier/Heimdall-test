import { Router } from "express";
import questionTwoController from "../controllers/2-questionTwo";

const { removeItem } = questionTwoController;

const router = new Router();

router.patch("/remove-item", removeItem);

export default router;
