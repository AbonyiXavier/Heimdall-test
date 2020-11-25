import { Router } from "express";
import questionOneRoute from "./1-questionOne";

const router = new Router();

router.use("/v1", questionOneRoute);

export default router;
