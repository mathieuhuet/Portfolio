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
        <div className='title'>
          Mathieu Huet
        </div>
        <div className='secondary-title'>
          Je suis un développeur spécialisé Javascript & Python. Mon framework préféré est de loin React.
        </div>
      </div>
      <div className='main-bottom'>
        <div className='main-text'>
          <div className='upper-text'>
            Je suis présentement à la recherche d'emploi.
          </div>
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
        </div>
      </div>
    </div>
  );
}

export default Mathieu;
