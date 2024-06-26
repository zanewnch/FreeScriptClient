<script lang="ts" setup>
import { ref, type Ref, watchEffect } from 'vue'
import request from '../utils/Request'
import { useGlobalStore } from '../stores/GlobalStore'
import { Result } from '../utils/Result'

import { decodeCredential, googleLogout } from 'vue3-google-login'
import { useRouter } from 'vue-router'

/* login form */
const globalStore = useGlobalStore()

const isUsernameError: Ref<boolean> = ref(false)
const isPasswordError: Ref<boolean> = ref(false)

const router = useRouter()

/* google login */
const googleSignIn = async (response: any): Promise<void> => {
  // 傳給backend 來確認是否有這個帳號
  // request 要建立cookie
  let responseValue = response
  let user: any = decodeCredential(responseValue.credential)

  globalStore.JWTToken = response['credential']
  globalStore.email = user['email']
  globalStore.displayName = user['given_name']
  globalStore.photoURL = user['picture']
  globalStore.providerId = user['aud']
  globalStore.jti = user['jti']

  const result: Result<any> = await request.post(
    '/user/google-signIn',
    {
      JWTToken: globalStore.JWTToken,
      email: globalStore.email,
      displayName: globalStore.displayName,
      photoURL: globalStore.photoURL,
      providerId: globalStore.providerId,
      jti: globalStore.jti
    },
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
  globalStore.googleIsLogin = true
  // 增加權限
  globalStore.role = result.data.data.role

  const token = await request.post(
    '/user/set-cookie',
    {
      displayName: globalStore.displayName
    },
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )

  router.push('/')
}

// local website login
const localSignIn = async (): Promise<void> => {
  // check username format
  if (globalStore.username.length === 0) {
    isUsernameError.value = true
  }
  // check password format
  if (globalStore.password.length === 0) {
    isPasswordError.value = true
  }

  // request for checking account
  try {
    // It should return the user
    const result: Result<any> = await request.post(
      '/user/local-signIn',
      {
        username: globalStore.username,
        password: globalStore.password
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    // 增加權限
    globalStore.role = result.data.data.role

    // set isLogin state is true for making interceptor request with token
    const resJwt = await request.post('/user/local-jwt', {
      username: globalStore.username,
      password: globalStore.password
    })

    globalStore.localJwtToken = resJwt.data.data
    globalStore.localIsLogin = true

    const token = await request.post(
      '/user/set-cookie',
      {
        username: globalStore.username
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )

    router.push('/')
  } catch (e) {
    console.log(e)
  }
}

// for testing, when ref change then print out the data
watchEffect(() => {
  // console.log('username:', username.value)
  // console.log('password:', password.value)
})
</script>

<template>
  <div class="flex items-center justify-center h-screen sm:h-screen md:flex md:h-screen">
    <div class="w-full max-w-xs sm:w-3/4 sm:max-w-md md:w-full md:max-w-xs">
      <!-- 在 <form> 元素上添加 @submit.prevent="localSignIn" 事件，这样当用户在任何输入框中按下 Enter 键时，会触发 localSignIn 方法，并阻止默认的表单提交行为。
      为了确保在单独输入框中按下 Enter 键也能触发登录，还在 username 和 password 的 input 元素上分别添加了 @keydown.enter="localSignIn" 事件监听器。
      这样，无论是按下登录按钮还是在输入框中按 Enter 键，都会触发 localSignIn 方法。
      -->
      <form
        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 sm:px-4 sm:pt-4 sm:pb-4 sm:mb-2 md:bg-white md:shadow-md md:rounded md:px-8 md:pt-6 md:pb-8 md:mb-4"
        @submit.prevent="localSignIn"
      >
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
            v-model="globalStore.username"
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
            v-model="globalStore.password"
            @keydown.enter="localSignIn"
          />
          <p class="text-xs italic sm:text-sm md:text-xs md:italic">Please choose a password.</p>
        </div>
        <div
          class="flex items-center justify-between sm:flex-col sm:items-start md:flex md:items-center md:justify-between"
        >
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline md:bg-blue-500 md:hover:bg-blue-700 md:text-white md:font-bold md:py-2 md:px-4 md:rounded md:focus:outline-none md:focus:shadow-outline"
            type="button"
            @click="localSignIn"
          >
            Sign In
          </button>
          <div
            class="flex flex-col justify-start items-start mt-4 sm:mt-2 md:flex md:flex-col md:justify-start md:items-start"
          >
            <p class="text-sm md:text-sm">Already have an account?</p>
            <router-link
              class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 md:inline-block md:align-baseline md:font-bold md:text-sm md:text-blue-500 md:hover:text-blue-800"
              to="/register"
            >
              Sign up
            </router-link>
          </div>
        </div>
      </form>
      <div
        class="w-full flex h-24 justify-center items-center sm:h-12 md:w-full md:flex md:h-24 md:justify-center md:items-center"
      >
        <GoogleLogin :callback="googleSignIn" class="flex w-2/3 sm:w-full md:flex md:w-2/3" />
      </div>
      <p
        class="text-center text-gray-500 text-xs sm:text-sm md:text-center md:text-gray-500 md:text-xs"
      >
        &copy;Zane
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
