<script lang="ts" setup>

// @ts-ignore
import { useLoginStore } from "@/stores/LoginStore";
import { Edit } from '@element-plus/icons-vue';
import { useRouter } from "vue-router";
import { useUserStore } from '@/stores/UserStore';

const loginStore = useLoginStore();
const userStore = useUserStore();
let $router = useRouter();



const login = async () => {
  try {

    await loginStore.login(loginStore.username, loginStore.password);


    if (!loginStore.submitIsWrong) {
      // make isLogin states is true
      userStore.isLogin = true;
      $router.push({ path: '/data/user' });
    } else {
      console.log(loginStore.submitIsWrong);
      console.log("The login manipulation is wrong");
    }
  } catch (error) {

    console.error('Error:', error);
  }
}



</script>

<template>
  <div class="container">
    <div class="content">
      <el-row class="elRow">
        <el-col
          :span="24"
          class="elCol"
        >


          <div class='columnUp'>
            <p style='margin-bottom: 5px;'>Username</p>
            <el-input
              v-model="loginStore.username"
              class="input"
              size="large"
              clearable
              @blur="loginStore.usernameValidate"
            />

            <span
              class='errorMessage'
              v-if='loginStore.usernameIsError === 1'
            >Please input the username</span>

          </div>

          <div class='columnDown'>
            <p style='margin-bottom: 5px;'>password</p>
            <el-input
              v-model="loginStore.password"
              class="input"
              size="large"
              clearable
              @blur="loginStore.passwordValidate"
              @keyup.enter="login"
            />

            <span
              class='errorMessage'
              v-if='loginStore.passwordIsError === 1'
            >Please input the password</span>
          </div>

          <div class='submit'>
            <el-button
              @click='login'
              type="info"
              text
              bg
              class='submitButton'
            >Submit</el-button>

          </div>



        </el-col>
      </el-row>
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

          margin-top: 10%;

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
          margin-top: 10%;

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