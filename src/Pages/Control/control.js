import './control.css';
import './controlMobile.css';
import React, { useEffect, useState, useMemo } from 'react';
import { useCookies } from "react-cookie";
import { RiUserSharedFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { turnOffAC } from '../../Services/control/turnOffAC';
import { turnOnAC } from '../../Services/control/turnOnAC';
import { getAllData } from '../../Services/read/getAllData';
import { getAllDataHistory } from '../../Services/read/getAllDataHistory';
import TempGraph from '../../Components/Graphs/tempGraph';
import HumiGraph from '../../Components/Graphs/humiGraph';



const Control = () => {
  let navigate = useNavigate();
  const [cookies, setCookie] = useCookies(['accessToken']);
  const [acState, setAcState] = useState('unknown');
  const [refresh, setRefresh] = useState(0);
  const [allData, setAllData] = useState([]);
  const [insideTemp, setInsideTemp] = useState('');
  const [insideHumi, setInsideHumi] = useState('');
  const [outsideTemp, setOutsideTemp] = useState('');
  const [outsideHumi, setOutsideHumi] = useState('');
  

  const graphData = useMemo(() => {
    const timeLabels = [];
    const insideTemp = [];
    const insideHumi = [];
    const outsideTemp = [];
    const outsideHumi = [];
    const insideTemp2 = [];
    const insideHumi2 = [];
    const acstate = [];

    for (let k = 0; k < allData.length; k++) {
      timeLabels.push(new Date(allData[k].createdAt).toLocaleTimeString("en-GB").slice(0, -3));
      !allData[k].InsideTemp ? insideTemp.push(NaN) : insideTemp.push(allData[k].InsideTemp);
      !allData[k].InsideHumi ? insideHumi.push(NaN) : insideHumi.push(allData[k].InsideHumi);
      !allData[k].InsideTemp2 ? insideTemp2.push(NaN) : insideTemp2.push(allData[k].InsideTemp2);
      !allData[k].InsideHumi2 ? insideHumi2.push(NaN) : insideHumi2.push(allData[k].InsideHumi2);
      !allData[k].OutsideTemp ? outsideTemp.push(NaN) : outsideTemp.push(allData[k].OutsideTemp);
      !allData[k].OutsideHumi ? outsideHumi.push(NaN) : outsideHumi.push(allData[k].OutsideHumi);
      allData[k].acstate == 'ON' ? acstate.push('ON') : acstate.push('OFF');
    }

    const result = {
      timeLabels: timeLabels,
      insideTemp: insideTemp,
      insideHumi: insideHumi,
      insideTemp2: insideTemp2,
      insideHumi2: insideHumi2,
      outsideTemp: outsideTemp,
      outsideHumi: outsideHumi,
      acstate: acstate
    }
    console.log(result);

    return result;
  }, [allData])


  useEffect(() => {
    async function fetchData() {
      const allData = await getAllData();
      if (allData.data) {
        setInsideTemp(allData.data.insideTemp);
        setInsideHumi(allData.data.insideHumi);
        setOutsideTemp(allData.data.outsideTemp);
        setOutsideHumi(allData.data.outsideHumi);
        setAcState(allData.data.acstate);
      } else {
        console.log('problem fetching data');
      }
      const allDataHistory = await getAllDataHistory();
      if (allDataHistory.data) {
        setAllData(allDataHistory.data);
        console.log(allDataHistory.data);
      } else {
        console.log('problem fetching data');
      }
    }
    fetchData();
  }, [cookies.userToken, refresh]);

  const turnOff = async () => {
    const off = await turnOffAC(cookies.accessToken);
    setRefresh(refresh + 1);
  }

  const turnOn = async () => {
    const on = await turnOnAC(cookies.accessToken);
    setRefresh(refresh + 1);
  }

  return (
    <div className='ControlPage'>
      <div className='LeftControl'>
        <div 
          className='UserPageButton'
          onClick={() => navigate('/user')}
        >
          <RiUserSharedFill />
        </div>
      </div>
      <div className='RightControl'>
        <div className='LoggedInTempHumi'>
          <TempGraph 
            insideTemp={graphData.insideTemp}
            acstate={graphData.acstate}
            outsideTemp={graphData.outsideTemp}
            timelabels={graphData.timeLabels}
          />
          <HumiGraph 
            insideHumi={graphData.insideHumi}
            outsideHumi={graphData.outsideHumi}
            timelabels={graphData.timeLabels}
          />
        </div>
        <div className='Ac'>
          <div className='AcState'>
            <h1>
              Control
            </h1>
            <h1>
              A/C is {acState}
            </h1>
          </div>
          <div className='AcButtons'>
            <button
              className='TurnOnButton'
              onClick={turnOn}
            >
              Turn ON A/C
            </button>
            <button
              className='TurnOffButton'
              onClick={turnOff}
            >
              Turn OFF A/C
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Control;
