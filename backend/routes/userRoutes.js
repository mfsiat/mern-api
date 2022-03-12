// @desc routes for users to login and register
const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/userController");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", getMe);

module.exports = router;
