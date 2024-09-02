import './control.css';
import './controlMobile.css';
import React, { useEffect, useState } from 'react';
import { useCookies } from "react-cookie";
import { turnOffAC } from '../../Services/controlServices/turnOffAC';
import { turnOnAC } from '../../Services/controlServices/turnOnAC';
import { stateOfAC } from '../../Services/controlServices/stateOfAC';



const Control = () => {
  const [cookies, setCookie] = useCookies(['accessToken']);
  const [acState, setAcState] = useState('unknown');


  useEffect(() => {
    async function fetchData(accessToken) {
      const userInfo = await stateOfAC(accessToken);
      if (userInfo) {
        setAcState(userInfo);
      } else {
        console.log('No user info found 😞');
      }
    }
    fetchData(cookies.accessToken);
  }, [cookies.userToken]);

  const turnOff = async () => {
    const off = await turnOffAC(cookies.accessToken);
  }

  const turnOn = async () => {
    const off = await turnOnAC(cookies.accessToken);
  }

  return (
    <div className='ControlPage'>
      <div>
        <h1>
          Control
        </h1>
        <h1>
          {acState}
        </h1>
      </div>
      <div className='AcButtons'>
        <button
          className='DisconnectButton'
          onClick={turnOn}
        >
          Turn ON A/C
        </button>
        <button
          className='DisconnectButton'
          onClick={turnOff}
        >
          Turn OFF A/C
        </button>
      </div>
    </div>
  );
};

export default Control;
