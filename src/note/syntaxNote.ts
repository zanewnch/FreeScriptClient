import type { AxiosResponse } from 'axios'
import request from '../utils/Request'
import { Result } from '../utils/Result'

const requestData = async () => {
    // normal use .then and .catch for promise object
  const res = await request.get('/test/test').catch((error) => {
    if (error.response) {
      console.log('Server responded with status code', error.response.status)
      console.log('Response data:', error.response.data)
      return error.response.data
    } else {
      // occurs when server does not generate response at all
      console.log('Error:', error.message)
      return error
    }
  })

  console.log(res.data)
}

const test = async (): Promise<void> => {
  const res: void | AxiosResponse<Result<null | string>> = await request
    .get('/user/test/test')
    .then((res) => {
      console.log(res)
      console.log(typeof res)
      // if wanna console.log the res.data, should in then part, or it would generate the issue:
      /* 
      issue for console.log(res.data) out of here:
      Property 'data' does not exist on type 'void | AxiosResponse<Result<string | null>, any>'.
  Property 'data' does not exist on type 'void'.
       */
      console.log(res.data)
      return res
    })
    .catch((error) => {
      console.log(error)
    })

    

  /* 
      `.then` 和 `.catch` 是 Promise 对象的方法，它们在 JavaScript 中被广泛使用来处理异步操作。TypeScript 是 JavaScript 的一个超集，因此在 TypeScript 中也可以使用 `.then` 和 `.catch`。

        Promise 是 ES6 引入的一种新的异步编程解决方案。一个 Promise 对象代表一个尚未完成但预计在未来会完成的异步操作。Promise 对象有三种状态：pending（待定）、fulfilled（已成功）和 rejected（已失败）。

        `.then` 方法用于指定 Promise 对象状态变为 fulfilled 时的回调函数，`.catch` 方法用于指定 Promise 对象状态变为 rejected 时的回调函数。

        在你的代码中，你使用 `.then` 方法来处理 `request.get('/user/test/test')` 返回的 Promise 对象。当这个 Promise 对象状态变为 fulfilled 时，你的回调函数会被调用，并接收到 Promise 对象的值。 */

  const res2: Promise<void | AxiosResponse<Result<null | string>>> = request.get('/user/test/test')

  // 不使用await, 那variable 就會變成promise object, 這樣就可以使用.then and .catch   但我目前還不知道要如何完成這個promise object
  res2.then((res) => {
    if (res && 'data' in res) {
      console.log(res)
      console.log(typeof res)
      console.log(res.data)
    }
  })

  res2.catch((error) => {
    console.log(error)
  })

  // 一定要使用await 才可以脫去promise
  const res3:void | AxiosResponse<Result<string | null>, any> = await res2;
}
