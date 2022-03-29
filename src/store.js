import anecdoteReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        anecdotes: anecdoteReducer,
        display: notificationReducer,
        filter: filterReducer 
    }
})

console.log('storeState', store.getState())

export default store