import './friendlyBets.css';
import React from "react";
import { useMediaQuery } from 'react-responsive';

/*
Component that display the page about the Battery Montiroring project. http://www.mathieuhuet.com/friendly_bets/
*/

const colors = {
  white: "#fff",
  black: "#000",
  primary: "#2c365a",
  secondary: "#969bad",
  tertiary: "#fde6bb",
  accent: "#9ed885",
  darkGray: "#111827",
  lightGray: "#6B7280",
  success: "#22C55E",
  failure: "#EF4444",
  purple: "#a377fb",
  orange: "#ef835d",
}

function FriendlyBets () {
  // const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'});
  // const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
  // const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });
  return (
    <div className='FriendlyBets'>
      test
    </div>
  );
}

export default FriendlyBets;