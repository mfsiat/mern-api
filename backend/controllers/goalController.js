const asyncHandler = require('express-async-handler')

const Goal = require('../model/goalModel')

// @desc Get goals
// @route GET // api/v1/goals
// @access private
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: 'Get goal'
    })
})

// @desc Set goals
// @route POST // api/v1/goals
// @access private
const setGoals = asyncHandler(async (req, res) => {
    // console.log(req.body)
    // add error & exception handling 
    if(!req.body.text){
        res.status(400)
        throw new Error(`Please add a text field`)
    }
    res.status(200).json({
        message: 'Set goal'
    })
})

// @desc PUT goals
// @route PUT // api/v1/goals/:id
// @access private
const updateGoals = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: `Update goal ${req.params.id}`
    })
})

// @desc DELETE goals
// @route DELETE // api/v1/goals/:id
// @access private
const delGoals = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: `Delete goal ${req.params.id}`
    })
})


module.exports = {
    getGoals, setGoals, updateGoals, delGoals
}