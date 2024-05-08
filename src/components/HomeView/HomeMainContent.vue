<script setup lang="ts">
import { ref, onMounted, type Ref, computed, type ComputedRef } from 'vue'
import HomeLeft from './HomeLeft.vue'
import HomeRight from './HomeRight.vue'
// @ts-ignore
import request from '../../utils/request'

const tags: Ref<any> = ref(null)

const requestTags = async () => {
  try {
    const res = await request.get('/article/tags')
    tags.value = res.data.data
    console.log(tags.value)

    tags.value.forEach((element: any) => {
      element['status'] = false
    })
    tags.value[0]['status'] = true
    tags.value[1]['status'] = true
  } catch (e) {
    console.log(e)
  }
}

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

const refData: Ref<
  {
    data: string
    status: boolean
  }[]
> = ref(data)

const selectedItem = ref(refData.value[0]['data'])

const selectItem = (item: any) => {
  selectedItem.value = item
}

// const isLeft: ComputedRef<boolean> = computed(() => {
//   if(tags.value){
//     return tags.value.length > 0 && tags.value[0] && tags.value[0]['status'] === false
//   }
  
// })

// const isRight: ComputedRef<boolean> = computed(() => {
//   // if successful find false value, return true

//   return tags.value[tags.value.length - 1]['status'] !== true
// })

// const showLeft = (): void => {
//   // find first false value, and turn it into false
//   const indexFalse = tags.value.findIndex((element: any) => !element['status'])
//   console.log(indexFalse)

//   // find last true value, and turn it into true
//   const indexArray = tags.value.slice().reverse()
//   const indexTrue = indexArray.findIndex((element: any) => element['status'])
//   const indexResult = tags.value.length - indexTrue - 1

//   tags.value[indexFalse]['status'] = true
//   console.log('the status value')
//   console.log(tags.value[indexFalse]['status'])
//   console.log(tags.value)
//   tags.value[indexResult]['status'] = false
// }
// const showRight = (): void => {
//   const indexTrue = tags.value.findIndex((element:any) => element['status'])

//   const indexFalse = tags.value.findIndex((element:any) => !element['status'])

//   tags.value[indexTrue]['status'] = false
//   tags.value[indexFalse]['status'] = true
// }



onMounted(async () => {
  await requestTags()
})
</script>
<template>
  <div class="md:w-full md:flex md:justify-center">
    <div class="md:w-4/5 md:flex md:justify-center">
      <div class="md:w-full md:flex md:justify-center md:items-center md:h-screen">
        <div
          class="md:h-screen w-full md:flex md:flex-col md:justify-start md:items-center h-5/6 md:w-2/3"
          style="border-right: 0.5px solid #e0e0e0"
        >
          <!-- status bar -->
          <!-- <section class="section-up md:w-full md:flex md:justify-center sm:flex sm:justify-center">
            <div
              class="status-bar md:flex md:justify-around md:items-center sm:flex sm:justify-center"
              style="width: 80%"
            >
              <button @click="showLeft" v-if="isLeft" class="md:w-6">
                <el-icon>
                  <ArrowLeft />
                </el-icon>
              </button>
              <button class="md:w-6" v-else>
                <el-icon color="#E0E0E0">
                  <ArrowLeft />
                </el-icon>
              </button>
              <div class="flex flex-wrap">
                <template v-for="(item, index) in tags">
                  <div
                    :key="index"
                    class="md:w-20 md:whitespace-wrap md:text-center sm:ml-1 sm:mr-1"
                    :class="{ 'border-b-2': selectedItem === item.data }"
                    @click="selectItem(item.data)"
                    v-if="item.status"
                  >
                    <div
                      class="md:w-full md:h-full md:text-center md:flex md:justify-center md:items-center"
                    >
                      <div class="" style="font-size: 14px">
                        {{ item['_id'] }}
                      </div>
                    </div>
                  </div>
                </template>
              </div>
              <button @click="showRight" v-if="isRight" class="md:w-6">
                <el-icon>
                  <ArrowRight />
                </el-icon>
              </button>
              <button class="md:w-6" v-else>
                <el-icon color="#E0E0E0">
                  <ArrowRight />
                </el-icon>
              </button>
            </div>
          </section> -->
          <section
            class="section-below md:w-full md:flex md:flex-col md:justify-center md:items-center"
          >
            <HomeLeft></HomeLeft>
          </section>
        </div>
        <div
          class="md:flex md:flex-col md:justify-start md:items-center md:w-1/3 md:h-screen sm:hidden"
        >
          <HomeRight></HomeRight>
        </div>
      </div>
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
