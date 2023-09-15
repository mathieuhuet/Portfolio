import './mi8.css';
import './mi8Mobile.css';
import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';



const Mi8 = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 1023px)' });
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const mi8FR = (
  <div className="experience-detail">
    <div className="exp-line">Technicien Senior STI (Système de Transport Intelligent)</div>
    <br />
    <div className="exp-line"> - Concocter des algorithmes d'automatisation Python pour faciliter la collecte de données et le bon fonctionnement des équipements.</div>
    <br />
    <div className="exp-line"> - Travailler avec la Ville de Montréal et le MTQ pour intégrer des nouvelles technologies Radar Micro-Onde pour faire le constat des routes du Québec.</div>
    <br />
    <div className="exp-line"> - Installation, maintenance et réparation des équipements de collectes de données et d'afficheurs dynamiques.</div>
    <br />
    <div className="exp-line">Peut fournir des références sur demande.</div>
  </div>);

  return (
    <div className='displayed-experience'>
      <div className='title-experience'>
        Innovation Mi8
      </div>
      <div className='single-experience'>
        {mi8FR}
      </div>
    </div>
  );
}

export default Mi8;