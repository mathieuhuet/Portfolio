import './mi8.css'
import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CgCloseO } from "react-icons/cg";



const Mi8 = () => {
  let navigate = useNavigate();
  const [displayExperienceLanguage, setDisplayExperienceLanguage] = useState('FR');


  const mi8FR = (
  <div className="ExperienceDetail">
    <div className="expLine">Technicien Senior STI (Système de Transport Intelligent)</div>
    <br />
    <div className="expLine"> - Concocter des algorithmes d'automatisation Python pour faciliter la collecte de données 
et le bon fonctionnement des équipements.</div>
    <br />
    <div className="expLine"> - Travailler avec la Ville de Montréal et le MTQ pour intégrer des nouvelles technologies 
Radar Micro-Onde pour faire le constat des routes du Québec.</div>
    <br />
    <div className="expLine"> - Installation, maintenance et réparation des équipements de collectes de données et 
d'afficheurs dynamiques.</div>
    <br />
    <div className="expLine">Peut fournir des références sur demande.</div>
  </div>);

  const mi8EN = (
  <div className="ExperienceDetail">
    <div className="expLine">Senior ITS Technician (Intelligent Transportation System)</div>
    <br />
    <div className="expLine"> - Writing Python scripts to automate the collect of data and monitor the state of our devices.</div>
    <br />
    <div className="expLine"> - Working with the City of Montréal and the MTQ (Ministère des Transports du Québec) to 
  integrate new micro-wave radar technologies to do the reports of Québec's road infrastructure.</div>
    <br />
    <div className="expLine"> - Install, maintain and repair data collection devices and dynamic displays.</div>
    <br />
    <div className="expLine">Can provide references on demand.</div>
  </div>);


return (
  <div className='PageContainer'>
    <div className='DisplayedExperience'>
      <div className='TopButtonsDisplayExperience'>
        <div className='CloseExperience' onClick={() => {
          navigate('/');
        }}>
          <CgCloseO />
        </div>
        <div className='ChangeLanguage' onClick={() => displayExperienceLanguage === 'FR' ? setDisplayExperienceLanguage('EN') : setDisplayExperienceLanguage('FR')}>
          {displayExperienceLanguage === 'FR' ? 'EN' : 'FR'}
        </div>
      </div>
      <div className='SingleExperience'>
        {displayExperienceLanguage === 'FR' ? mi8FR : mi8EN}
      </div>
    </div>
  </div>
)
}

export default Mi8;