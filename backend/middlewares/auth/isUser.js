import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const isUser = (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({ message: "Unauthorized" });
      } else if (user.role === "user") {
        req.user = user;
        next();
      } else {
        return res.status(403).json({ message: "Unauthorized" });
      }
    });
  } else {
    return res.status(403).json({ message: "Unauthorized" });
  }
};

export default isUser;
