//import { createSlice } from '@reduxjs/toolkit'

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const modificationReducer = (state = initialState, action) => {
  console.log('modificationRestate', state)
  
  //console.log('modificationreducer', modificationReducer)
  switch(action.type) {
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    case 'VOTE':
      const id = action.data.id 
      const anecdoteToChange = state.find(n => n.id === id)
      //console.log('anecdotetochange', anecdoteToChange)
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
      }
      return state.map(anecdote => anecdote.id !== id ? anecdote: changedAnecdote).sort(function (a, b) {
            return (b.votes - a.votes)
        })
// better to sort the array on the fly when manipulating than when alreay to render the array. As 
// in Anecdotelist what I did before
    default: 
      return state
  }   
}

export const vote = (id) => {

  return {
    type: 'VOTE',
    data: { id }
  }

}

export const createAnecdote = (content) => {
  return {
    type: 'NEW_ANECDOTE',
    data: {
      content,
      id: getId(),
      votes: 0
    }
  }
}

export default modificationReducer

