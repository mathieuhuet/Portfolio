import { SiGithub } from "react-icons/si"
import { SiLinkedin } from "react-icons/si"
import { SlActionUndo } from "react-icons/sl";
import { BiBattery } from "react-icons/bi";
import { HiBattery0 } from "react-icons/hi2";
import { HiBattery100 } from "react-icons/hi2";
import { GiBatteries } from "react-icons/gi";
import { GiBatteryPack } from "react-icons/gi";
import { GiBatteryPackAlt } from "react-icons/gi";
import { GiBatteryPlus } from "react-icons/gi"
import { IoArrowBackOutline } from "react-icons/io5";
import mathieu from './Assets/MathieuProfil.jpg';
import batteryScreenshot1 from './Assets/BatteryScreenshot1.png';
import batteryScreenshot2 from './Assets/BatteryScreenshot2.png';
import batteryScreenshot3 from './Assets/BatteryScreenshot3.png';
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
          <BiBattery /> <GiBatteries /> <GiBatteryPack /> <GiBatteryPackAlt /> <GiBatteryPlus /> <HiBattery0 /> <HiBattery100 /> <p>Go to Battery project</p>
        </div>
      </div>
    );
  }

  function BatteryProject () {
    return (
      <div className="BatteryProject">
        <div className="Button-backToMain" onClick={() => changePage('main')}>
          <IoArrowBackOutline />
        </div>
        <div className="BatterySlide1">
          <img src={batteryScreenshot1} className="BatteryScreenshot1" alt="Screenshot of Battery Monitoring App" />
          <p>Cette application vous permet de monitorer l’état des batteries de vos IoT en temps réel. Vous avez accès à des 
          informations comme le voltage des batteries, la température de l’équipement, la charge et la load des batteries. 
          Sur la carte interactive vous avez tout vos équipements à leur emplacement, l’icone représente l’état de la batterie 
          et vous pouvez cliquer dessus pour plus d’informations. L’application vous laisse aussi monitorer les performances de 
          vos équipements, elle collecte l’état des équipements chaque 10 minutes et vous pouvez visualiser ces informations à 
          partir d’un graphique. Vous pouvez comparer les performances entre différents équipements pour voir si certaines 
          batteries sont entrain de se dégrader ou ont besoin d’être remplacées.</p>
        </div>
        <div className="BatterySlide2">
          <img src={batteryScreenshot2} className="BatteryScreenshot2" alt="Screenshot of Battery Monitoring App" />
          <p>J'ai construit cette application seul, le back-end et le front-end, conçu et mis en œuvre l'API sous-jacente et la 
          modélisation des données.</p>
        </div>
        <div className="BatterySlide3">
          <img src={batteryScreenshot3} className="BatteryScreenshot3" alt="Screenshot of Battery Monitoring App" />
          <p>Cette application est alimentée par React sur le front-end. Sur le back-end, elle utilise Koa et la base de données est PostgreSQL. 
          Les technologies supplémentaires utilisées incluent Sequelize en tant qu'ORM pour PostgreSQL, Chart.js pour les graphiques illustrant 
          les performances des équipements, Google Map Platform pour l'API cartographique et OpenWeather pour l'API météo. L'application utilise 
          les données météorologiques pour vous aidez à prédire les performances de vos appareils à énergie solaires et de vos appareils à énergie 
          éoliennes.</p>
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
