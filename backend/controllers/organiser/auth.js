import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import Organiser from "../../db/models/organisers.js";

// File testing done.

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const old = await Organiser.findOne({
      where: { email },
    });
    if (!old) {
      return res.status(404).json({ message: "User doesn't exist" });
    }
    if (!bcrypt.compareSync(password, old.password)) {
      return res.status(400).json({ message: "Invalid credentials" });
    } else {
      const token = jwt.sign(
        { email: old.email, id: old.id, role: "organiser" },
        process.env.JWT_SECRET
      );
      return res.status(200).json({ token });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const old = await Organiser.findOne({
      where: { email },
    });
    if (old) {
      return res.status(400).json({ message: "User already exists" });
    }
    const newUser = await Organiser.create({
      email,
      password,
    });
    const token = jwt.sign(
      { email: newUser.email, id: newUser.id, role: "organiser" },
      process.env.JWT_SECRET
    );
    return res.status(201).json({ token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
