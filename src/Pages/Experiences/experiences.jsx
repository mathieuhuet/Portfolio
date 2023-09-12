import './experiences.css';
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

function Experiences () {

  const isMobile = useMediaQuery({ query: '(max-width: 1023px)' });

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      {isMobile ? <Portrait /> : <Landscape />}
    </div>
  );

  function Portrait () {
    return (
      <div className='ExperiencePortrait'>
        <DisplayExperiences />
      </div>
    );
  }

  function Landscape () {
    return (
      <div className='Experience'>
        <div className='ExperienceLeft'>
          <motion.div
            className="motiontest"
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
            <img src={mathieu} className="Mathieu" alt="Mathieu's face spinnin'" />
          </motion.div>
          <h3 className='MathieuHuet'>Mathieu Huet</h3>
          <h3 className='FullStackDeveloper'>Full Stack Developer</h3>
          <div className="All-link">
            <a
              className="GitHub-link"
              href="https://github.com/mathieuhuet"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub />
            </a>
            <a
              className="LinkedIn-link"
              href="https://www.linkedin.com/in/mathieu--huet/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLinkedin />
            </a>
          </div>
        </div>
        <div className='ExperienceRight'>
          <DisplayExperiences />
        </div>
      </div>
    );
  }
}

export default Experiences;
