import './mathieu.css';
import './mathieuMobile.css';
import { useNavigate } from 'react-router-dom';



function Mathieu () {
  let navigate = useNavigate();


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
    <div className='main'>
      <div className='main-top'>
        <div className='upper-text'>
          <div className='title'>
            Mathieu Huet
          </div>
          <div className='secondary-title'>
            <div className='highlighted-text'>
              Gestionnaire technique en
            </div>
            <div className='highlighted-text'>
              Systèmes de Transport
            </div>
            <div className='highlighted-text'>
              Intelligent (STI) chez Grimard
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mathieu;
