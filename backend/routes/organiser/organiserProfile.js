import { Router } from "express";
const router = Router();

// Controller imports
import {
  getProfilePublic,
  getProfilePrivate,
  updateProfile,
} from "../../controllers/organiser/organiserProfile.js";

// Middleware imports
import isOrganiser from "../../middlewares/auth/isOrganiser.js";

// Model imports
// import bookmarkEvent from "../../db/models/bookmarkEvents.js";
// import Event from "../../db/models/events.js";
// import User from "../../db/models/users.js";

router.get("/profile/:id", getProfilePublic); // Public route
router.get("/profile", isOrganiser, getProfilePrivate); // Public route
router.patch("/profile", isOrganiser, updateProfile);

export default router;
