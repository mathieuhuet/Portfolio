import './mathieu.css';
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
    <div>
      {isMobile ? <Portrait /> : <Landscape />}
    </div>
  );

  function Portrait () {
    return (
      <div className='MainPortrait'>
        <div className='TitlePortrait'>
          Mathieu Huet
        </div>
        <div className='SecondaryTitlePortrait'>
          Je suis un développeur spécialisé Javascript & Python. Mon framework préféré est de loin React.
        </div>
        <div className='MainTextPortrait'>
          <div className='UpperTextPortrait'>
            Je suis présentement à la recherche d'emploi en développement d'application mobile, web ou de bureau.
          </div>
        </div>
        <div className='LinksPortrait'>
          <div className='Link1Portrait'
            onClick={onButtonClick}
          >
            Téléchargez mon C.V.
          </div>
          <div className='Link2Portrait'
            onClick={() => navigate('/resume')}
          >
            Expériences
          </div>
        </div>
      </div>
    );
  }

  function Landscape () {
    return (
      <div className='MainGrid'>
        <div className='MainTop'>
          <div className='Title'>
            Mathieu Huet
          </div>
          <div className='SecondaryTitle'>
            Je suis un développeur spécialisé Javascript & Python. Mon framework préféré est de loin React.
          </div>
        </div>
        <div className='MainBottom'>
          <div className='MainText'>
            <div className='UpperText'>
              Je suis présentement à la recherche d'emploi.
            </div>
          </div>
          <div className='Links'>
            <div className='Link1'
              onClick={onButtonClick}
            >
              Télécharger mon C.V.
            </div>
            <div className='Link2'
              onClick={() => navigate('/resume')}
            >
              Expériences
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Mathieu;
