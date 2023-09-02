import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../Pages/Main/main'
import BatteryMonitoring from '../Pages/BatteryMonitoring/batterymonitoring'
import Experiences from '../Components/Experiences/experiences';
import Codeworks from '../Pages/Codeworks/codeworks';
import Uqam from '../Pages/UQAM/uqam';
import Mi8 from '../Pages/Mi8/mi8';
import FriendlyBets from '../Pages/FriendlyBets/friendlyBets';
import GPMM from '../Pages/GPMM/gpmm';


/*
Routing to go between the different component
*/


const Routing = () => {
  return (
    <section className="Routing">
      <Routes>
        <Route
          path="/mi8"
          element={<Mi8 />}
        />
        <Route
          path="/uqam"
          element={<Uqam />}
        />
        <Route
          path="/codeworks"
          element={<Codeworks />}
        />
        <Route
          path="/battery_monitoring"
          element={<BatteryMonitoring />}
        />
        <Route
          path="/friendly_bets"
          element={<FriendlyBets />}
        />
        <Route
          path="/gpmm"
          element={<GPMM />}
        />
        <Route 
          path="/resume" 
          element={<Experiences />} 
        />
        <Route 
          path="/" 
          element={<Main />} 
        />
      </Routes>
    </section>
  );
};

export default Routing;