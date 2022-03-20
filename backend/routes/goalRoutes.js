const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoals,
  updateGoals,
  delGoals,
} = require("../controllers/goalController");

// Get & Post
// debugger;
router.route("/").get(getGoals).post(setGoals);
// Update & Delete
router.route("/:id").delete(delGoals).put(updateGoals);

module.exports = router;
