<script setup lang="ts">
import { ref, onMounted, type Ref, computed, type ComputedRef } from 'vue'
import HomeLeft from './HomeLeft.vue'
import HomeRight from './HomeRight.vue';

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

const refData: Ref<{
  data: string;
  status: boolean;
}[]> = ref(data);

const selectedItem = ref(refData.value[0]['data']);

const selectItem = (item: any) => {
  selectedItem.value = item;
};

const isLeft: ComputedRef<boolean> = computed(() => {
  return refData.value.length > 0 && refData.value[0]['status'] === false;
})

const isRight: ComputedRef<boolean> = computed(() => {
  // if successful find false value, return true

  return refData.value[refData.value.length - 1]['status'] !== true
})

const showLeft = (): void => {
  // find first false value, and turn it into false
  const indexFalse = refData.value.findIndex((element) => !element['status']);
  console.log(indexFalse);

  // find last true value, and turn it into true
  const indexArray = refData.value.slice().reverse();
  const indexTrue = indexArray.findIndex((element) => element['status']);
  const indexResult = refData.value.length - indexTrue - 1;


  refData.value[indexFalse]['status'] = true;
  console.log("the status value")
  console.log(refData.value[indexFalse]['status']);
  console.log(refData.value);
  refData.value[indexResult]['status'] = false;
}
const showRight = (): void => {
  const indexTrue = refData.value.findIndex((element) => element['status']);

  const indexFalse = refData.value.findIndex((element) => !element['status']);


  refData.value[indexTrue]['status'] = false;
  refData.value[indexFalse]['status'] = true;


}



const filterData: ComputedRef<{
  data: string;
  status: boolean;
}[]> = computed(() => {
  return refData.value.filter((element) => element['status']);
});





onMounted(() => {

})



</script>
<template>
  <div class='md:w-full  md:flex md:justify-center md:items-center md:h-screen  '>
    <div
      class="md:h-screen w-full md:flex md:flex-col md:justify-start md:items-center h-5/6 md:w-2/3 "
      style="border-right:0.5px solid #E0E0E0;"
    >
      <!-- status bar -->
      <section class='section-up md:w-full md:flex md:justify-center sm:flex sm:justify-center '>
        <div
          class="status-bar md:flex md:justify-around md:items-center   sm:flex sm:justify-center"
          style='width: 80%;'
        >
          <button
            @click="showLeft"
            v-if='isLeft'
            class='md:w-6'
          >
            <el-icon>
              <ArrowLeft />
            </el-icon>
          </button>
          <button
            class='md:w-6'
            v-else
          >
            <el-icon color='#E0E0E0'>
              <ArrowLeft />
            </el-icon>
          </button>
          <div
            v-for="(item, index) in filterData"
            :key="index"
            class='md:w-20 md:whitespace-nowrap  md:text-center sm:ml-1 sm:mr-1'
            :class="{ 'border-b-2': selectedItem === item.data }"
            @click="selectItem(item.data)"
          >{{ item['data'] }}</div>
          <button
            @click="showRight"
            v-if='isRight'
            class='md:w-6'
          >
            <el-icon>
              <ArrowRight />
            </el-icon>
          </button>
          <button
            class='md:w-6'
            v-else
          >
            <el-icon color='#E0E0E0'>
              <ArrowRight />
            </el-icon>
          </button>
        </div>
      </section>
      <section class='section-below md:w-full md:flex md:flex-col md:justify-center md:items-center'>
        <HomeLeft></HomeLeft>
      </section>



    </div>
    <div class=" md:flex md:flex-col md:justify-start md:items-center md:w-1/3  md:h-screen sm:hidden">
      <HomeRight></HomeRight>
    </div>
  </div>
</template>
<style scoped lang="scss">
@media (min-width: 768px) {
  .section-up {
    margin-top: 30px;
  }

  .section-below {
    margin-top: 30px;
  }

  .sticky-right {
    position: sticky;
    top: 0;
    /* 或者根据需要设置适当的距离 */
  }



}
</style>
