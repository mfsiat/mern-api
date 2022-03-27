const asyncHandler = require("express-async-handler");

const Goal = require("../model/goalModel");
const User = require('../model/userModel')

// @desc Get goals
// @route GET // api/v1/goals
// @access private
const getGoals = asyncHandler(async (req, res) => {
  // create the connection between mongo and api
  // get all goals from the db
  const goals = await Goal.find({ user: req.user.id });
  res.status(200).json(goals);
});

// @desc Set goals
// @route POST // api/v1/goals
// @access private
const setGoals = asyncHandler(async (req, res) => {
  // console.log(req.body)
  // add error & exception handling
  if (!req.body.text) {
    res.status(400);
    throw new Error(`Please add a text field`);
  }

  const goal = await Goal.create({
    text: req.body.text,
    user: req.user.id,
  });

  res.status(200).json(goal);
});

// @desc PUT goals
// @route PUT // api/v1/goals/:id
// @access private
const updateGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  // Prevent users to update other users goals
  const user = await User.findById(req.user.id)

  // Check for user 
  if(!user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the goal user
  if(goal.user.toString() !== user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedGoal);
});

// @desc DELETE goals
// @route DELETE // api/v1/goals/:id
// @access private
const delGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  await goal.remove();
  // const deletedGoal = await Goal.findByIdAndRemove(req.params.id, req.body, {new: true})

  res.status(200).json({ id: req.params.id });
  // res.status(200).json(deletedGoal);
});

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  delGoals,
};
