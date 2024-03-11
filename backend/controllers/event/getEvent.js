// Controller imports

// Middleware imports

// Model imports
import Event from "../../db/models/events.js";
// import bookmarkEvent from "../../db/models/bookmarkEvents.js";
// import registerEvent from "../../db/models/registerEvents.js";

// Tested and Working

const getEvent = async (req, res) => {
  try {
    const event = await Event.findOne({ where: { id: req.params.id } });
    if (!event) return res.status(404).json({ message: "Event not found" });
    return res.status(200).json({ event: event });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export default getEvent;
