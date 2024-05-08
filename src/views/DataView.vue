<script lang="ts" setup>
// @ts-ignore
import Navcolumn from '../components/DataView/NavColumn.vue'
</script>

<template>
  <div class="md:w-full md:h-screen md:flex ">
    <div class="w-1/6 ">
      <Navcolumn></Navcolumn>
    </div>
    <div class="w-5/6 ">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
