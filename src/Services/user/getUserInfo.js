import axios from 'axios';
import { API } from '../../secret';

export const getUserInfo = (accessToken) => {
  return new Promise((resolve, reject) => {
    axios.get(
      `${API}/me/`, 
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`
        },
      }
    ).then((response) => {
      const { data } = response;
      resolve(data);
    }).catch(err => {
      try {
        if (err.response.data.error) {
          reject(err.response.data);
        }
      } catch (error) {
        reject(error);
      }
    })
  })
};