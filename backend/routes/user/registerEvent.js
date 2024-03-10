import { Router } from "express";
const router = Router();

import RegisterEvent from "../../controllers/user/registerEvent.js";
import isUser from "../../middlewares/auth/isUser.js";

import registerEvent from "../../db/models/registerEvents.js";

router.post("/registerevent", isUser, RegisterEvent);

export default router;