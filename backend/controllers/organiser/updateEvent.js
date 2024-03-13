// Controller imports

// Middleware imports

// Model imports
import Event from "../../db/models/events.js";
// import bookmarkEvent from "../../db/models/bookmarkEvents.js";
// import registerEvent from "../../db/models/registerEvents.js";

// Tested and Working

const updateEvent = async (req, res) => {
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

    const findEvent = await Event.findOne({
      where: { id: req.params.id, organiserId: req.user.id },
    });

    if (!findEvent) {
      return res.status(404).json({ message: "Event not found" });
    }

    const update = await Event.update(
      {
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
      },
      { where: { id: req.params.id } }
    );
    return res.status(200).json({ message: "Event updated successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export default updateEvent;
