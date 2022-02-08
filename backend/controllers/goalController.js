const getGoals = (req, res) => {
    res.status(200).json({
        message: 'Get goal'
    })
}

module.exports = {
    getGoals
}