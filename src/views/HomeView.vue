<script
  lang="ts"
  setup
>
import HomeMainContent from '../components/HomeView/HomeMainContent.vue'
import HomeNav from '../components/Nav/HomeNav.vue'
import { onMounted } from 'vue'
import SearchSlot from '../components/Nav/SearchSlot.vue'
import WriteSlot from '../components/Nav/WriteSlot.vue'
import LoginSlot from '../components/Nav/LoginSlot.vue'
import ServiceSlot from '@/components/Nav/ServiceSlot.vue'
import SettingSlot from '@/components/Nav/SettingSlot.vue'
// @ts-ignore
import RegisterSlot from '@/components/Nav/RegisterSlot.vue'

import { useGlobalStore } from '@/stores/GlobalStore'
import request from '@/utils/Request';

const globalStore = useGlobalStore();
const basedOnCookieToSetSignIn = async () => {
  const verifyLogin = await request.get('/user/verify-login')
    .then((verifyLogin) => { return verifyLogin; })
    .catch((error) => {
      window.alert("You have not login yet.");
      console.log(error);
      return;
    })
  if (verifyLogin && verifyLogin.data.data) {
    globalStore.localIsLogin = true;
    globalStore.googleIsLogin = true;
  }
  

  const decodeToken = await request.get('/user/decode-login');
  console.log("decode token");
  console.log(decodeToken.data.data['name']);
  globalStore.username = decodeToken.data.data['name'];
  globalStore.displayName = decodeToken.data.data['name'];



}

onMounted(() => {
  basedOnCookieToSetSignIn();
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

<style
  scoped
  lang="scss"
></style>
