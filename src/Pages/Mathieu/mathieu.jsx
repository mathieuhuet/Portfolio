import './mathieu.css';
import './mathieuMobile.css';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';


/*
Main page of the website, where you go when entering http://www.mathieuhuet.com/
*/

function Mathieu () {
  let navigate = useNavigate();

  const isMobile = useMediaQuery({ query: '(max-width: 1023px)' });

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

    // Function will execute on click of button
    const onButtonClick = () => {
      // using Java Script method to get PDF file
      fetch('Mathieu_Huet_Resume.pdf').then(response => {
        response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'SamplePDF.pdf';
          alink.click();
        })
      })
    }

  return (
    <div className='main'>
      <div className='main-top'>
        <div className='upper-text'>
          <div className='title'>
            Mathieu Huet
          </div>
          <div className='highlighted-text'>
            Je suis présentement à la recherche d'emploi.
          </div>
        </div>
        <div className='secondary-title'>
          Je suis un développeur spécialisé Javascript & Python. Mon framework préféré est de loin React.
        </div>
      </div>
      <div className='main-bottom'>
        <div className='main-text'>
          J'ai commencé à faire de la programmation en 2017 avec Java grâce aux cours de programmation de l'UQÀM, j'ai vu plusieurs language de programmation mais j'ai décidé d'accorder le plus d'importance à Python car c'était facile, rapide et pratique pour faire des scripts d'automatisations pour m'aider dans mes derniers emplois. En 2022 j'ai entâmé les étapes pour devenir un développeur web, alors je me suis tourné complétement sur Javascript, j'ai pris des cours en ligne sur divers site d'apprentissage et j'ai complété le bootcamp intensif de Codeworks. Maintenant je travail sur des projets personnels pour profiner mon art.
        </div>
        <div className='links'>
          <div className='link1'
            onClick={onButtonClick}
          >
            Télécharger mon C.V.
          </div>
          <div className='link2'
            onClick={() => navigate('/resume')}
          >
            Expériences
          </div>
          <div className='link2'
            onClick={() => navigate('/resume')}
          >
            GPMM Alertes
          </div>
          <div className='link2'
            onClick={() => navigate('/resume')}
          >
            Friendly Bets
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mathieu;
