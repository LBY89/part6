import { connect } from 'react-redux'
import { filteredAnecdotes } from '../reducers/anecdoteReducer'

const Filter = (props) => {
    const style = {
        marginBottom: 10
      }

    const handleChange = (event) => {
        event.preventDefault()
        props.filteredAnecdotes(event.target.value)

    }
    
    return (
      <div style={style}>
        filter <input onChange={handleChange} />
        
      </div>
    )
  }
  
  

  export default connect(null, {filteredAnecdotes})(Filter)