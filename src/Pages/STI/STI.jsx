import './STI.css';
import './STIMobile.css';
import { useMediaQuery } from 'react-responsive';



function STI() {
  const isMobile = useMediaQuery({ query: '(max-width: 1200px)' });



  return (
    <div className='sti'>
      Système de Transport Intelligent (STI)
      <div className='sti-top'>
        Work in progress
      </div>
    </div>
  );
}

export default STI;