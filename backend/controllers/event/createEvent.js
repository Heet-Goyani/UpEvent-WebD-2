// Controller imports

// Middleware imports

// Model imports
import Event from "../../db/models/events.js";
// import bookmarkEvent from "../../db/models/bookmarkEvents.js";
// import registerEvent from "../../db/models/registerEvents.js";

// Tested and Working

const createEvent = async (req, res) => {
  try {
    const {
      name,
      description,
      genre,
      date,
      time,
      notificationDate,
      notificationTime,
      available,
      venue,
      meetLink,
      personalizedRegisteration,
      registerationLink,
      coverImage,
      reachUsAt,
      instagram,
      facebook,
      twitter,
      linkedin,
    } = req.body;
    const event = await Event.create({
      name,
      description,
      genre,
      date,
      time,
      notificationDate,
      notificationTime,
      available,
      venue,
      meetLink,
      personalizedRegisteration,
      registerationLink,
      coverImage,
      reachUsAt,
      instagram,
      facebook,
      twitter,
      linkedin,
      organiserId: req.user.id,
    });
    return res.status(200).json({ message: "Event created successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export default createEvent;
