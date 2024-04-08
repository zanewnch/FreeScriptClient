import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
  state: (): {
    username: string
    isLogin: boolean
    loginToken:string,JWTToken: string
    email: string
    displayName: string
    photoURL: string
    providerId: string,
    jti:string
  } => {
    return {
      username: '',
      isLogin: false,
      loginToken:'',
      JWTToken: '',
      email: '',
      displayName: '',
      photoURL: '',
      providerId: '',
      jti:''
    }
  },
  actions: {
    setUsername(newUsername: string) {
      this.username = newUsername
    }
  },
  getters: {}
})
