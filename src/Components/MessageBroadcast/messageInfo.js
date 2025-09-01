import { color } from 'framer-motion';
import './messageInfo.css';



function MessageInfo({ broadcastEnable, broadcastTime, message }) {


  return (
    <div className="MessageInfo">
      <div className='MessageBoxLeft'>
        <div>
          Broadcast Message
        </div>
        <div className='UpperBorder'>
          Broadcast Time
        </div>
        <div className='UpperBorder'>
          Message
        </div>
      </div>
      <div className='MessageBoxRight'>
        <div>
          {broadcastEnable ? 'Yes' : 'No'}
        </div>
        <div className='UpperBorder' style={{color: '#d32f2f'}}>
          {broadcastTime}h
        </div>
        <div className='UpperBorder' style={{color: '#82bf00'}}>
          {message}
        </div>
      </div>
    </div>
  );
}

export default MessageInfo;