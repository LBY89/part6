import modificationReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        anecdotes: modificationReducer,
        display: notificationReducer 
    }
})

console.log('storeState', store.getState())

export default store