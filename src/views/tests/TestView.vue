<script lang="ts" setup>
import request from '@/utils/Request';

const requestData = async()=>{
    const res = await request.get('/user/decode-login')
    console.log(res.data);
    //name:admin sub:1234567890
}

</script>

<template>
  <button @click="requestData">submit</button>
</template>

<style scoped lang="scss"></style>
