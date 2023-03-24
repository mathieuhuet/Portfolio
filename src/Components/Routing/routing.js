import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../Main/main'
import BatteryMonitoring from '../BatteryMonitoring/batterymonitoring'
import Experiences from '../Experiences/experiences';


/*
Routing to go between the different component
*/


const Routing = () => {
  return (
    <section className="Routing">
      <Routes>
        <Route
          path="/battery_monitoring"
          element={<BatteryMonitoring />}
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