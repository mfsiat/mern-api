const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../model/userModel");

const protect = asyncHandler(async (req, res, next) => {});

module.exports(protect);