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

// Delete user goal
const deleteGoal = async (goalId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response =await axios.delete(API_URL + goalId, config)

  return response.data
}

const goalService = {
  createGoal,
  getGoals,
  deleteGoal
}

export default goalService