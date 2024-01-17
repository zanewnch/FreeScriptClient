<script lang="ts" setup>
import { Edit } from '@element-plus/icons-vue';
import { useRouter } from "vue-router";
import { useRegisterStore } from '../stores/RegisterStore';
import { useUserStore } from '../stores/UserStore';

const registerStore = useRegisterStore();
const userStore = useUserStore();
let $router = useRouter();

const register = async () => {
  try {
    await userStore.register(registerStore.username, registerStore.password);

    if (!registerStore.submitIsWrong) {
      $router.push({ path: '/' });
    } else {

      console.log("The register manipulation is wrong");
    }
  } catch (error) {
    console.error('Error:', error);
  }
}
</script>

<template>
  <!-- <div class="container">
    <div class="content">
      <el-row class="elRow">
        <el-col
          :span="24"
          class="elCol"
        >
          <div class='columnUp'>
            <p style='margin-bottom: 5px;'>Username</p>
            <el-input
              v-model="registerStore.username"
              class="input"
              size="large"
              
              clearable
              @blur="registerStore.usernameValidate"
            />
            <span
              class='errorMessage'
              v-if='registerStore.usernameIsError === 1'
            >Please input the username</span>
          </div>

          <div class='columnDown'>
            <p style='margin-bottom: 5px;'>password</p>
            <el-input
              v-model="registerStore.password"
              class="input"
              size="large"
              
              clearable
              @blur="registerStore.passwordValidate"
            />
            <span
              class='errorMessage'
              v-if='registerStore.passwordIsError === 1'
            >Please input the password</span>
          </div>

          <div class='columnDown'>
            <p style='margin-bottom: 5px;'>Confirm password</p>
            <el-input
              v-model="registerStore.password"
              class="input"
              size="large"
              
              clearable
              @blur="registerStore.passwordValidate"
            />
            <span
              class='errorMessage'
              v-if='registerStore.passwordIsError === 1'
            >Please input the password</span>
          </div>

          <div class='submit'>
            <el-button
              @click='register'
              type="info"
              text
              bg
              class='submitButton'
            >Submit</el-button>
          </div>
        </el-col>
      </el-row>
    </div>
  </div> -->
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <title>Register Page - Tailwind CSS</title>
</head>
<div class="flex items-center justify-center h-screen">
  <div class="w-full max-w-md">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                  Username
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
          </div>
          <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                  Email
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email">
          </div>
          <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                  Password
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password">
          </div>
          <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="confirm-password">
                  Confirm Password
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="confirm-password" type="password" placeholder="Confirm Password">
          </div>
          <div class="flex items-center justify-between">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Register
              </button>
              <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                  Already have an account? Login
              </a>
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

      border: solid 1px #D0D0D0;
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
