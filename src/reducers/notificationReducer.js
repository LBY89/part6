import { createSlice } from '@reduxjs/toolkit'
//import modificationReducer from './anecdoteReducer'
import { useDispatch, useSelector } from 'react-redux'


const notificationSlice = createSlice({
    name: 'display',
    initialState: {
        content: null
    },
    reducers: {
        showVoted: (state, action) => {
            const id = action.payload
            
            console.log('id detail', id)
            state.content = id
            console.log('statecontentfromshowvoted', state.content)
        },
        clearNotification: (state, action) => {
            state.content = null
        },
        showNewAncecdote: (state, action) => {
            state.content = action.payload
        
        }
    }
})

export const { showVoted, clearNotification, showNewAncecdote } = notificationSlice.actions

export default notificationSlice.reducer