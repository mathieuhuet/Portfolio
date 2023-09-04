import './gpmm.css';
import React, {useEffect} from "react";
import { useMediaQuery } from 'react-responsive';

/*
Component that display the page about the Battery Montiroring project. http://www.mathieuhuet.com/gpmm/
*/


function GPMM () {
  // const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'});
  // const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
  // const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='GPMM'>
      <div className='GPMMTop'>
        Work in progress
      </div>
      <div className='GPMMDescription'>
        Application mobile et web pour monitorer les activitées de maintenance sur le réseau du REM pour les employés de GPMM O&M. L'application permet de faire des rapports des activités et de faire un suivi.
      </div>
    </div>
  );
}

export default GPMM;