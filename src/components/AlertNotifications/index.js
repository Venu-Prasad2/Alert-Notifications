import './index.css'
import {AiFillCheckCircle} from 'react-icons/ai'
import {MdWarning, MdInfo} from 'react-icons/md'
import {RiErrorWarningFill} from 'react-icons/ri'
import Notification from '../Notification'

const AlertNotifications = () => {
  const renderInfo = () => (
    <Notification>
      <MdInfo className="info icon" />
      <div className="text-container">
        <h1 className="info-heading">Info</h1>
        <p className="para">Anyone on the internet can view these files</p>
      </div>
    </Notification>
  )

  const renderWarning = () => (
    <Notification>
      <MdWarning className="warning icon" />
      <div className="text-container">
        <h1 className="warning-heading">Warning</h1>
        <p className="para">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
    </Notification>
  )

  const renderError = () => (
    <Notification>
      <RiErrorWarningFill className="error icon" />
      <div className="text-container">
        <h1 className="error-heading">Error</h1>
        <p className="para">
          Sorry, You are not authorized to have access to delete the file
        </p>
      </div>
    </Notification>
  )

  const renderSuccess = () => (
    <Notification>
      <AiFillCheckCircle className="success icon" />
      <div className="text-container">
        <h1 className="success-heading">Success</h1>
        <p className="para">You can access all the files in the folder</p>
      </div>
    </Notification>
  )
  return (
    <div className="all-notifications-container">
      <div className="content-container">
        <h1 className="heading">Alert Notifications</h1>
        {renderSuccess()}
        {renderError()}
        {renderWarning()}
        {renderInfo()}
      </div>
    </div>
  )
}
export default AlertNotifications
