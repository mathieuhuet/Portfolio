import { color } from 'framer-motion';
import './toggle.css';
import './toggleMobile.css';



function Toggle({ name, state, trigger }) {


  return (
    <>
      {trigger === null ?     
      <div className='ToggleNoHoverPointer' onClick={trigger}>
        <h1>
          {name} {state === 'OFF' ? <p style={{backgroundColor: '#d32f2f'}}>OFF</p> : state === 'ON' ? <p style={{backgroundColor: '#82bf00'}}>ON</p> : <p style={{backgroundColor: '#585858'}}>unknown</p>}
        </h1>
      </div> :     
      <div className='Toggle' onClick={trigger}>
        <h1>
          {name} {state === 'OFF' ? <p style={{backgroundColor: '#d32f2f'}}>OFF</p> : state === 'ON' ? <p style={{backgroundColor: '#82bf00'}}>ON</p> : <p style={{backgroundColor: '#585858'}}>unknown</p>}
        </h1>
      </div>}
    </>
  );
}

export default Toggle;