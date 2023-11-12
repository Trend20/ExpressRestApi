const { promisify } = require("util");
const jwt = require("jsonwebtoken");
exports.verifyToken = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    res.status(401).json({ message: "Access denied" });
  }
  try {
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRETE);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(500).json({ message: "Invalid token" });
  }
};
