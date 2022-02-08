const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5555

const app = express()

// APIs
app.use('/api/v1/goals', require('./routes/goalRoutes'))

app.get('/', (req, res)=> {
    res.status(200).json({
        message : 'This is the Root'
    })
})

app.listen(port, ()=> console.log(`Server Started on ${port}`))