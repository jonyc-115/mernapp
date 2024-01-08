import { Router } from "express";
import { signup, signin, authGoogle } from "../controllers/auth.controller.js";

const router = Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/google", authGoogle);

export default router;
