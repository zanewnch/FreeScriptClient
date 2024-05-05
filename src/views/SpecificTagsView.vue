<script setup lang="ts">
import { useRoute, type RouteLocationNormalizedLoaded } from 'vue-router'
import { ref, onMounted, type Ref } from 'vue'
import request from '../utils/Request'
import { urlFriendly } from '../utils/UrlFriendly'
import HomeNav from '../components/Nav/HomeNav.vue'

import SearchSlot from '../components/Nav/SearchSlot.vue'
import WriteSlot from '../components/Nav/WriteSlot.vue'
import LoginSlot from '../components/Nav/LoginSlot.vue'
import ServiceSlot from '../components/Nav/ServiceSlot.vue'
import SettingSlot from '../components/Nav/SettingSlot.vue'
import type { Article } from '@/interface/ArticleInterface'

// path variable
const route: RouteLocationNormalizedLoaded = useRoute()
const tag: string | string[] = route.params.tags

const articleData: Ref<Article[] | null> = ref(null)

const requestArticleData = async (): Promise<void> => {
  try {
    const res = await request.get('/article/specific-tags-articles', {
      params: {
        tags: tag
      }
    })
    articleData.value = res.data.data
    console.log(res.data.data)
  } catch (e) {
    console.error(e)
  }
}

onMounted(() => {
  requestArticleData()
})
</script>
<template>
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

  <div class="md:w-full md:h-full md:flex md:flex-col md:justify-start md:items-center">
    <div
      class="card md:w-4/5 md:h-44 md:flex md:flex-col md:justify-center md:overflow-hidden sm:mt-2 sm:pb-2"
      v-for="(item, index) in articleData"
      :key="index"
      style="border-bottom: 0.5px #e0e0e0 solid"
    >
      <router-link :to="'/' + urlFriendly(item['author'] || '', item['title'] || '')" class="">
        <div class="author md:flex md:justify-start md:items-center sm:flex">
          <el-avatar
            v-if="item['author']"
            :src="`../../../userAvatar/${item['author']
              .replace(/<\/?p>/g, '')
              .trim()
              .toLowerCase()
              .replace(/\s+/g, '-')}.png`"
            class=""
          />
          <div class="sm:flex sm:justify-center sm:items-center sm:ml-2">
            <div v-html="item['author']"></div>
          </div>
        </div>
        <div class="title">
          <div v-html="item['title']"></div>
        </div>
        <div class="content">
          <div v-html="item['content']"></div>
        </div>
      </router-link>
    </div>
  </div>
</template>
<style scoped lang="scss"></style>
