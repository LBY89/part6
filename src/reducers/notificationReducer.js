import { createSlice } from '@reduxjs/toolkit'
//import modificationReducer from './anecdoteReducer'
//import { useDispatch } from 'react-redux'


const notificationSlice = createSlice({
    name: 'display',
    initialState: {
        content: null
    },
    reducers: {
        showVoted: (state, action) => {
            
            state.content = action.payload
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


export const setNotification = (message, time_value) => {
    
    const content = message.slice(10,)
    
    return  dispatch => {
        dispatch(showVoted(content))
        setTimeout(() => {
            dispatch(clearNotification())
        }, time_value*1000);//dam some number games here.
    }
}



export const { showVoted, clearNotification, showNewAncecdote } = notificationSlice.actions

export default notificationSlice.reducer

//dispatch(setNotification(`you voted '${anecdote.content}'`, 10))