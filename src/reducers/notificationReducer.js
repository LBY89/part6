import { createSlice } from '@reduxjs/toolkit'
//import modificationReducer from './anecdoteReducer'
import { useDispatch, useSelector } from 'react-redux'


function Anec () {
    const anecs = useSelector(state => state.anecdotes)
    return anecs
}

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
            const content = action.payload
            console.log('content from action', content)
            console.log('statefrom display', state)
            state.content = content
            
        }
    }
})

export const { showVoted, clearNotification, showNewAncecdote } = notificationSlice.actions

export default notificationSlice.reducer