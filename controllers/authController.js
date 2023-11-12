const bcrypt = require("bcrypt");
const User = require("../model/userModel");

// register
exports.register = async (req, res) => {
  const { username, email, password, role } = req.body;
  // check if user already exist
  const userExist = await User.findOne({ email });
  if (userExist) {
    return res.status(400).send({ message: "Email already exist!" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ username, email, password: hashedPassword, role });
  try {
    newUser.save();
    res.status(201).send({ message: "User registered successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Registration Failed" });
  }
};

// login
exports.login = async (req, res) => {
  const { email, password } = req.body;
  // check if user exist
  const user = await User.findOne({ email });
  if (!user) {
    res.status(404).send({ message: "User not found" });
  }
  // check if password is valid
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    res.status(401).send({ message: "Incorrect Password" });
  }
  const token = generateToken(user);
  res.status(200).send(token);
};

// logout

// reset password
