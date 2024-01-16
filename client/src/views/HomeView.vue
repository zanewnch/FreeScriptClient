<script lang="ts" setup>
// @ts-ignore
import Footer from '@/components/HomeView/Footer.vue'
// @ts-ignore
import Content from '@/components/HomeView/ContentHome.vue'
// @ts-ignore
import Navigation from '@/components/HomeView/NavigationHome.vue'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header style='height: 10vh;'>
        <Navigation />
      </el-header>

      <el-main style='height: 80vh;'>
        <Content />
      </el-main>

      <el-footer style='height: 10vh;'>
        <Footer />
      </el-footer>
    </el-container>
  </div>


</template>

<style scoped lang="scss">

</style>
