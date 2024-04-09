import axios from 'axios';
import { useGlobalStore } from '@/stores/GlobalStore';

const globalStore = useGlobalStore();


// Create a custom instance of Axios
const request = axios.create({
  baseURL: 'http://localhost:8080/api',
  // baseURL: 'http://58.115.128.46:8080/api',
  timeout: 5000,
  //all requests made using this instance will include credentials (like cookies) in the requests. 
  withCredentials: true // Set withCredentials here
});

// Request interceptor
request.interceptors.request.use((config) => {
  // add authorization token to request header
  if(globalStore.localIsLogin || globalStore.googleIsLogin){

    if(globalStore.localIsLogin){
      config.headers['AuthorizationLocal'] = `Bearer ${globalStore.localJwtToken}`;
    }else if(globalStore.googleIsLogin){
      config.headers['AuthorizationGoogle'] = `Bearer ${globalStore.JWTToken}`;
    }
    
  }

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
