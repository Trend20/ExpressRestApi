const User = require("../model/userModel");

// get all users
exports.getAllUser = async (req, res) => {
  const users = await User.find();
  res.status(200).json({
    status: "success",
    data: {
      users,
    },
  });
};

// get a single user by id
exports.getUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
};

// create a user

// update a user

// delete a user
