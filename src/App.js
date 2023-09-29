import React, { useState } from "react";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routing from "./Routes/routing";
import Header from "./Components/Header/header";
import Bottom from "./Components/Bottom/bottom";


function App() {
  // ONLY USED WHEN RENDERING MOBILE MODE This is to disable the mobile menu to pop at the top (it is use when looking through screenshots for example)
  const [allowMobileMenu, setAllowMobileMenu] = useState(true);

  return (
    <div className="app">
      <Router>
        <Header
          allowMobileMenu={allowMobileMenu}
        />
        <div className="app-main">
          <Routing 
            setAllowMobileMenu={setAllowMobileMenu}
          />
        </div>
        <Bottom />
      </Router>
    </div>
  );
}

export default App;
