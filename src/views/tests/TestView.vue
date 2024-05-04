<script lang="ts" setup>
import type { AxiosResponse } from 'node_modules/axios/index.cjs'
import request from '../../utils/Request'
import type { Result } from '@/utils/Result'

const requestData = async () => {
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
      console.log(res.data)
      return res
    })
    .catch((error) => {
      console.log(error)
    })

  const res2: Promise<void | AxiosResponse<Result<null | string>>> = request.get('/user/test/test')

  res2.then((res) => {
    if (res && 'data' in res) {
      console.log(res)
      console.log(typeof res)
      console.log(res.data)
    }
  })
}
</script>

<template>
  <button @click="test">submit</button>
</template>

<style scoped lang="scss"></style>
