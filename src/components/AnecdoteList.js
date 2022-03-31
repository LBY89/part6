//import { useDispatch, useSelector } from 'react-redux'
import { increaseVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import Notification from '../components/Notification'
import { connect } from 'react-redux'

const AnecdoteList = (props) => {
    
    return(
        <div>
            <h2>Anecdotes</h2>
            <Notification />
            {props.anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() =>{
                        props.increaseVote(anecdote.id, anecdote); 
                        props.setNotification(`you voted '${anecdote.content}'`, 5)}}>
                            vote
                    </button>
                </div>
                </div>
            )}
        </div>
    )
}

const mapDispatchToProps = {
    increaseVote,
    setNotification
  }
const mapStateToProps = (state) => {
    return {
        anecdotes: state.anecdotes
    }
  }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AnecdoteList)

