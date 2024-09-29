import './user.css';
import './userMobile.css';
import React, { useEffect, useState } from 'react';
import { useCookies } from "react-cookie";
import { getUserInfo } from '../../Services/user/getUserInfo';

const initialState = {
  firstName: '',
  lastName: '',
};

/*
User Page.

It only display the name of the user.

Also the page where you would logout.
*/


const User = () => {
  const [cookies, setCookie] = useCookies(['accessToken']);
  //Profile section
  const [state, setState] = useState(initialState);


  useEffect(() => {
    async function fetchData(accessToken) {
      const userInfo = await getUserInfo(accessToken);
      if (userInfo) {
        setState({firstName: userInfo.data.firstName, lastName: userInfo.data.lastName})
      } else {
        console.log('No user info found 😞');
      }
    }
    fetchData(cookies.accessToken);
  }, [cookies.userToken]);

  const disconnect = () => {
    setCookie('accessToken', '');
  }
  return (
    <div className='UserPage'>
      <div className='namefield'>
        <h1>
          {state.firstName}
        </h1>
        <h1>
          {state.lastName}
        </h1>
      </div>
      <button
        className='DisconnectButton'
        onClick={disconnect}
      >
        Se Déconnecter
      </button>
    </div>
  );
};

export default User;
