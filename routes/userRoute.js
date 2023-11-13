const {
  getAllUser,
  getUser,
  deleteUser,
  addUser,
} = require("../controllers/userController");

const router = require("express").Router();

// add user
router.route("/").post(addUser);

// get users
router.route("/").get(getAllUser);

// get user
router.route("/:id").get(getUser);

// update user
router.route("/:id").post(updateUser);

// delete user
router.route("/:id").delete(deleteUser);
