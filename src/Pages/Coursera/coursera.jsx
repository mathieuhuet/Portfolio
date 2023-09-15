import './coursera.css';
import './courseraMobile.css';
import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';



const Coursera = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 1023px)' });
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const courseraFR = (
  <div className="experience-detail">
    <div className="exp-line">Certificat obtenu pour le cours en ligne autorisé par Google et proposé par l'intermédiaire de Coursera.</div>
    <br />
    <a
      className="codeworks-link"
      href="https://www.coursera.org/account/accomplishments/certificate/LD4GWWKVMYF5"
      target="_blank"
      rel="noopener noreferrer"
    >
      Lien
    </a>
    <br />
  </div>);

  return (
    <div className='displayed-experience'>
      <div className='title-experience'>
        Coursera
      </div>
      <div className='single-experience'>
        {courseraFR}
      </div>
    </div>
  );
}

export default Coursera;