const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = () => {
  if (req.method === "OPTIONS") {
    return next();
  }
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Not authorizated" });
    }
    const decoder = jwt.verify(token, config.get("jwtSecret"));
    req.user = decoder
    next()
  } catch (e) {
    return res.status(401).json({ message: "Not authorizated" });
  }
};
