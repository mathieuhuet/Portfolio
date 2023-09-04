import './header.css'
import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';



const Header = () => {
  let navigate = useNavigate();

  return (
    <div className='Header'>
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

export default Header;