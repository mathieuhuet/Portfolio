import './monitoring.css';
import './monitoringMobile.css';
import React, {useState, useEffect, useMemo} from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { getAllData } from '../../Services/read/getAllData';
import { getAllDataHistory } from '../../Services/read/getAllDataHistory';
import Spinner from '../../Spinner';
import HumiGraph from '../../Components/Graphs/humiGraph';
import TempGraph from '../../Components/Graphs/tempGraph';
import { useMediaQuery } from 'react-responsive';
import { MenuItem } from '@mui/material';
import AutomaticState from '../../Components/State/automatic';
import { getAutomaticModeData } from '../../Services/read/getAutomaticModeData';
import MessageInfo from '../../Components/MessageBroadcast/messageInfo';
import { getMessageBroadcast } from '../../Services/read/getMessageBroadcast';
import Toggle from '../../Components/Buttons/toggle';


/*
Monitoring page, you can read the states of the devices and the history of some data.
*/





const Monitoring = (props) => {
  const isMobile = useMediaQuery({ query: '(max-width: 1200px)' });
  const [allData, setAllData] = useState([]);
  const [insideTemp, setInsideTemp] = useState('');
  const [insideHumi, setInsideHumi] = useState('');
  const [outsideTemp, setOutsideTemp] = useState('');
  const [outsideHumi, setOutsideHumi] = useState('');
  const [insideTemp2, setInsideTemp2] = useState('');
  const [insideHumi2, setInsideHumi2] = useState('');
  const [acState, setAcState] = useState('');
  const [lightState, setLightState] = useState('');
  const [insideCheck, setInsideCheck] = useState(true);
  const [outsideCheck, setOutsideCheck] = useState(true);
  const [nbJours, setNbJours] = useState(2);
  const [actualMin, setactualMin] = useState(0);
  const [actualMax, setactualMax] = useState(0);
  const [isAutoOn, setIsAutoOn] = useState(false);
  const [broadcastEnable, setBroadcastEnable] = useState(false);
  const [broadcastTime, setBroadcastTime] = useState(3);
  const [broadcastMessage, setBroadcastMessage] = useState("");
  

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
      allData[k].acstate == 'ON' ? acstate.push(27) : acstate.push(NaN);
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
        setInsideTemp2(allData.data.insideTemp2);
        setInsideHumi2(allData.data.insideHumi2);
        setAcState(allData.data.acstate);
        setLightState(allData.data.lightstate);
      } else {
        console.log('problem fetching data');
      }
      const allDataHistory = await getAllDataHistory({numberOfDays: nbJours});
      if (allDataHistory.data) {
        setAllData(allDataHistory.data);
      } else {
        console.log('problem fetching data');
      }
      const autoInfo = await getAutomaticModeData();
      if (autoInfo) {
        setIsAutoOn(autoInfo.data.automaticMode)
        setactualMin(autoInfo.data.lowerThreshold)
        setactualMax(autoInfo.data.upperThreshold)
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
    fetchData();
  }, [nbJours]);

  return (
    <div>
      {isMobile &&
        <div className='MonitoringPage'>
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
              <div className='AcState'>
                <Toggle
                  name={'A/C'}
                  state={acState}
                  trigger={null}
                />
                <div style={{width: 16}}>
                </div>
                <Toggle
                  name={'Light'}
                  state={lightState}
                  trigger={null}
                />
              </div>
              <div style={{ width: 'fit-content', justifySelf: 'center'}}>
                <AutomaticState
                  automaticMode={isAutoOn}
                  lowerThreshold={actualMin}
                  upperThreshold={actualMax}
                />
              </div>
              <div style={{marginTop: 5, width: 'fit-content', justifySelf: 'center'}}>
                <MessageInfo
                  broadcastEnable={broadcastEnable}
                  broadcastTime={broadcastTime}
                  message={broadcastMessage}
                />
              </div>
            </div>
          <div className='TempBox'>
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
              insideTemp2={insideCheck ? graphData.insideTemp2 : []}
              acstate={insideCheck ? graphData.acstate : []}
              outsideTemp={outsideCheck ? graphData.outsideTemp : []}
              timelabels={graphData.timeLabels}
            />
            <HumiGraph 
              insideHumi={insideCheck ? graphData.insideHumi : []}
              insideHumi2={insideCheck ? graphData.insideHumi2 : []}
              acstate={insideCheck ? graphData.acstate : []}
              outsideHumi={outsideCheck ? graphData.outsideHumi : []}
              timelabels={graphData.timeLabels}
            />
            <div style={{height: 32}}/>
          </div>
        </div>
      }
      {!isMobile &&
          <div className='MonitoringPage' style={{marginTop: 64}}>
            <div className='GraphBox'>
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
                  <FormControlLabel control={<Checkbox checked={insideCheck} onChange={handleInsideCheckChange} sx={{color: '#004638', '&.Mui-checked': {color: '#004638'}}} size='large'/>} />
                  Extérieur
                  <FormControlLabel control={<Checkbox checked={outsideCheck} onChange={handleOutsideCheckChange} sx={{color: '#82bf00', '&.Mui-checked': {color: '#82bf00'}}} size='large'/>} />
                </div>
              </div>
              <TempGraph 
                insideTemp={insideCheck ? graphData.insideTemp : []}
                insideTemp2={insideCheck ? graphData.insideTemp2 : []}
                acstate={insideCheck ? graphData.acstate : []}
                outsideTemp={outsideCheck ? graphData.outsideTemp : []}
                timelabels={graphData.timeLabels}
              />
              <HumiGraph 
                insideHumi={insideCheck ? graphData.insideHumi : []}
                insideHumi2={insideCheck ? graphData.insideHumi2 : []}
                acstate={insideCheck ? graphData.acstate : []}
                outsideHumi={outsideCheck ? graphData.outsideHumi : []}
                timelabels={graphData.timeLabels}
              />
            </div>
            <div className='WeatherBox'>
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
                <div className='AcState'>
                  <Toggle
                    name={'A/C'}
                    state={acState}
                    trigger={null}
                  />
                  <div style={{width: 16}}>
                  </div>
                  <Toggle
                    name={'Light'}
                    state={lightState}
                    trigger={null}
                  />
                </div>
              </div>
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <div style={{marginTop: 5, width: 'fit-content', justifySelf: 'center'}}>
                  <AutomaticState
                    automaticMode={isAutoOn}
                    lowerThreshold={actualMin}
                    upperThreshold={actualMax}
                  />
                </div>
                <div style={{marginTop: 5, width: 'fit-content', justifySelf: 'center'}}>
                  <MessageInfo
                    broadcastEnable={broadcastEnable}
                    broadcastTime={broadcastTime}
                    message={broadcastMessage}
                  />
                </div>
              </div>
            </div>
        </div>
      }
    </div>
  );
};

export default Monitoring;
