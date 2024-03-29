import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Experiences from '../Pages/Experiences/experiences';
import Mathieu from '../Pages/Mathieu/mathieu';
import BatteryMonitoring from '../Pages/BatteryMonitoring/batterymonitoring';
import Codeworks from '../Pages/Codeworks/codeworks';
import Coursera from '../Pages/Coursera/coursera';
import Codecademy from '../Pages/Codecademy/codecademy';
import Uqam from '../Pages/UQAM/uqam';
import Mi8 from '../Pages/Mi8/mi8';
import FriendlyBets from '../Pages/FriendlyBets/friendlyBets';
import GPMM from '../Pages/GPMM/gpmm';


/*
Routing to go between the different component
*/


const Routing = (props) => {
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
          path="/coursera"
          element={<Coursera />}
        />
        <Route
          path="/codecademy"
          element={<Codecademy />}
        />
        <Route
          path="/battery_monitoring"
          element={<BatteryMonitoring />}
        />
        <Route
          path="/friendly_bets"
          element={<FriendlyBets setAllowMobileMenu={props.setAllowMobileMenu}/>}
        />
        <Route
          path="/gpmm"
          element={<GPMM setAllowMobileMenu={props.setAllowMobileMenu}/>}
        />
        <Route 
          path="/resume" 
          element={<Experiences />} 
        />
        <Route 
          path="/" 
          element={<Mathieu />} 
        />
        <Route
          path="*"
          element={<Navigate to="/" replace={true} />}
        />
      </Routes>
    </section>
  );
};

export default Routing;