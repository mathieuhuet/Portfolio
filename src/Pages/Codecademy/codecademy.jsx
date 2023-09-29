import './codecademy.css';
import './codecademyMobile.css';
import React, { useEffect } from 'react';


const Codecademy = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const codecademyFR = (
  <div className="experience-detail">
    <div className="exp-line">Compléter "Learn PHP Course" de Codecademy</div>
    <br />
    <a
      className="codeworks-link"
      href="https://www.codecademy.com/profiles/mathieuhuet/certificates/d24ce3aa4ed99ac04afffec4a78e2e44"
      target="_blank"
      rel="noopener noreferrer"
    >
      Certificat d'accomplissement
    </a>
    <br />
  </div>);

  return (
    <div className='displayed-experience'>
      <div className='title-experience'>
        Codecademy
      </div>
      <div className='single-experience'>
        {codecademyFR}
      </div>
    </div>
  );
}

export default Codecademy;