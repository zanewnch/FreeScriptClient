<script setup lang="ts">
import { useGlobalStore } from '../../stores/GlobalStore'

const globalStore = useGlobalStore()
</script>

<template>
  <li>
    <router-link
      to="/register"
      class="router-link-hover text-black hover:underline"
      v-if="!globalStore.localIsLogin && !globalStore.googleIsLogin"
      >Register</router-link
    >
  </li>
</template>

<style scoped lang="scss">
.router-link-hover:hover {
  color: #60a5fa;
}
</style>
