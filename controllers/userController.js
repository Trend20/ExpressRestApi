const User = require("../model/userModel");

// get all users
exports.getAllUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: "success",
      data: {
        users,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// get a single user by id
exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// create a user
exports.addUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        user: newUser,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// update a user
exports.updateUser = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    const user = await User.findById(req.params.id);
    if (!user) {
      res.status(404).json({
        message: "User not found",
      });
    }
    await User.findByIdAndUpdate(user, { username, email, password, role });
    res.status(201).json({ message: "User updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// delete a user
exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
