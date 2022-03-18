const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../model/userModel");

const protect = asyncHandler(async (req, res, next) => {
  // init token >> check token authorizations 
  let token 

  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
    try {
      // get token from header
      // split from the header
      // verify the token 
      // get user form the token as token has the user id as payload
      token = req.headers.authorization.split(' ')[1]

      // verify token 
      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      // get the user from the token 
      req.user = await User.findById(decoded.id).select('-password')

      next()
    } catch (error) {
      console.log(error);
      res.status(401)
      throw new Error('Not authorized')
    }
  }

  if(!token) {
    res.status(401)
    throw new Error('Not authorized, no token')
  }
});

module.exports(protect);