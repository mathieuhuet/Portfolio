import './uqam.css';
import './uqamMobile.css';
import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';



const Uqam = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 1023px)' });
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const uqamFR = (
  <div className="experience-detail">
    <div className="exp-line">GPA : 3.37</div>
    <br />
    <div className="exp-line"> - Programmation 1</div>
    <div className="exp-line"> - Programmation 2</div>
    <div className="exp-line"> - Mathématiques générales</div>
    <div className="exp-line"> - Calcul différentiel et intégral</div>
    <div className="exp-line"> - Interconnexions et communications</div>
    <div className="exp-line"> - L'univers des télécommunications</div>
    <div className="exp-line"> - Fichiers et bases de données</div>
    <div className="exp-line"> - Organisation des ordinateurs et language d'assembleur</div>
    <div className="exp-line"> - Construction et maintenance de logiciel</div>
    <div className="exp-line"> - Téléinformatique</div>
    <div className="exp-line"> - Réseaux sans-fil et applications mobiles</div>
    <div className="exp-line"> - Projet supervisé</div>
    <br />
    <div className="exp-line">Certificat en télécommunications <u>complété</u> tout en travaillant comme technicien résidentielle chez Vidéotron à temps plein de 2015 à 2021.</div>
    <br />
    <div className="exp-line">Peut fournir un relevé de notes sur demande.</div>
  </div>);

  return (
    <div className='displayed-experience'>
      <div className='title-experience'>
        Université du Québec À Montréal
      </div>
      <div className='single-experience'>
        {uqamFR}
      </div>
    </div>
  );
}

export default Uqam;