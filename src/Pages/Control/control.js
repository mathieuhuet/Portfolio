import './control.css';
import './controlMobile.css';
import React, { useEffect, useState, useMemo } from 'react';
import { useCookies } from "react-cookie";
import { RiUserSharedFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { turnOffAC } from '../../Services/control/turnOffAC';
import { turnOnAC } from '../../Services/control/turnOnAC';
import TempGraph from '../../Components/Graphs/tempGraph';
import HumiGraph from '../../Components/Graphs/humiGraph';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { getAllData } from '../../Services/read/getAllData';
import { getAllDataHistory } from '../../Services/read/getAllDataHistory';
import { useMediaQuery } from 'react-responsive';
import { useWindowDimensions } from '../../Utilities/windowDimension';
import { MenuItem } from '@mui/material';



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
  const [insideCheck, setInsideCheck] = useState(true);
  const [outsideCheck, setOutsideCheck] = useState(true);
  const [nbJours, setNbJours] = useState(2);
  

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

  const handleInsideCheckChange = () => {
    setInsideCheck(!insideCheck);
  }

  const handleOutsideCheckChange = () => {
    setOutsideCheck(!outsideCheck);
  }

  const handleNbJoursChange = (event) => {
    setNbJours(event.target.value);
  };

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
      const allDataHistory = await getAllDataHistory({numberOfDays: nbJours});
      if (allDataHistory.data) {
        setAllData(allDataHistory.data);
        console.log(allDataHistory.data[0].createdAt);
      } else {
        console.log('problem fetching data');
      }
    }
    fetchData();
  }, [nbJours, refresh]);

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
        <div className='LoggedInTempHumi'>
          <div className='OptionSelect'>
            <div className='DateSelect'>
              Données des 
                <FormControl variant='standard' sx={{ m: 1, maxWidth: 50}}>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={nbJours}
                    onChange={handleNbJoursChange}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                  </Select>
                </FormControl>
              derniers jour(s)
            </div>
            <div className='ButtonSelect'>
              Intérieur
              <FormControlLabel control={<Checkbox checked={insideCheck} onChange={handleInsideCheckChange} sx={{color: '#004638', '&.Mui-checked': {color: '#004638'}}} size='large' />} />
              Extérieur
              <FormControlLabel control={<Checkbox checked={outsideCheck} onChange={handleOutsideCheckChange} sx={{color: '#82bf00', '&.Mui-checked': {color: '#82bf00'}}} size='large'/>} />
            </div>
          </div>
          <TempGraph 
            insideTemp={insideCheck ? graphData.insideTemp : []}
            acstate={graphData.acstate}
            outsideTemp={outsideCheck ? graphData.outsideTemp : []}
            timelabels={graphData.timeLabels}
          />
          <HumiGraph 
            insideHumi={insideCheck ? graphData.insideHumi : []}
            outsideHumi={outsideCheck ? graphData.outsideHumi : []}
            timelabels={graphData.timeLabels}
          />
        </div>
      </div>
      <div className='RightControl'>
        <div className='Ac'>
          <div 
            className='UserPageButton'
            onClick={() => navigate('/user')}
          >
            <RiUserSharedFill />
          </div>
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
          <div className='WeatherBoxTemp'>
            <div className='TopWeatherBox'>
              Température Actuelle
            </div>
            <div className='BottomWeatherBox'>
              <div className='LeftWeatherBox'>
                <div>
                  Intérieur
                </div>
                <div>
                  {insideTemp}°C
                </div>
              </div>
              <div className='RightWeatherBox'>
                <div>
                  Extérieur
                </div>
                <div>
                  {outsideTemp}°C
                </div>
              </div>
            </div>
          </div>
          <div className='WeatherBoxHumi'>
            <div className='TopWeatherBox'>
              Humidité Actuelle
            </div>
            <div className='BottomWeatherBox'>
              <div className='LeftWeatherBox'>
                <div>
                  Intérieur
                </div>
                <div>
                  {insideHumi}%
                </div>
              </div>
              <div className='RightWeatherBox'>
                <div>
                  Extérieur
                </div>
                <div>
                  {outsideHumi}%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Control;
