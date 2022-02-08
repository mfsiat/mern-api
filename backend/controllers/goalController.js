// @desc Get goals
// @rotue GET // api/v1/goals
// @access private
const getGoals = (req, res) => {
    res.status(200).json({
        message: 'Get goal'
    })
}

module.exports = {
    getGoals
}