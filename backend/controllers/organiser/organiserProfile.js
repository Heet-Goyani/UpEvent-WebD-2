// Controller imports

// Middleware imports

// Model imports
import Organiser from "../../db/models/organisers.js";

const getProfilePublic = async (req, res) => {
  try {
    const id = req.params.id;
    const organiser = await Organiser.findOne({
      where: { id },
      attributes: { exclude: ["password"] },
    });
    if (!organiser)
      return res.status(404).json({ message: "Organiser not found" });
    return res.status(200).json({ organiser: organiser });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getProfilePrivate = async (req, res) => {
  try {
    const id = req.user.id;
    const organiser = await Organiser.findOne({
      where: { id },
      attributes: { exclude: ["password"] },
    });
    if (!organiser)
      return res.status(404).json({ message: "Organiser not found" });
    return res.status(200).json({ organiser: organiser });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const updateProfile = async (req, res) => {
  try {
    const id = req.user.id;
    const { name, profilePic, college, instagram, linkedin, facebook, twitter } = req.body;
    const organiser = await Organiser.findOne({
      where: { id },
    });
    if (!organiser)
      return res.status(404).json({ message: "Organiser not found" });
    const updatedOrganiser = await Organiser.update(
      {
        name,
        profilePic,
        college,
        instagram,
        linkedin,
        facebook,
        twitter,
      },
      {
        where: { id },
      }
    );
    if (!updatedOrganiser)
      return res.status(400).json({ message: "Profile not updated" });
    return res.status(200).json({ message: "Profile updated" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export { getProfilePublic, getProfilePrivate, updateProfile };
