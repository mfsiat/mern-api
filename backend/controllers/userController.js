// @desc Register new user
// @route POST /api/v1/users
// @access Public
const registerUser = (req, res) => {
  res.json({message: 'Register User'})
}

// @desc Login new user
// @route POST /api/v1/users/login
// @access Public
const loginUser = (req, res) => {
  res.json({message: 'Login User'})
}
// @desc  Get User Data
// @route GET /api/v1/me
// @access Public
const getMe = (req, res) => {
  res.json({message: 'User data display'})
}

module.exports = {
  registerUser,
  loginUser,
  getMe
}