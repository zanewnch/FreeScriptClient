import { defineStore } from 'pinia'
import type { AxiosResponse } from 'axios'
import type Result from '@/utils/Result'
import request from '@/utils/Request'
import { useUserStore } from './UserStore'

export const useLoginStore = defineStore('login', {
  state: (): {
    username: string
    password: string
    usernameIsError: number
    passwordIsError: number
    submitIsWrong: boolean
  } => {
    return {
      username: '',
      password: '',
      usernameIsError: 0,
      passwordIsError: 0,
      submitIsWrong: true
    }
  },
  actions: {
    async login(username: string, password: string): Promise<void> {
      try{
        const res: AxiosResponse<Result<string>> = await request.post(
        '/user/login',
        {
          username: username,
          password: password
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )

      if (res.data.code == 1) {
        this.submitIsWrong = false
      }

      console.log(res)
    }catch(e){
        console.log(e);
    }
    },
    usernameValidate(): void {
      if (this.username.length === 0) {
        this.usernameIsError = 1
      }
    },
    passwordValidate(): void {
      if (this.password.length === 0) {
        this.passwordIsError = 1
      }
    },
    signOut(){
      const userStore = useUserStore();
      userStore.deleteCookie("authToken");
      userStore.isLogin = false;
      userStore.showSignOutAlarm = true;
    }
  },
  getters: {}
})
