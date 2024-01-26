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


const setVH = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('resize', setVH);
setVH(); // Call the function initially


const currentScroll = ref(0);
const scrollStep = ref(200);

const scrollStatus = (direction:any)=>{
  const containerWidth = this.$refs.statusContainer.offsetWidth;
      const maxScroll = this.$refs.statusContainer.scrollWidth - containerWidth;
      this.currentScroll += direction * this.scrollStep;

      if (this.currentScroll < 0) {
        this.currentScroll = 0;
      } else if (this.currentScroll > maxScroll) {
        this.currentScroll = maxScroll;
      }

      this.$refs.statusContainer.scrollTo({
        left: this.currentScroll,
        behavior: "smooth",
      });
}



</script>

<template>
  <!-- <div class="common-layout">
    <el-container>
      <el-header class='header'>
        <Navigation />

      </el-header>

      <el-main class='main'>
        <Content />
      </el-main>

      <el-footer class='footer'>
        <Footer />
      </el-footer>
    </el-container>
  </div> -->

  <!-- <div>
    <div class='header'>
       <Navigation></Navigation> 
      <NavOriginal></NavOriginal>
    </div>
    <div class='main'>
      <Content></Content>
    </div>

    <div class='footer'>
      <footer></footer>
    </div>


  </div> -->

  <div class=' w-sceen h-screen bg-red-400'>
    <el-row>
      <el-col :span='24'>
        <div class='w-screen h-20'>
          <nav class="bg-blue-500 p-4 w-full h-full">
            <div class="container mx-auto h-full">
              <div class="flex justify-between items-center h-full">
                <!-- 左侧 Logo 或标题 -->
                <div class="text-white text-2xl font-bold h-full border-2  flex justify-center items-center">My Website</div>

                <!-- 右侧导航链接 -->
                <ul class="space-x-4  h-full flex justify-center items-center p-0 m-0"
                style=''>
                  <li class='flex justify-center items-center'>
                    <el-icon><Edit /></el-icon>
                    <a
                      href="#"
                      class="text-black hover:underline"
                    >Write</a></li>
                  <li><a
                      href="#"
                      class="text-black hover:underline"
                    >About</a></li>
                  <li>
                    <!-- 下拉式菜单 -->
                    <div class="relative group">
                      <button class="text-black hover:underline focus:outline-none">Services</button>
                      <ul class="absolute  mt-2 space-y-2 bg-white border border-gray-300 rounded-lg py-2">
                        <li class='flex justify-center items-center'>
                          
                          <a
                            href="#"
                            class="block px-4 py-2 text-gray-800 hover:bg-gray-200 "
                          
                          >Service 1</a></li>
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
//.header {
//height: 10vh;
//background-color: red;
//display: flex;
//justify-content: center;
//align-items: center;

//margin: 0px;
//padding: 0px;

//box-sizing: border-box;
//}

//.main {
//height: 80vh;
/* Fallback for browsers that do not support Custom Properties */
//height: calc(var(--vh, 1vh) * 80);
/*
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  */



//}

//.footer {
/*
  height: 10vh;

  display: flex;
  justify-content: center;
  align-items: center;
  */
//}</style>
