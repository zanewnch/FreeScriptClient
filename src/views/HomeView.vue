<script lang="ts" setup>
import HomeMainContent from '@/components/HomeView/HomeMainContent.vue'
import HomeNav from '@/components/Nav/HomeNav.vue'
import { ref, onMounted, type Ref } from 'vue'
import { Edit, Search } from '@element-plus/icons-vue'

import type { Article } from '../interface/ArticleInterface'

import SearchSlot from '@/components/Nav/SearchSlot.vue'
import WriteSlot from '@/components/Nav/WriteSlot.vue'
import LoginSlot from '@/components/Nav/LoginSlot.vue'
import ServiceSlot from '@/components/Nav/ServiceSlot.vue'
import SettingSlot from '@/components/Nav/SettingSlot.vue'

// global 1. isLogin 2.JWTToken
// 不能用store value 去判斷,因為用store value 只有當login manipulation 才會assign
// 而是要直接判斷是否login, 應該從cookie去判斷
// 寫一個request to know whether the user is login, and the backend based on the cookie to know whether the user is login

onMounted(() => {})
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
        <settingSlot></settingSlot>
      </template>

      <!-- login button -->
      <template #login>
        <LoginSlot></LoginSlot>
      </template>
    </HomeNav>

    <!-- main content -->
    <HomeMainContent></HomeMainContent>
  </div>
</template>

<style scoped lang="scss"></style>
