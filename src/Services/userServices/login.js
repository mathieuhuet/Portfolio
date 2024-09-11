import axios from 'axios';
const url = 'https://mathieuhuet.com:3031';

export const loginUser = (credentials) => {
  return new Promise((resolve, reject) => {
    axios.post(
      `${url}/login/`, 
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