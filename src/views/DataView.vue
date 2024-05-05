<script lang="ts" setup>
// @ts-ignore
import NavData from '../components/DataView/NavData.vue';
import Navigation from '../components/DataView/NavigationData.vue';




</script>

<template>
  
  <!-- <NavData></NavData> -->
  <!-- <RouterView></RouterView> -->

  <!-- <footer class="p-4 bg-gray-100 text-center">
    <small>
      <a
        href="#"
        class="text-blue-500 hover:text-blue-600"
      >Privacy Policy</a> • <a
        href="#"
        class="text-blue-500 hover:text-blue-600"
      >Terms of Use</a>
    </small>
  </footer> -->

  <div class="w-full h-full">
    <el-row class="w-full h-full">
      <el-col :span='24' class='flex justify-center items-center  w-full h-full'>
        
        <NavData></NavData>
        <RouterView></RouterView>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="scss">

</style>
