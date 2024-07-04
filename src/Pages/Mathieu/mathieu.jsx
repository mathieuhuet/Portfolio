import './mathieu.css';
import './mathieuMobile.css';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


/*
Main page of the website, where you go when entering http://www.mathieuhuet.com/
*/

function Mathieu () {
  let navigate = useNavigate();

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
          alink.download = 'Mathieu_Huet_CV.pdf';
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
          <div className='secondary-title'>
            <div className='highlighted-text'>
              Gestionnaire technique en
            </div>
            <div className='highlighted-text'>
              Systèmes de Transport
            </div>
            <div className='highlighted-text'>
              Intelligent (STI) chez Grimard
            </div>
          </div>
        </div>
        <div className='tertiary-title'>
          Je suis aussi un développeur spécialisé Javascript/TypeScript & Python. Ma librairie préféré est de loin React.
        </div>
      </div>
      <div className='main-bottom'>
        <div className='main-text'>
          J'ai commencé à faire de la programmation en 2017 avec Java grâce aux cours de programmation de l'UQÀM, j'ai vu plusieurs language de programmation à l'université mais j'ai décidé d'accorder le plus d'importance à <u>Python</u> car c'était facile et pratique pour faire des scripts d'automatisations pour m'aider dans mes derniers emplois. En 2022 j'ai entâmé les étapes pour devenir un développeur web, alors je me suis tourné complétement sur <u>JavaScript</u>, j'ai pris des cours en ligne sur divers site d'apprentissage et j'ai complété le bootcamp intensif de Codeworks. Maintenant je travaille sur des projets personnels pour peaufiner mon art.
        </div>
        <div className='links'>
          <div className='link-group'>
            <div className='individual-link'
              onClick={onButtonClick}
            >
              <img 
                src={require("../../Assets/MathieuCV.png")} 
                alt='Téléchargez mon Curriculum Vitae (format PDF)'
                className='individual-link-image'
              />
              <div className='individual-link-text'>
                Télécharger mon C.V.
              </div>
            </div>
            <div className='individual-link'
              onClick={() => navigate('/battery_monitoring')}
            >
              <img 
                src={require("../../Assets/MathieuBattery.png")} 
                alt="Liens vers une liste de projets et d'expériences de travail"
                className='individual-link-image'
              />
              <div className='individual-link-text'>
                Battery Monitoring
              </div>
            </div>
          </div>
          <div className='link-group'>
            <div className='individual-link'
              onClick={() => navigate('/gpmm')}
            >
              <img 
                src={require("../../Assets/MathieuGPMM.png")} 
                alt='Liens vers mon projet Alertes GPMM'
                className='individual-link-image'
              />
              <div className='individual-link-text'>
                GPMM Alertes
              </div>
            </div>
            <div className='individual-link'
              onClick={() => navigate('/friendly_bets')}
            >
              <img 
                src={require("../../Assets/MathieuFriendlyBets.png")} 
                alt='Liens vers mon projet FriendlyBets'
                className='individual-link-image'
              />
              <div className='individual-link-text'>
                Friendly Bets
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mathieu;
