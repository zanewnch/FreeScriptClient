export interface AxiosResponseProperties {
  data: any
  status: number
  statusText: string
  headers: Record<string, string>
  config: AxiosRequestConfig
  request?: any
}

interface AxiosRequestConfig {
  url?: string
  method?: string
  baseURL?: string
  headers?: any
  params?: any
  data?: any
  timeout?: number
  responseType?: string
  // ...其他属性
}


interface AxiosError<T = any> extends Error {
    config: AxiosRequestConfig;
    code?: string;
    request?: any;
    response?: AxiosResponseProperties;
    isAxiosError: boolean;
    toJSON: () => object;
  }