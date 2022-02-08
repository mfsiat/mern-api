const express = require('express')
const router = express.Router()
const { getGoals, setGoals, updateGoals, delGoals } = require('../controllers/goalController')

// Get
router.get('/', getGoals)

// Post
router.post('/', setGoals)

// Update
router.put('/:id', updateGoals)

// Delete
router.delete('/:id', delGoals)

module.exports = router