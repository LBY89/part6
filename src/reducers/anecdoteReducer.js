import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'


const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    vote:(state, action) => {
      const id = action.payload 
      const anecdoteToChange = state.find(n => n.id === id)
      //console.log('anecdotetochange', anecdoteToChange)
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
      }
      return state.map(anecdote => anecdote.id !== id ? anecdote: changedAnecdote).sort(function (a, b) {
            return (b.votes - a.votes)
        })
    },
    appendAnecdote:(state, action) => {
      state.push(action.payload)
      console.log('action.payload appendanecdote', action.payload)
    },
    filteredAnecdotes:(state, action) => {
      return state.filter(n=> String(n.content).includes(action.payload))
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  
  }
})



export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    console.log('newanecdote', newAnecdote)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const { vote, filteredAnecdotes, appendAnecdote, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer
// when import use {} for non-default export, and direct import for default import.
