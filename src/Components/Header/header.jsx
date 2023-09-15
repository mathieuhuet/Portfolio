import './header.css';
import './headerMobile.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import MHRem from '../Icons/MHRem';



const Header = () => {
  let navigate = useNavigate();
  const isMobile = useMediaQuery({ query: '(max-width: 1023px)' });
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  // Mobile hide-header scroll logic
  const [scrollTop, setScrollTop] = useState(0);
  const [prevScrollTop, setPrevScrollTop] = useState(0);
  useEffect(() => {
    const handleScroll = (event) => {
      setScrollTop(window.scrollY);
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    if (scrollTop > prevScrollTop + 5 && showNavbar) {
      console.log('HIDE HEADER');
      setShowNavbar(false);
    } else if (scrollTop < prevScrollTop - 1 && !showNavbar) {
      console.log('SHOW HEADER');
      setShowNavbar(true);
    }
    setPrevScrollTop(scrollTop);
  }, [scrollTop]);



  return (
    <div>
      {isMobile ? <Mobile /> : <Desktop />}
    </div>
  );


  function Mobile () {
    return (
      <div>
        <div className={"header" + (!showNavbar ? ' sticky-hidden' : '')} role='banner'>
          <button
            className="toggle"
            onClick={() => setNavbarOpen((prev) => !prev)}
          >
            {navbarOpen ? 'close' : 'open'}
          </button>
          <div>
            {showNavbar ? 'SHOW' : 'HIDE'}
          </div>
        </div>
      </div>
    )
  }

  function Desktop () {
    return (
      <div className='header'>
        <MHRem 
          size={70}
          style={{cursor: 'pointer', marginLeft: 16}}
          onClick={() => navigate('/')}
        />
        <div className='header-selection'
          onClick={() => navigate('/')}
        >
          Mathieu
        </div>
        <div className='header-selection'
          onClick={() => navigate('/resume')}
        >
          Expériences
        </div>
      </div>
    )
  }
}

export default Header;