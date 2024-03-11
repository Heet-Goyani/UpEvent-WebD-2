import { Router } from "express";
const router = Router();

// Controller imports
import createEvent from "../../controllers/event/createEvent.js";

// Middleware imports
import isOrganiser from "../../middlewares/auth/isOrganiser.js";

// Model imports

// Tested and Working

router.post("/create", isOrganiser, createEvent);

export default router;
