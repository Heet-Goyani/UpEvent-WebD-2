import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import { sequelize, testConnection } from "./db/connection.js";

// import User from "./db/models/users.js";
import Organiser from "./db/models/organisers.js";
import Event from "./db/models/events.js";
import registerEvent from "./db/models/registerEvents.js";
import bookmarkEvent from "./db/models/bookmarkEvents.js";

dotenv.config();

import userRoutes from "./routes/user/auth.js";
import organiserRoutes from "./routes/organiser/auth.js";
import eventListRoutes from "./routes/event/eventList.js";

// import adminRoutes from "./routes/admin/auth.js";

// import eventRoutes from "./routes/event/event.js";
// import userNotificationRoutes from "./routes/user/notification.js";

// import userFeedbackRoutes from "./routes/user/feedback.js";
import userBookmarkRoutes from "./routes/user/bookmarkEvent.js";

const app = express();
app.use(bodyParser.json());

app.use(cors());


// Auth routes
app.use("/user/auth", userRoutes);
app.use("/organiser/auth", organiserRoutes);
// app.use("/admin/auth", adminRoutes);


// Event routes
app.use("/event", eventListRoutes);

// User routes
app.use("/user", userBookmarkRoutes);
// app.use("user/registered", userRegisteredRoutes);


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
    await sequelize.sync({ alter: true });
    // temp();
  })();

  console.log(
    "<<--------------------------------------------------------->>\n\nApplication is running, Use Ctrl + click on following URL :\nhttp://localhost:3000/hello\n\n<<--------------------------------------------------------->>"
  );
});
