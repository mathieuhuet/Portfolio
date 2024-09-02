import './login.css';
import './loginMobile.css';
import React, {useState} from 'react';
import { Formik } from 'formik';
import { loginUser } from '../../Services/userServices/login';
import Spinner from '../../Spinner';
import { useCookies } from 'react-cookie';


/*
Login Page, where you login when you navigate to the site.
The Registration form is also on that page.
*/





const Login = (props) => {
  const [message, setMessage] = useState('');
  const [cookies, setCookie] = useCookies(['accessToken']);


  const handleLogin = async (credentials, setSubmitting) => {
    setMessage('');
    // call backend and move to next page if successful
    try {
      const result = await loginUser(credentials);
      if (result.data) {
        console.log(result.data.accessToken);
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


  return (
    <div className='LoginPage'>
      <div className='Login'>
        <div className='Formik'>
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
                  <label>
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
                  <label>
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    className='Email'
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
  );
};

export default Login;
