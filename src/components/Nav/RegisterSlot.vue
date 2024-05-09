<script setup lang="ts">
import { useGlobalStore } from '../../stores/GlobalStore'

const globalStore = useGlobalStore()
</script>

<template>
  <li v-if="!globalStore.localIsLogin && !globalStore.googleIsLogin">
    <router-link to="/register" class="router-link-hover text-black hover:underline"
      >Register</router-link
    >
  </li>
</template>

<style scoped lang="scss">
.router-link-hover:hover {
  color: #60a5fa;
}
</style>
