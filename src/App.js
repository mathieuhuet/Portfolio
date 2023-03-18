import { SiGithub } from "react-icons/si"
import { SiLinkedin } from "react-icons/si"
import mathieu from './Assets/MathieuProfil.jpg';
import './App.css';
import { useState } from "react";

function App() {
  const [ page, setPage ] = useState('main');

  return (
    <div className="App">
      {page === 'main' ? <Main /> : page === 'batteryProject' ? <BatteryProject /> : <Error404 />}
    </div>
  );

  function changePage ( goToPage ) {
    setPage(goToPage);
  }

  function Main () {
    return (
      <div className="Main">
        <img src={mathieu} className="Mathieu" alt="Mathieu's face spinnin'" />
        <br />
        <div className="All-link">
          <a
            className="GitHub-link"
            href="https://github.com/mathieuhuet"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGithub />
          </a>
          <a
            className="LinkedIn-link"
            href="https://www.linkedin.com/in/mathieu--huet/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLinkedin />
          </a>
        </div>
        <div className="Button-batteryProject" onClick={() => changePage('batteryProject')}>
          Go to Battery project
        </div>
      </div>
    );
  }

  function BatteryProject () {
    return (
      <div>
        Battery Project
        <div className="Button-backToMain" onClick={() => changePage('main')}>
          Go to Main
        </div>
      </div>
    );
  }

  function Error404 () {
    return (
      <div className="Error404">Error404, the page you tried to reach doesn't exist. Refresh your browser to return to the main page.</div>
    );
  }
}

export default App;
