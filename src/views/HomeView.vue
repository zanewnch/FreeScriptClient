<script lang="ts" setup>
import ConHomeVue from '@/components/HomeView/ConHomeNew.vue'
import Nav from '@/components/HomeView/Nav.vue'
</script>

<template>
  <div class='xl:w-full md:h-screen '>

    
    <!-- up part -->
    <el-row
      class='md:w-full'
      style='border-bottom: 0.5px solid #E0E0E0;'
    >
      <el-col
        :span='24'
        class='md:w-full '
      >
        <Nav></Nav>
      </el-col>
    </el-row>
    <!-- bottom part -->
    <ConHomeVue></ConHomeVue>
  </div>
</template>

<style scoped lang="scss">
</style>


