<script lang="ts" setup>
import HomeMainContent from '../components/HomeView/HomeMainContent.vue'
import HomeNav from '../components/Nav/HomeNav.vue'
import { onMounted } from 'vue'
import SearchSlot from '../components/Nav/SearchSlot.vue'
import WriteSlot from '../components/Nav/WriteSlot.vue'
import LoginSlot from '../components/Nav/LoginSlot.vue'
import ServiceSlot from '../components/Nav/ServiceSlot.vue'
import SettingSlot from '../components/Nav/SettingSlot.vue'
// @ts-ignore
import RegisterSlot from '../components/Nav/RegisterSlot.vue'

import { useGlobalStore } from '../stores/GlobalStore'
import request from '../utils/Request'
// @ts-ignore
import type { AxiosResponse } from 'node_modules/axios/index.cjs'
import { Result } from '../utils/Result'

const globalStore = useGlobalStore()
const basedOnCookieToSetSignIn = async (): Promise<void> => {
  try {
    const verifyLogin: AxiosResponse<Result<any>> = await request.get('/user/verify-login')

    if (verifyLogin && verifyLogin.data.data) {
      globalStore.localIsLogin = true
      globalStore.googleIsLogin = true
    }

    const decodeToken: AxiosResponse<Result<any>> = await request.get('/user/decode-login')

    if (decodeToken && decodeToken.data.data) {
      globalStore.username = decodeToken?.data.data['name']
      globalStore.displayName = decodeToken.data.data['name']
    }
  } catch (e) {
    console.log(e)

    window.alert('You are not login yet. Please login first.')
  }
}

onMounted(() => {
  basedOnCookieToSetSignIn()
})
</script>

<template>
  <div class="xl:w-full md:h-screen">
    <!-- Nav -->
    <HomeNav>
      <template #search>
        <SearchSlot></SearchSlot>
      </template>
      <!-- write button -->
      <template #write>
        <WriteSlot></WriteSlot>
      </template>

      <!-- services -->
      <template #services>
        <ServiceSlot></ServiceSlot>
      </template>

      <!-- contact button -->
      <template #setting>
        <SettingSlot></SettingSlot>
      </template>

      <!-- login button -->
      <template #login>
        <LoginSlot></LoginSlot>
      </template>

      <template #register>
        <RegisterSlot></RegisterSlot>
      </template>
    </HomeNav>

    <!-- main content -->
    <HomeMainContent></HomeMainContent>
  </div>
</template>

<style scoped lang="scss"></style>
