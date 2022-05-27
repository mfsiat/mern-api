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

const goalService = {
  createGoal
}

export default goalService