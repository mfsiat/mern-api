const express = require('express')
const router = express.Router()

// Get
router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Get Goals'
    })
})

// Post
router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Get Goals'
    })
})
// Put
router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Get Goals'
    })
})
// Delete
router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Get Goals'
    })
})

module.exports = router