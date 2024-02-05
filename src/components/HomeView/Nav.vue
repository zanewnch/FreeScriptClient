<script setup lang='ts'>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import {
  Edit,
  Search,
} from "@element-plus/icons-vue";

let hospitalNameRef = ref<string>('');
    let $router = useRouter();
// const getApi = new GetApi();
// function fetchData(keyword: string, callBack: any) {
//   //   When using finish typing search content, this function will be triggered, so we can request data in this function.
//   //   The keyword is user typing content, which is equal to hospitalNameRef(v-model).
//   //   and the callback function, callback: 一个回调函数，用于将匹配的选项返回给 el-autocomplete 组件，从而在下拉列表中展示供用户选择。
//   getApi.getHospitalName(keyword, callBack);

// }
// When click one of recommend option in search bar, trigger this function
function goDetail(item: any) {
  console.log(item);
  $router.push({ path: '/hospital/reservation', query: { hoscode: item.hoscode } });
}






</script>
<template>
    <div class='w-full h-20 '>
        <nav class=" p-4 w-full h-full ">
            <div class="md:w-full mx-auto h-full ">
                <div class="md:w-full flex justify-between items-center h-full ">
                    <!-- 左侧 Logo 或标题 -->
                    <div class="website-title text-black text-2xl font-bold h-full  flex justify-center items-center ">
                        <div>NOTE</div>
                        <div class="search">
                            <el-autocomplete
                                v-model="hospitalNameRef"
                                :fetch-suggestions="fetchData"
                                :trigger-on-focus="false"
                                clearable
                                class="el-input_wrapper"
                                placeholder="Input Data to Search"
                                @select="goDetail"
                            />
                            <el-button
                                type="info"
                                :icon="Search"
                                class='search-button border-2'
                                plain
                            >Search</el-button>

                        </div>
                    </div>

                    <!-- 右侧导航链接 -->
                    <ul
                        class="website-list space-x-4 h-full flex justify-center items-center p-0 m-0"
                        style=''
                    >
                    <slot name='write'></slot>
                    <slot name='about'></slot>
                    <slot name='services'></slot>
                    <slot name='contact'></slot>
                    <slot name='publish'></slot>


                        
                        
                        
                        
                    </ul>
                </div>
            </div>
        </nav>

    </div>
</template>
<style scoped lang='scss'>
@media(min-width:768px) {
    .website-title {
      margin-left: 10px;
    }
  
    .website-list {
      margin-right: 10px;
    }
  
    .search {
      margin-left: 20px;
  
      .search-button {
        margin-left: 10px;
      }
    }
  }
</style>