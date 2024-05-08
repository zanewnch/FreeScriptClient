<script setup lang="ts">
import { ref, onMounted, onUnmounted, type Ref, watch } from 'vue'
import request from '../../utils/Request'
import { useGlobalStore } from '../../stores/GlobalStore'
import { urlFriendly } from '../..//utils/UrlFriendly'

const globalStore = useGlobalStore()

// 每一次request update data
const data: Ref<any> = ref(null)
const showData: Ref<any> = ref(null)
const pageNum: Ref<number> = ref(1)
const pageSize: Ref<number> = ref(10)
const requestData = async (pageNum: number, pageSize: number) => {
  try {
    const res = await request.get('/article', {
      params: {
        pageNum: pageNum,
        pageSize: pageSize
      }
    })
    data.value = res.data.data
    showData.value = data.value
  } catch (e) {
    console.log(e)
  }
}

// Flag to track if new data needs to be loaded
let needToLoad = false

// Function to trigger data loading when user scrolls to bottom
const infiniteScrollTrigger = () => {
  // Function to load new data
  const load = () => {
    // If already loading, return
    if (needToLoad) return

    // Set needToLoad to true to indicate loading
    needToLoad = true

    // Load new data by concatenating articles to refData
    if (needToLoad) {
      pageNum.value += 1
      requestData(pageNum.value, pageSize.value)
      showData.value = showData.value.concat(data.value)
      // refData.value = refData.value.concat(articles)
    }

    // Set needToLoad to false after loading
    needToLoad = false
  }

  const triggerForLoad = () => {
    /*
        頁面長度計算公式：
        頁面總長：
        可視區域：
        可視區域上方：
        可視區域下方： 這是未知，要求的
         */
    const viewTotalHeight = document.body.scrollHeight
    const viewportHeight = document.documentElement.clientHeight
    const topHeight = document.body.scrollTop || document.documentElement.scrollTop
    const bottomHeight = viewTotalHeight - topHeight - viewportHeight

    // If distance from bottom is less than 10 pixels, load new data
    if (bottomHeight < 10) {
      // console.log('need to load')
      load()
    }
  }

  triggerForLoad()
}

/* 
这里，watch 函数监视的是 globalStore.tagForConditionalShow 的值。每当 globalStore.tagForConditionalShow 的值发生变化时，就会执行传递给 watch 的第二个参数的函数。

这个函数接收一个参数 newVal，这个参数的值就是 globalStore.tagForConditionalShow 的新值。

在这个函数中，首先检查 newVal 是否不等于空字符串。如果 newVal 不等于空字符串，那么就执行以下操作：

将 globalStore.specificTagsData 的值赋给 showData.value。这可能是为了在界面上显示 globalStore.specificTagsData 的值。

使用 window.removeEventListener 方法移除 scroll 事件的监听器。这个监听器的处理函数是 infiniteScrollTrigger。这可能是为了暂时停止无限滚动的功能。

总的来说，这段代码的作用是：当 globalStore.tagForConditionalShow 的值发生变化，并且新值不是空字符串时，更新 showData.value 的值，并暂时停止无限滚动的功能。
*/
watch(
  () => globalStore.tagForConditionalShow,
  (newVal) => {
    if (newVal !== '') {
      showData.value = globalStore.specificTagsData

      // 先暫時關掉無限滾動
      window.removeEventListener('scroll', infiniteScrollTrigger, false)
    }
  }
)

onMounted(async () => {
  // Add scroll event listener when component is mounted
  window.addEventListener('scroll', infiniteScrollTrigger, false)

  // fetch first data to show
  await requestData(pageNum.value, pageSize.value)
})

onUnmounted(() => {
  // Remove scroll event listener when component is unmounted
  window.removeEventListener('scroll', infiniteScrollTrigger, false)
})
</script>
<template>
  <div
    class="card md:w-4/5 md:h-44 md:flex md:flex-col md:justify-center md:overflow-hidden sm:mt-2 sm:pb-2"
    v-for="(item, index) in showData"
    :key="index"
    style="border-bottom: 0.5px #e0e0e0 solid"
  >
    <router-link :to="urlFriendly(item['author'] || '', item['title'] || '')" class="">
      <div class="author md:flex md:justify-start md:items-center sm:flex">
        <el-avatar
          :src="`../../../userAvatar/${item['author']
            .replace(/<\/?p>/g, '')
            .trim()
            .toLowerCase()
            .replace(/\s+/g, '-')}.png`"
          class=""
        />
        <div class="sm:flex sm:justify-center sm:items-center sm:ml-2">
          <div v-html="item['author']"></div>
        </div>
      </div>
      <div class="title">
        <div v-html="item['title']"></div>
      </div>
      <div class="content">
        <div v-html="item['content']"></div>
      </div>
    </router-link>
  </div>
</template>
<style scoped lang="scss">
@media (min-width: 100px) {
  .author {
    div {
      text-align: center;
    }
  }

  .title {
    div {
      font-size: 20px;
      font-weight: bolder;
    }
  }
}

@media (min-width: 768px) {
  .card {
    padding: 10px;
    border-bottom: 0.5px solid #e0e0e0;
  }

  .author {
    p {
      text-align: left;
      margin-left: 1rem;
    }

    div {
      text-align: left;
      margin-left: 1rem;
    }
  }

  .title {
    p {
      text-align: left;
      margin-top: 5px;
      font-size: 20px;
      font-weight: bolder;
      margin-right: 2rem;
    }

    div {
      text-align: left;
      margin-top: 5px;
      font-size: 20px;
      font-weight: bolder;
      margin-right: 2rem;
    }
  }

  .content {
    p {
      margin-top: 10px;
      text-align: left;
      overflow: hidden;
      white-space: wrap;
      text-overflow: ellipsis;
      line-height: 20px;
    }

    div {
      margin-top: 10px;
      text-align: left;
      overflow: hidden;
      white-space: wrap;
      text-overflow: ellipsis;
      line-height: 20px;
    }
  }
}
</style>
