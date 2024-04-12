import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
  state: (): {
    username: string
    localIsLogin: boolean
    googleIsLogin: boolean
    localJwtToken:string,JWTToken: string
    email: string
    displayName: string
    photoURL: string
    providerId: string,
    jti:string,
    role:string
    
  } => {
    return {
      username: '',
      localIsLogin: false,
      googleIsLogin: false,
      localJwtToken:'',
      JWTToken: '',
      email: '',
      displayName: '',
      photoURL: '',
      providerId: '',
      jti:'',
      role:''
      
    }
  },
  actions: {
    setUsername(newUsername: string) {
      this.username = newUsername
    }
  },
  getters: {}
})
