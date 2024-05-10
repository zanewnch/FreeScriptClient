<script setup lang="ts">
import { ref, type Ref } from 'vue'
</script>
<template>
  <nav class=" md:w-full md:h-full"
  style="border-right: 0.5px solid #e0e0e0">
    <!-- 上側 logo and slogan -->
    <div class="md:flex md:justify-center md:items-center md:flex-col">
      <router-link to="/" class="sm:text-blue-500 md:text-blue-500 md:mb-2 md:mt-4 md:text-xl"
        >Free Script</router-link
      >
    </div>

    <!-- 下側 table link ul -->
    <div class="md:mt-4">
      <ul class="md:space-y-4 ">
        <li class="md:flex md:justify-center md:items-center">
          <router-link to="/data/supermarket" class="router-link-hover text-black hover:underline"
            >Supermarket Table</router-link
          >
        </li>
        <li class="md:flex md:justify-center md:items-center">
          <router-link to="/data/barChart" class="router-link-hover text-black hover:underline"
            >Bar Chart</router-link
          >
        </li>
        <li class="md:flex md:justify-center md:items-center">
          <router-link to="/data/lineChart" class="router-link-hover text-black hover:underline"
            >Line Chart</router-link
          >
        </li>
        <li class="md:flex md:justify-center md:items-center">
          <router-link to="/data/bulletin" class="router-link-hover text-black hover:underline">Bulletin</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<style scoped lang="scss">
@media (min-width: 768px) {
  
  .router-link-hover:hover {
    color: #60a5fa;
  }
 
}
</style>
