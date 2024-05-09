<script setup lang="ts">
import { useGlobalStore } from '../../stores/GlobalStore'
import request from '../../utils/Request'

const globalStore = useGlobalStore()

/* 
一個很奇怪的bug or feature
如果頁面reload 那frontend data 都會被reset
我下面也有寫console.log
來驗證reload 的時候 pinia store 的data 會被reset
但很奇怪的是template html 的部分
<li v-else-if="globalStore.localIsLogin">
    <div>
      {{ globalStore?.username }}
    </div>
  </li>

在reload 之後竟然還是會顯示
而且是在我確認 globalStore.localIsLogin 是false 
and globalStore.username 是空的時候

為什麼globalStore value 被reset後 但是html 還是會顯示
到現在還沒是沒有找到原因
所以做了紀錄

新發現
我發現如果把login-token cookie 刪除之後 
再reload page
那template html 的部分就會也被跟著reset

另外做的實驗  如果在login之後 先comment set-cookie part
也就是沒有cookie 單純登入之後
這時候reload page
template html 的部分也會被reset

所以這個bug or feature 是真的因為login-token cookie 的關係才會發生

*/
// console.log('the username in login slot')
// console.log(globalStore.username)
// console.log(globalStore.localIsLogin)

// 解決方法  在reload page 前先刪除login-token cookie, 就回復正常
/* 
这段代码在浏览器窗口即将关闭或刷新时执行一些操作。它使用了 window.addEventListener 方法来监听 beforeunload 事件，这个事件在窗口即将卸载（即关闭或刷新）时触发。

具体来说，这段代码在窗口即将卸载时发送了一个 GET 请求到 /user/delete-cookie 路径。这个请求可能是用来删除用户的 cookie，但是具体的行为取决于服务器如何处理这个请求。这个请求是异步的，意味着 JavaScript 会等待这个请求完成后再继续执行后面的代码。

请注意，由于 beforeunload 事件的处理需要尽快完成，否则可能会影响到页面的卸载，因此在这个事件的处理函数中进行异步操作可能不是一个好主意。
*/
window.addEventListener('beforeunload', async (event) => {
  await request.get('/user/delete-cookie')
})
</script>
<template>
  <li v-if="!globalStore.localIsLogin && !globalStore.googleIsLogin">
    <router-link to="/login" class="router-link-hover text-black hover:underline"
      >Login</router-link
    >
  </li>

  <li v-else-if="globalStore.localIsLogin">
    <div>
      {{ globalStore?.username }}
    </div>
  </li>

  <li v-else-if="globalStore.googleIsLogin" class="md:flex md:justify-center md:items-center">
    <div class="md:mr-1">
      {{ globalStore?.displayName }}
    </div>
    <img :src="globalStore.photoURL" class="md:h-7 md:w-7" />
  </li>
</template>
<style scoped lang="scss">
.router-link-hover:hover {
  color: #60a5fa;
}
</style>
