import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import { sequelize, testConnection } from "./db/connection.js";

const app = express();
app.use(bodyParser.json());
app.use(cors());

dotenv.config();

// Model imports
import User from "./db/models/users.js";
import Organiser from "./db/models/organisers.js";
import Event from "./db/models/events.js";
import registerEvent from "./db/models/registerEvents.js";
import bookmarkEvent from "./db/models/bookmarkEvents.js";

// Auth imports
import userRoutes from "./routes/user/auth.js";
import organiserRoutes from "./routes/organiser/auth.js";

// Event route imports
import getEventRoutes from "./routes/event/getEvent.js";
import eventListRoutes from "./routes/event/eventList.js";
import eventCreateRoutes from "./routes/event/createEvent.js";
import eventUpdateRoutes from "./routes/event/updateEvent.js";

// User route imports
import userBookmarkRoutes from "./routes/user/bookmarkEvent.js";
import userRegisteredRoutes from "./routes/user/registerEvent.js";
import userProfileRoutes from "./routes/user/userProfile.js";

// Organiser route imports
import organiserProfileRoutes from "./routes/organiser/organiserProfile.js";

// Auth routes
app.use("/user/auth", userRoutes);
app.use("/organiser/auth", organiserRoutes);

// Event routes
app.use("/event", eventListRoutes);
app.use("/event", eventCreateRoutes);
app.use("/event", eventUpdateRoutes);
app.use("/event", getEventRoutes);

// User routes
app.use("/user", userBookmarkRoutes);
app.use("/user", userRegisteredRoutes);
app.use("/user", userProfileRoutes);

// organiser routes
app.use("/organiser", organiserProfileRoutes);

app.get("/hello", (req, res) => {
  res.send("Hello World from UpEvent!!");
});

app.listen(3000, () => {
  testConnection();
  (async () => {
    bookmarkEvent.belongsTo(Event, {
      foreignKey: "eventId",
      onDelete: "CASCADE",
    });
    registerEvent.belongsTo(Event, {
      foreignKey: "eventId",
      onDelete: "CASCADE",
    });
    bookmarkEvent.belongsTo(User, {
      foreignKey: "userId",
      onDelete: "CASCADE",
    });
    registerEvent.belongsTo(User, {
      foreignKey: "userId",
      onDelete: "CASCADE",
    });

    // await sequelize.sync({ force: true });
  })();
  console.log(
    "<<--------------------------------------------------------->>\n\nApplication is running, Use Ctrl + click on following URL :\nhttp://localhost:3000/hello\n\n<<--------------------------------------------------------->>"
  );
});
