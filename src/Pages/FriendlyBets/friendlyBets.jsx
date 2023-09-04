import './friendlyBets.css';
import React, {useEffect} from "react";
import { useMediaQuery } from 'react-responsive';

/*
Component that display the page about the Battery Montiroring project. http://www.mathieuhuet.com/friendly_bets/
*/

function FriendlyBets () {
  // const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'});
  // const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
  // const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='FriendlyBets'>
      <div className='FriendlyBetsTop'>
        Work in progress
      </div>
      <div className='FriendlyBetsDescription'>
        Application mobile pour faire des paris avec vos amis et faire les suivi de vos paris.
      </div>
    </div>
  );
}

export default FriendlyBets;