import { Router } from "express";
const router = Router();

// Controller imports
import RegisterEvent from "../../controllers/user/registerEvent.js";

// Middleware imports
import isUser from "../../middlewares/auth/isUser.js";

// Model imports
// import registerEvent from "../../db/models/registerEvents.js";

router.post("/registerevent", isUser, RegisterEvent);

export default router;
