<script lang="ts" setup>
import type { AxiosResponse } from 'node_modules/axios/index.cjs'
import request from '../../utils/Request'
import type { Result } from '@/utils/Result'
import { useGlobalStore } from '../../stores/GlobalStore'

const globalStore = useGlobalStore()

const test = async () => {
  try {
    globalStore.test = 'test'
  } catch (e) {
    console.log(e)
  }
}
</script>

<template>
  <button @click="test">submit</button>
  <div>{{ globalStore.test }}</div>
</template>

<style scoped lang="scss"></style>
