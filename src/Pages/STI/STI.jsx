import './STI.css';
import './STIMobile.css';
import React, {useEffect} from "react";
import { useMediaQuery } from 'react-responsive';



function STI() {
  const isMobile = useMediaQuery({ query: '(max-width: 1023px)' });

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <div className='sti'>
      Système de Transport Intelligent (STI)
    </div>
  );
}

export default STI;