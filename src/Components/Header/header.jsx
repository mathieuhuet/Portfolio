import './header.css';
import './headerMobile.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MHRem from '../Icons/MHRem';



const Header = () => {
  let navigate = useNavigate();
  const isMobile = useMediaQuery({ query: '(max-width: 1023px)' });
  const [showNavbar, setShowNavbar] = useState(true);
  const [drawerState, setDrawerState] = useState(false);


  const toggleDrawer = () => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerState(!drawerState);
  };


  // Drawer
  const list = () => (
    <Box
      sx={{ width: '100vw' }}
      role="presentation"
      onClick={toggleDrawer()}
      onKeyDown={toggleDrawer()}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => navigate('/')}
          >
            <ListItemIcon>

            </ListItemIcon>
            <ListItemText primary={'Mathieu'} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => navigate('/resume')}
          >
            <ListItemIcon>

            </ListItemIcon>
            <ListItemText primary={'Experiences'} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <MHRem />
    </Box>
  );

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
          <React.Fragment>
            <Button
              className="toggle"
              onClick={toggleDrawer()}
            >
              {drawerState ? 'close' : 'open'}
            </Button>
            <Drawer
              anchor={'menu'}
              open={drawerState}
              onClose={toggleDrawer()}
            >
              {list()}
            </Drawer>
          </React.Fragment>
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