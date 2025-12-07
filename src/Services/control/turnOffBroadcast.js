import axios from 'axios';
import { API } from '../../secret';


export const turnOffBroadcast = (accessToken) => {
  return new Promise((resolve, reject) => {
    axios.post(
      `${API}/turnoffbroadcast/`,
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