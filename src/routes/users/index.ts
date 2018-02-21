import { Router } from "express";
import { post } from "../../models/users";

const router = Router();

router.post("/users", post);

export default router;
