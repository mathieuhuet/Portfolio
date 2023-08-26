import './gpmm.css';
import React from "react";
import { useMediaQuery } from 'react-responsive';

/*
Component that display the page about the Battery Montiroring project. http://www.mathieuhuet.com/gpmm/
*/

const colors = {
  white: "#f6f6f6",
  whiteGreen: "#eef2e7",
  lightGreen: "#82bf00",
  darkGreen: "#004638",
  neonGreen: '#d8f537',
  lightGray: "#c3c3c3",
  success: "#22C55E",
  failure: "#EF4444",
  blue: '#0063bf',
  yellow: '#bcbf00',
  red: '#bf0000',
};

function GPMM () {
  // const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'});
  // const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
  // const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });
  return (
    <div className='GPMM'>
      test
    </div>
  );
}

export default GPMM;