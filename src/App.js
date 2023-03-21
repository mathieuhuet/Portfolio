import { SiGithub } from "react-icons/si"
import { SiLinkedin } from "react-icons/si"
import { GiBatteries } from "react-icons/gi";
import { IoArrowBackOutline } from "react-icons/io5";
import mathieu from './Assets/MathieuProfil.jpg';
import batteryScreenshot0 from './Assets/BatteryScreenshot0.png';
import batteryScreenshot3 from './Assets/BatteryScreenshot3.png';
import batteryScreenshot4 from './Assets/BatteryScreenshot4.png';
import batteryScreenshot5 from './Assets/BatteryScreenshot5.png';
import batteryScreenshot6 from './Assets/BatteryScreenshot6.png';
import './App.css';
import { useState } from "react";

function App() {
  const [ page, setPage ] = useState('batteryProject');

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
        <h2>Mathieu Huet</h2>
        <div className="Button-batteryProject" onClick={() => changePage('batteryProject')}>
          <GiBatteries />
        </div>
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
      </div>
    );
  }

  function BatteryProject () {
    const [ langue, setLangue ] = useState('FR')
    function changeLangue (newLangue) {
      setLangue(newLangue);
    }

    if (langue === 'FR') {
      return (
        <div className="BatteryProject">
        <div className="TopButtons">
          <div className="Button-backToMain" onClick={() => changePage('main')}>
            <IoArrowBackOutline />
          </div>
          <div className="Langue" onClick={() => changeLangue('EN')}>EN</div>
        </div>
        <div className="BatterySlide1">
          <div className="BatterySlide1Top">
            <h1 className="BatteryTitle">Battery Monitoring App</h1>
          </div>
          <div className="BatterySlide1Bottom">
            <img src={batteryScreenshot0} className="BatteryScreenshot1" alt="Screenshot of a graph from Battery Monitoring App" />
            <div className="BatteryParagraph1">Battery Monitoring est une application qui donne un accès aux données à distance de vos
            batteries et permet de mesurer leur performance en collectant des informations tout au long de la journée pour créer des diagrammes 
            qui permet d'analyser les performances entre tout vos équipements.
            </div>
          </div>
        </div>
        <div className="BatterySlide2">
          <div className="BatteryParagraph2">J'ai construit cette application seul. Le back-end, le front-end, conçu et mis en œuvre l'API sous-jacente et la modélisation des données.</div>
        </div>
        <div className="BatterySlide3">
          <div className="BatterySlide3Row">
            <img src={batteryScreenshot5} className="BatteryScreenshot3" alt="Screenshot of Battery Monitoring App" />
            <div className="BatteryParagraph3">Battery Monitoring va aller chercher les données en temps réel de vos batteries à distance.</div>
          </div>
          <div className="BatterySlide3Row">
            <div className="BatteryParagraph3">Vous pouvez comparer les performances de vos appareils pour déterminer si certaines batteries sont entrain de se dégrader ou 
            ont besoin d’être remplacées.</div>
            <img src={batteryScreenshot6} className="BatteryScreenshot3" alt="Screenshot of Battery Monitoring App" />
          </div>
          <div className="BatterySlide3Row">
            <img src={batteryScreenshot3} className="BatteryScreenshot3" alt="Screenshot of Battery Monitoring App" />
            <div className="BatteryParagraph3">
              <a
                className="Youtube-Link"
                href="https://youtu.be/s5RYPeURV8w"
                target="_blank"
                rel="noopener noreferrer"
              >
                Démonstration vidéo de l'application.
              </a>
            </div>
          </div>
          <div className="BatterySlide3Row">
            <div className="BatteryParagraph3">L'application fourni les prévisions météorologiques pour vous aidez à prédire les performances de vos appareils à énergie solaires et à énergie éoliennes.</div>
            <img src={batteryScreenshot4} className="BatteryScreenshot3" alt="Screenshot of Battery Monitoring App" />
          </div>
          <div className="BatterySlide3Bottom">
            <div className="BatterySlide3BottomTop">
              <div className="BatteryParagraph3Bottom">Cette application est alimentée par React sur le front-end. Sur le back-end, elle utilise Koa et la base de données est PostgreSQL. Sequelize est utilisé en tant qu'ORM pour PostgreSQL</div>
              <div className="BatteryParagraph3Bottom">Les technologies supplémentaires utilisées incluent Chart.js pour les graphiques illustrant les performances des équipements, Google Map Platform pour l'API cartographique et OpenWeather pour l'API météorologique.</div>
            </div>
            <div className="BatterySlide3BottomBottom">
              <div className="BottomOfThePage">Mathieu Huet - mathieuhuet@live.ca - 2023</div>
            </div>
          </div>
        </div>
      </div>
    );
    } else {
      return (
        <div className="BatteryProject">
          <div className="TopButtons">
            <div className="Button-backToMain" onClick={() => changePage('main')}>
              <IoArrowBackOutline />
            </div>
            <div className="Langue" onClick={() => changeLangue('FR')}>FR</div>
          </div>
          <div className="BatterySlide1">
            <div className="BatterySlide1Top">
              <h1>Battery Monitoring App</h1>
            </div>
            <div className="BatterySlide1Bottom">
              <img src={batteryScreenshot0} className="BatteryScreenshot1" alt="Screenshot of a graph from Battery Monitoring App" />
              <div className="BatteryParagraph1">Battery Monitoring is an app that let you monitor remotely the battery state of your IoT devices 
              and also let you monitor the performances of your batteries, it fetch battery data all day from your devices and let you visualize 
              them on a graph.</div>
            </div>
          </div>
          <div className="BatterySlide2">
            <div className="BatteryParagraph2">I built the app from the ground up, designed and implemented the underlying API and data modeling.</div>
          </div>
          <div className="BatterySlide3">
            <div className="BatterySlide3Row">
              <img src={batteryScreenshot5} className="BatteryScreenshot3" alt="Screenshot of Battery Monitoring App" />
              <div className="BatteryParagraph3">Battery Monitoring will remotely fetch live data from your batteries whenever you need it to.</div>
            </div>
            <div className="BatterySlide3Row">
              <div className="BatteryParagraph3">You can compare the performances of your batteries to see if some are starting to be worn out or in need of a
              replacement.</div>
              <img src={batteryScreenshot6} className="BatteryScreenshot3" alt="Screenshot of Battery Monitoring App" />
            </div>
            <div className="BatterySlide3Row">
              <img src={batteryScreenshot3} className="BatteryScreenshot3" alt="Screenshot of Battery Monitoring App" />
              <div className="BatteryParagraph3">
                <a
                  className="Youtube-Link"
                  href="https://youtu.be/s5RYPeURV8w"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Video demonstration of the app.
                </a>
              </div>
            </div>
            <div className="BatterySlide3Row">
              <div className="BatteryParagraph3">The app provides weather forecast so you can predict the performance of your Solar-powered and Wind-powered devices.</div>
              <img src={batteryScreenshot4} className="BatteryScreenshot3" alt="Screenshot of Battery Monitoring App" />
            </div>
            <div className="BatterySlide3Bottom">
              <div className="BatterySlide3BottomTop">
                <div className="BatteryParagraph3Bottom">This app is powered by React on the front-end. On the back-end it uses Koa and the database is PostgreSQL. 
                Additional technologies used include Sequelize as an ORM for PostgreSQL</div>
                <div className="BatteryParagraph3Bottom">Chart.js for graph illustrating past data, Google Map Platform for the map API and OpenWeather for the 
                weather API.</div>
              </div>
              <div className="BatterySlide3BottomBottom">
                <div className="BottomOfThePage">Mathieu Huet - mathieuhuet@live.ca - 2023</div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  function Error404 () {
    return (
      <div className="Error404">Error404, the page you tried to reach doesn't exist. Refresh your browser to return to the main page.</div>
    );
  }
}

export default App;
