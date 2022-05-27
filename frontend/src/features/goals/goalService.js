import axios from 'axios'

const API_URL = '/api/v1/goals/'

// Create new goal 
// pass the token
const createGoal = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  // get the reponse
  const response = await axios.post(API_URL, goalData, config)
  // return the response
  return response.data
}

// get goals
const getGoals = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  // get the reponse
  const response = await axios.get(API_URL, config)
  // return the response
  return response.data
}


const goalService = {
  createGoal,
  getGoals
}

export default goalService