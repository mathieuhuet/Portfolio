import './main.css';
import React from 'react'
import {Helmet} from "react-helmet";
import { SiGithub } from "react-icons/si"
import { SiLinkedin } from "react-icons/si"
import { GiBatteries } from "react-icons/gi";
import mathieu from '../Assets/MathieuProfil.jpg';

function Main ({changePage}) {




  return (
    <div className="Main">
      <Helmet><title>Mathieu's Portfolio</title></Helmet>
      <img src={mathieu} className="Mathieu" alt="Mathieu's face spinnin'" />
      <h2>Mathieu Huet</h2>
      <br />
      <div className="Button-batteryProject" onClick={() => changePage('batteryProject')}>
        <GiBatteries />
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

export default Main;
