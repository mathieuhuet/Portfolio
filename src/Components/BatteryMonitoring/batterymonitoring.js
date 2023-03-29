import './batterymonitoring.css';
import React from "react";
import { useMediaQuery } from 'react-responsive';
import Desktop from "./Format/desktop";
import Mobile from "./Format/mobile";
import Portrait from "./Format/portrait";


function BatteryMonitoring() {


  // const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'});
  // const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
  // const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });
 


  return (
    <div className='BatteryProject'>
      {isPortrait ? 
      <Portrait

      /> :
      isTabletOrMobile ? 
      <Mobile

      /> : 
      <Desktop

      />}
    </div>
  );
}

export default BatteryMonitoring;