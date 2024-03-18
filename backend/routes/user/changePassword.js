import { Router } from "express";
const router = Router();

// Controller imports
import { changePassword } from "../../controllers/user/changePassword.js";

// Middleware imports
import isUser from "../../middlewares/auth/isUser.js";

// Model imports
// import bookmarkEvent from "../../db/models/bookmarkEvents.js";
// import Event from "../../db/models/events.js";

router.post("/changepassword", isUser, changePassword);

export default router;
