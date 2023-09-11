import './batterymonitoring.css';
import React, {useEffect} from "react";
import { useMediaQuery } from 'react-responsive';
import Desktop from "./Format/desktop";
import Portrait from "./Format/portrait";

/*
Component that display the page about the Battery Montiroring project. http://www.mathieuhuet.com/battery_monitoring/
*/

function BatteryMonitoring() {
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='BatteryProject'>
      {isPortrait ? 
      <Portrait

      /> :
      <Desktop

      />}
    </div>
  );
}

export default BatteryMonitoring;