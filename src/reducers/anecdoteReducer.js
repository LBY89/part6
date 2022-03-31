import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'


const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    updateAnecdote:(state, action) => {
      const updatedAnecdote = action.payload
      console.log('updatedAnecdote = action.payload', action.payload)
      //why is it that case, anecdote.id !== updatedAnecdote.id? should it not be ===? 
      return state.map(anecdote => anecdote.id !== updatedAnecdote.id ? anecdote: updatedAnecdote).sort(function (a, b) {
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

export const increaseVote = (id, anecdote) => {
  const newAnecdote = {...anecdote, votes: anecdote.votes + 1 }
  return async dispatch => {
    const updatedAnecdote = await anecdoteService.update(id, newAnecdote)
    console.log('updatedanecdotefrom increaseVote', updatedAnecdote)
    dispatch(updateAnecdote(updatedAnecdote))
  }
}
//once installed redux-thunk, you can write like this, even tho dont see thunk all the time at all.
export const { vote, filteredAnecdotes, appendAnecdote, setAnecdotes, updateAnecdote } = anecdoteSlice.actions
export default anecdoteSlice.reducer
// when import use {} for non-default export, and direct import for default import.
