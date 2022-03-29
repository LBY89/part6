import { useSelector } from 'react-redux'

const Notification = () => {

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }


  const anecdotes = useSelector(state => state.anecdotes)
  console.log('anecdotes', anecdotes)
  const id = useSelector(state => state.display).id
  console.log('idshow', id)
  console.log('idtype',  typeof id)

  if ( typeof Math.floor(id) !== 'number') {
    return (
      <div style={style}>
        {id}
      </div>
    )
  } else {
    const notification = anecdotes.find(n => n.id === id)
    if (notification !== undefined ) {
      return (
        <div style={style}>
          you voted '{notification.content}''
        </div>
      )
    } 
    return (
      <div style={style}>
        
      </div>
    )
  }
  
  
  
}

export default Notification