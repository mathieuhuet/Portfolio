import React from "react";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routing from "./Routes/routing";
import Header from "./Components/Header/header";
import Bottom from "./Components/Bottom/bottom";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="AppMain">
          <Routing />
        </div>
        <Bottom />
      </Router>
    </div>
  );
}

export default App;
