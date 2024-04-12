<script lang="ts" setup>
import { ref } from 'vue'
import request from '@/utils/Request'
import { useRouter } from 'vue-router'
import { decodeCredential, googleLogout } from 'vue3-google-login'

// 要寫重複註冊的檢查


// local register
const username = ref('')
const email = ref('')
const password = ref('')
const passwordConfirm = ref('')



const router = useRouter();

const googleRegister = async (response:any) =>{
  let responseValue = response;
  let user: any = decodeCredential(responseValue.credential)

  

  const res = await request.post('/user',
    {
      JWTToken: response['credential'],
      email: user['email'],
      displayName: user['given_name'],
      photoURL: user['picture'],
      providerId: user['aud'],
      jti: user['jti']
    },
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )

    router.push('/');
}

const localRegister = async () => {
  const passwordCheck = () => {
    if (password.value !== passwordConfirm.value) {
      window.alert('password not match');
      return;
    }
  }

  passwordCheck()

  const res = await request.post('/user', {
    username: username.value,
    email: email.value,
    password: password.value
  })

  router.push('/');
}
</script>

<template>
  <div class="flex items-center justify-center h-screen">
    <div class="w-full max-w-md">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Username
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            v-model="username"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email"> Email </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            v-model="email"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            v-model="password"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="confirm-password">
            Confirm Password
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="confirm-password"
            type="password"
            placeholder="Confirm Password"
            v-model="passwordConfirm"
          />
        </div>
        <GoogleLogin :callback="googleRegister" class="flex w-2/3 sm:w-full md:flex md:w-2/3" />
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            @click="localRegister"
          >
            Register
          </button>
          <router-link
            class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            to="/login"
          >
            Already have an account? Login
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;

  .content {
    width: 80%;
    height: 90%;

    display: flex;
    justify-content: center;
    align-items: center;

    .elRow {
      width: 40%;
      height: 80%;

      border: solid 1px #d0d0d0;
      border-radius: 10px;
      box-shadow: 0px 5px 10px rgb(0, 0, 0, 0.1);

      .elCol {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .columnUp {
          width: 60%;
          height: 25%;

          margin-top: 5%;

          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .columnDown {
          width: 60%;
          height: 25%;

          margin-top: 3%;

          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .submit {
          width: 30%;
          margin-top: 5%;

          :deep(.submitButton) {
            width: 100%;
          }
        }
      }
    }
  }
}

.errorMessage {
  color: red;
  margin-top: 5px;
}
</style>
