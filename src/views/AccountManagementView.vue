<script setup lang="ts">
import request from '@/utils/Request'
import { onMounted, ref } from 'vue'

const data = ref(null)
const showData = ref('aaa')

const getData = async () => {
  try {
    const res = await request.get('/account-management')
    console.log(res.data)
    data.value = res.data
  } catch (e) {
    console.log(e)
  }
}
onMounted(async () => {
  await getData()
})
</script>
<template>
  <div v-html="data"></div>
</template>
<style scoped lang="scss"></style>
