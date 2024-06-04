import axios, { type AxiosResponse } from 'axios'
import { useGlobalStore } from '../stores/GlobalStore'
import cookies from 'js-cookie'

const globalStore = useGlobalStore()

// Create a custom instance of Axios
const request = axios.create({
  // baseURL: 'http://localhost:8080/api',
  baseURL: 'http://58.115.128.46:8080/api',
  timeout: 5000,
  //all requests made using this instance will include credentials (like cookies) in the requests.
  withCredentials: true // Set withCredentials here
})

// Request interceptor
request.interceptors.request.use((config) => {
  // add authorization token to request header
  if (globalStore.localIsLogin || globalStore.googleIsLogin) {
    if (globalStore.localIsLogin) {
      config.headers['AuthorizationLocal'] = `Bearer ${globalStore.localJwtToken}`
    } else if (globalStore.googleIsLogin) {
      config.headers['AuthorizationGoogle'] = `Bearer ${globalStore.JWTToken}`
    }
  }

  // get the cookie
  const myCookie = cookies.get('myCookie')
  if (myCookie) {
    config.headers['Cookie'] = `my-cookie=${myCookie}`
  }

  return config
})

// Response interceptor
request.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(
        'Catch by axios interceptor of error handling for response data :',
        error.response.data
      )
      console.log(
        'Catch by axios interceptor of error handling for response status :',
        error.response.status
      )
      console.log(
        'Catch by axios interceptor of error handling for response headers :',
        error.response.headers
      )
    } else if (error.request) {
      // The request was made but no response was received
      console.log('Catch by axios interceptor of error', error.request)
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Catch by axios interceptor of error', 'Error', error.message)
    }
    return Promise.reject(error)
  }
)

export default request
