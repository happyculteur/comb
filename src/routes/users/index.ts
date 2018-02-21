import { Router } from "express";
import { post } from "./controllers";

const router = Router();

router.post("/users", post);

export default router;
