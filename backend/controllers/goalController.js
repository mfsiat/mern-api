// @desc Get goals
// @rotue GET // api/v1/goals
// @access private
const getGoals = (req, res) => {
    res.status(200).json({
        message: 'Get goal'
    })
}

// @desc Set goals
// @rotue POST // api/v1/goals
// @access private
const setGoals = (req, res) => {
    res.status(200).json({
        message: 'Set goal'
    })
}

// @desc PUT goals
// @rotue PUT // api/v1/goals/:id
// @access private
const updateGoals = (req, res) => {
    res.status(200).json({
        message: `Update goal ${req.params.id}`
    })
}

// @desc DELETE goals
// @rotue DELETE // api/v1/goals/:id
// @access private
const delGoals = (req, res) => {
    res.status(200).json({
        message: `Delete goal ${req.params.id}`
    })
}


module.exports = {
    getGoals, setGoals, updateGoals, delGoals
}