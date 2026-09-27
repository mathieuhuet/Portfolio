import './register.css';

import React, {useState, useEffect, useMemo} from 'react';
import { Formik } from 'formik';
import { registerUser } from '../../Services/user/register';
import Spinner from '../../Spinner';
import { useCookies } from 'react-cookie';



/*
Register Page to create user, normally unavailable
*/





const Register = (props) => {
  const [cookies, setCookie] = useCookies(['accessToken']);
  const [message, setMessage] = useState('');



  const handleRegister = async (credentials, setSubmitting) => {
    setMessage('');
    // call backend and move to next page if successful
    try {
      const result = await registerUser(credentials);
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

  return (
    <div>
      <div className='LoginPage'>
        <div className='Login'>
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
                console.log(values);
                handleRegister({email: values.email.toLowerCase(), password: values.password, firstName: values.firstName, lastName: values.lastName}, setSubmitting)
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
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.firstName}
                      className='Email'
                    />
                    <label
                      className='label'
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.lastName}
                      className='Email'
                    />
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
                      Créer utilisateur
                    </button>
                  }
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
