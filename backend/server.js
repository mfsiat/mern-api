const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5555

const app = express()

// Middleware
// @desc this helps to pass objects through request
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// APIs
app.use('/api/v1/goals', require('./routes/goalRoutes'))

app.get('/', (req, res)=> {
    res.status(200).json({
        message : 'This is the Root'
    })
})

app.use(errorHandler)

app.listen(port, ()=> console.log(`Server Started on ${port}`))