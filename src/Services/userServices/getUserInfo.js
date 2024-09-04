import axios from 'axios';
const url = 'http://135.19.35.171:3030';

export const getUserInfo = (accessToken) => {
  return new Promise((resolve, reject) => {
    axios.get(
      `${url}/me/`, 
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