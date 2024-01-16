<script lang="ts" setup>
// @ts-ignore
import Navigation from '@/components/DataView/NavigationData.vue'

</script>

<template>
  <div class="container">
    <el-container>
      <el-aside width="200px" class="elAside">
        <Navigation />
      </el-aside>

      <el-main>
        <!-- <Content /> -->
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
.container {
  height: 100%;
  width: 100%;
}
</style>
