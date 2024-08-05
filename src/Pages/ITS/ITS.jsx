import './ITS.css';
import './ITSMobile.css';
import React, {useEffect} from "react";
import { useMediaQuery } from 'react-responsive';



function ITS() {
  const isMobile = useMediaQuery({ query: '(max-width: 1023px)' });

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <div className='its'>
      Système de Transport Intelligent (STI)
    </div>
  );
}

export default ITS;