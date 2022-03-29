import { useSelector } from 'react-redux'

const Notification = () => {

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }


  const anecdotes = useSelector(state => state.anecdotes)
  
  const id = useSelector(state => state.display).content
  
  if (id === null) {
    return (
      <div style={style}>
        
      </div>
    )
  } else if ( parseInt(id) !== 'Number') {
    const notification = anecdotes.find(n => n.id === id)
    if (notification !== undefined ) {
      return (
        <div style={style}>
          you voted '{notification.content}''
        </div>
      )

    } else {
    return (
      <div style={style}>
        '{id}' added
      </div>
    )
    }
  } 
  
}

export default Notification