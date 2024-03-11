// Controller imports

// Middleware imports

// Model imports
import registerEvent from "../../db/models/registerEvents.js";
import Event from "../../db/models/events.js";

const Register = async (req, res) => {
  try {
    const eventId = req.params.id;
    const old = await registerEvent.findOne({
      where: { eventId, userId: req.user.id },
    });
    if (old) {
      let removeRegister = await registerEvent.destroy({
        where: { eventId, userId: req.user.id },
      });
      if (!removeRegister) {
        return res
          .status(400)
          .json({ message: "Event not removed from registered" });
      }
      return res.status(200).json({ message: "Event removed from registered" });
    }

    const newRegister = await registerEvent.create({
      eventId,
      userId: req.user.id,
    });
    if (!newRegister) {
      return res.status(400).json({ message: "Event not registered" });
    }
    return res.status(201).json({ message: "Event registered" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getRegisteredEvents = async (req, res) => {
  try {
    const events = await registerEvent.findAll({
      where: { userId: req.user.id },
      include: Event,
      nest: true,
      raw: true,
    });
    if (!events) return res.status(404).json({ message: "No events found" });
    return res.status(200).json({ events: events });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export { Register, getRegisteredEvents };
