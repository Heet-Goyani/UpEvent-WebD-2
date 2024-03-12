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

// Auth routes
app.use("/user/auth", userRoutes);
app.use("/organiser/auth", organiserRoutes);
// app.use("/admin/auth", adminRoutes);

// Event routes
app.use("/event", eventListRoutes);
app.use("/event", eventCreateRoutes);
app.use("/event", eventUpdateRoutes);
app.use("/event", getEventRoutes);

// User routes
app.use("/user", userBookmarkRoutes);
app.use("/user", userRegisteredRoutes);
app.use("/user", userProfileRoutes);
// app.use("/user", userRegisteredRoutes);
// app.use("/user", userRegisteredRoutes);

// organiser routes

app.get("/hello", (req, res) => {
  res.send("Hello World from UpEvent!!");
});

// const temp = async () => {
//   try {

//     // const organiser = await Organiser.create({
//     //   email: "himanshukabra2212@gmail.com",
//     //   password: "123456",
//     //   name: "Himanshu Kabra",
//     //   college: "IIIT Surat",
//     //   collegeLocation: "Surat, Gujarat",
//     // });

//     // const user = await Organiser.findOne({
//     //   where: {
//     //     email: "himanshukabra2212@gmail.com",
//     //   },
//     // });

//     // const event = await Event.create({
//     //   organiserId: user.id,
//     //   name: "Event 1",
//     //   description: "This is the first event",
//     //   genre: "technical",
//     //   date: "2022-12-12",
//     //   time: "12:00:00",
//     //   notificationDate: "2022-12-11",
//     //   notificationTime: "12:00:00",
//     //   available: "offline",
//     //   venue: "Venue 1",
//     // });

//     const register = await registerEvent.create({
//       userId: 1,
//       eventId: 1,
//     });

//     const bookmark = await bookmarkEvent.create({
//       userId: 1,
//       eventId: 1,
//     });

//   } catch (error) {
//     console.log(`Error occured ::::::: ${error}`);
//   }
// };

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

    // await sequelize.sync({ force : true });
    // temp();
  })();

  console.log(
    "<<--------------------------------------------------------->>\n\nApplication is running, Use Ctrl + click on following URL :\nhttp://localhost:3000/hello\n\n<<--------------------------------------------------------->>"
  );
});
