import { Router } from "express";
const router = Router();

// Controller imports
import {Register,getRegisteredList,getRegistered} from "../../controllers/user/registerEvent.js";

// Middleware imports
import isUser from "../../middlewares/auth/isUser.js";

// Model imports
// import registerEvent from "../../db/models/registerEvents.js";

router.post("/registerevent/:id", isUser, Register);
router.get("/registerevent/:id", isUser, getRegistered);
router.get("/registerevent", isUser, getRegisteredList);

export default router;
