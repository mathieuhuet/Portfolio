import React from "react";
import './App.css';
import { useState } from "react";
import { useMediaQuery } from 'react-responsive';
import Main from "./Components/main";
import Desktop from "./Components/BatteryMonitoring/desktop";
import Mobile from "./Components/BatteryMonitoring/mobile";
import Portrait from "./Components/BatteryMonitoring/portrait";

function App() {
  const [ page, setPage ] = useState('batteryProject');


  // const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'});
  // const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
  // const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });
 

  function changePage ( goToPage ) {
    setPage(goToPage);
  }

  function Error404 () {
    return (
      <div className="Error404">Error404, the page you tried to reach doesn't exist. Refresh your browser to return to the main page.</div>
    );
  }

  return (
    <div className="App">
      {page === 'main' ? 
      <Main 
        changePage={changePage}
      /> : 
      page === 'batteryProject' && isPortrait ? 
      <Portrait
        changePage={changePage}
      /> :
      page === 'batteryProject' && isTabletOrMobile ? 
      <Mobile
        changePage={changePage}
      /> : 
      page === 'batteryProject' ?
      <Desktop
        changePage={changePage}
      /> : 
      <Error404 />}
    </div>
  );
}

export default App;
