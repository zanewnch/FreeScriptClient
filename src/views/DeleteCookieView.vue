<script setup lang="ts">
// @ts-ignore
import request from '../utils/Request';
import { useRouter } from 'vue-router';
const router = useRouter();

const handleClick = async () => {
  try {
    const res = await request.get('/user/delete-cookie');

    router.push('/');
  } catch (e) {
    console.log(e);
  }
}
</script>

<template>
  <div class="md:flex justify-center items-center md:w-full md:h-screen">
    <div class="border">
      <button @click="handleClick">Click this button to delete the exist cookie for test.</button>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
