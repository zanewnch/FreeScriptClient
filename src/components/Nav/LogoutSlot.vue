<script setup lang="ts">
import { useGlobalStore } from '../../stores/GlobalStore'
import request from '../../utils/Request'
import { useRouter } from 'vue-router'

const globalStore = useGlobalStore()
const router = useRouter()

const logout = async () => {
  if (globalStore.localIsLogin) {
    globalStore.username = ''
    globalStore.password = ''
    globalStore.role = ''
    globalStore.localIsLogin = false
  }

  if (globalStore.googleIsLogin) {
    globalStore.JWTToken = ''
    globalStore.email = ''
    globalStore.displayName = ''
    globalStore.photoURL = ''
    globalStore.providerId = ''
    globalStore.jti = ''
    globalStore.role = ''
    globalStore.googleIsLogin = false
  }

  // delete login-token cookie
  await request.get('/user/delete-cookie')

  location.reload()
}
</script>
<template>
  <li v-if="globalStore.localIsLogin || globalStore.googleIsLogin">
    <button @click="logout">Logout</button>
  </li>
</template>
<style scoped lang="scss"></style>
