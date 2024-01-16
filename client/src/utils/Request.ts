import axios from 'axios';

// Create a custom instance of Axios
const request = axios.create({
  baseURL: 'http://localhost:8080/api',
  timeout: 5000,
  //all requests made using this instance will include credentials (like cookies) in the requests. 
  withCredentials: true // Set withCredentials here
});

// Request interceptor
request.interceptors.request.use((config) => {
  return config;
});

// Response interceptor
request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(new Error(error.message));
  }
);

export default request;
