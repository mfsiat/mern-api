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
router.route("/").get(protect, getGoals).post(protect, setGoals);
// Update & Delete
router.route("/:id").delete(protect, delGoals).put(protect, updateGoals);

module.exports = router;
