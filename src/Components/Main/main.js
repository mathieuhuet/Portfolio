import './main.css';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { SiGithub } from "react-icons/si"
import { SiLinkedin } from "react-icons/si"
import { GiBatteries } from "react-icons/gi";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import mathieu from '../../Assets/MathieuProfil.jpg';




function Main () {
  let navigate = useNavigate();

  return (
    <div className="Main">
      <Helmet><title>Mathieu's Portfolio</title></Helmet>
      <img src={mathieu} className="Mathieu" alt="Mathieu's face spinnin'" />
      <h2>Mathieu Huet</h2>
      <div className='MainNavigate'>
        <div className="Button-BatteryProject" onClick={() => navigate('/battery_monitoring')}>
          <GiBatteries />
        </div>
        <div className="Button-Resume" onClick={() => navigate('/resume')}>
          <HiOutlineClipboardDocumentList />
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

export default Main;
