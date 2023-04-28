import './codeworks.css'
import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CgCloseO } from "react-icons/cg";



const Codeworks = () => {
  let navigate = useNavigate();
  const [displayExperienceLanguage, setDisplayExperienceLanguage] = useState('FR');


  const codeworksFR = (
  <div className="ExperienceDetail">
    <div className="expLine"> - Codeworks est un bootcamp intensif, 6 jours par semaine, de 9h jusqu'à 21h.</div>
    <br />
    <div className="expLine"> - Apprendre des nouvelles technologies de programmation et les implémenter.</div>
    <br />
    <div className="expLine"> - Compléter des projets en solo ou en équipe.</div>
    <br />
    <a
      className="Codeworks-Link"
      href="https://codeworks.me/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Site web de Codeworks
    </a>
    <br />
  </div>);

  const codeworksEN = (
  <div className="ExperienceDetail">
    <div className="expLine"> - Codeworks is an intensive bootcamp, 6 days a week, from 9am until 9pm.</div>
    <br />
    <div className="expLine"> - Learning multiple new technologies and implementing them.</div>
    <br />
    <div className="expLine"> - Completing projects in solo or in teams.</div>
    <br />
    <a
      className="Codeworks-Link"
      href="https://codeworks.me/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Codeworks Website
    </a>
    <br />
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
          {displayExperienceLanguage === 'FR' ? codeworksFR : codeworksEN}
        </div>
      </div>
    </div>
  )
}

export default Codeworks;