import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
  state: (): {
    username: string
    isLogin: boolean
    loginToken:string
  } => {
    return {
      username: '',
      isLogin: false,
      loginToken:''
    }
  },
  actions: {
    setUsername(newUsername: string) {
      this.username = newUsername
    }
  },
  getters: {}
})
