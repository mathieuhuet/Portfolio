import './uqam.css'
import React, { useEffect } from 'react';




const Uqam = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const uqamFR = (
  <div className="ExperienceDetail">
    <div className="expLine">GPA : 3.37</div>
    <br />
    <div className="expLine"> - Programmation 1</div>
    <div className="expLine"> - Programmation 2</div>
    <div className="expLine"> - Mathématiques générales</div>
    <div className="expLine"> - Calcul différentiel et intégral</div>
    <div className="expLine"> - Interconnexions et communications</div>
    <div className="expLine"> - L'univers des télécommunications</div>
    <div className="expLine"> - Fichiers et bases de données</div>
    <div className="expLine"> - Organisation des ordinateurs et language d'assembleur</div>
    <div className="expLine"> - Construction et maintenance de logiciel</div>
    <div className="expLine"> - Téléinformatique</div>
    <div className="expLine"> - Réseaux sans-fil et applications mobiles</div>
    <div className="expLine"> - Projet supervisé</div>
    <br />
    <div className="expLine">Certificat en télécommunications <u>complété</u> tout en travaillant comme technicien résidentielle chez Vidéotron à temps plein de 2015 à 2021.</div>
    <br />
    <div className="expLine">Peut fournir un relevé de notes sur demande.</div>
  </div>);


return (

  <div className='DisplayedExperience'>
    <div className='TitleExperience'>
      Université du Québec À Montréal
    </div>
    <div className='SingleExperience'>
      {uqamFR}
    </div>
  </div>

)
}

export default Uqam;