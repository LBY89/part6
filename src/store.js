import anecdoteReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'
import { configureStore } from '@reduxjs/toolkit'
//import anecdoteService from './services/anecdotes'

const store = configureStore({
    reducer: {
        anecdotes: anecdoteReducer,
        display: notificationReducer,
        filter: filterReducer 
    }
})

// anecdoteService.getAll().then(anecdotes =>
//     store.dispatch(setAnecdotes(anecdotes))
// )
// console.log('storeState', store.getState())

export default store