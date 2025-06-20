import axios from 'axios';
import { API } from '../../secret';

export const getAutomaticModeData = () => {
  return new Promise((resolve, reject) => {
    axios.get(
      `${API}/getAutomaticModeData/`, 
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
        reject(error);
      }
    })
  })
};