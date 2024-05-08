<script setup lang="ts">
import request from '../utils/Request'
import { onMounted, ref, type Ref } from 'vue'
import { useGlobalStore } from '../stores/GlobalStore'
import HomeNav from '../components/Nav/HomeNav.vue'
import AdministratorView from '../views/AdministratorView.vue'
import type { Result } from '../utils/Result'
import type { User } from '../interface/UserInterface'
import type { AxiosResponse } from 'axios'

// !還沒有設置權限

const SSRPage = ref(null)
const isSSRPage = ref(false)
const getSSRPage = async () => {
  try {
    const res = await request.get('/setting')

    SSRPage.value = res.data
  } catch (e) {
    console.log(e)
  }
}

const globalStore = useGlobalStore()

const username = ref('')
const password = ref('')

const updateUser = async () => {
  try {
    const res: AxiosResponse<Result<User[]>> = await request.put('/user', {
      username: username.value,
      password: password.value
    })

    window.alert('update success!')
  } catch (e) {
    console.log(e)
  }
}

onMounted(async () => {
  await getSSRPage()
})
</script>
<template>
  <div v-html="SSRPage" v-if="isSSRPage"></div>

  <div
    class="md:w-full md:h-screen md:flex md:flex-col"
    v-if="globalStore.role !== 'administrator'"
  >
    <HomeNav></HomeNav>
    <div class="md:h-full md:w-full">
      <div class="flex items-center justify-center h-screen sm:h-screen md:flex md:h-screen">
        <div class="w-full max-w-xs sm:w-3/4 sm:max-w-md md:w-full md:max-w-xs">
          <form
            class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 sm:px-4 sm:pt-4 sm:pb-4 sm:mb-2 md:bg-white md:shadow-md md:rounded md:px-8 md:pt-6 md:pb-8 md:mb-4"
          >
            <p style="font-weight: bolder; margin-bottom: 6px">Modify your username and password</p>
            <div class="mb-4 sm:mb-2 md:mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2 md:block md:text-gray-700 md:text-sm md:font-bold md:mb-2"
                for="username"
              >
                Username
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:shadow md:appearance-none md:border md:rounded md:w-full md:py-2 md:px-3 md:text-gray-700 md:leading-tight md:focus:outline-none md:focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                v-model="username"
              />
            </div>
            <div class="mb-6 sm:mb-4 md:mb-6">
              <label
                class="block text-gray-700 text-sm font-bold mb-2 md:block md:text-gray-700 md:text-sm md:font-bold md:mb-2"
                for="password"
              >
                Password
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline md:shadow md:appearance-none md:border md:rounded md:w-full md:py-2 md:px-3 md:text-gray-700 md:mb-3 md:leading-tight md:focus:outline-none md:focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
                v-model="password"
              />
              <p class="text-xs italic sm:text-sm md:text-xs md:italic">
                Please choose a password.
              </p>
            </div>
            <div
              class="flex items-center justify-between sm:flex-col sm:items-start md:flex md:items-center md:justify-between"
            >
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline md:bg-blue-500 md:hover:bg-blue-700 md:text-white md:font-bold md:py-2 md:px-4 md:rounded md:focus:outline-none md:focus:shadow-outline"
                type="button"
                @click="updateUser"
              >
                Update
              </button>
            </div>
          </form>

          <p
            class="text-center text-gray-500 text-xs sm:text-sm md:text-center md:text-gray-500 md:text-xs"
          >
            &copy;Zane
          </p>
        </div>
      </div>
    </div>
  </div>

  <div v-if="globalStore.role == 'administrator'">
    <AdministratorView></AdministratorView>
  </div>
</template>
<style scoped lang="scss"></style>
