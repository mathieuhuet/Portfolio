import './batterymonitoring.css';
import './batterymonitoringMobile.css';
import React, {useEffect} from "react";
import { useMediaQuery } from 'react-responsive';
import batteryScreenshot0 from '../../Assets/Battery_Monitoring/BatteryScreenshot0.png';
import batteryScreenshot3 from '../../Assets/Battery_Monitoring/BatteryScreenshot3.png';
import batteryScreenshot4 from '../../Assets/Battery_Monitoring/BatteryScreenshot4.png';
import batteryScreenshot5 from '../../Assets/Battery_Monitoring/BatteryScreenshot5.png';
import batteryScreenshot6 from '../../Assets/Battery_Monitoring/BatteryScreenshot6.png';

/*
Component that display the page about the Battery Montiroring project. http://www.mathieuhuet.com/battery_monitoring/
*/

function BatteryMonitoring() {
  const isMobile = useMediaQuery({ query: '(max-width: 1023px)' });

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <div className='battery-project-container'>
      <div className="battery-slide-1">
        <div className="battery-slide-1-top">
          <h1 className="battery-title">Battery Monitoring App</h1>
        </div>
        <div className="battery-slide-1-bottom">
          <img src={batteryScreenshot3} className="battery-screenshot-1" alt="Screenshot of a graph from Battery Monitoring App" />
          <div className="battery-paragraph-1">Battery Monitoring est une application qui donne un accès aux statistiques de consommation d'énergie de vos équipements à batteries  
          et collecte des informations tout au long de la journée pour créer des diagrammes qui permettent d'analyser les performances de toutes vos batteries.
          </div>
        </div>
      </div>
      <div className="battery-slide-2">
        <div className="battery-paragraph-2">J'ai construit cette application seul. Le back-end, le front-end, conçu et mis en œuvre le RESTful API et la modélisation des données.</div>
      </div>
      <div className="battery-slide-3">
        {isMobile &&
        <div className="battery-slide-3-row">
          <img src={batteryScreenshot0} className="battery-screenshot-3" alt="Screenshot of Battery Monitoring App" />
          <div className="battery-paragraph-3">
            <a
              className="youtube-link"
              href="https://youtu.be/s5RYPeURV8w"
              target="_blank"
              rel="noopener noreferrer"
            >
              Démonstration vidéo de l'application.
            </a>
          </div>
        </div>
        }
        {isMobile &&
        <div className="battery-slide-3-row">
          <div className="battery-paragraph-3">Battery Monitoring va chercher les données en temps réel de vos batteries.</div>
          <img src={batteryScreenshot5} className="battery-screenshot-3" alt="Screenshot of Battery Monitoring App" />
        </div>
        }
        {!isMobile &&
        <div className="battery-slide-3-row">
          <img src={batteryScreenshot5} className="battery-screenshot-3" alt="Screenshot of Battery Monitoring App" />
          <div className="battery-paragraph-3">Battery Monitoring va chercher les données en temps réel de vos batteries.</div>
        </div>
        }
        <div className="battery-slide-3-row">
          <div className="battery-paragraph-3">Vous pouvez comparer les performances de vos équipements pour déterminer si certaines batteries sont entrain de se dégrader ou 
          ont besoin d’être remplacées.</div>
          <img src={batteryScreenshot6} className="battery-screenshot-3" alt="Screenshot of Battery Monitoring App" />
        </div>
        {!isMobile &&
        <div className="battery-slide-3-row">
          <img src={batteryScreenshot0} className="battery-screenshot-3" alt="Screenshot of Battery Monitoring App" />
          <div className="battery-paragraph-3">
            <a
              className="youtube-link"
              href="https://youtu.be/s5RYPeURV8w"
              target="_blank"
              rel="noopener noreferrer"
            >
              Démonstration vidéo de l'application.
            </a>
          </div>
        </div>
        }
        <div className="battery-slide-3-row">
          <div className="battery-paragraph-3">L'application fourni aussi les prévisions météorologiques pour vous aidez à prédire les performances de vos appareils à énergie solaires 
          et à énergie éoliennes.</div>
          <img src={batteryScreenshot4} className="battery-screenshot-3" alt="Screenshot of Battery Monitoring App" />
        </div>
        <div className="battery-slide-3-bottom">
          <div className="battery-slide-3-bottom-top">
            <div className="battery-paragraph-3-bottom">Cette application est alimentée par React sur le front-end, Koa sur le back-end et la base de données est PostgreSQL. 
            Sequelize est utilisé en tant qu'ORM pour PostgreSQL</div>
            <div className="battery-paragraph-3-bottom">Les technologies supplémentaires utilisées incluent Chart.js pour les graphiques illustrant les performances des équipements, 
            Google Map Platform pour l'API cartographique et OpenWeather pour l'API météorologique.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BatteryMonitoring;