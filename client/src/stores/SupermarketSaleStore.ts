import { defineStore } from 'pinia'
import request from '../utils/Request'
import type { AxiosResponse } from 'axios'
import Result from '../utils/Result'
import SupermarketSale from '@/model/entity/SupermarketSale'

// TODO for testing, temporarily close the backend interceptor(in interceptor config)
export const useSuperMarketSaleStore = defineStore('superMarketSale', {
  state: (): {
    requestData: Result<SupermarketSale> | null
    pageNum: number | null
    pageSize: number | null
    branch: string | null
    city: string | null
    customerType: string | null
    manipulateData: SupermarketSale | null
    branchList: any
    cityList: any
    customerTypeList: any
    date: Date | null
    totalDataAmount: any,
    barChartData:any,
    lineChartData:any
  } => {
    return {
      requestData: null,
      pageNum: null,
      pageSize: null,
      branch: null,
      city: null,
      customerType: null,
      manipulateData: null,
      branchList: null,
      cityList: null,
      customerTypeList: null,
      date: null,
      totalDataAmount: null,
      barChartData:null,
      lineChartData:null
    }
  },
  getters: {
    // 不像java bean 每一個field 都要有getter setter, 因為pinia store field都是reactive的,不可能設為private(因此不需要getter setter)
    getRequestData(): any {
      return this.requestData
    },

    setRequestData(data: any): void {
      this.requestData = data
    }
  },
  actions: {
    async getCityList(): Promise<void> {
      try {
        const res: AxiosResponse<Result<any>> = await request.get(`/supermarket/cityList`)

        this.cityList = res.data;

        console.log('The cityList')
        console.log(this.cityList)
      } catch (e) {
        console.log(e)
      }
    },

    async getCustomerTypeList(): Promise<void> {
      try {
        const res: AxiosResponse<Result<any>> = await request.get(`/supermarket/customerTypeList`)

        this.customerTypeList = res.data

        console.log('The customerTypeList')
        console.log(this.customerTypeList)
      } catch (e) {
        console.log(e)
      }
    },

    async getTotalDataAmount(): Promise<void> {
      try {
        const res: AxiosResponse<Result<any>> = await request.get(`/supermarket/totalDataAmount`)

        this.totalDataAmount = res.data;

        console.log('The totalDataAmount')
        console.log(this.totalDataAmount)
      } catch (e) {
        console.log(e)
      }
    },
    async get(supermarketSale?: any): Promise<void> {
      try {
        if (supermarketSale != undefined) {
          const res: AxiosResponse<Result<any>> = await request.get(`/supermarket`, {
            params: supermarketSale
          })

          this.requestData = res.data
        } else {
          // without params, which means get all
          const res: AxiosResponse<Result<any>> = await request.get(`supermarket`)
          this.requestData = res.data

          console.log(`Request URL with params: ${request.defaults.baseURL}/supermarket`, {
            params: supermarketSale
          })
        }
      } catch (e) {
        console.log(e)
      }
    },
    async getByPage(): Promise<void> {
      try {
        // const res: AxiosResponse<Result<SupermarketSale>> = await request.get('/supermarketSale', {
        //     params: {
        //         pageNum: this.pageNum,
        //         pageSize: this.pageSize
        //     }
        // })

        const res: AxiosResponse<Result<SupermarketSale>> = await request.get(
          `/supermarket/${this.pageNum}/${this.pageSize}`
        )

        this.requestData = res.data;

        console.log(this.requestData)
      } catch (e) {
        console.log(e);
      }
    },

    async create(supermarketSale: SupermarketSale): Promise<void> {
      //
      // const supermarketSale: SupermarketSale = new SupermarketSale(
      //     null, branch, city, customerType, gender, productLine, unitPrice, quantity, tax5Percent, total, date, time, payment, cogs, grossMarginPercentage, grossIncome, rating
      // );

      try {
        const res = await request.post('/supermarket', supermarketSale, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
      } catch (e) {
        console.log(e)
      }
    },
    async update(supermarketSale: SupermarketSale): Promise<void> {
      // const supermarketSale: SupermarketSale = new SupermarketSale(
      //     null, branch, city, customerType, gender, productLine, unitPrice, quantity, tax5Percent, total, date, time, payment, cogs, grossMarginPercentage, grossIncome, rating
      // );
      try {
        const res = await request.put('/supermarket', supermarketSale, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
      } catch (e) {
        console.log(e)
      }
    },
    async delete(id: number): Promise<void> {
      try {
        const res = await request.delete(`/supermarket/${id}`)
      } catch (e) {
        console.error('Error deleting sale:', e)
      }
    },

    async getBranchList(): Promise<void> {
      try {
        const res: AxiosResponse<Result<any>> = await request.get(`/supermarket/branchList`)

        this.branchList = res.data

        console.log('The branchList')
        console.log(this.branchList)
      } catch (e) {
        console.log(e)
      }
    },
    async getBarChart(): Promise<void> {
      try {
        const res: AxiosResponse<Result<any>> = await request.get(`/supermarket/barChart`);
        if(res.data == undefined){
          console.log("fail")
        }

        this.barChartData = res.data;
      } catch (e) {
        console.log(e);
      }
    },
    async getLineChart():Promise<void>{
      try{
        const res: AxiosResponse<Result<any>> = await request.get(`/supermarket/lineChart`);
        if(res.data == undefined){
          console.log("fail")
        }

        this.lineChartData = res.data;
      }catch(e){
        console.log(e);
      }
    }
  }
})
