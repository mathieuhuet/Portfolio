import './codecademy.css'
import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';


const Codecademy = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 1023px)' });
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
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
    <div>
      {isMobile ? <Portrait /> : <Landscape />}
    </div>
  );

  function Portrait () {
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

  function Landscape () {
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
}

export default Codecademy;