import { useDispatch, useSelector } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { showVoted, clearNotification } from '../reducers/notificationReducer'
import Notification from '../components/Notification'


const AnecdoteList = () => {
    const anecdotes = useSelector(state => state.anecdotes)
    const sortedAnedotes = anecdotes.sort(function (a, b) {
    return (b.votes - a.votes)
    })

    const dispatch = useDispatch()
// onClick can have multiple events 
    return(
        <div>
            <h2>Anecdotes</h2>
            <Notification />
            {sortedAnedotes.map(anecdote =>
                <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() =>{
                        dispatch(vote(anecdote.id)); 
                        dispatch(showVoted(anecdote.id)); 
                        setTimeout(() => {dispatch(clearNotification())}, 3000)}}>
                            vote
                    </button>
                </div>
                </div>
            )}
        </div>
    )
}

export default AnecdoteList

