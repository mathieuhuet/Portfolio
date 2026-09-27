import axios from 'axios';
import { API } from '../../secret';

export const registerUser = (credentials) => {
  return new Promise((resolve, reject) => {
    axios.post(
      `${API}/register/`, 
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