import './mi8.css'
import React, { useEffect } from 'react';




const Mi8 = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const mi8FR = (
  <div className="ExperienceDetail">
    <div className="expLine">Technicien Senior STI (Système de Transport Intelligent)</div>
    <br />
    <div className="expLine"> - Concocter des algorithmes d'automatisation Python pour faciliter la collecte de données et le bon fonctionnement des équipements.</div>
    <br />
    <div className="expLine"> - Travailler avec la Ville de Montréal et le MTQ pour intégrer des nouvelles technologies Radar Micro-Onde pour faire le constat des routes du Québec.</div>
    <br />
    <div className="expLine"> - Installation, maintenance et réparation des équipements de collectes de données et d'afficheurs dynamiques.</div>
    <br />
    <div className="expLine">Peut fournir des références sur demande.</div>
  </div>);


  return (
    <div className='DisplayedExperience'>
      <div className='TitleExperience'>
        Innovation Mi8
      </div>
      <div className='SingleExperience'>
        {mi8FR}
      </div>
    </div>
  )
}

export default Mi8;