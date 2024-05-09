<script setup lang="ts">
import { useGlobalStore } from '../../stores/GlobalStore'

const globalStore = useGlobalStore()

/* 
一個很奇怪的bug or feature
如果頁面reload 那frontend data 都會被reset
我下面也有寫console.log
來驗證reload 的時候 pinia store 的data 會被reset
但很奇怪的是template html 的部分
<li v-else-if="globalStore.localIsLogin">
    <div>
      {{ globalStore?.username }}
    </div>
  </li>

在reload 之後竟然還是會顯示
而且是在我確認 globalStore.localIsLogin 是false 
and globalStore.username 是空的時候

為什麼globalStore value 被reset後 但是html 還是會顯示
到現在還沒是沒有找到原因
所以做了紀錄

*/
// console.log('the username in login slot')
// console.log(globalStore.username)
// console.log(globalStore.localIsLogin)
</script>
<template>
  <li v-if="!globalStore.localIsLogin && !globalStore.googleIsLogin">
    <router-link to="/login" class="router-link-hover text-black hover:underline"
      >Login</router-link
    >
  </li>

  <li v-else-if="globalStore.localIsLogin">
    <div>
      {{ globalStore?.username }}
    </div>
  </li>

  <li v-else-if="globalStore.googleIsLogin" class="md:flex md:justify-center md:items-center">
    <div class="md:mr-1">
      {{ globalStore?.displayName }}
    </div>
    <img :src="globalStore.photoURL" class="md:h-7 md:w-7" />
  </li>
</template>
<style scoped lang="scss">
.router-link-hover:hover {
  color: #60a5fa;
}
</style>
