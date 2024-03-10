const isOrganiser = (req, res, next) => {
  if (req.headers.Authorization) {
    const token = req.headers.Authorization.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
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
