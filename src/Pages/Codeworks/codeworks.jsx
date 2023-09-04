import './codeworks.css'
import React from 'react';



const Codeworks = () => {

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


  return (
    <div className='DisplayedExperience'>
      <div className='TitleExperience'>
        Codeworks
      </div>
      <div className='SingleExperience'>
        {codeworksFR}
      </div>
    </div>
  )
}

export default Codeworks;