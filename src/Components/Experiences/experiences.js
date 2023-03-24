import './experiences.css';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { IoArrowBackOutline } from "react-icons/io5";



function Experiences () {


  let navigate = useNavigate();
  const experiences = [
    {
      description: 'TEST',
      languages: 'Java',
      date: '2017',
    },
    {
      description: 'TEST2',
      languages: 'Assembly Language',
      date: '2017',
    }
  ]

  return (
    <div className="Experiences">
      <Helmet><title>Mathieu's Experiences</title></Helmet>
      <div className="TopButtons">
        <div className="Button-backToMain" onClick={() => navigate('/')}>
          <IoArrowBackOutline />
        </div>
        {experiences.map(exp => console.log(exp.languages))}
      </div>
    </div>
  );
}

export default Experiences;