import { Router } from "express";
const router = Router();

// Controller imports
import {
  getProfile,
  updateProfile,
} from "../../controllers/user/userProfile.js";

// Middleware imports
import isUser from "../../middlewares/auth/isUser.js";

// Model imports
// import bookmarkEvent from "../../db/models/bookmarkEvents.js";
// import Event from "../../db/models/events.js";
// import User from "../../db/models/users.js";

router.get("/profile/:id", getProfile);
router.patch("/profile", isUser, updateProfile);

export default router;
