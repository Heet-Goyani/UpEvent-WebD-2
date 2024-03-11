import { Router } from "express";
const router = Router();

// Controller imports
import updateEvent from "../../controllers/event/updateEvent.js";

// Middleware imports
import isOrganiser from "../../middlewares/auth/isOrganiser.js";

// Model imports

router.patch("/update/:id", isOrganiser, updateEvent);

export default router;
