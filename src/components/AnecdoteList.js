import { useDispatch, useSelector } from 'react-redux'
import { increaseVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import Notification from '../components/Notification'


const AnecdoteList = () => {
    const anecdotes = useSelector(state => state.anecdotes)
    //const sortedAnedotes = anecdotes.sort(function (a, b) {
    //     return (b.votes - a.votes)
    // })

    const dispatch = useDispatch()
// onClick can have multiple events 
    return(
        <div>
            <h2>Anecdotes</h2>
            <Notification />
            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() =>{
                        dispatch(increaseVote(anecdote.id, anecdote)); 
                        dispatch(setNotification(`you voted '${anecdote.content}'`, 10))}}>
                            vote
                    </button>
                </div>
                </div>
            )}
        </div>
    )
}

export default AnecdoteList

