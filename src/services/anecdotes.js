import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const getId = () => (100000 * Math.random()).toFixed(0)
const createNew = async (content) => {
    const object = { content, votes: 0, id: getId()}
    const response = await axios.post(baseUrl, object)
    return response.data
}

const update = async (id, newAnecdote) => {
    // const anecdoteToChange = await axios.get(`${baseUrl}/${id}`)
    // console.log('anecdotefrom service', anecdoteToChange)
    // const updatedAnecdote = {...anecdoteToChange, votes: anecdoteToChange.votes + 1 }
    // console.log('updatedanecdotefrom service', updatedAnecdote)
    const response = await axios.put(`${baseUrl}/${id}`, newAnecdote)
    return response.data
}

export default  { getAll, createNew, update } 