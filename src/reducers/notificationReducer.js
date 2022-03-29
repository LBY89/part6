import { createSlice } from '@reduxjs/toolkit'
//import modificationReducer from './anecdoteReducer'
import { useDispatch, useSelector } from 'react-redux'

import produce from "immer"

function Anec () {
    const anecs = useSelector(state => state.anecdotes)
    return anecs
}

const notificationSlice = createSlice({
    name: 'display',
    initialState: {
        id: ''
    },
    reducers: {
        showVoted: (state, action) => {
            const id = action.payload
            console.log('id detail', id)
            state.id = id
        },
        clearNotification: (state, action) => {
            state.id = ''
        },
        showNewAncecdote: (state, action) => {
            const content = action.payload
            console.log('content from action', content)
            state.id = content
            
        }
    }
})

export const { showVoted, clearNotification, showNewAncecdote } = notificationSlice.actions

export default notificationSlice.reducer