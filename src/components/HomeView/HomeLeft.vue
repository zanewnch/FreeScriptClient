<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, type Ref } from 'vue'
import request from '@/utils/Request'

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
    console.log(res.data.data)
  } catch (e) {
    console.log(e)
  }
}

const urlFriendly = (author: string, title: string) => {
  return (
    author
      .replace(/<\/?p>/g, '')
      .trim()
      .toLowerCase()
      .replace(/\s+/g, '-') +
    '/' +
    title
      .replace(/<\/?p>/g, '')
      .trim()
      .toLowerCase()
      .replace(/\s+/g, '-')
  )
}

// Flag to track if new data needs to be loaded
let needToLoad = false

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
  console.log('load new data')

  // Set needToLoad to false after loading
  needToLoad = false
}

// Function to trigger data loading when user scrolls to bottom
const trigger = () => {
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

  console.log('buttomheight')
  console.log(bottomHeight)

  // If distance from bottom is less than 10 pixels, load new data
  if (bottomHeight < 10) {
    console.log('need to load')
    load()
  }
}

onMounted(async () => {
  // Add scroll event listener when component is mounted
  window.addEventListener('scroll', trigger, false)

  // fetch first data to show
  await requestData(pageNum.value, pageSize.value)

  showData.value = data.value
  console.log('showData')
  console.log(showData.value)
})

onUnmounted(() => {
  // Remove scroll event listener when component is unmounted
  window.removeEventListener('scroll', trigger, false)
})
</script>
<template>
  <div
    class="card md:w-4/5 md:h-44 md:flex md:flex-col md:justify-center md:overflow-hidden sm:mt-2 sm:pb-2"
    v-for="(item, index) in showData"
    :key="index"
    style='border-bottom: 0.5px #e0e0e0 solid;'
  >
    <a
      :href="urlFriendly(item['author'] || '', item['title'] || '')"
      class=""
    >
      <div class="author md:flex md:justify-start md:items-center sm:flex ">
        <el-avatar
          :src="`../../../userAvatar/${item['author']
            .replace(/<\/?p>/g, '')
            .trim()
            .toLowerCase()
            .replace(/\s+/g, '-')}.png`"
          class=""
        />
        <div class='sm:flex sm:justify-center sm:items-center sm:ml-2'>
          <div v-html="item['author']"></div>
        </div>
      </div>
      <div class="title">
        <div v-html="item['title']"></div>
      </div>
      <div class="content">
        <div v-html="item['content']"></div>
      </div>
    </a>
  </div>
</template>
<style scoped lang="scss">
@media (min-width:100px) {
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
