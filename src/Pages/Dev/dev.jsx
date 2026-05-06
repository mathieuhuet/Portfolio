import './dev.css';
import './devMobile.css';
import React, { useEffect } from 'react'
import { motion } from "framer-motion";
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import { SiGithub } from "react-icons/si"
import { SiLinkedin } from "react-icons/si"
import mathieu from '../../Assets/MathieuProfil.jpg';
import DisplayExperiences from '../../Components/DisplayExperiences/displayExperiences';

/*
Main page of the website, where you go when entering http://www.mathieuhuet.com/
*/

function Dev () {
  let navigate = useNavigate();
  const isMobile = useMediaQuery({ query: '(max-width: 1200px)' });

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
    <div>
      {isMobile ? <Mobile /> : <Desktop />}
    </div>
  );

  function Mobile () {
    return (
      <div className='dev'>
        <div className='dev-top'>
          <div className='tertiary-title'>
            Je suis un développeur spécialisé Javascript/TypeScript & Python.<br></br>Ma librairie préféré est de loin React.
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
        <DisplayExperiences />
      </div>
    );
  }

  function Desktop () {
    return (
      <div className='dev'>
        <div className='dev-top'>
          <div className='tertiary-title'>
            Je suis un développeur spécialisé Javascript/TypeScript & Python.<br></br>Ma librairie préféré est de loin React.
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
        <div className='dev-bottom'>
          <div className='dev-left'>
            <motion.div
              className="motion-test"
              initial={{ opacity: 0, rotate: 0 }}
              animate={{ opacity: 1, rotate: 720 }}
              whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.1 },
              }}
              whileTap={{ scale: 1.05, rotate: 360 }}
              drag={true}
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            >
              <img src={mathieu} className="mathieu" alt="Mathieu's face spinnin'" />
            </motion.div>
            <h3 className='mathieu-huet'>Mathieu Huet</h3>
            <h3 className='fullstack-developer'>Full Stack Developer</h3>
            <div className="all-link">
              <a
                className="github-link"
                href="https://github.com/mathieuhuet"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGithub />
              </a>
              <a
                className="linkedin-link"
                href="https://www.linkedin.com/in/mathieu--huet/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiLinkedin />
              </a>
            </div>
          </div>
            <div className='dev-right'>
              <DisplayExperiences />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dev;
