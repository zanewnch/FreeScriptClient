<script lang="ts" setup>
import { ref, type Ref, watchEffect } from 'vue'
import request from '@/utils/Request'
import { useGlobalStore } from '../stores/GlobalStore'
import { Result } from '../utils/Result'

import { decodeCredential, googleLogout } from 'vue3-google-login'
import { useRouter } from 'vue-router'
import type { AxiosResponse } from 'axios'

/* login form */
const globalStore = useGlobalStore()
const username: Ref<string> = ref('')
const password: Ref<string> = ref('')
const isUsernameError: Ref<boolean> = ref(false)
const isPasswordError: Ref<boolean> = ref(false)

const router = useRouter()

/* google login */
const googleSignIn = async (response: any) => {
  // 傳給backend 來確認是否有這個帳號
  // request 要建立cookie

  let user: any = decodeCredential(response.credential)
  console.log(user)
  console.log(response)

  globalStore.JWTToken = response['credential']
  globalStore.email = user['email']
  globalStore.displayName = user['given_name']
  globalStore.photoURL = user['picture']
  globalStore.providerId = user['aud']
  globalStore.jti = user['jti']

  console.log(globalStore.JWTToken)

  const result: Result<string> = await request.post(
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
  console.log(result)

  // router.push('/');
}

// local website login
const localSignIn = async (): Promise<void> => {
  // check username format
  if (username.value.length === 0) {
    isUsernameError.value = true
  }
  // check password format
  if (password.value.length === 0) {
    isPasswordError.value = true
  }

  // request for checking account
  try {
    // send request
    const result: Result<string> = await request.post(
      '/user/local-signIn',
      {
        username: username.value,
        password: password.value
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )

    // set isLogin state is true for making interceptor request with token
    if (result.code === 200) {
      // set isLogin for interceptor send request with token
      globalStore.username = username.value
      globalStore.isLogin = true
      if (result.data) globalStore.loginToken = result.data
    }
  } catch (e) {
    console.log(e)
  }
}

// for testing, when ref change then print out the data
watchEffect(() => {
  // console.log('username:', username.value)
  // console.log('password:', password.value)
})

const testfunction = async ():Promise<void> => {
  try {
    const res: AxiosResponse<any> = await request.post(
      '/user/test',
      {
        'username': 'dummyUsername'
      },
      {
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        }
      }
    )

    console.log(res.data)
  } catch (error) {
    console.log(error);
  }
}
</script>

<template>
  <button @click="testfunction">aaa</button>
  <!-- Outer container with flexbox for centering content -->
  <div class="flex items-center justify-center h-screen">
    <!-- Inner container with width restrictions -->
    <div class="w-full max-w-xs">
      <!-- Form container with styling for background, shadow, padding, and margin -->
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <!-- Username input field container -->
        <div class="mb-4">
          <!-- Label for username input field -->
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Username
          </label>
          <!-- Username input field -->
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            v-model="username"
          />
        </div>
        <!-- Password input field container -->
        <div class="mb-6">
          <!-- Label for password input field -->
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <!-- Password input field -->
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            v-model="password"
          />
          <!-- Password hint text -->
          <p class="text-xs italic">Please choose a password.</p>
        </div>
        <!-- Container for sign in button and forgot password link -->
        <div class="flex items-center justify-between">
          <!-- Sign in button -->
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            @click="localSignIn"
          >
            Sign In
          </button>
          <!-- Forgot password link -->
          <div class="md:flex md:flex-col md:justify-start md:items-start">
            <p class="md:text-sm">Already have an account?</p>
            <a
              class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="/register"
            >
              Sign up
            </a>
          </div>
        </div>
      </form>

      <div class="md:w-full md:flex md:h-24 md:justify-center md:items-center">
        <GoogleLogin :callback="googleSignIn" class="md:flex md:w-2/3" />
      </div>

      <!-- Copyright text -->
      <p class="text-center text-gray-500 text-xs">&copy;Zane</p>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
