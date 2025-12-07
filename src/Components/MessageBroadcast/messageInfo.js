import { color } from 'framer-motion';
import './messageInfo.css';
import './messageInfoMobile.css';



function MessageInfo({ broadcastEnable, broadcastTime, message }) {


  return (
    <div className="MessageInfo">
      <div className='MessageBoxLeft'>
        <div>
          Broadcast Time
        </div>
        <div className='UpperBorder'>
          Broadcast Enabled?
        </div>
        <div className='UpperBorder'>
          Broadcart Message
        </div>
      </div>
      <div className='MessageBoxRight'>
        <div>
          {broadcastTime}h
        </div>
        {broadcastEnable ? 
          <div className='UpperBorder' style={{color: '#82bf00'}}>
            True
          </div>
         : 
         <div className='UpperBorder' style={{color: '#d32f2f'}}>
            False
          </div>
         }
        <div className='UpperBorder' style={{color: '#82bf00'}}>
          {message}
        </div>
      </div>
    </div>
  );
}

export default MessageInfo;