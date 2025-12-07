import './user.css';
import './userMobile.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useCookies } from "react-cookie";
import { getUserInfo } from '../../Services/user/getUserInfo';
import { adjustAutomaticMode } from '../../Services/control/adjustAutomaticMode';
import { turnOffAutomatic} from '../../Services/control/turnOffAutomatic';
import { turnOnAutomatic } from '../../Services/control/turnOnAutomatic';
import { getAutomaticModeData } from '../../Services/read/getAutomaticModeData';
import AutomaticState from '../../Components/State/automatic';
import { getMessageBroadcast } from '../../Services/read/getMessageBroadcast';
import MessageInfo from '../../Components/MessageBroadcast/messageInfo';
import { turnOnBroadcast } from '../../Services/control/turnOnBroadcast';
import { turnOffBroadcast } from '../../Services/control/turnOffBroadcast';
import { modifyBroadcastMessage } from '../../Services/control/modifyBroadcastMessage';
import { Formik } from 'formik';
import Spinner from '../../Spinner';
import { CgNotes } from "react-icons/cg";



const initialState = {
  firstName: '',
  lastName: '',
};


const User = () => {
  let navigate = useNavigate();
  const [cookies, setCookie] = useCookies(['accessToken']);
  const [state, setState] = useState(initialState);
  const [refresh, setRefresh] = useState(0);
  const [valueMin, setValueMin] = useState(24);
  const [valueMax, setValueMax] = useState(26);
  const [actualMin, setactualMin] = useState(0);
  const [actualMax, setactualMax] = useState(0);
  const [isAutoOn, setIsAutoOn] = useState(false);
  const [broadcastEnable, setBroadcastEnable] = useState(false);
  const [broadcastTime, setBroadcastTime] = useState(3);
  const [broadcastMessage, setBroadcastMessage] = useState("");
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function fetchData(accessToken) {
      const userInfo = await getUserInfo(accessToken);
      if (userInfo) {
        setState({firstName: userInfo.data.firstName, lastName: userInfo.data.lastName})
      } else {
        console.log('No user info found 😞');
      }
      const autoInfo = await getAutomaticModeData();
      if (autoInfo) {
        setIsAutoOn(autoInfo.data.automaticMode)
        setactualMin(autoInfo.data.lowerThreshold)
        setactualMax(autoInfo.data.upperThreshold)
        setValueMax(autoInfo.data.upperThreshold)
        setValueMin(autoInfo.data.lowerThreshold)
      } else {
        console.log('No info about Automatic Mode found 😞');
      }
      const broadcastInfo = await getMessageBroadcast();
      if (broadcastInfo) {
        setBroadcastEnable(broadcastInfo.data.broadcastEnable)
        setBroadcastTime(broadcastInfo.data.broadcastTime)
        setBroadcastMessage(broadcastInfo.data.message)
      } else {
        console.log('No info about Broadcast message found 😞');
      }
    }
    fetchData(cookies.accessToken);
  }, [cookies.accessToken, refresh]);

  const marks = [
    {
      value: 22,
      label: '22°C',
    },
    {
      value: 23,
      label: '23°C',
    },
    {
      value: 24,
      label: '24°C',
    },
    {
      value: 25,
      label: '25°C',
    },
      {
      value: 26,
      label: '26°C',
    },
      {
      value: 27,
      label: '27°C',
    },
      {
      value: 28,
      label: '28°C',
    },
  ];

  function valuetext(value) {
    return `${value}°C`;
  }

  const handleChangeMin = (event, newValue) => {
    setValueMin(newValue);
  };

  const handleChangeMax = (event, newValue) => {
    setValueMax(newValue);
  };

  const turnOff = async () => {
    const off = await turnOffAutomatic(cookies.accessToken);
    setRefresh(refresh + 1);
  }

  const turnOn = async () => {
    const on = await turnOnAutomatic(cookies.accessToken);
    setRefresh(refresh + 1);
  }

  const sendAutomaticSettings = async () => {
    const send = await adjustAutomaticMode({min: valueMin, max: valueMax}, cookies.accessToken);
    setRefresh(refresh + 1);
  }

  const disconnect = () => {
    setCookie('accessToken', '');
  }

  const handleSendingScheduledMessage = async (credentials, setSubmitting) => {
    setMessage('');
    try {
      const result = await modifyBroadcastMessage(credentials, cookies.accessToken);
      if (result.data) {
        setMessage('Message has been modified.')
      }
      setSubmitting(false);
    } catch (error) {
      if (error.message) {
        setMessage(error.message);
      }
      console.log(error);
      setSubmitting(false);
    }
    setRefresh(refresh + 1);
  }

  const turnOffScheduledMessage = async () => {
    const off = await turnOffBroadcast(cookies.accessToken);
    setRefresh(refresh + 1);
  }

  const turnOnScheduledMessage = async () => {
    const on = await turnOnBroadcast(cookies.accessToken);
    setRefresh(refresh + 1);
  }

  return (
    <div className='UserPage'>
      <div className='AutomaticSettings'>
        <div className='Sliders'>
          <Box sx={{ width: 300, marginBottom: 2 }}>
            Stop A/C when inside temperature reach :
            <Slider
              aria-label="Custom marks"
              value={valueMin}
              onChange={handleChangeMin}
              getAriaValueText={valuetext}
              step={0.1}
              valueLabelDisplay="auto"
              marks={marks}
              min={22}
              max={28}
            />
          </Box>
          <Box sx={{ width: 300 }}>
            Start A/C when inside temperature reach :
            <Slider
              aria-label="Custom marks"
              value={valueMax}
              onChange={handleChangeMax}
              getAriaValueText={valuetext}
              step={0.1}
              valueLabelDisplay="auto"
              marks={marks}
              min={22}
              max={28}
              color='error'
            />
          </Box>
        </div>
        <div className='SendSettings'>
          <button
            className='SendSettingsButton'
            onClick={sendAutomaticSettings}
          >
            Send Automatic Settings
          </button>
          <button
            className='TurnOnAuto'
            onClick={turnOn}
          >
            Turn ON Auto
          </button>
          <button
            className='TurnOffAuto'
            onClick={turnOff}
          >
            Turn OFF Auto
          </button>
        </div>
        <div className='UserPageButton' onClick={() => navigate('/logs')}>
          <CgNotes />
        </div>
      </div>
      <div style={{marginTop: '2%', marginBottom: '-2%'}}>
        <AutomaticState
          automaticMode={isAutoOn}
          lowerThreshold={actualMin}
          upperThreshold={actualMax}
        />
      </div>
      <div style={{marginTop: '2%', width: 'fit-content', justifySelf: 'center'}}>
        <MessageInfo
          broadcastEnable={broadcastEnable}
          broadcastTime={broadcastTime}
          message={broadcastMessage}
        />
      </div>
      <div className='FormikUser' style={{width: 'fit-content', alignSelf: 'center'}}>
        <Formik
          initialValues={{ messageToSend: '' }}
          validate={values => {
            const errors = {};
            if (!values.messageToSend) {
              errors.messageToSend = 'Required';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            handleSendingScheduledMessage({time: 3, message: values.messageToSend}, setSubmitting)
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit} className='MessageToSendNowForm'>
              {isSubmitting && 
                <div className='Loading'>
                  <Spinner/>
                </div>
              }
              {!isSubmitting && 
                <>
                  <div className='MessageToSendNowInput'>
                    <label
                      className='label'
                    >
                      Change Broadcast Message
                    </label>
                    <input
                      type="text"
                      name="messageToSend"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.messageToSend}
                      className='messageToSend'
                    />
                    <h6>
                      {message || ' '}
                    </h6>
                  </div>
                  <button type="submit" disabled={isSubmitting} className='SubmitMessageToSendNow'>
                    Change message
                  </button>
                </>
              }
            </form>
          )}
        </Formik>
      </div>
      <button
        className='TurnOnAuto'
        onClick={turnOnScheduledMessage}
      >
        Turn ON Broadcast
      </button>
      <button
        className='TurnOffAuto'
        onClick={turnOffScheduledMessage}
        style={{marginTop: '1%'}}
      >
        Turn OFF Broadcast
      </button>
      <div className='namefield'>
        <h1>
          {state.firstName} {state.lastName}
        </h1>
      </div>
      <button
        className='DisconnectButton'
        onClick={disconnect}
      >
        Se Déconnecter
      </button>
    </div>
  );
};

export default User;
