import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

// Testing is done

const isOrganiser = (req, res, next) => {
  console.log("authorization : " + req.headers.authorization);
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      console.log(user);
      if (err) {
        return res.status(403).json({ message: "Unauthorized" });
      } else if (user.role === "organiser") {
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

export default isOrganiser;
