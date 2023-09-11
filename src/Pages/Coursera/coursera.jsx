import './coursera.css'
import React, { useEffect } from 'react';



const Coursera = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const codeworksFR = (
  <div className="ExperienceDetail">
    <div className="expLine">Certificat obtenu pour le cours en ligne autorisé par Google et proposé par l'intermédiaire de Coursera.</div>
    <br />
    <a
      className="Codeworks-Link"
      href="https://www.coursera.org/account/accomplishments/certificate/LD4GWWKVMYF5"
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
        Coursera
      </div>
      <div className='SingleExperience'>
        {codeworksFR}
      </div>
    </div>
  )
}

export default Coursera;