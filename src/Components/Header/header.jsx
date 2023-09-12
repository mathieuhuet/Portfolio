import './header.css'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import MHRem from '../Icons/MHRem';



const Header = () => {
  let navigate = useNavigate();
  const isMobile = useMediaQuery({ query: '(max-width: 1023px)' });


  return (
    <div>
      {isMobile ? <Portrait /> : <Landscape />}
    </div>
  );


  function Portrait () {
    return (
      <div className='Header'>
        <MHRem 
          size={70}
          style={{cursor: 'pointer', marginLeft: 16}}
          onClick={() => navigate('/')}
        />
        <div className='HeaderSelection'
          onClick={() => navigate('/')}
        >
          Mathieu
        </div>
        <div className='HeaderSelection'
          onClick={() => navigate('/resume')}
        >
          Expériences
        </div>
      </div>
    )
  }

  function Landscape () {
    return (
      <div className='Header'>
        <MHRem 
          size={70}
          style={{cursor: 'pointer', marginLeft: 16}}
          onClick={() => navigate('/')}
        />
        <div className='HeaderSelection'
          onClick={() => navigate('/')}
        >
          Mathieu
        </div>
        <div className='HeaderSelection'
          onClick={() => navigate('/resume')}
        >
          Expériences
        </div>
      </div>
    )
  }
}

export default Header;