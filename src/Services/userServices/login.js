import axios from 'axios';
import { API } from '../../secret';
const url = API
? API
: 'http://192.168.1.25:3030';

export const loginUser = (credentials) => {
  return new Promise((resolve, reject) => {
    axios.post(
      `${url}/login`, 
      credentials,
      {
        headers: {
          "Content-Type": "application/json",
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
        reject(err);
      }
    })
  })
}