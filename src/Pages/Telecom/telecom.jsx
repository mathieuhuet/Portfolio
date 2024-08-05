import './telecom.css';
import './telecomMobile.css';
import React, {useEffect} from "react";
import { useMediaQuery } from 'react-responsive';



function Telecom() {
  const isMobile = useMediaQuery({ query: '(max-width: 1023px)' });

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <div className='telecom'>
      Télécommunications
    </div>
  );
}

export default Telecom;