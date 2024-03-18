import { Router } from "express";
const router = Router();

// Controller imports
import { changePassword } from "../../controllers/organiser/changePassword.js";

// Middleware imports
import isOrganiser from "../../middlewares/auth/isOrganiser.js";

// Model imports
// import bookmarkEvent from "../../db/models/bookmarkEvents.js";
// import Event from "../../db/models/events.js";

router.post("/changepassword", isOrganiser, changePassword);

export default router;
