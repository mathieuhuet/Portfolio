import './main.css';
import React from 'react'
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { Helmet } from "react-helmet";
import { SiGithub } from "react-icons/si"
import { SiLinkedin } from "react-icons/si"
import { GiBatteries } from "react-icons/gi";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import mathieu from '../../Assets/MathieuProfil.jpg';
import Experiences from '../../Components/Experiences/experiences';
import Header from '../../Components/Header/header';

/*
Main page of the website, where you go when entering http://www.mathieuhuet.com/
*/

function Main () {
  let navigate = useNavigate();

  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });

  return (
    <div>
      {isPortrait ? <Portrait /> : <Landscape />}
    </div>
  );

  function Portrait () {
    return (
      <div className='MainPortrait'>
        <Helmet><title>Mathieu Huet</title></Helmet>
        <motion.div
          className="motiontest"
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 1, rotate: 720 }}
          whileHover={{ 
            scale: 1.1,
            transition: { duration: 0.1 },
          }}
          whileTap={{ scale: 1.05, rotate: 360 }}
        >
          <img src={mathieu} className="Mathieu" alt="Mathieu's face spinnin'" />
        </motion.div>
        <h2 className='MathieuHuet'>Mathieu Huet</h2>
          <h2 className='FullStackDeveloper'>Full Stack Developer</h2>
        <div className='MainNavigate'>
          <div className="Button-Resume" onClick={() => navigate('/resume')}>
            <HiOutlineClipboardDocumentList />
          </div>
          <div className="Button-BatteryProject" onClick={() => navigate('/battery_monitoring')}>
            <GiBatteries />
          </div>
        </div>
        <br />
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
    );
  }

  function Landscape () {
    return (
      <div className="Main">
        <div className='Header'>
          <Header />
        </div>
        <div className='Body'>
          <div className='MainLeft'>
            <Helmet><title>Mathieu Huet</title></Helmet>
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
          <div className='MainRight'>
            <Experiences />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
