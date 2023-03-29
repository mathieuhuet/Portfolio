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
import Experiences from '../Experiences/experiences';




function Main () {
  let navigate = useNavigate();

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });

  return (
    <div>
      {isPortrait || isTabletOrMobile ? <Portrait /> : <Landscape />}
    </div>
  );

  function Portrait () {
    return (
      <div className='MainPortrait'>
        <Helmet><title>Mathieu's Portfolio</title></Helmet>
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
        <div className='MainLeft'>
          <Helmet><title>Mathieu's Portfolio</title></Helmet>
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
          <h2 className='MathieuHuet'>Mathieu Huet</h2>
          <h2 className='FullStackDeveloper'>Full Stack Developer</h2>
          <div className='MainNavigate'>
            <div className="Button-BatteryProject" onClick={() => navigate('/battery_monitoring')}>
              <GiBatteries />
            </div>
            {/* <div className="Button-Resume" onClick={() => navigate('/resume')}>
              <HiOutlineClipboardDocumentList />
            </div> */}
          </div>
          <br />
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
        <div className='MainRight'>
          <Experiences />
        </div>
      </div>
    );
  }
}

export default Main;
