<script
  setup
  lang="ts"
>
import { useGlobalStore } from '@/stores/GlobalStore';

const globalStore = useGlobalStore();

</script>
<template>
  <li v-if="!globalStore.localIsLogin && !globalStore.googleIsLogin">
    <router-link
      to="/login"
      class="text-black hover:underline"
    >Login</router-link>
  </li>

  <li v-else-if='globalStore.localIsLogin'>
    <div>
      {{ globalStore?.username }}
    </div>
  </li>

  <li
    v-else-if='globalStore.googleIsLogin'
    class='md:flex md:justify-center md:items-center'
  >
    <div class='md:mr-1'>
      {{ globalStore?.displayName }}
    </div>
    <img
      :src='globalStore.photoURL'
      class='md:h-7 md:w-7'
    >
  </li>
</template>
<style
  scoped
  lang="scss"
></style>
