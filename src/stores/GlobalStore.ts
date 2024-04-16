import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
  state: (): {
    username: string,
    password:string
    localIsLogin: boolean
    googleIsLogin: boolean
    localJwtToken: string
    JWTToken: string
    email: string
    displayName: string
    photoURL: string
    providerId: string
    jti: string
    role: string
    loginToken: string
  } => {
    return {
      username: '',
      password:'',
      localIsLogin: false,
      googleIsLogin: false,
      localJwtToken: '',
      JWTToken: '',
      email: '',
      displayName: '',
      photoURL: '',
      providerId: '',
      jti: '',
      role: '',
      loginToken: ''
    }
  },
  actions: {
    setUsername(newUsername: string) {
      this.username = newUsername
    }
  },
  getters: {}
})
