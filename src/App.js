import React, { useState } from "react";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routing from "./Routes/routing";
import Header from "./Components/Header/header";
import Bottom from "./Components/Bottom/bottom";
// Auth
import { useCookies } from 'react-cookie';
import SignedInRoute from './Routes/signedInRoute';
import SignedOutRoute from './Routes/signedOutRoute';


function App() {
  // ONLY USED WHEN RENDERING MOBILE MODE This is to disable the mobile menu to pop at the top (it is use when looking through screenshots for example)
  const [allowMobileMenu, setAllowMobileMenu] = useState(true);
  const [cookies, setCookie] = useCookies(['accessToken']);

  return (
    <div className="app">
      <Router>
        <Header
          allowMobileMenu={allowMobileMenu}
        />
        <div className="app-main">
          {cookies.accessToken ?           
            <SignedInRoute
              setAllowMobileMenu={setAllowMobileMenu}
            /> :
            <SignedOutRoute
              setAllowMobileMenu={setAllowMobileMenu}
            />
          }
        </div>
        <Bottom />
      </Router>
    </div>
  );
}

export default App;
