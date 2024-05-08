<script setup lang="ts">
import { ref } from 'vue'
const isService = ref(false)
const toggleServiceDropDown = (event: MouseEvent) => {
  /*
  const changeService = ()=>{
  isService.value = true;
  // document.addEventListener('click',closeService,false);
}  為什麼我沒加evenlistener 就可以正常操作  只要ㄧ加 eventListener 就會沒有反應
ChatGPT
如果在 changeService 函数中添加了 document.addEventListener，但是服务列表点击后没有响应，有可能是因为事件冒泡导致的。

当你点击 "Services" 按钮时，首先会触发按钮自身的点击事件，然后事件会继续向上冒泡到 document 元素。如果在 changeService 函数中添加了 document.addEventListener，并在 closeService 函数中使用 document.removeEventListener，那么在点击 "Services" 按钮时，会先触发按钮的点击事件，然后立即触发 closeService 函数，将 isService 设置为 false，导致服务列表关闭。

为了解决这个问题，你可以使用 event.stopPropagation() 方法来阻止事件冒泡，从而阻止事件传播到 document 元素。 */
  /*
  在你的代码中，使用 event.stopPropagation() 是为了防止在点击 "Services" 按钮时立即触发 document 上的点击事件监听器，从而确保点击按钮时只执行打开服务列表的逻辑，而不会立即关闭它。这样你可以点击按钮以外的地方来关闭服务列表。
 */
  event.stopPropagation()
  isService.value = !isService.value
  // listen whether has click event, if has, then invoke the corresponding function
  if (isService.value) {
    document.addEventListener('click', closeService, { once: true })
  } else {
    document.removeEventListener('click', closeService, false)
  }
}
const closeService = () => {
  isService.value = false
}
</script>
<template>
    <li class="" >
        <!-- 下拉式菜单 -->
        <div class="relative group">
          <button
            class="router-link-hover text-black hover:underline focus:outline-none"
            @click="toggleServiceDropDown"
          >
            Services
          </button>
          <ul
            class="absolute mt-2 space-y-2 bg-white border border-gray-300 rounded-lg py-2"
            v-if="isService"
          >
            <li class="flex justify-center items-center">
              <router-link to="/delete-cookie" class="router-link-hover block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >Delete cookie for test</router-link
              >
            </li>
            <li class="flex justify-center items-center">
              <router-link to="/data/supermarket" class="router-link-hover block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >Data table</router-link
              >
            </li>
            
          </ul>
        </div>
      </li>
</template>
<style scoped lang="scss">
.router-link-hover:hover {
  color: #60a5fa;
}
</style>
