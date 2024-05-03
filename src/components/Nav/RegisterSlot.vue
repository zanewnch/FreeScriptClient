<script setup lang="ts">
import { useGlobalStore } from '../../stores/GlobalStore'

const globalStore = useGlobalStore()
</script>

<template>
  <li>
    <router-link
      to="/register"
      class="text-black hover:underline"
      v-if="!globalStore.localIsLogin && !globalStore.googleIsLogin"
      >Register</router-link
    >
  </li>
</template>

<style scoped lang="scss"></style>
