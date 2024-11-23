import './index.css'
import {GrFormClose} from 'react-icons/gr'

const Notification = props => {
  const {children} = props
  return (
    <div className="notification">
      <div className="notification-content">{children}</div>
      <GrFormClose className="close-icon" />
    </div>
  )
}
export default Notification
