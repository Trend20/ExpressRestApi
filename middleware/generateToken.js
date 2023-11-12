const jwt = require("jsonwebtoken");

exports.generateToken = async (user) => {
  const token = await jwt.sign(
    { _id: user._id, role: user.role },
    process.env.JWT_SECRETE,
    {
      expiresIn: "1h",
    }
  );
  return token;
};
