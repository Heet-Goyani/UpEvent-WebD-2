import { Router } from "express";
const router = Router();

// Controller imports
import getEventList from "../../controllers/event/eventList.js";

// Middleware imports

// Model imports

router.post("/list", getEventList);

export default router;
