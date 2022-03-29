import { createSlice } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
//import store from '../store' 



const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        content: null
    },
    reducers: {
        filtered: (state, action) => {
            state.content = action.payload
            
        }
        
    }
})

export const { filtered } = filterSlice.actions

export default filterSlice.reducer