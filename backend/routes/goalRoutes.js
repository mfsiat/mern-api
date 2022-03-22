const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoals,
  updateGoals,
  delGoals,
} = require("../controllers/goalController");

// add auth protection 
// for getting users individual goals 
const { protect } = require('../middleware/authMiddleware')

// Get & Post
// debugger;
router.route("/").get(protect, getGoals).post(setGoals);
// Update & Delete
router.route("/:id").delete(delGoals).put(updateGoals);

module.exports = router;
