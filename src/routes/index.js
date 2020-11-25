import { Router } from "express";
import questionOneRoute from "./1-questionOne";
import questionTwoRoute from "./1-questionTwo";

const router = new Router();

router.use("/v1", questionOneRoute);
router.use("/v1", questionTwoRoute);

export default router;
