<script setup lang="ts">
import { ref, onMounted, type Ref, computed } from 'vue'

const data: {
  data: string
  status: boolean
}[] = [
  {
    data: 'For you',
    status: true
  },
  { data: 'Following', status: true },
  { data: 'UX', status: false }
]

const refData = ref(data);

const showLeft = () => {
  // 選單到底有沒有到底  if array[1] status is true
  const indexFalse = refData.value.findIndex((element) => !element['status']);
  console.log(indexFalse);

  const indexArray = refData.value.slice().reverse();
  const indexTrue = indexArray.findIndex((element) => element['status']);
  const indexResult = refData.value.length -indexTrue-1;


  refData.value[indexFalse]['status'] = true;
  console.log("the status value")
  console.log(refData.value[indexFalse]['status']);
  console.log(refData.value);
  refData.value[indexResult]['status'] = false;
}
const showRight = () => {
  const indexTrue = refData.value.findIndex((element) => element['status']);
  refData.value[indexTrue]['status'] = false;

  const indexFalse = refData.value.findIndex((element) => !element['status']);
  refData.value[indexFalse]['status'] = true;

  
}



  const filterData = computed(() => {
  return refData.value.filter((element) => element['status']);
});
 


const test = (): void => {
  console.log(filterData)
}

onMounted(() => {
  test()
})

const testData = ref(0);
const testFunction = ()=>{
  refData.value[2]['status'] = true;
}

</script>
<template>
  <el-row class="w-screen">
    <el-col :span="16" class="h-screen w-full flex flex-col justify-start items-start" style="">
      <!-- <div class=' w-full  h-2/6 border-gray-500  border-solid border-r-2 '>
            <div class='states-bar flex justify-around items-center overflow-x-hidden whitespace-nowrap'>
                <button class="prev-button" onclick="scrollStatus(-1)">←</button>
                <div class="status-container flex justify-around items-center gap-4">
                    <div class="status border-2">状态 1</div>
                    <div class="status">状态 2</div>
                    <div class="status">状态 3</div>
                    <div class="status">状态 3</div>
                    <div class="status">状态 3</div>
                    <div class="status">状态 3</div>
                    <div class="status">状态 3</div>
                    <div class="status">状态 3</div>
                    <div class="status">状态 3</div>
                    <div class="status">状态 3</div>
                    <div class="status">状态 3</div>
                    <div class="status">状态 3</div>
                    <div class="status">状态 3</div>
                    <div class="status">状态 3</div>
                    <div class="status">状态 3</div>
                    <div class="status">状态 3</div>
                    <div class="status">状态 3</div>
                    <div class="status">状态 3</div>
                    <div class="status">状态 3</div>
                    
                  </div>
                <button class="next-button" onclick="scrollStatus(1)">→</button>
            </div>
            <div>content</div>
          </div> -->

          <div>{{refData}}</div>
          <div>{{filterData}}</div>

      <div class="flex justify-around items-center">
        <button @click="showLeft">showLeft</button>
        <div v-for="(item, index) in filterData" :key="index">{{ item['data'] }}</div>
        <button @click="showRight">showRight</button>
      </div>

      <div class="w-full h-4/6 border-gray-500 border-solid border-r-2">
        <div>bbb</div>
        <div>{{testData}}</div>
        <button @click="testFunction">test</button>
      </div>
    </el-col>
    <el-col :span="8" class="">ccc</el-col>
  </el-row>
</template>
<style scoped lang="scss"></style>
