import './dev.css';
import './devMobile.css';
import React, { useEffect } from 'react'
import { motion } from "framer-motion";
import { useMediaQuery } from 'react-responsive';
import { SiGithub } from "react-icons/si"
import { SiLinkedin } from "react-icons/si"
import mathieu from '../../Assets/MathieuProfil.jpg';
import DisplayExperiences from '../../Components/DisplayExperiences/displayExperiences';

/*
Main page of the website, where you go when entering http://www.mathieuhuet.com/
*/

function Dev () {

  const isMobile = useMediaQuery({ query: '(max-width: 1200px)' });

  return (
    <div>
      {isMobile ? <Mobile /> : <Desktop />}
    </div>
  );

  function Mobile () {
    return (
      <div className='dev'>
        <DisplayExperiences />
      </div>
    );
  }

  function Desktop () {
    return (
      <div className='dev'>
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
    );
  }
}

export default Dev;
