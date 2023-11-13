const express = require("express");
const {
  register,
  login,
  resetPassword,
} = require("../controllers/authController");

const router = express.Router();

// register
router.route("/").post(register);
router.route("/").post(login);
router.route("/").post(resetPassword);

module.exports = router;
