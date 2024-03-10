import { Router } from "express";
const router = Router();

import Bookmark from "../../controllers/user/bookmarkEvent.js";
import isUser from "../../middlewares/auth/isUser.js";

// import bookmarkEvent from "../../db/models/bookmarkEvents.js";
// import Event from "../../db/models/events.js";
// import User from "../../db/models/users.js";

router.post("/bookmarkevent", isUser, Bookmark);

export default router;
