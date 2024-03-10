import Event from "../../db/models/events.js";
import bookmarkEvent from "../../db/models/bookmarkEvents.js";
import registerEvent from "../../db/models/registerEvents.js";

const getEventList = async (req, res) => {
  try {
    console.log("Hello");
    let where = new Object();
    if (req.body.college) {
      where.college = req.query.college;
    }
    if (req.body.collegeLocation) {
      where.collegeLocation = req.query.collegeLocation;
    }
    if (req.body.category) {
      where.category = req.query.category;
    }
    if (req.body.organiser) {
      where.organiser = req.query.organiser;
    }
    if (!req.user) {
      const events = await Event.findAll({ where, raw: true });
      return res.status(200).json({ events: events });
    }

    //Testing is remaining
    const events = await Event.findAll({
      where,
      include: [
        {
          model: registerEvent,
          where: { userId: req.user.id },
          as: "registered",
          required: false,
        },
        {
          model: bookmarkEvent,
          where: { userId: req.user.id },
          as: "bookmarked",
          required: false,
        },
      ],
      raw: true,
    });
    console.log("Hello ::: " + events);
    return res.status(200).json({ events: events });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export default getEventList;
