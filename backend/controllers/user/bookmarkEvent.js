// Controller imports

// Middleware imports

// Model imports
import bookmarkEvent from "../../db/models/bookmarkEvents.js";
import Event from "../../db/models/events.js";

const Bookmark = async (req, res) => {
  try {
    const eventId = req.params.id;
    const old = await bookmarkEvent.findOne({
      where: { eventId, userId: req.user.id },
    });
    if (old) {
      let removeBookmark = await bookmarkEvent.destroy({
        where: { eventId, userId: req.user.id },
      });
      if (!removeBookmark) {
        return res
          .status(400)
          .json({ message: "Event not removed from bookmark" });
      }
      return res.status(200).json({ message: "Event removed from bookmark" });
    }

    const newBookmark = await bookmarkEvent.create({
      eventId,
      userId: req.user.id,
    });
    if (!newBookmark) {
      return res.status(400).json({ message: "Event not bookmarked" });
    }
    return res.status(201).json({ message: "Event bookmarked" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getBookmarkedList = async (req, res) => {
  try {
    const events = await bookmarkEvent.findAll({
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

const getBookmarked = async (req, res) => {
  try {
    const eventId = req.params.id;
    const event = await bookmarkEvent.findOne({
      where: { eventId, userId: req.user.id },
    });
    if (!event) return res.status(404).json({ message: "Event not found" });
    return res.status(200).json({ events: event });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export { Bookmark, getBookmarkedList, getBookmarked };
