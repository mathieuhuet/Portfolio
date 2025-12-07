import './logs.css';
import './logsMobile.css';
import { useEffect, useState, useMemo } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useNavigate, Link } from 'react-router-dom';
import { useCookies } from "react-cookie";
import { collectActions } from '../../Services/read/collectActions';
import { collectLogins } from '../../Services/read/collectLogins'; 
import { color } from 'framer-motion';
import { MdOutlineSwitchLeft, MdOutlineSwitchRight } from "react-icons/md";





const Logs = (props) => {
  let navigate = useNavigate();
  const isMobile = useMediaQuery({ query: '(max-width: 1023px)' });
  const [cookies, setCookie] = useCookies(['accessToken']);
  const [refresh, setRefresh] = useState(0);
  const [logs, setLogs] = useState([{}]);
  const [toggleLogs, setToggleLogs] = useState('Actions');

  useEffect(() => {
    async function fetchData(accessToken) {
      if (toggleLogs === 'Actions') {
        const allData = await collectActions(accessToken);
        if (allData.data) {
          setLogs(allData.data);
        } else {
          console.log('problem fetching data');
        }
      } else if (toggleLogs === 'Logins') {
        const allData = await collectLogins(accessToken);
        if (allData.data) {
          setLogs(allData.data);
        } else {
          console.log('problem fetching data');
        }
      }
    }
    fetchData(cookies.accessToken);
  }, [refresh]);

  const toggleLogsPage = () => {
    if (toggleLogs === 'Actions') {
      setToggleLogs('Logins');
    } else if (toggleLogs === 'Logins') {
      setToggleLogs('Actions');
    }
    setRefresh(refresh + 1);
  }

  return (
    <div>
      {isMobile && toggleLogs === 'Logins' &&
        <div className='LogsPage'>
          <div className='ToggleLogsPage' onClick={toggleLogsPage}>
            <MdOutlineSwitchLeft />
          </div>
          <div className='TableauLogs'>
            <div className='LigneLogs'>
              <div style={{borderRight: 'solid 2px #004638', width: '30%', borderTop: 'solid 2px #004638', fontWeight: 'bolder'}}>
                Email used
              </div>
              <div style={{borderRight: 'solid 2px #004638', width: '40%', borderTop: 'solid 2px #004638', fontWeight: 'bolder'}}>
                Password used (encrypted)
              </div>
              <div style={{width: '30%', borderTop: 'solid 2px #004638', fontWeight: 'bolder'}}>
                Time
              </div>
            </div>
            {logs ? logs.map((logss) => 
              <div key={logss.id} className='LigneLogs'>
                <div style={{borderRight: 'solid 2px #004638', width: '30%'}}>
                  {logss.email}
                </div>
                <div style={{borderRight: 'solid 2px #004638', width: '40%'}}>
                  {logss.password}
                </div>
                <div style={{width: '30%'}}>
                  {logss.createdAt}
                </div>
              </div>
            ) : <></>}
          </div>
        </div>
      }
      {isMobile && toggleLogs === 'Actions' &&
        <div className='LogsPage'>
          <div className='ToggleLogsPage' onClick={toggleLogsPage}>
            <MdOutlineSwitchRight />
          </div>
          <div className='TableauLogs'>
            <div className='LigneLogs'>
              <div style={{borderRight: 'solid 2px #004638', width: '30%', borderTop: 'solid 2px #004638', fontWeight: 'bolder'}}>
                Utilisateur
              </div>
              <div style={{borderRight: 'solid 2px #004638', width: '40%', borderTop: 'solid 2px #004638', fontWeight: 'bolder'}}>
                Action performée
              </div>
              <div style={{width: '30%', borderTop: 'solid 2px #004638', fontWeight: 'bolder'}}>
                Heure de l'évènement
              </div>
            </div>
            {logs ? logs.map((logss) => 
              <div key={logss.id} className='LigneLogs'>
                <div style={{borderRight: 'solid 2px #004638', width: '30%'}}>
                  {logss.user}
                </div>
                <div style={{borderRight: 'solid 2px #004638', width: '40%'}}>
                  {logss.actionPerformed}
                </div>
                <div style={{width: '30%'}}>
                  {logss.time}
                </div>
              </div>
            ) : <></>}
          </div>
        </div>
      }
      {!isMobile && toggleLogs === 'Logins' &&
        <div className='LogsPage'>
          <div className='ToggleLogsPage' onClick={toggleLogsPage}>
            <MdOutlineSwitchLeft />
          </div>
          <div className='TableauLogs'>
            <div className='LigneLogs'>
              <div style={{borderRight: 'solid 2px #004638', width: '30%', borderTop: 'solid 2px #004638', fontWeight: 'bolder'}}>
                Email used
              </div>
              <div style={{borderRight: 'solid 2px #004638', width: '40%', borderTop: 'solid 2px #004638', fontWeight: 'bolder'}}>
                Password used (encrypted)
              </div>
              <div style={{width: '30%', borderTop: 'solid 2px #004638', fontWeight: 'bolder'}}>
                Time
              </div>
            </div>
            {logs ? logs.map((logss) => 
              <div key={logss.id} className='LigneLogs'>
                <div style={{borderRight: 'solid 2px #004638', width: '30%'}}>
                  {logss.email}
                </div>
                <div style={{borderRight: 'solid 2px #004638', width: '40%'}}>
                  {logss.password}
                </div>
                <div style={{width: '30%'}}>
                  {logss.createdAt}
                </div>
              </div>
            ) : <></>}
          </div>
        </div>
      }
      {!isMobile && toggleLogs === 'Actions' &&
        <div className='LogsPage'>
          <div className='ToggleLogsPage' onClick={toggleLogsPage}>
            <MdOutlineSwitchRight />
          </div>
          <div className='TableauLogs'>
            <div className='LigneLogs'>
              <div style={{borderRight: 'solid 2px #004638', width: 341, borderTop: 'solid 2px #004638', fontWeight: 'bolder'}}>
                Utilisateur
              </div>
              <div style={{borderRight: 'solid 2px #004638', width: 342, borderTop: 'solid 2px #004638', fontWeight: 'bolder'}}>
                Action performée
              </div>
              <div style={{width: 341, borderTop: 'solid 2px #004638', fontWeight: 'bolder'}}>
                Heure de l'évènement
              </div>
            </div>
            {logs ? logs.map((logss) => 
              <div key={logss.id} className='LigneLogs'>
                <div style={{borderRight: 'solid 2px #004638', width: 341}}>
                  {logss.user}
                </div>
                <div style={{borderRight: 'solid 2px #004638', width: 342}}>
                  {logss.actionPerformed}
                </div>
                <div style={{width: 341}}>
                  {logss.time}
                </div>
              </div>
            ) : <></>}
          </div>
        </div>
      }
    </div>
  );
};

export default Logs;
