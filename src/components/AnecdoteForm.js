import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { showNewAncecdote, clearNotification } from '../reducers/notificationReducer'
//import anecdoteService from '../services/anecdotes'
//import { createAnecdote } from '../reducers/anecdoteReducer'


const AnecdoteForm = (props) => {
    const dispatch = useDispatch()
    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        
        dispatch(createAnecdote(content))
        dispatch(showNewAncecdote(content))
        setTimeout(() => dispatch(clearNotification()), 5000)

      }
      
    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
            <div><input name='anecdote'/></div>
            <button type='submit' >create</button>
            </form>
        </div>
        
    )
}

export default AnecdoteForm 