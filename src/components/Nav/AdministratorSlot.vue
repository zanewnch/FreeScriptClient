<script setup lang="ts">
import { useGlobalStore } from '../../stores/GlobalStore'

const globalStore = useGlobalStore()
</script>
<template>
  <li>
    <router-link
      to="/setting/administrator"
      class="router-link-hover text-black hover:underline"
      >Administrator</router-link
    >
  </li>
</template>
<style scoped lang="scss">
.router-link-hover:hover {
  color: #60a5fa;
}
</style>
