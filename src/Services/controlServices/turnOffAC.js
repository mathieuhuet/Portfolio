import axios from 'axios';
const url = 'http://135.19.35.171:3030';


export const turnOffAC = (accessToken) => {
  return new Promise((resolve, reject) => {
    axios.post(
      `${url}/turnoffac`,
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