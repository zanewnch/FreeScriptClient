<script setup lang="ts">
import HomeNav from '../components/Nav/HomeNav.vue'
import { ref, onMounted, type Ref } from 'vue'
import request from '../utils/Request'
import type { User } from '../interface/UserInterface'
import SettingSlot from '../components/Nav/SettingSlot.vue'
import { useGlobalStore } from '../stores/GlobalStore'
import type { AxiosResponse } from 'node_modules/axios/index.cjs'
import type { Result } from '../utils/Result'

const pageNum: Ref<number> = ref(1)
const pageSize: Ref<number> = ref(10)
const UserData: Ref<User[]> = ref([])

const globalStore = useGlobalStore()

const requestUserData = async (): Promise<void> => {
  const res: AxiosResponse<Result<User[]>> = await request.post(`/user/${pageNum}/${pageSize}`)
  if (res.data.data !== null) {
    UserData.value = res.data.data
  }
}

onMounted(async () => {
  await requestUserData()
})
</script>
<template>
  <div class="md:w-full md:h-screen md:flex md:flex-col">
    <HomeNav>
      <!-- contact button -->
      <template #setting>
        <SettingSlot></SettingSlot>
      </template>
    </HomeNav>
    <div
      class="md:w-full md:h-full md:flex md:justify-center md:items-center"
      v-if="globalStore.role === 'administrator'"
    >
      <div class="md:w-4/5 md:h-4/5 md:overflow-auto">
        <el-table
          style="width: 100%"
          max-height="400"
          scrollbar-always-on:true
          :data="UserData"
          class="table"
          :header-cell-style="{
            'background-color': '#6C6C6C',
            color: '#fff',
            'font-size': '16px',
            'font-weight': 'bold',
            'text-align': 'center'
          }"
          :cell-style="{
            'font-size': '16px',
            'font-weight': 'bold',
            color: '#000000',
            'text-align': 'center'
          }"
        >
          <el-table-column prop="_id" label="_id" width="180" />
          <el-table-column prop="email" label="email" width="180" />
          <el-table-column prop="displayName" label="display-name" width="180" />
          <el-table-column prop="provideId" label="provide-id" width="180" />
          <el-table-column prop="localAccount" label="local-account" width="180" />
          <el-table-column prop="localPassword" label="local-password" width="180" />
          <el-table-column prop="role" label="role" width="180" />
          <el-table-column prop="username" label="username" width="180" />
          <el-table-column prop="password" label="password" width="180" />
        </el-table>
      </div>
    </div>
    <div
      class="md:w-full md:h-full md:flex md:justify-center md:items-center"
      v-if="globalStore.role !== 'administrator'"
    >
      <div class="md:w-4/5 md:h-4/5 md:justify-center md:items-center md:flex">
        <div class="md:font-bold">
          your account permissions(role) do not allow you to browse user information
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
;
