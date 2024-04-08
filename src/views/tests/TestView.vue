<script lang="ts" setup>
import {decodeCredential, googleLogout} from 'vue3-google-login'
const callback = (response:any) => {
  // This callback will be triggered when the user selects or login to
  // his Google account from the popup
  console.log("Handle the response", response)
  let user = decodeCredential(response.credential);
  console.log(user);
}

const logout = () =>{
  googleLogout();

}


</script>

<template>
  <GoogleLogin :callback="callback" class="" />

  <div>
    <button @click="logout">logout</button>
  </div>
</template>

<style scoped lang="scss"></style>
