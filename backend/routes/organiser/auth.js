import { Router } from "express";
const router = Router();

// Controller imports
import { login, register } from "../../controllers/organiser/auth.js";

// Middleware imports

// Model imports

router.post("/login", login);
router.post("/register", register);

export default router;