import axios from 'axios';
import { API } from '../../secret';
const url = API
? API
: 'http://192.168.1.25:3030';


export const logoutUser = (accessToken) => {
  return new Promise((resolve, reject) => {
    axios.post(
      `${url}/logout`,
      {data: 'no data'},
      {
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${accessToken}`
        }
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
        reject(err);
      }
    })
  })
}