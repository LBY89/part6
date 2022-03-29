import { useDispatch, useSelector } from 'react-redux'
import { filtered } from '../reducers/filterReducer'
import { filteredAnecdotes } from '../reducers/anecdoteReducer'

const Filter = () => {
    const style = {
        marginBottom: 10
      }

    const anecdotesToBeFiltered = useSelector(state => state.anecdotes)
    console.log('anecdotesToBeFiltered', anecdotesToBeFiltered)
    const dispatch = useDispatch()
    const handleChange = (event) => {
        event.preventDefault()
        dispatch(filteredAnecdotes(event.target.value))

    }
    
    
    return (
      <div style={style}>
        filter <input onChange={handleChange} />
        
      </div>
    )
  }
  
  export default Filter