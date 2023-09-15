import './mathieuPlus.css';
import './mathieuPlusMobile.css';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';


/*
Main page of the website, where you go when entering http://www.mathieuhuet.com/
*/

function MathieuPlus () {
  let navigate = useNavigate();

  const isMobile = useMediaQuery({ query: '(max-width: 1023px)' });

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='mathieu-plus'>
      J'ai commencé à faire de la programmation en 2017 avec Java grâce aux cours de programmation de l'UQÀM, j'ai vu plusieurs language de programmation mais j'ai décidé d'accorder le plus d'importance à Python car c'était facile, rapide et pratique pour faire des scripts d'automatisations pour m'aider dans mes derniers emplois. En 2022 j'ai entâmé les étapes pour devenir un développeur web, alors je me suis tourné complétement sur Javascript, j'ai pris des cours en ligne sur divers site d'apprentissage et j'ai complété le bootcamp intensif de Codeworks. Maintenant je travail sur des projets personnels pour profiner mon art.
    </div>
  );
}

export default MathieuPlus;
