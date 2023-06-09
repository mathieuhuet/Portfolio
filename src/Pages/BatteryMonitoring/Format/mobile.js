import './mobile.css';
import React from 'react'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {Helmet} from "react-helmet";
import batteryScreenshot0 from '../../../Assets/BatteryScreenshot0.png';
import batteryScreenshot3 from '../../../Assets/BatteryScreenshot3.png';
import batteryScreenshot4 from '../../../Assets/BatteryScreenshot4.png';
import batteryScreenshot5 from '../../../Assets/BatteryScreenshot5.png';
import batteryScreenshot6 from '../../../Assets/BatteryScreenshot6.png';
import { IoArrowBackOutline } from "react-icons/io5";


function Mobile () {
  let navigate = useNavigate();
  const [ langue, setLangue ] = useState('FR')
  function changeLangue (newLangue) {
    setLangue(newLangue);
  }

  if (langue === 'FR') {
    return (
      <div>
      <Helmet><title>Mathieu's Battery Monitoring App</title></Helmet>
      <div className="TopButtons">
        <div className="Button-backToMain" onClick={() => navigate('/')}>
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
          <div className="BatteryParagraph1">Battery Monitoring est une application qui donne un accès aux données de vos batteries à distance 
          et collecte des informations tout au long de la journée pour créer des diagrammes qui permettent d'analyser les performances de tout vos équipements.
          </div>
        </div>
      </div>
      <div className="BatterySlide2Tablet">
        <div className="BatteryParagraph2">J'ai construit cette application seul. Le back-end, le front-end, conçu et mis en œuvre l'API sous-jacente et la modélisation des données.</div>
      </div>
      <div className="BatterySlide3">
        <div className="BatterySlide3Row">
          <img src={batteryScreenshot5} className="BatteryScreenshot3" alt="Screenshot of Battery Monitoring App" />
          <div className="BatteryParagraph3">Battery Monitoring va chercher les données en temps réel de vos batteries.</div>
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
              className="Youtube-LinkMobile"
              href="https://youtu.be/s5RYPeURV8w"
              target="_blank"
              rel="noopener noreferrer"
            >
              Démonstration vidéo de l'application.
            </a>
          </div>
        </div>
        <div className="BatterySlide3Row">
          <div className="BatteryParagraph3">L'application fourni les prévisions météorologiques pour vous aidez à prédire les performances de vos appareils à énergie solaires 
          et à énergie éoliennes.</div>
          <img src={batteryScreenshot4} className="BatteryScreenshot3" alt="Screenshot of Battery Monitoring App" />
        </div>
        <div className="BatterySlide3Bottom">
          <div className="BatterySlide3BottomTop">
            <div className="BatteryParagraph3Bottom">Cette application est alimentée par React sur le front-end, Koa sur le back-end et la base de données est PostgreSQL. 
            Sequelize est utilisé en tant qu'ORM pour PostgreSQL</div>
            <div className="BatteryParagraph3Bottom">Les technologies supplémentaires utilisées incluent Chart.js pour les graphiques illustrant les performances des équipements, 
            Google Map Platform pour l'API cartographique et OpenWeather pour l'API météorologique.</div>
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
      <div>
        <Helmet><title>Mathieu's Battery Monitoring App</title></Helmet>
        <div className="TopButtons">
          <div className="Button-backToMain" onClick={() => navigate('/')}>
            <IoArrowBackOutline />
          </div>
          <div className="Langue" onClick={() => changeLangue('FR')}>FR</div>
        </div>
        <div className="BatterySlide1">
          <div className="BatterySlide1Top">
            <h1 className="BatteryTitle">Battery Monitoring App</h1>
          </div>
          <div className="BatterySlide1Bottom">
            <img src={batteryScreenshot0} className="BatteryScreenshot1" alt="Screenshot of a graph from Battery Monitoring App" />
            <div className="BatteryParagraph1">Battery Monitoring is an app that let you monitor remotely the battery state of your IoT devices. 
            It also fetch battery data all day from your devices and let you visualize them on a graph to analyze their performances.</div>
          </div>
        </div>
        <div className="BatterySlide2Tablet">
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
                className="Youtube-LinkMobile"
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
              <div className="BatteryParagraph3Bottom">This app is powered by React on the front-end, on the back-end it uses Koa and the database is PostgreSQL.</div>
              <div className="BatteryParagraph3Bottom">Additional technologies used include Sequelize as an ORM for PostgreSQL, Chart.js for graph illustrating past data, 
              Google Map Platform for the map API and OpenWeather for the weather API.</div>
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

export default Mobile;