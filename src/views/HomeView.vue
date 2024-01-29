<script lang="ts" setup>
// @ts-ignore
import Footer from '@/components/HomeView/Footer.vue'
// @ts-ignore
import Content from '@/components/HomeView/ContentHome.vue'
// @ts-ignore
import Navigation from '@/components/HomeView/NavigationHome.vue'

import NavOriginal from '@/components/HomeView/NavOriginal.vue';

import ConHomeVue from '@/components/HomeView/ConHomeNew.vue'

import { ref } from 'vue';


let isService = ref(false);
const changeService = (event: any) => {
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
  event.stopPropagation();
  isService.value = true;
  document.addEventListener('click', closeService, false);
}

const closeService = () => {
  isService.value = false;
  document.removeEventListener('click', closeService, false);
}

</script>

<template>
  <div class='xl:w-full h-screen '>
    <el-row
      class='md:w-full'
      style='border-bottom: 0.5px solid #E0E0E0;'
    >
      <el-col
        :span='24'
        class='md:w-full '
      >
        <div class='w-full h-20 '>
          <nav class=" p-4 w-full h-full ">
            <div class="md:w-full mx-auto h-full ">
              <div class="md:w-full flex justify-between items-center h-full ">
                <!-- 左侧 Logo 或标题 -->
                <div class="website-title text-black text-2xl font-bold h-full  flex justify-center items-center ">NOTE
                </div>

                <!-- 右侧导航链接 -->
                <ul
                  class="website-list space-x-4 h-full flex justify-center items-center p-0 m-0"
                  style=''
                >
                  <li class='flex justify-center items-center'>
                    <el-icon>
                      <Edit />
                    </el-icon>
                    <a
                      href="#"
                      class="text-black hover:underline"
                    >Write</a>
                  </li>
                  <li><a
                      href="#"
                      class="text-black hover:underline"
                    >About</a></li>
                  <li>
                    <!-- 下拉式菜单 -->
                    <div class="relative group">
                      <button
                        class="text-black hover:underline focus:outline-none"
                        @click='changeService'
                      >Services</button>
                      <ul
                        class="absolute  mt-2 space-y-2 bg-white border border-gray-300 rounded-lg py-2"
                        v-if='isService'
                      >
                        <li class='flex justify-center items-center'>

                          <a
                            href="/data"
                            class="block px-4 py-2 text-gray-800 hover:bg-gray-200 "
                          >Service 1</a>
                        </li>
                        <li><a
                            href="#"
                            class="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                          >Service 2</a></li>
                        <li><a
                            href="#"
                            class="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                          >Service 3</a></li>
                      </ul>
                    </div>
                  </li>
                  <li><a
                      href="#"
                      class="text-black hover:underline"
                    >Contact</a></li>
                </ul>
              </div>
            </div>
          </nav>

        </div>
      </el-col>
    </el-row>

    <ConHomeVue></ConHomeVue>


  </div>
</template>

<style scoped lang="scss">
@media(min-width:768px) {
  .website-title {
    margin-left: 10px;
  }

  .website-list {
    margin-right: 10px;
  }
}</style>


