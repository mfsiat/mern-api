const express = require('express')
const router = express.Router()
const { getGoals } = require('../controllers/goalController')

// Get
router.get('/', getGoals)

// Post
router.post('/', (req, res) => {
    res.status(200).json({
        message: 'Set goal'
    })
})
// Put
router.put('/:id', (req, res) => {
    res.status(200).json({
        message: `Update goal ${req.params.id}`
    })
})
// Delete
router.delete('/:id', (req, res) => {
    res.status(200).json({
        message: `Delete goal ${req.params.id}`
    })
})

module.exports = router