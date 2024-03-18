// Controller imports

// Middleware imports

// Model imports
import User from "../../db/models/users.js";

const changePassword = async (req, res) => {
  try {
    const { newPassword } = req.body;
    const updated = await User.update(
      { password: newPassword },
      { where: { id: req.user.id } }
    );
    if (!updated) {
      return res.status(400).json({ message: "Password not updated" });
    }
    return res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export { changePassword };