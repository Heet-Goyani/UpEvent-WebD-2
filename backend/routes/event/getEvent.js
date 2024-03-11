import { Router } from "express";
const router = Router();

// Controller imports
import getEvent from "../../controllers/event/getEvent.js";

// Middleware imports

// Model imports

// Testing Remaining

router.get("/:id", getEvent);

export default router;