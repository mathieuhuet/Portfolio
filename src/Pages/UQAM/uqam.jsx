import './uqam.css'
import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CgCloseO } from "react-icons/cg";



const Uqam = () => {
  let navigate = useNavigate();
  const [displayExperienceLanguage, setDisplayExperienceLanguage] = useState('FR');


  const uqamFR = (
  <div className="ExperienceDetail">
    <div className="expLine">moyenne-cumulative : 3.37 / 4.3</div>
    <br />
    <div className="expLine"> - Programmation 1</div>
    <div className="expLine"> - Programmation 2</div>
    <div className="expLine"> - Mathématiques générales</div>
    <div className="expLine"> - Calcul différentiel et intégral</div>
    <div className="expLine"> - Interconnexions et communications</div>
    <div className="expLine"> - L'univers des télécommunications</div>
    <div className="expLine"> - Fichiers et bases de données</div>
    <div className="expLine"> - Organisation des ordinateurs et language d'assembleur</div>
    <div className="expLine"> - Construction et maintenance de logiciel</div>
    <div className="expLine"> - Téléinformatique</div>
    <div className="expLine"> - Réseaux sans-fil et applications mobiles</div>
    <div className="expLine"> - Projet supervisé</div>
    <br />
    <div className="expLine">Certificat en télécommunications <u>complété</u> tout en travaillant comme technicien chez Vidéotron à temps plein de 2015 à 2021.</div>
    <br />
    <div className="expLine">Peut fournir un relevé de notes sur demande.</div>
  </div>);

  const uqamEN = (
  <div className="ExperienceDetail">
    <div className="expLine">GPA : 3.37 / 4.3</div>
    <br />
    <div className="expLine"> - Programmation 1</div>
    <div className="expLine"> - Programmation 2</div>
    <div className="expLine"> - Mathématiques générales</div>
    <div className="expLine"> - Calcul différentiel et intégral</div>
    <div className="expLine"> - Interconnexions et communications</div>
    <div className="expLine"> - L'univers des télécommunications</div>
    <div className="expLine"> - Fichiers et bases de données</div>
    <div className="expLine"> - Organisation des ordinateurs et language d'assembleur</div>
    <div className="expLine"> - Construction et maintenance de logiciel</div>
    <div className="expLine"> - Téléinformatique</div>
    <div className="expLine"> - Réseaux sans-fil et applications mobiles</div>
    <div className="expLine"> - Projet supervisé</div>
    <br />
    <div className="expLine">Certificat en télécommunications <u>completed</u> while working full time as a technician for Vidéotron from 2015 to 2021.</div>
    <br />
    <div className="expLine">Can provide a transcript of records on demand.</div>
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
        {displayExperienceLanguage === 'FR' ? uqamFR : uqamEN}
      </div>
    </div>
  </div>
)
}

export default Uqam;