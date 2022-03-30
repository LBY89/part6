import { useSelector } from 'react-redux'

const Notification = () => {

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  const notification  = useSelector(state => state.display).content
  if (notification === null ) {
    return (
      <div style={style}>
         {notification} 
      </div>
    )
  }
  return (
    <div style={style}>
      voted or created '{notification}'' 
    </div>
  )

}

export default Notification