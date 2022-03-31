import { createSlice } from '@reduxjs/toolkit'
//import modificationReducer from './anecdoteReducer'
import { useSelector } from 'react-redux'


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

//const currentContent = useSelector(state => state.display)

// const mapStateToProps = (state) => {
//     return {
//         display: state.display
//     }
// }
let timeoutId;

export const setNotification = (message, time_value) => {
    
    return  dispatch => {
        dispatch(showVoted(message))

        if (timeoutId) {
            clearTimeout(timeoutId)
        }
        timeoutId = setTimeout(() => {
            dispatch(clearNotification())
        }, time_value*1000);//dam some number games here.
        
    }
}

export const setAddedNotification = (message, time_value) => {
    
    return  dispatch => {
        dispatch(showNewAncecdote(message))
        setTimeout(() => {
            dispatch(clearNotification())
        }, time_value*1000);//dam some number games here.
    }
}


export const { showVoted, clearNotification, showNewAncecdote } = notificationSlice.actions

export default notificationSlice.reducer

//dispatch(setNotification(`you voted '${anecdote.content}'`, 10))