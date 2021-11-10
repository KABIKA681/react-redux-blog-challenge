/* eslint-disable import/no-anonymous-default-export */
import axios, { AxiosInstance } from 'axios';

const { REACT_APP_API_URL } = process.env;

export default (httpOptions = {}) => {
    const { baseURL, headers } = httpOptions;
    
    console.log(`httpOptions`, httpOptions)


  return axios.create({
    baseURL: REACT_APP_API_URL,
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
  });
};
