import React from "react";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routing from "./Components/Routing/routing";


function App() {


  return (
    <div className="App">
      <Router>
        <Routing 

        />
      </Router>
    </div>
  );
}

export default App;
