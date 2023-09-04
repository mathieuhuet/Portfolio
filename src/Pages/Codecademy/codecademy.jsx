import './codecademy.css'
import React from 'react';



const Codecademy = () => {

  const codeworksFR = (
  <div className="ExperienceDetail">
    <div className="expLine">Compléter "Learn PHP Course" de Codecademy</div>
    <br />
    <a
      className="Codeworks-Link"
      href="https://www.codecademy.com/profiles/mathieuhuet/certificates/d24ce3aa4ed99ac04afffec4a78e2e44"
      target="_blank"
      rel="noopener noreferrer"
    >
      Lien
    </a>
    <br />
  </div>);


  return (
    <div className='DisplayedExperience'>
      <div className='TitleExperience'>
        Codecademy
      </div>
      <div className='SingleExperience'>
        {codeworksFR}
      </div>
    </div>
  )
}

export default Codecademy;