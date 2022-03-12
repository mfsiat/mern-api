// @desc routes for users to login and register
const express = require("express");
const router = express.Router();

router.post("/", registerUser);

module.exports = router;
