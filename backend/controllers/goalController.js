// @desc Get goals
// @route GET // api/v1/goals
// @access private
const getGoals = (req, res) => {
    res.status(200).json({
        message: 'Get goal'
    })
}

// @desc Set goals
// @route POST // api/v1/goals
// @access private
const setGoals = (req, res) => {
    // console.log(req.body)
    // add error & exception handling 
    if(!req.body.text){
        res.status(400).json(({message: 'Please add a text field'}))
    }
    res.status(200).json({
        message: 'Set goal'
    })
}

// @desc PUT goals
// @route PUT // api/v1/goals/:id
// @access private
const updateGoals = (req, res) => {
    res.status(200).json({
        message: `Update goal ${req.params.id}`
    })
}

// @desc DELETE goals
// @route DELETE // api/v1/goals/:id
// @access private
const delGoals = (req, res) => {
    res.status(200).json({
        message: `Delete goal ${req.params.id}`
    })
}


module.exports = {
    getGoals, setGoals, updateGoals, delGoals
}