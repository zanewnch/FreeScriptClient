import { defineStore } from 'pinia'
import type { AxiosResponse } from 'axios'
import type Result from '@/utils/Result'
import request from '@/utils/Request'
/*
login and register
1. login : username, password
2. register: username,password
*/

export const useUserStore = defineStore('userStore', {
  state: (): {
    /*
    每次頁面刷新(重新整理)的時候，pinia store status就會被reset, 所以不需要重新reset
    */
    username: string
    password: string
    userStatus: string
    userStatusForList: any
    totalDataAmount: any
    requestData: any
    pageNum: number | null
    pageSize: number | null,
    isLogin: boolean,
    showSignOutAlarm: boolean
  } => {
    return {
      username: '',
      password: '',
      userStatus: '',
      userStatusForList: null,
      totalDataAmount: null,
      requestData: null,
      pageNum: null,
      pageSize: null,
      isLogin:false,
      showSignOutAlarm:false
    }
  },
  getters: {
    /**
     * @description: Validate whether the username and password are empty.
     * @return {boolean}
     * @param
     */
    isEmpty(): boolean {
      return this.username.length == 0 || this.password.length == 0
    }
  },
  actions: {
    async get(user?: any): Promise<void> {
      try {
        if (user != undefined) {
          // with params
          //在这个示例中，user 对象中的数据将被转化为查询字符串参数并附加到 URL 后面。例如，如果 user 对象包含 { id: 123, name: 'John' }，那么生成的请求 URL 可能会是 /user?id=123&name=John。
          const res: AxiosResponse<Result<any>> = await request.get(`/user`, { params: user })

          this.requestData = res.data
        } else {
          // without params, which means get all
          const res: AxiosResponse<Result<any>> = await request.get(`/user`)
          this.requestData = res.data
        }
      } catch (e) {
        console.log(e)
      }
    },

    async getUserStatusList(): Promise<void> {
      try {
        const res: AxiosResponse<Result<any>> = await request.get(`/user/userStatusList`)

        this.userStatusForList = res.data
        console.log('The userStatusForList :')
        console.log(this.userStatusForList?.data[1])
      } catch (e) {
        console.log(e)
      }
    },

    async getByPage(): Promise<void> {
      try {
        const res: AxiosResponse<Result<any>> = await request.get(
          `/user/${this.pageNum}/${this.pageSize}`
        )

        this.requestData = res.data

        this.pageNum = 0
        this.pageSize = 0

        console.log(this.requestData)
      } catch (e) {
        console.log(e)
      }
    },

    async getTotalDataAmount(): Promise<void> {
      try {
        const res: AxiosResponse<Result<any>> = await request.get(`/user/totalDataAmount`)

        this.totalDataAmount = res.data

        console.log('The totalDataAmount')
        console.log(this.totalDataAmount)
      } catch (e) {
        console.log(e)
      }
    },

    async create(user: any): Promise<void> {
      try {
        const res: AxiosResponse<Result<any>> = await request.post(`/user`, user, {
          headers: {
            'Content-Type': 'application/json'
          }
        })

        this.requestData = res.data

        console.log(this.requestData)
      } catch (e) {
        console.log(e)
      }
    },

    async update(user: any): Promise<void> {
      try {
        const res: AxiosResponse<Result<any>> = await request.put(`/user`, user, {
          headers: {
            'Content-Type': 'application/json'
          }
        })

        this.requestData = res.data

        console.log(this.requestData)
      } catch (e) {
        console.log(e)
      }
    },

    async delete(id: number): Promise<void> {
      try {
        const res: AxiosResponse<Result<any>> = await request.delete(`/user/${id}`)

        this.requestData = res.data

        console.log(this.requestData)
      } catch (e) {
        console.log(e)
      }
    },

    async register(username: string, password: string): Promise<void> {
      // 1. Validate whether the username and password are empty, if empty, directly return
      // @ts-ignore
      if (this.isEmpty()) {
        console.log('username or password can not be empty')
        return
      }

      // 2. Send a request to the backend to register
      const res: AxiosResponse<Result<string>> = await request.post(
        '/user/register',
        {
          username: username,
          password: password
        },
        {
          headers: { 'Content-Type': 'application/json' }
        }
      )

      // after register, clear the username and password
      username = ''
      password = ''
    },

    async login(username: string, password: string): Promise<void> {
      try {
        // 1. Validate whether the username and password are empty, if empty, directly return

        // @ts-ignore
        if (this.isEmpty()) {
          console.log('username or password can not be empty')
          return
        }

        // 2. Send a request to the backend to login
        const res: AxiosResponse<Result<string>> = await request.post(
          '/UsersupermarketSale/login',
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

        console.log(res)
      } catch (e) {
        console.log(e)
      }
    },
    deleteCookie(cookieName:string){
      document.cookie = cookieName + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    },
    checkCookie(cookieName:string):void{
      // if with authToken, which mean the user had logined. 
      if(document.cookie.includes(cookieName)){
        this.isLogin = true;
       }
    }

  }
})
