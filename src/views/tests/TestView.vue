<script lang="ts" setup>
import request from '@/utils/Request'

const requestData = async () => {
  const res = await request.get('/test/test').catch((error) => {
    if (error.response) {
      console.log('Server responded with status code', error.response.status);
      console.log('Response data:', error.response.data);
      return error.response.data;
    } else {
      // occurs when server does not generate response at all
      console.log('Error:', error.message);
      return error;
    }
  })

  
  console.log(res.data)
  
  
}
</script>

<template>
  <button @click="requestData">submit</button>
</template>

<style scoped lang="scss"></style>
