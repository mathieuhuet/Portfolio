import './codeworks.css';
import './codeworksMobile.css';
import React, { useEffect } from 'react';


const Codeworks = () => {

  const codeworksFR = (
  <div className="experience-detail">
    <div className="exp-line"> - Codeworks est un bootcamp intensif, 6 jours par semaine, de 9h jusqu'à 21h.</div>
    <br />
    <div className="exp-line"> - Apprendre des nouvelles technologies de programmation et les implémenter.</div>
    <br />
    <div className="exp-line"> - Compléter des projets en solo ou en équipe.</div>
    <br />
    <a
      className="codeworks-link"
      href="https://codeworks.me/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Site web de Codeworks
    </a>
    <br />
  </div>);

  return (
    <div className='displayed-experience'>
      <div className='title-experience'>
        Codeworks
      </div>
      <div className='single-experience'>
        {codeworksFR}
      </div>
    </div>
  );
}

export default Codeworks;