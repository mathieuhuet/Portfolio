import React from "react";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routing from "./Routes/routing";
import Header from "./Components/Header/header";
import Bottom from "./Components/Bottom/bottom";


function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="app-main">
          <Routing />
        </div>
        <Bottom />
      </Router>
    </div>
  );
}

export default App;
