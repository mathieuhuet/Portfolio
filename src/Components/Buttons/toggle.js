import { color } from 'framer-motion';
import './toggle.css';
import './toggleMobile.css';



function Toggle({ name, state }) {


  return (
    <div className='Toggle'>
      <h1>
        {name} {state === 'OFF' ? <p style={{backgroundColor: '#d32f2f'}}>OFF</p> : state === 'ON' ? <p style={{backgroundColor: '#82bf00'}}>ON</p> : state}
      </h1>
    </div>
  );
}

export default Toggle;