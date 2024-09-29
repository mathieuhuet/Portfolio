// Cannot access Login or Register page when signed in
import { Route, Routes, Navigate } from 'react-router-dom';
import Dev from '../Pages/Dev/dev';
import Mathieu from '../Pages/Mathieu/mathieu';
import BatteryMonitoring from '../Pages/BatteryMonitoring/batterymonitoring';
import Codeworks from '../Pages/Codeworks/codeworks';
import Coursera from '../Pages/Coursera/coursera';
import Codecademy from '../Pages/Codecademy/codecademy';
import Uqam from '../Pages/UQAM/uqam';
import Mi8 from '../Pages/Mi8/mi8';
import FriendlyBets from '../Pages/FriendlyBets/friendlyBets';
import GPMM from '../Pages/GPMM/gpmm';
import STI from '../Pages/STI/STI';
import Telecom from '../Pages/Telecom/telecom';
import User from '../Pages/User/user';
import Control from '../Pages/Control/control';



const SignedInRoute = (props) => {
  return (
    <Routes>
        <Route 
          path="/me" 
          element={<Mathieu />} 
        />
        <Route
          path="/user"
          element={<User />}
        />
        <Route
          path="/control"
          element={<Control />}
        />
        <Route
          path="/mi8"
          element={<Mi8 />}
        />
        <Route
          path="/uqam"
          element={<Uqam />}
        />
        <Route
          path="/codeworks"
          element={<Codeworks />}
        />
        <Route
          path="/coursera"
          element={<Coursera />}
        />
        <Route
          path="/codecademy"
          element={<Codecademy />}
        />
        <Route
          path="/battery_monitoring"
          element={<BatteryMonitoring />}
        />
        <Route
          path="/friendly_bets"
          element={<FriendlyBets setAllowMobileMenu={props.setAllowMobileMenu}/>}
        />
        <Route
          path="/gpmm"
          element={<GPMM setAllowMobileMenu={props.setAllowMobileMenu}/>}
        />
        <Route 
          path="/dev" 
          element={<Dev />} 
        />
        <Route
          path='/telecom'
          element={<Telecom />}
        />
        <Route
          path='/sti'
          element={<STI />}
        />
        <Route
          path="/"
          element={<Navigate to="/control" replace={true} />}
        />
        <Route
          path="*"
          element={<Navigate to="/" replace={true} />}
        />
    </Routes>
  )
}

export default SignedInRoute;