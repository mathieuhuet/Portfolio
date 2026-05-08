import './monitoring.css';
import './monitoringMobile.css';
import { useNavigate } from 'react-router-dom';


/*
Main page of the website, where you go when entering http://www.mathieuhuet.com/
*/

const Monitoring = (props) => {
  let navigate = useNavigate();



  return (
    <div className='monitoring'>
      Page monitoring
    </div>
  );
}

export default Monitoring;