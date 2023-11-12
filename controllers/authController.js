const bcrypt = require("bcrypt");
const User = require("../model/userModel");
const generateToken = require("../middleware/generateToken");

// register
exports.register = async (req, res) => {
  try {
    const { username, email, password, confirmPassword, role } = req.body;

    // check if the entered password match
    if (password !== confirmPassword) {
      res.status(400).json({ message: "Password do not match" });
    }
    // check if user already exist
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).send({ message: "Email already exist!" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      role,
    });
    newUser.save();
    res.status(201).send({ message: "User registered successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Registration Failed" });
  }
};

// login
exports.login = async (req, res) => {
  try {
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
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "User login failed" });
  }
};

// reset password
exports.resetPassword = async (req, res) => {
  try {
    const { username, newPassword, confirmPassword } = req.body;
    if (newPassword !== confirmPassword) {
      res.status(400).json({ message: "Password do not match" });
    }
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await User.updateOne({ username }, { password: hashedPassword });
    res.status(201).json({ message: "Password reset successful" });
  } catch (error) {
    res.status(500).json({ message: "Password reset failed" });
  }
};
