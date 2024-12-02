import './login.css';
import './loginMobile.css';
import React, {useState, useEffect, useMemo} from 'react';
import { Formik } from 'formik';
import { loginUser } from '../../Services/user/login';
import { getAllData } from '../../Services/read/getAllData';
import { getAllDataHistory } from '../../Services/read/getAllDataHistory';
import Spinner from '../../Spinner';
import HumiGraph from '../../Components/Graphs/humiGraph';
import TempGraph from '../../Components/Graphs/tempGraph';
import { useCookies } from 'react-cookie';
import { useMediaQuery } from 'react-responsive';
import { useWindowDimensions } from '../../Utilities/windowDimension';


/*
Login Page, where you login when you navigate to the site.
The Registration form is also on that page.
*/





const Login = (props) => {
  const isMobile = useMediaQuery({ query: '(max-width: 1023px)' });
  const { height, width } = useWindowDimensions();
  const [cookies, setCookie] = useCookies(['accessToken']);
  const [message, setMessage] = useState('');
  const [refresh, setRefresh] = useState(0);
  const [allData, setAllData] = useState([]);
  const [insideTemp, setInsideTemp] = useState('');
  const [insideHumi, setInsideHumi] = useState('');
  const [outsideTemp, setOutsideTemp] = useState('');
  const [outsideHumi, setOutsideHumi] = useState('');
  

  const graphData = useMemo(() => {
    const timeLabels = [];
    const insideTemp = [];
    const insideHumi = [];
    const outsideTemp = [];
    const outsideHumi = [];
    const insideTemp2 = [];
    const insideHumi2 = [];
    const acstate = [];

    for (let k = 0; k < allData.length; k++) {
      timeLabels.push(new Date(allData[k].createdAt).toString().slice(4, -46) + new Date(allData[k].createdAt).toString().slice(16, -36));
      !allData[k].InsideTemp ? insideTemp.push(NaN) : insideTemp.push(allData[k].InsideTemp);
      !allData[k].InsideHumi ? insideHumi.push(NaN) : insideHumi.push(allData[k].InsideHumi);
      !allData[k].InsideTemp2 ? insideTemp2.push(NaN) : insideTemp2.push(allData[k].InsideTemp2);
      !allData[k].InsideHumi2 ? insideHumi2.push(NaN) : insideHumi2.push(allData[k].InsideHumi2);
      !allData[k].OutsideTemp ? outsideTemp.push(NaN) : outsideTemp.push(allData[k].OutsideTemp);
      !allData[k].OutsideHumi ? outsideHumi.push(NaN) : outsideHumi.push(allData[k].OutsideHumi);
      allData[k].acstate == 'ON' ? acstate.push('ON') : acstate.push('OFF');
    }

    const result = {
      timeLabels: timeLabels,
      insideTemp: insideTemp,
      insideHumi: insideHumi,
      insideTemp2: insideTemp2,
      insideHumi2: insideHumi2,
      outsideTemp: outsideTemp,
      outsideHumi: outsideHumi,
      acstate: acstate
    }
    console.log(result);

    return result;
  }, [allData])


  const handleLogin = async (credentials, setSubmitting) => {
    setMessage('');
    // call backend and move to next page if successful
    try {
      const result = await loginUser(credentials);
      if (result.data) {
        setCookie('accessToken', result.data.accessToken);
        setMessage('Vous êtes connecté.');
      }
      setSubmitting(false);
    } catch (error) {
      if (error.message) {
        setMessage(error.message);
      }
      console.log(error);
      setSubmitting(false);
    }
  }

  useEffect(() => {
    async function fetchData() {
      const allData = await getAllData();
      if (allData.data) {
        setInsideTemp(allData.data.insideTemp);
        setInsideHumi(allData.data.insideHumi);
        setOutsideTemp(allData.data.outsideTemp);
        setOutsideHumi(allData.data.outsideHumi);
      } else {
        console.log('problem fetching data');
      }
      const allDataHistory = await getAllDataHistory({numberOfDays: 4});
      if (allDataHistory.data) {
        setAllData(allDataHistory.data);
        console.log(allDataHistory.data);
      } else {
        console.log('problem fetching data');
      }
    }
    fetchData();
  }, [refresh]);

  return (
    <div>
      {isMobile &&
          <div className='LoginPage'>
          <div className='Login'>
            <div className='TempBox'>
              <TempGraph 
                insideTemp={graphData.insideTemp}
                acstate={graphData.acstate}
                outsideTemp={graphData.outsideTemp}
                timelabels={graphData.timeLabels}
              />
              <HumiGraph 
                insideHumi={graphData.insideHumi}
                outsideHumi={graphData.outsideHumi}
                timelabels={graphData.timeLabels}
              />
            </div>
            <div className='WeatherBoxTemp'>
                <div className='TopWeatherBox'>
                  Température Actuelle
                </div>
                <div className='BottomWeatherBox'>
                  <div className='LeftWeatherBox'>
                    <div>
                      Intérieur
                    </div>
                    <div>
                      {insideTemp}°C
                    </div>
                  </div>
                  <div className='RightWeatherBox'>
                    <div>
                      Extérieur
                    </div>
                    <div>
                      {outsideTemp}°C
                    </div>
                  </div>
                </div>
              </div>
              <div className='WeatherBoxHumi'>
                <div className='TopWeatherBox'>
                  Humidité Actuelle
                </div>
                <div className='BottomWeatherBox'>
                  <div className='LeftWeatherBox'>
                    <div>
                      Intérieur
                    </div>
                    <div>
                      {insideHumi}%
                    </div>
                  </div>
                  <div className='RightWeatherBox'>
                    <div>
                      Extérieur
                    </div>
                    <div>
                      {outsideHumi}%
                    </div>
                  </div>
                </div>
              </div>
            <div className='Formik'>
              Bonjour
              <Formik
                initialValues={{ email: '' }}
                validate={values => {
                  const errors = {};
                  if (!values.email) {
                    errors.email = 'Required';
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                  ) {
                    errors.email = 'Invalid email address';
                  }
                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  handleLogin({email: values.email.toLowerCase(), password: values.password}, setSubmitting)
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                }) => (
                  <form onSubmit={handleSubmit} className='EmailForm'>
                    <div className='EmailInput'>
                      <label
                        className='label'
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        className='Email'
                      />
                      <label
                        className='label'
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        className='Password'
                      />
                      <h6>
                        {message || ' '}
                      </h6>
                    </div>
                    {isSubmitting && 
                      <div className='Loading'>
                        <Spinner/>
                      </div>
                    }
                    {!isSubmitting && 
                      <button type="submit" disabled={isSubmitting} className='SubmitEmail'>
                        Se Connecter
                      </button>
                    }
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      }
      {!isMobile &&
          <div className='LoginPage'>
          <div className='Login'>
            <div className='TempBox'>
              <TempGraph 
                insideTemp={graphData.insideTemp}
                acstate={graphData.acstate}
                outsideTemp={graphData.outsideTemp}
                timelabels={graphData.timeLabels}
              />
              <HumiGraph 
                insideHumi={graphData.insideHumi}
                outsideHumi={graphData.outsideHumi}
                timelabels={graphData.timeLabels}
              />
            </div>
            <div className='Formik'>
              Bonjour
              <Formik
                initialValues={{ email: '' }}
                validate={values => {
                  const errors = {};
                  if (!values.email) {
                    errors.email = 'Required';
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                  ) {
                    errors.email = 'Invalid email address';
                  }
                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  handleLogin({email: values.email.toLowerCase(), password: values.password}, setSubmitting)
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                }) => (
                  <form onSubmit={handleSubmit} className='EmailForm'>
                    <div className='EmailInput'>
                      <label
                        className='label'
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        className='Email'
                      />
                      <label
                        className='label'
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        className='Password'
                      />
                      <h6>
                        {message || ' '}
                      </h6>
                    </div>
                    {isSubmitting && 
                      <div className='Loading'>
                        <Spinner/>
                      </div>
                    }
                    {!isSubmitting && 
                      <button type="submit" disabled={isSubmitting} className='SubmitEmail'>
                        Se Connecter
                      </button>
                    }
                  </form>
                )}
              </Formik>
              <div className='WeatherBoxTemp'>
                <div className='TopWeatherBox'>
                  Température Actuelle
                </div>
                <div className='BottomWeatherBox'>
                  <div className='LeftWeatherBox'>
                    <div>
                      Intérieur
                    </div>
                    <div>
                      {insideTemp}°C
                    </div>
                  </div>
                  <div className='RightWeatherBox'>
                    <div>
                      Extérieur
                    </div>
                    <div>
                      {outsideTemp}°C
                    </div>
                  </div>
                </div>
              </div>
              <div className='WeatherBoxHumi'>
                <div className='TopWeatherBox'>
                  Humidité Actuelle
                </div>
                <div className='BottomWeatherBox'>
                  <div className='LeftWeatherBox'>
                    <div>
                      Intérieur
                    </div>
                    <div>
                      {insideHumi}%
                    </div>
                  </div>
                  <div className='RightWeatherBox'>
                    <div>
                      Extérieur
                    </div>
                    <div>
                      {outsideHumi}%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default Login;
